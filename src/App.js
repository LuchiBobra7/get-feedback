import React from "react";
import {
  Button,
  Drawer,
  VStack,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Layout from "./components/Layout";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Layout>
      <FeedbackForm />
      <Button
        ref={btnRef}
        size="sm"
        my={4}
        variant="unstyled"
        color="brand.pink.500"
        fontWeight="500"
        textDecoration="underline"
        onClick={onOpen}
      >
        View Feedbacks
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay
          bg="whiteAlpha.100"
          backdropFilter="saturate(180%) blur(7px)"
        />
        <DrawerContent
          bg="brand.gray.100"
          backdropFilter="saturate(180%) blur(5px)"
        >
          <DrawerCloseButton color="brand.gray.400" />
          <DrawerHeader fontWeight="500">All Feedbacks</DrawerHeader>
          <DrawerBody as={VStack} spacing={4}>
            <FeedbackList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Layout>
  );
};

export default App;
