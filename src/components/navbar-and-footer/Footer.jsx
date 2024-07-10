import React from "react";
import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import CompanyNameInAnimation from "../../assets/images-and-logos/intract-website-logo.svg";
import FooterHeadersAndLinks from "./FooterHeadersAndLinks";
import BorderBetweenTwoSections from "../common/BorderBetweenTwoSections";
import FooterContactDetails from "./FooterContactDetails";

const Footer = () => {
  return (
    <Box>
      <Container as={Stack} maxW={"1200px"} m={"auto"}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Image
              src={CompanyNameInAnimation}
              alt={"Company name with animation"}
              bg={"transparent"}
              w={"235px"}
              mixBlendMode={"screen"}
              transition={"top .5s ease"}
            />
            <Text fontSize={"15px"} color={"#7d7d7d"}>
              We are your personal guide for exploring web3 projects & earning
              100x rewards
            </Text>
          </Stack>
          <FooterHeadersAndLinks />
        </SimpleGrid>
      </Container>
      <BorderBetweenTwoSections />
      <Box fontWeight={500} color={"#7d7d7d"} maxW={"1200px"} m={"auto"}>
        <span style={{ color: "#fff", fontWeight: 600 }}>Disclaimer:</span>{" "}
        Crypto Products, Virtual Digital Assets, and NFTs are unregulated and
        can be highly risky. There may be no regulatory recourse for any loss
        from such transactions. We advise the viewer to proceed with caution.
        Nothing in this website or any communication published by us amounts to,
        is intended to be, or should be construed as investment or purchase
        advice of any kind or financial advice or promotion under any applicable
        laws. Any decision made based on the content provided on this website or
        any communication published by us shall not be attributable to us.
      </Box>
      <BorderBetweenTwoSections />
      <FooterContactDetails />
    </Box>
  );
};

export default Footer;
