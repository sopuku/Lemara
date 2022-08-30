import FeedbackText from "./FeedbackText";
import { Box, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";

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
      bg="blue.100"
      w="100%"
      h={{ base: "22rem", xl: "30rem" }}
      pt={{ base: "3rem", md: "5rem", xl: "8rem" }}
      px={{ base: "2%", md: "5%", xl: "25%" }}
    >
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
            <Box align="center">
              <Heading pb="1rem">{item.title}</Heading>
              <Text fontSize="xl">{item.text}</Text>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}
