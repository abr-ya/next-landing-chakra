"use client";

import { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";

const ChakraClient = ({ children }: PropsWithChildren) => <ChakraProvider>{children}</ChakraProvider>;

export default ChakraClient;
