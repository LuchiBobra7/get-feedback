import React from "react";
import { HStack } from "@chakra-ui/react";
import StarFilled from "./icons/StarFilled";
import Star from "./icons/Star";

const Rating = ({ value, scale = 6 }) => {
  return (
    <HStack spacing={0}>
      {[...new Array(scale)].map((_, i) => (
        <React.Fragment key={i}>
          {value > i ? <StarFilled /> : <Star />}
        </React.Fragment>
      ))}
    </HStack>
  );
};
export default Rating;
