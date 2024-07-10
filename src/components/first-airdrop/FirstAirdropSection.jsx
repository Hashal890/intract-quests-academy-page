import React from "react";
import { Flex } from "@chakra-ui/react";
import TimerAndLuckyDraw from "./TimerAndLuckyDraw";
import RewardInformation from "./RewardInformation";

const FirstAirdropSection = () => {
  return (
    <Flex
      flexDir={["column", "column", "column", "row"]}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
      mt={8}
    >
      <TimerAndLuckyDraw />
      <RewardInformation />
    </Flex>
  );
};

export default FirstAirdropSection;
