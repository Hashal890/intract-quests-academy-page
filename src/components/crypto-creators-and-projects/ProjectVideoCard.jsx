import React, { useState } from "react";
import { Box, IconButton, Image, Flex, Text } from "@chakra-ui/react";
import { FaPlay, FaTimes } from "react-icons/fa";

const ProjectVideoCard = ({
  mainTitle,
  mainImageUrl,
  youtubeVideoUrl,
  youtubeVideoTitle,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleCloseClick = () => {
    setIsPlaying(false);
  };

  return (
    <Box
      position={"relative"}
      maxH={"420px"}
      maxW={"283px"}
      border={"1px solid rgba(255, 255, 255, .2)"}
      borderRadius={"20px"}
    >
      {isPlaying ? (
        <Box position={"relative"} height={"100%"} width={"100%"}>
          <iframe
            width={"100%"}
            height={"100%"}
            src={`${youtubeVideoUrl}?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title={youtubeVideoTitle}
          />
          <IconButton
            icon={<FaTimes />}
            onClick={handleCloseClick}
            position={"absolute"}
            top={"10px"}
            right={"10px"}
            size={"lg"}
            variant={""}
            aria-label={"close-video"}
            fontSize={"24px"}
            borderRadius={"30px"}
          />
        </Box>
      ) : (
        <Box position={"relative"} height={"100%"} width={"100%"}>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
            top={"10px"}
            right={"10px"}
            cursor={"pointer"}
            border={"1px solid rgba(255, 255, 255, .2)"}
            bg={"rgba(0, 0, 0, .4)"}
            p={2}
            w={"40px"}
            h={"40px"}
            borderRadius={"30px"}
          >
            <Image
              src={"https://www.intract.io/assets/reel-video-ee824737.svg"}
              alt={"instagram-reel-icon"}
              onClick={handlePlayClick}
            />
          </Flex>
          <IconButton
            icon={<FaPlay />}
            onClick={handlePlayClick}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
            size={"lg"}
            aria-label={"play-videos"}
            fontSize={"24px"}
            borderRadius={"30px"}
            _hover={{ bg: "#6435e9", color: "#fff" }}
            border={"1px solid rgba(255, 255, 255, .2)"}
          />
          <Image
            src={mainImageUrl}
            alt={mainTitle}
            height={"100%"}
            width={"100%"}
            borderRadius={"20px"}
          />
          <Text
            position={"absolute"}
            bottom={"10px"}
            left={"16px"}
            fontWeight={600}
            color={"#fff"}
            p={2}
            borderRadius={"25px"}
            textShadow={"0px 0px 5px rgba(0,0,0,.1)"}
            textOverflow={"ellipsis"}
            mixBlendMode={"plus-lighter"}
            backdropFilter={"blur(10px)"}
            maxW={"251px"}
            textAlign={"center"}
          >
            {mainTitle}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default ProjectVideoCard;
