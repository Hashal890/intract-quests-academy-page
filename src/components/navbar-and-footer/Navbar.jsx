import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useDisclosure,
  Image,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { PiTelevisionBold } from "react-icons/pi";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import IntractWebsiteLogo from "../../assets/images-and-logos/intract-website-logo.svg";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      position={"fixed"}
      w={"100%"}
      backdropFilter={"blur(15px)"}
      zIndex={1000}
    >
      <Flex
        minH="60px"
        py={2}
        px={2}
        borderBottom={1}
        borderStyle="solid"
        align="center"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="outline"
            aria-label="Toggle Navigation"
            colorScheme="teal"
            isRound={true}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            src={IntractWebsiteLogo}
            alt={"Company logo"}
            w={["100px"]}
            cursor={"pointer"}
          />
          <Flex display={{ base: "none", md: "none", lg: "flex" }} ml={10}>
            <DesktopNavbar />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          alignItems={"center"}
          spacing={[0.5, 2, 4]}
        >
          <Input
            placeholder="Search for ecosystems, trending quests etc,."
            w={["200px", "200px", "300px"]}
            size={"sm"}
            color={"grey"}
            borderRadius={"40px"}
            border={"1px solid rgba(255,255,255,.05)"}
            bg={"rgba(255,255,255,.07)"}
          />
          <IconButton
            icon={<PiTelevisionBold />}
            variant={"outline"}
            color={"#fa8922"}
            border={"1px solid #fa8922"}
            borderRadius={"50%"}
            bg={"rgba(60,32,140,.2)"}
            _hover={{ bg: "#fa8922", color: "#fff" }}
            fontWeight={900}
          />
          <Button
            as="a"
            fontSize="sm"
            fontWeight={600}
            color="black"
            bg={"whitesmoke"}
            href="#"
            px={[2, 4, 8]}
            py={[0, 2, 4]}
            _hover={{ bg: "#6435e9", color: "whitesmoke" }}
          >
            Sign In
          </Button>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNavbar />
      </Collapse>
    </Box>
  );
};

export default Navbar;
