import React from "react";
import { Box } from "@chakra-ui/react";
import CryptoAirdropsMain from "../common/CryptoAirdropsMain";
import CryptoAirdropShortCards from "../common/CryptoAirdropShortCards";
import {
  CRYPTO_AIRDROPS_BIG_CARDS_DATA,
  CRYPTO_AIRDROPS_SHORT_CARDS_DATA,
} from "../../assets/data";

const IntroductiontoAirdropsSection = () => {
  return (
    <Box bg={"#080808"} mt={8}>
      <CryptoAirdropsMain {...CRYPTO_AIRDROPS_BIG_CARDS_DATA[1]} />
      <CryptoAirdropShortCards {...CRYPTO_AIRDROPS_SHORT_CARDS_DATA[1]} />
    </Box>
  );
};

export default IntroductiontoAirdropsSection;
