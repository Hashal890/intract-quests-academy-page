import React from "react";
import { Stack } from "@chakra-ui/react";
import { NAV_ITEMS } from "../../assets/data";
import MobileNavbarItem from "./MobileNavbarItem";

const MobileNavbar = () => {
  return (
    <Stack p={4} display={["flex", "flex", "flex", "none"]}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavbarItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNavbar;
