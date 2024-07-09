import { Badge, Box, Button, Text } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";

export const NAV_ITEMS = [
  {
    id: 1,
    label: "Compass",
    children: [
      {
        label: (
          <Box color={"#fff"}>
            All Ecosystems{" "}
            <Badge px={2} py={0.5} ml={2} borderRadius={"5px"}>
              NEW
            </Badge>
          </Box>
        ),
        href: "#",
      },
    ],
  },
  {
    id: 2,
    label: "Explore",
    href: "#",
  },
  {
    id: 3,
    label: "Academy",
    href: "#",
  },
  {
    id: 4,
    label: "NFTs",
    href: "#",
  },
  {
    id: 5,
    label: "For projects",
    children: [
      {
        label: (
          <Text fontSize={"20px"} color={"#fff"}>
            Launch your quest today!
          </Text>
        ),
        subLabel: (
          <Box>
            <Text fontSize={"14px"} mt={2}>
              ⚠️❗ Please note this is for projects only, not individual users
              ❗⚠️
            </Text>
            <Button
              leftIcon={<FaArrowRightLong />}
              mt={2}
              bg={"rgb(100, 53, 233)"}
              color={"#fff"}
              _hover={{ bg: "#fff", color: "rgb(100, 53, 233)" }}
            >
              Launch your Quest
            </Button>
          </Box>
        ),
        href: "#",
      },
    ],
  },
];
