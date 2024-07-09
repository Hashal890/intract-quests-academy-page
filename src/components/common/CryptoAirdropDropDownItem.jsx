import React from "react";
import { Box, Flex, Icon, Image, Progress, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const CryptoAirdropDropDownItem = ({
  id,
  title,
  imageUrl,
  tasksAvailable,
  isCompleted,
}) => {
  return (
    <Flex
      w={"100%"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      gap={2}
      border={"1px solid rgba(255, 255, 255, .05)"}
      p={2}
      bg={"rgba(255, 255, 255, .05)"}
      borderRadius={"20px"}
    >
      <Image
        src={imageUrl}
        alt={id}
        height={"80px"}
        cursor={"pointer"}
        borderRadius={"15px"}
      />
      <Box>
        <Text fontSize={["14px", "14px", "18px"]}>{title}</Text>
        <Flex
          fontSize={["8px", "8px", "14px"]}
          color={"gray"}
          alignItems={"center"}
          mt={2}
          gap={2}
          w={"100%"}
        >
          <Text mr={2}>{tasksAvailable} Tasks</Text>
          <Box
            w={"70%"}
            bg={"rgba(255,255,255,.01)"}
            boxShadow={"0 -.5px .5px #fff3 inset,0 .5px .5px #fff3 inset"}
            borderRadius={"10px"}
          >
            <Progress
              value={isCompleted ? 100 : 0}
              size="sm"
              colorScheme="green"
              border={"1px solid #000"}
              borderRadius={"10px"}
            />
          </Box>
          <Icon as={FaCheckCircle} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default CryptoAirdropDropDownItem;
