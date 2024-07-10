import React from "react";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { FOOTER_CONTACT_DETAILS } from "../../assets/data";

const FooterContactDetails = () => {
  const { mainTitle, contacts } = FOOTER_CONTACT_DETAILS;

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      pb={8}
      maxW={"1200px"}
      m={"auto"}
    >
      <Text color={"#fff"}>{mainTitle}</Text>
      <Flex alignItems={"center"} gap={2}>
        {contacts.map((contact) => (
          <IconButton
            icon={contact}
            bg={"#1a1a1a"}
            _hover={{ bg: "yellow" }}
            fontSize={"20px"}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default FooterContactDetails;
