"use client";

import React, { FC, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  StackDivider,
  ThemeTypings,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { ISelectValue } from "@/app/interfaces";

interface IMultiSelect {
  title: string;
  subtitle?: string;
  options: ISelectValue[];
  onSave: (data: ISelectValue[]) => void;
  scheme?: ThemeTypings["colorSchemes"];
  titleSave?: string;
  titleClear?: string;
}

const MultiSelect: FC<IMultiSelect> = ({ title, titleClear, titleSave, onSave, options: start, scheme = "red" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ISelectValue[]>(start);

  const Icon = isOpen ? ChevronDownIcon : ChevronRightIcon;

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
    setOptions(start);
  };
  const clearHandler = () => {
    const newOptions = options.map((opt) => ({ ...opt, select: false }));
    setOptions(newOptions);
  };
  const saveHandler = () => {
    onSave(options);
    toggleHandler();
  };

  const changeHandler = (val: boolean, n: number) => {
    const newItem = { ...options[n], select: val };
    const newOptions = [...options];
    newOptions.splice(n, 1, newItem);
    setOptions(newOptions);
  };

  const renderFilter = () => (
    <Box borderRadius="12px" zIndex={10000} position="absolute" top="50px" left={0} backgroundColor="white" w="320px">
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={0} align="stretch">
        {options.map(({ value, label, select }, i) => (
          <Checkbox
            key={value}
            size="md"
            colorScheme={scheme}
            p={4}
            isChecked={select}
            onChange={(e) => changeHandler(e.target.checked, i)}
          >
            {label}
          </Checkbox>
        ))}
      </VStack>
      <Flex direction="row" justify="space-between" p={5} pt={2}>
        <Button colorScheme={scheme} variant="outline" onClick={clearHandler}>
          {titleClear || "Clear"}
        </Button>
        <Button colorScheme={scheme} onClick={saveHandler}>
          {titleSave || "Apply"}
        </Button>
      </Flex>
    </Box>
  );

  return (
    <Box position="relative">
      <Button rightIcon={<Icon boxSize={8} />} colorScheme={scheme} variant="outline" onClick={toggleHandler}>
        {title}
      </Button>
      {isOpen ? renderFilter() : null}
      <Modal isCentered isOpen={isOpen} onClose={toggleHandler}>
        <ModalOverlay bg="blackAlpha.300" />
        <ModalContent w={0} position="absolute" top={0} left={0}></ModalContent>
      </Modal>
    </Box>
  );
};

export default MultiSelect;
