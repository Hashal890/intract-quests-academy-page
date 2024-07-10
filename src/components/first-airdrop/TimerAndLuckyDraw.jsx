import React from "react";
import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { TbArrowRightTail, TbBrandDiscord } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import CountDownTimer from "./CountDownTimer";
import FirstAirdropLuckyDraw from "../../assets/images-and-logos/first-airdrop-lucky-draw.gif";

const TimerAndLuckyDraw = () => {
  return (
    <Box w={"320px"} m={["auto", "auto", "auto", "none"]}>
      <CountDownTimer />
      <Box
        mt={6}
        borderRadius={"12px"}
        border={"1px solid rgba(255,255,255,.1)"}
        bg={"rgba(255,255,255,.1)"}
        p={3}
      >
        <Image
          src={FirstAirdropLuckyDraw}
          alt={"lucky-draw"}
          borderRadius={"12px"}
        />
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          color={"rgba(255, 255, 255, .4)"}
          py={4}
          borderBottom={"2px dashed #ffffff26"}
        >
          <Text>Exclusive Community</Text>
          <Flex
            gap={1}
            justifyContent={"center"}
            alignItems={"center"}
            color={"white"}
          >
            <Flex
              bg={"rgba(114,137,218)"}
              borderRadius={"50%"}
              justifyContent={"center"}
              alignItems={"center"}
              p={1}
              fontSize={"10px"}
            >
              <TbBrandDiscord />
            </Flex>
            <Text>Earndrop</Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          color={"rgba(255, 255, 255, .4)"}
          fontSize={"14px"}
          mt={4}
        >
          <Text>Complete all Essential quests</Text>
          <Icon as={FaCheckCircle} />
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          color={"rgba(255, 255, 255, .4)"}
          fontSize={"14px"}
        >
          <Text>Complete at least 1 Alpha Hub quest today</Text>
          <Icon as={FaCheckCircle} />
        </Flex>
        <Button
          rightIcon={<TbArrowRightTail />}
          w={"100%"}
          mt={4}
          p={"10px 57px"}
          textAlign={"center"}
          borderRadius={"10px"}
          fontWeight={600}
          transition={"all .3s ease"}
          bg={"rgba(255, 255, 255, .07)"}
          color={"rgba(255, 255, 255, .50)"}
          _hover={{
            bg: "rgba(255, 255, 255, .08)",
            color: "violet",
          }}
          border={"1px solid rgba(255, 255, 255, .07)"}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default TimerAndLuckyDraw;
