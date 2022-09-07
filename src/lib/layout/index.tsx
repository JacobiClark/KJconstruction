import { Box, Container } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container
      maxW="container.xl"
      height="100vh"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <Box as="main" marginY={22} flexGrow="1">
        {children}
      </Box>
      <Footer />
    </Container>
  );
};

export default Layout;
