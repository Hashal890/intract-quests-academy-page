import React, { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import CryptoAirdropDropDownItem from "./CryptoAirdropDropDownItem";
import CoinImageForMainDiv from "../../assets/images-and-logos/coin-image-basics-of-crypto.svg";

const CryptoAirdropsMain = ({
  _id,
  mainTitle,
  desc,
  quests,
  mainImageUrl,
  data,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Flex
      justifyContent={"space-evenly"}
      alignItems={"start"}
      color={"white"}
      bg={"#080808"}
      cursor={"pointer"}
      flexDir={"column"}
      w={"100%"}
      p={[10, 10, 6]}
      m={0}
    >
      <Flex
        onClick={() => setIsOpen(!isOpen)}
        justifyContent={"space-center"}
        alignItems={"center"}
        bg={"rgba(255, 255, 255, .05)"}
        borderRadius={"25px"}
        backdropFilter={"blur(15px)"}
        p={8}
        gap={4}
        borderBottomLeftRadius={isOpen ? "0px" : "25px"}
        borderBottomRightRadius={isOpen ? "0px" : "25px"}
        flexDir={["column", "column", "row"]}
        maxW={"536px"}
      >
        <Box>
          <Image
            src={mainImageUrl}
            alt={_id || "card-image"}
            h={"220px"}
            w={"250px"}
            p={"6px"}
            cursor={"pointer"}
            border={"1px solid rgba(255,255,255,.2)"}
            bg={"rgba(255, 255, 255, .05)"}
            borderRadius={"20px"}
          />
          <Text
            p={"6px 14px"}
            borderRadius={"20px"}
            border={"1px solid rgba(255, 255, 255, .2)"}
            bg={"rgba(0, 0, 0, .4)"}
            backdropFilter={"blur(10px)"}
            w={"max-content"}
            pos={"absolute"}
            bottom={["210px", "210px", "46px"]}
            left={["38%", "38%", "16%"]}
            fontSize={"14px"}
          >
            {quests} Quests
          </Text>
        </Box>
        <Box>
          <Text fontSize={"20px"} fontWeight={600}>
            {mainTitle}
          </Text>
          <Text
            py={4}
            borderBottom={"2px dashed gray"}
            fontSize={"14px"}
            color={"gray"}
          >
            {desc}
          </Text>
          <Flex mt={4} alignItems={"center"} gap={2} borderRadius={"30px"}>
            <Image
              name={"Coin Image"}
              src={CoinImageForMainDiv}
              size={"xs"}
              h={"20px"}
              w={"20px"}
            />
            <Text>1490 XPS</Text>
          </Flex>
        </Box>
      </Flex>
      <Flex
        display={isOpen ? "flex" : "none"}
        flexDir={"column"}
        gap={4}
        p={2}
        border={"1px solid rgba(255,255,255,.1)"}
        maxH={"350px"}
        overflow={"scroll"}
        maxW={"536px"}
      >
        {data.map((item) => (
          <CryptoAirdropDropDownItem key={item.id} {...item} />
        ))}
      </Flex>
    </Flex>
  );
};

export default CryptoAirdropsMain;
