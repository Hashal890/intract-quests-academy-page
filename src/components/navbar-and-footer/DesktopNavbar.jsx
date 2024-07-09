import React from "react";
import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import { NAV_ITEMS } from "../../assets/data";
import DesktopSubNavbar from "./DesktopSubNavbar";

const DesktopNavbar = () => {
  return (
    <Stack direction="row" spacing={4} alignItems={"center"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.id}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={600}
                color={"grey"}
                _hover={{ borderBottom: "4px outset teal"}}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow="xl"
                p={4}
                rounded="xl"
                minW="sm"
                bg={"#080808"}
                fontWeight={600}
                color={"grey"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNavbar key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNavbar;
