"use client";

import { FC } from "react";
import { Stack, useColorModeValue } from "@chakra-ui/react";
import { INavItem } from "../../interfaces";
import MobileNavItem from "./MobileNavItem";

interface IMobileNav {
  items: INavItem[];
}

const MobileNav: FC<IMobileNav> = ({ items }) => {
  return (
    <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
      {items.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
