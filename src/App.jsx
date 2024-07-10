import React from "react";
import { Box } from "@chakra-ui/react";
import "./css/index-scrollbar.css";
import Navbar from "./components/navbar-and-footer/Navbar";
import DisplaySection from "./components/display/DisplaySection";
import BasicsCryptoSection from "./components/basics-crypto/BasicsCryptoSection";
import IntroductiontoAirdropsSection from "./components/introduction-to-airdrops/IntroductiontoAirdropsSection";
import FirstAirdropSection from "./components/first-airdrop/FirstAirdropSection";
import CryptoCreatorsProjectsSection from "./components/crypto-creators-and-projects/CryptoCreatorsProjectsSection";

function App() {
  return (
    <Box h={"100vh"} fontFamily={"cursive"}>
      <Box bg={"#080808"}>
        <Navbar />
        <DisplaySection />
        <BasicsCryptoSection />
        <IntroductiontoAirdropsSection />
        <FirstAirdropSection />
        <section
          style={{
            minHeight: "2px",
            minWidth: "2px",
            background: "rgba(255, 255, 255, 0.05)",
            margin: "56px"
          }}
        ></section>
        <CryptoCreatorsProjectsSection />
      </Box>
    </Box>
  );
}

export default App;
