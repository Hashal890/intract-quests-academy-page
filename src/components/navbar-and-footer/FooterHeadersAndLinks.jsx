import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { FOOTER_LINKS_DATA } from "../../assets/data";

const FooterHeadersAndLinks = () => {
  return (
    <>
      {FOOTER_LINKS_DATA.map((linkItem) => {
        const { _id, mainTitle, subTitles } = linkItem;

        return (
          <Stack align={"flex-start"} key={_id}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2} color={"#fff"}>
              {mainTitle}
            </Text>
            {subTitles.map((subTitle) => (
              <Box as="a" href={"#"} key={_id} color={"#7d7d7d"}>
                {subTitle}
              </Box>
            ))}
          </Stack>
        );
      })}
    </>
  );
};

export default FooterHeadersAndLinks;
