import React from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { CRYPTO_CREATORS_AND_PROJECTS_DATA } from "../../assets/data";
import ProjectVideoCard from "./ProjectVideoCard";
import CryptoProjectsAndDictionaryHeaderAndSubheader from "../common/CryptoProjectsAndDictionaryHeaderAndSubheader";

const CryptoCreatorsProjectsSection = () => {
  return (
    <Box>
      <CryptoProjectsAndDictionaryHeaderAndSubheader
        heading={"Top Crypto Creators and Projects to Follow"}
        subHeading={"Answers to your crypto doubts, straight from the experts"}
      />
      <Flex justifyContent={"center"} alignItems={"center"}>
        <SimpleGrid
          columns={[1, 2, 2, 2, 4]}
          gap={[4, 4, 4, 6, 2]}
          maxW={"1260px"}
          m={"auto"}
          mt={6}
        >
          {CRYPTO_CREATORS_AND_PROJECTS_DATA.map((video) => (
            <ProjectVideoCard key={video._id} {...video} />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default CryptoCreatorsProjectsSection;
