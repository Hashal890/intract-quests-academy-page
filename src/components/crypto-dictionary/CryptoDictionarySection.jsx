import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { TbBook } from "react-icons/tb";
import CryptoProjectsAndDictionaryHeaderAndSubheader from "../common/CryptoProjectsAndDictionaryHeaderAndSubheader";
import CryptoDictionaryMainImage from "../../assets/images-and-logos/crypto-dictionary-main-image.svg";

const CryptoDictionarySection = () => {
  return (
    <Box>
      <CryptoProjectsAndDictionaryHeaderAndSubheader
        heading={"Crypto Dictionary"}
        subHeading={"Your one-stop to catch up on all crypto terms"}
      />
      <Box
        p={4}
        maxW={"1200px"}
        maxH={"468px"}
        m={"auto"}
        mt={4}
        position={"relative"}
        borderRadius={"16px"}
        border={"1px rgba(255, 255, 255, .2)"}
      >
        <Image
          src={CryptoDictionaryMainImage}
          alt={"crypto-dictionary-main-image"}
          cursor={"pointer"}
          w={"100%"}
          h={"100%"}
          borderRadius={"16px"}
        />
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          position={"absolute"}
          bottom={4}
          left={4}
          right={4}
          p={4}
        >
          <Box>
            <Text color={"#fff9"} fontSize={["14px", "14px", "24px"]}>
              Web3 + Degen Glossary
            </Text>
            <Text
              color={"rgba(255, 255, 255, .4)"}
              fontSize={["8px", "8px", "16px"]}
            >
              Your own crypto dictionary
            </Text>
          </Box>
          <Flex
            w={["32px", "32px", "64px"]}
            h={["32px", "32px", "64px"]}
            fontSize={["14px", "14px", "24px"]}
            borderRadius={"100%"}
            backdropFilter={"blur(20px)"}
            color={"#fff9"}
            border={"1px solid rgba(255, 255, 255, .2)"}
            bg={"rgba(0, 0, 0, .4)"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TbBook />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default CryptoDictionarySection;
