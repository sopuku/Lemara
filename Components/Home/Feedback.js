import FeedbackText from "./FeedbackText";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const feedbackText = FeedbackText();

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Feedback() {
  return (
    <Box
      align="center"
      w="100%"
      h={{ base: "30rem", xl: "35rem" }}
      py={{ base: "2rem", md: "5rem", xl: "12rem" }}
      px={["2%", "2%", "5%", "10%", "10%", "25%"]}
    >
      <Heading size="2xl" pb="2rem">
        Atsiliepimai
      </Heading>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings}>
        {feedbackText.map((item) => {
          return (
            <React.Fragment key={uuidv4()}>
              <Heading size="xl" pb="1rem">
                {item.title}
              </Heading>
              <Text fontSize="xl">{item.text}</Text>
            </React.Fragment>
          );
        })}
      </Slider>
    </Box>
  );
}
