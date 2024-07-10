import { Box } from "@chakra-ui/react";
import React from "react";
import CryptoProjectsAndDictionaryHeaderAndSubheader from "../common/CryptoProjectsAndDictionaryHeaderAndSubheader";

const CryptoDictionarySection = () => {
  return (
    <Box>
      <CryptoProjectsAndDictionaryHeaderAndSubheader
        heading={"Crypto Dictionary"}
        subHeading={"Your one-stop to catch up on all crypto terms"}
      />
    </Box>
  );
};

export default CryptoDictionarySection;
