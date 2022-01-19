import React from "react";
import { VStack, Text } from "@chakra-ui/react";
import Rating from "./Rating";

const FeedbackList = ({ items = [...new Array(12)] }) => {
  return (
    <>
      {items.map((_, i) => (
        <VStack
          key={i}
          bg="white"
          alignItems="flex-start"
          spacing={2}
          px={6}
          py={4}
          boxShadow="sm"
          borderRadius="md"
        >
          <Rating value={4} />
          <Text fontSize="sm" color="brand.gray.500">
            Because JavaScript checker and faster JavaScript has an object that
            gets called immediately after declaration
          </Text>
        </VStack>
      ))}
    </>
  );
};

export default FeedbackList;
