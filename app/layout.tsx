"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
