import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Terrible from "./icons/Terrible";
import Bad from "./icons/Bad";
import Okay from "./icons/Okay";
import Good from "./icons/Good";
import Amazing from "./icons/Amazing";

const ratingItems = [
  {
    title: "Terrible",
    icon: <Terrible />,
  },
  {
    title: "Bad",
    icon: <Bad />,
  },
  {
    title: "Okay",
    icon: <Okay />,
  },
  {
    title: "Good",
    icon: <Good />,
  },
  {
    title: "Amazing",
    icon: <Amazing />,
  },
];

const FeedbackForm = ({ sendFeedback, feedback, setFeedback }) => {
  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const isSubmitButtonEnable = !!feedback?.message?.length;
  return (
    <VStack
      spacing={7}
      w="full"
      alignItems="stretch"
      bg="brand.gray.100"
      boxShadow="md"
      borderRadius="2xl"
      py={10}
      px={12}
      position="relative"
      _before={{
        content: '""',
        w: "full",
        h: "full",
        position: "absolute",
        top: "-75px",
        left: "-75px",
        bg: "brand.gray.300",
        zIndex: "-1",
        borderRadius: "2xl",
      }}
    >
      <Heading fontSize="22px" mb={0} fontWeight="700">
        Give feedback
      </Heading>
      <Text w="90%" fontWeight="500" lineHeight={1.54}>
        What do you think of the issue search experience within Jira projects?
      </Text>
      <SimpleGrid columns={ratingItems.length} spacing={2} w="full">
        {ratingItems.map((item, i) => (
          <Box
            key={i}
            bg="white"
            p={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="brand.gray.500"
            fontWeight="500"
            borderWidth="2px"
            borderColor="brand.gray.200"
            borderRadius="md"
            cursor="pointer"
            transition="all 0.2s"
            fontSize="sm"
            boxShadow={feedback?.rating === i + 1 ? "pink" : "none"}
            onClick={(e) => {
              setFeedback({ ...feedback, rating: i + 1 });
            }}
            _hover={{
              color: "brand.gray.800",
              borderColor: "brand.gray.50",
              boxShadow: "pink",
            }}
          >
            {item.icon}
            <Text mt={1}>{item.title}</Text>
          </Box>
        ))}
      </SimpleGrid>
      <FormControl>
        <FormLabel htmlFor="email">
          What are the main reasons for your rating?
        </FormLabel>
        <Textarea
          bg="white"
          borderWidth="2px"
          borderColor="brand.gray.400"
          name="message"
          value={feedback?.message || ""}
          onChange={handleChange}
        />
      </FormControl>
      <Button
        onClick={() => sendFeedback()}
        variant="brand"
        size="lg"
        alignSelf="flex-end"
        fontWeight="500"
        disabled={!isSubmitButtonEnable}
      >
        Submit
      </Button>
    </VStack>
  );
};

export default FeedbackForm;
