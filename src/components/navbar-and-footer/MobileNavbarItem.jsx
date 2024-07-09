import React from "react";
import {
  Box,
  Collapse,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MobileNavbarItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{ textDecoration: "none" }}
      >
        <Text
          fontWeight={600}
          p={2}
          href={href ?? "#"}
          fontSize={"md"}
          color={"grey"}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
            color={"grey"}
          />
        )}
      </Box>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack mt={2} pl={4} borderLeft={1} borderStyle="solid" align="start">
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default MobileNavbarItem;
