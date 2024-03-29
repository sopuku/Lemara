import Values from "./Values";
import Links from "../Ui/Navigation/Links";
import { VStack, Heading, Text, Show, Flex, Container } from "@chakra-ui/react";
import DefaultPage from "../Ui/DefaultPage";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const Feedback = dynamic(() => import("./Feedback"), {
  suspense: true,
});

export default function HomeMain(props) {
  return (
    <VStack spacing="0" overflow="hidden">
      <Container
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundImage={props.data.background_image.url}
        backgroundimagealt={props.data.background_image.alt}
        boxShadow="0 0 20px 10px grey"
        color={props.data.text_color}
        bg={props.data.background_color}
        maxW="100%"
        h="35rem"
        align="center"
        px={{ base: "4%", sm: "4%", lg: "10%", xl: "10%", "2xl": "20%" }}
        mb={{ base: 0, md: "25rem", lg: "25rem", xl: "10rem" }}
      >
        <Heading
          as="h1"
          pt="7%"
          fontSize={{ base: "35px", md: "45px" }}
          pb="2rem"
        >
          {props.data.title}
        </Heading>
        <Text fontSize={{ base: "2xl", md: "3xl" }}>
          {props.data.text}
          <Links color={props.data.text_color_link} href="/contacts">
            {props.data.text_link}
          </Links>
          .
        </Text>
      </Container>
      <Show above="md">
        <Flex position="absolute" top="35rem">
          <Values data={props.data} />
        </Flex>
      </Show>
      <DefaultPage
        name="whyUs"
        src={props.data.why_us_image.url}
        alt={props.data.why_us_image.alt}
        heading={props.data.why_us_title}
        text={props.data.why_us_text}
        py="8rem"
        w={props.data.why_us_image.dimensions.width}
        h={props.data.why_us_image.dimensions.height}
        bg={props.data.why_us_background_color}
        color={props.data.why_us_text_color}
        bgTexture={props.data.why_us_background_texture}
      />
      <DefaultPage
        name="aboutUs"
        src={props.data.about_us_image.url}
        alt={props.data.about_us_image.alt}
        heading={props.data.about_us_title}
        text={props.data.about_us_text}
        w={props.data.about_us_image.dimensions.width}
        h={props.data.about_us_image.dimensions.height}
        bg={props.data.about_us_background_color}
        color={props.data.about_us_text_color}
        bgTexture={props.data.about_us_background_texture}
      />
      <Suspense>
        <Feedback data={props.data} fallback={`Loading...`} />
      </Suspense>
    </VStack>
  );
}
