import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar-and-footer/Navbar";
import DisplaySection from "./components/display/DisplaySection";

function App() {
  return (
    <Box bg={"#080808"} h={"100vh"}>
      <Navbar />
      <DisplaySection />
    </Box>
  );
}

export default App;
