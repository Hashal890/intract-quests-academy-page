import { Text } from "@chakra-ui/react";
import React from "react";

const CryptoProjectsAndDictionaryHeaderAndSubheader = ({
  heading,
  subHeading,
}) => {
  return (
    <>
      <Text textAlign={"center"} color={"#fff"} fontSize={"24px"}>
        {heading}
      </Text>
      <Text
        textAlign={"center"}
        color={"rgba(255, 255, 255, .4)"}
        fontSize={"16px"}
        mt={2}
      >
        {subHeading}
      </Text>
    </>
  );
};

export default CryptoProjectsAndDictionaryHeaderAndSubheader;
