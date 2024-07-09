import React from "react";
import { Box } from "@chakra-ui/react";
import CryptoAirdropsMain from "../common/CryptoAirdropsMain";
import {
  CRYPTO_AIRDROPS_BIG_CARDS_DATA,
  CRYPTO_AIRDROPS_SHORT_CARDS_DATA,
} from "../../assets/data";
import CryptoAirdropShortCards from "../common/CryptoAirdropShortCards";

const BasicsCryptoSection = () => {
  return (
    <Box bg={"#080808"}>
      <CryptoAirdropsMain {...CRYPTO_AIRDROPS_BIG_CARDS_DATA[0]} />
      <CryptoAirdropShortCards {...CRYPTO_AIRDROPS_SHORT_CARDS_DATA[0]} />
    </Box>
  );
};

export default BasicsCryptoSection;
