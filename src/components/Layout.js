import React from "react";
import { Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Container
      maxW="container.sm"
      display="flex"
      flexDirection="column"
      flex={1}
      minH="100vh"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Container>
  );
};

export default Layout;
