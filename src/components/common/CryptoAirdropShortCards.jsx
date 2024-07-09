import React from "react";
import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa6";

const CryptoAirdropShortCards = ({ _id, mainTitle, desc, mainImageUrl }) => {
  return (
    <Flex
      flexDir={"row-reverse"}
      mt={4}
      mr={[0, 0, 4]}
      justifyContent={["center", "center", "end"]}
      alignItems={["center", "center", "end"]}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={2}
      >
        <IconButton
          icon={<FaCheck />}
          borderRadius={"100%"}
          variant={"outline"}
          color={"#fff3"}
          bg={"rgba(255, 255, 255, .05)"}
          _hover={{ color: "rgba(255, 255, 255)", bg: "#fff3" }}
          border={"1px solid #fff3"}
        />
        <Box>
          <Flex
            w={"160px"}
            h={"162px"}
            borderRadius={"15px"}
            border={"1px solid rgba(255,255,255,.2)"}
            bg={"rgba(255, 255, 255, .05)"}
            p={2}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            ml={"32px"}
          >
            <Image
              src={mainImageUrl}
              alt={_id}
              w={"100%"}
              borderRadius={"15px"}
            />
          </Flex>
          <Text color={"rgba(255, 255, 255, .6)"} mt={4}>
            {mainTitle}
          </Text>
          <Text fontSize={"14px"} color={"rgba(255, 255, 255, .2)"} mt={2}>
            {desc}
          </Text>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Button
              mt={2}
              border={"1px solid  rgba(255, 255, 255, .05)"}
              size={"md"}
              textAlign={"center"}
              px={8}
              bg={"rgba(255, 255, 255, .05)"}
              color={"rgba(255, 255, 255, .2)"}
              _hover={{
                bg: "rgba(255, 255, 255, .2)",
                color: "white",
              }}
            >
              Claim
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CryptoAirdropShortCards;
