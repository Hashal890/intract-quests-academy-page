import React from "react";
import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import { TbArrowRightTail } from "react-icons/tb";
import BackgroundImageOfDisplay from "../../assets/images-and-logos/intract-academy-display-section-background.png";
import CompanyNameInAnimation from "../../assets/images-and-logos/academy-display-animated-logo.gif";

const DisplaySection = () => {
  return (
    <Box bgImage={BackgroundImageOfDisplay} h={["60vh", "60vh", "60vh", "80vh"]}>
      <VStack
        justifyContent={"center"}
        alignItems={"center"}
        gap={6}
        h={"100%"}
        color={"rgba(255, 255, 255, .8)"}
        fontSize={"18px"}
        fontWeight={600}
      >
        <Image
          src={CompanyNameInAnimation}
          alt={"Company name with animation"}
          bg={"transparent"}
          w={"235px"}
          mixBlendMode={"screen"}
          transition={"top .5s ease"}
        />
        <VStack justifyContent={"center"} alignItems={"center"} gap={0}>
          <Text textAlign={"center"} p={2}>
            Intract users{" "}
            <span style={{ color: "grey" }}>have together made more than</span>{" "}
            $100 million <span style={{ color: "grey" }}>in web3.</span>
          </Text>
          <Text textAlign={"center"} p={2}>
            <span style={{ color: "grey" }}>Join them and</span> learn how to
            earn crypto!
          </Text>
        </VStack>
        <Button
          bg={"#6435e9"}
          color={"whitesmoke"}
          _hover={{ bg: "whitesmoke", color: "#6435e9" }}
          p={"10px 57px"}
          rightIcon={<TbArrowRightTail />}
          transition={"all .3s ease"}
          textAlign={"center"}
          borderRadius={"10px"}
          fontWeight={600}
        >
          Get Started
        </Button>
      </VStack>
    </Box>
  );
};

export default DisplaySection;
