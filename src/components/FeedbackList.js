import React from "react";
import { VStack, Text } from "@chakra-ui/react";
import Rating from "./Rating";

const FeedbackList = ({ items }) => {
  return (
    <>
      {items.map((item, i) => (
        <VStack
          key={i}
          bg="white"
          alignItems="flex-start"
          spacing={2}
          px={6}
          py={4}
          boxShadow="sm"
          borderRadius="md"
          w="full"
        >
          <Rating value={item.rating} />
          <Text fontSize="sm" color="brand.gray.500">
            {item.message}
          </Text>
        </VStack>
      ))}
    </>
  );
};

export default FeedbackList;
