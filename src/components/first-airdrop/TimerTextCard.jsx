import React from "react";
import { Box, Text } from "@chakra-ui/react";

const TimerTextCard = ({ value, text }) => {
  return (
    <Box textAlign={"center"}>
      <Text
        fontSize="2xl"
        color={"rgba(255, 255, 255, .6)"}
        textShadow={"0px 1px 1px rgba(0,0,0,.5)"}
      >
        {value}
      </Text>
      <Text>{text}</Text>
    </Box>
  );
};

export default TimerTextCard;
