import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      width="full"
      maxWidth="container.2xl"
      transition="0.5s ease-out"
    >
      <Header />
      <Box as="main" marginY={7} display="flex" flex="1">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
