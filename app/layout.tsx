import { PropsWithChildren } from "react";
import { Nunito } from "next/font/google";
import ChakraClient from "./providers/ChakraClient";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const font = Nunito({ subsets: ["latin"] });

// instead of <head />
export const metadata = {
  title: "Simple Landing Page",
  description: "Next 13 + Chakra UI Landing Page",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      {/* <head /> head.js ==> deprecated
      Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head */}
      <body className={font.className}>
        <ChakraClient>
          <Navbar />
          {children}
          <Footer />
        </ChakraClient>
      </body>
    </html>
  );
};

export default RootLayout;
