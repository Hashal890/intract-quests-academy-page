import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { CRYPTO_CREATORS_AND_PROJECTS_DATA } from "../../assets/data";
import ProjectVideoCard from "./ProjectVideoCard";

const CryptoCreatorsProjectsSection = () => {
  return (
    <Box>
      <Text textAlign={"center"} color={"#fff"} fontSize={"24px"}>
        Top Crypto Creators and Projects to Follow
      </Text>
      <Text
        textAlign={"center"}
        color={"rgba(255, 255, 255, .4)"}
        fontSize={"16px"}
        mt={2}
      >
        Answers to your crypto doubts, straight from the experts
      </Text>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <SimpleGrid
          columns={[1, 2, 2, 2, 4]}
          gap={[4, 4, 4, 6, 2]}
          maxW={"1260px"}
          m={"auto"}
          mt={6}
          pb={8}
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
