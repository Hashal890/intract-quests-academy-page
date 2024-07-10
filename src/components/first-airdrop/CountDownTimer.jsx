import React, { useState, useEffect } from "react";
import { Box, Flex, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { MdTimer } from "react-icons/md";
import TimerBackground from "../../assets/images-and-logos/timer-bg.png";
import TimerTextCard from "./TimerTextCard";

const CountDownTimer = () => {
  const fiveDaysInMilliseconds = 5 * 24 * 60 * 60 * 1000;
  const targetTimestamp = Date.now() + fiveDaysInMilliseconds;
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const padWithZero = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  const calculateTimeLeft = () => {
    const now = Date.now();
    const difference = targetTimestamp - now;
    const timeLeft = {
      days: padWithZero(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: padWithZero(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ),
      minutes: padWithZero(
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      ),
      seconds: padWithZero(Math.floor((difference % (1000 * 60)) / 1000)),
    };
    return timeLeft;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <VStack spacing={4}>
      <Box
        border={"1px solid rgba(255, 255, 255, .05)"}
        p={2}
        bg={"rgba(255, 255, 255, .05)"}
        borderRadius={"12px"}
        backdropFilter={"blur(30px)"}
        w={"100%"}
      >
        <Flex
          justifyContent={"start"}
          alignItems={"center"}
          gap={2}
          borderBottom={"1px dashed rgba(255,255,255,.1)"}
          pb={3}
        >
          <Icon as={MdTimer} color={"orange"} />
          <Text color={"rgba(255, 255, 255, .4)"} fontSize={"14px"}>
            Reward unlocks in
          </Text>
        </Flex>
        <Flex
          pos={"relative"}
          overflow={"hidden"}
          p={".75rem 1.25rem"}
          borderRadius={"8px"}
          border={"1px solid rgba(255,255,255,.1)"}
          boxShadow={"-2px -2px 5px #0006 inset,2px 2px 5px #0006 inset"}
          bg={"rgba(0, 0, 0, .2)"}
          mt={4}
          w={"100%"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Image
            src={TimerBackground}
            alt={"timer-bg"}
            pos={"absolute"}
            top={0}
            left={0}
            w={"100%"}
            h={"100%"}
          />
          <TimerTextCard value={timeLeft.days} text={"Days"} />
          <TimerTextCard value={timeLeft.hours} text={"Hours"} />
          <TimerTextCard value={timeLeft.minutes} text={"Mins"} />
          <TimerTextCard value={timeLeft.seconds} text={"Sec"} />
        </Flex>
      </Box>
    </VStack>
  );
};

export default CountDownTimer;
