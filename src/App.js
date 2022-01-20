import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
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
import Feedback from "./artifacts/contracts/Feedback.sol/Feedback.json";

const App = () => {
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const defaultFeedback = {
    message: "",
    rating: 5,
  };

  const [feedback, setFeedback] = useState(defaultFeedback);

  const [feedbackList, setFeedbackList] = useState([]);

  const requestAccount = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  };

  const checkIfWalletIsConnected = () => {
    if (!window.ethereum) {
      alert("Please install metamask!");
    } else {
      console.log("We have the ethereum object");
    }
  };

  const fetchFeedbackList = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        contractAddress,
        Feedback.abi,
        provider
      );
      try {
        const data = await contract.getFeedbackList();
        setFeedbackList(data);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  };

  const sendFeedback = async () => {
    if (!feedback) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        contractAddress,
        Feedback.abi,
        signer
      );

      const transaction = await contract.sendFeedback(
        feedback.message,
        feedback.rating
      );
      await transaction.wait();
      setFeedback(defaultFeedback);
      fetchFeedbackList();
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    fetchFeedbackList();
  }, []);

  return (
    <Layout>
      <FeedbackForm
        sendFeedback={sendFeedback}
        feedback={feedback}
        setFeedback={setFeedback}
      />
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
            <FeedbackList items={feedbackList} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Layout>
  );
};

export default App;
