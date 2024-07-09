import React from "react";
import { Box } from "@chakra-ui/react";
import "./css/index-scrollbar.css";
import Navbar from "./components/navbar-and-footer/Navbar";
import DisplaySection from "./components/display/DisplaySection";
import BasicsCryptoSection from "./components/basics-crypto/BasicsCryptoSection";
import IntroductiontoAirdropsSection from "./components/introduction-to-airdrops/IntroductiontoAirdropsSection";

function App() {
  return (
    <Box h={"100vh"} fontFamily={"cursive"}>
      <Box bg={"#080808"}>
        <Navbar />
        <DisplaySection />
        <BasicsCryptoSection />
        <IntroductiontoAirdropsSection />
      </Box>
    </Box>
  );
}

export default App;
