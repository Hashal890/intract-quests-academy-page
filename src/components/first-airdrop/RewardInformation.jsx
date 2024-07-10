import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BsInfoCircle } from "react-icons/bs";

const RewardInformation = () => {
  return (
    <Box w={"312px"} m={["auto", "auto", "auto", "none"]}>
      <Box
        mt={8}
        borderRadius={"12px"}
        border={"1px solid rgba(255, 255, 255, .2)"}
        bg={"#131313"}
      >
        <Flex
          alignItems={"center"}
          gap={1}
          color={"rgba(255, 255, 255, .4)"}
          borderBottom={"1px solid rgba(255,255,255,.05)"}
          p={3}
        >
          <Text fontSize={"14px"}>Reward info</Text>
          <BsInfoCircle />
        </Flex>
        <Text fontSize={"14px"} p={3} color={"#fffc"}>
          Free access to paid KOL (crypto earning) communities!
        </Text>
        <Text fontSize={"14px"} p={3} color={"rgba(255, 255, 255, .4)"}>
          Win access to exclusive earning communities of some of the the
          greatest earners in crypto for a month, every 24 hours. Get access to
          unmatched insights, a close-knit community of the best airdrop
          earners, and more.
        </Text>
        <Text fontSize={"14px"} p={3} color={"rgba(255, 255, 255, .4)"}>
          To win: make sure you've connected your Twitter and Discord accounts -
          and follow our criteria!
        </Text>
      </Box>
    </Box>
  );
};

export default RewardInformation;
