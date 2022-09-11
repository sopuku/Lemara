import Texts from "../Texts/Texts";
import { Heading, Text, Container } from "@chakra-ui/react";
import Slider from "react-slick";
import React from "react";
import Colors from "../Ui/Colors";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Feedback() {
  const colors = Colors();
  const texts = Texts();
  return (
    <Container
      align="center"
      maxW="3xl"
      py={{ base: "4rem", md: "6rem", lg: "8rem", xl: "9rem" }}
      color={colors.home.feedback.color}
      bg={colors.home.feedback.bg}
    >
      <Heading size="2xl" pb="2rem">
        {texts.index.text4}
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
        {texts.index.feedback.map((item) => {
          return (
            <React.Fragment key={item.title}>
              <Heading size="xl" pb="1rem">
                {item.title}
              </Heading>
              <Text lineHeight={{ base: "1.5", lg: "1.8" }} fontSize="xl">
                {item.text}
              </Text>
            </React.Fragment>
          );
        })}
      </Slider>
    </Container>
  );
}
