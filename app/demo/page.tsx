"use client";

import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { ISelectValue } from "../interfaces";
import MultiSelect from "../components/MultiSelect";

const Home = () => {
  const interestOptions: ISelectValue[] = [
    { value: "art", label: "Art" },
    { value: "hiking", label: "Hiking", select: true },
    { value: "history", label: "History" },
  ];
  const [text, setText] = useState("");

  const { isOpen, onClose, onOpen } = useDisclosure();

  const onSave = (data: ISelectValue[]) => {
    console.log(data);
    setText(
      data
        .filter((el) => el.select)
        .map((el) => el.label)
        .join(", "),
    );
    onOpen();
  };

  return (
    <Box m={4}>
      <Heading as="h1" size="lg" mb={2}>
        Components Demo
      </Heading>
      <Heading as="h2" size="md" mb={4}>
        MultiSelect
      </Heading>
      <MultiSelect title="Interests" options={interestOptions} onSave={onSave} scheme="blue" />

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Save Handler Test</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{`Save selected: ${text}`}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Home;
