import {
  Stack,
  Text,
  Heading,
  VStack,
  Container,
  Square,
} from "@chakra-ui/react";
import React from "react";
import Colors from "../Ui/Colors";
import Texts from "../Texts/Texts";
import Image from "next/image";

export default function DefaultPage(props) {
  const colors = Colors();
  const texts = Texts();

  return (
    <Container
      maxW="100%"
      w="100%"
      bg={props.name === "aboutUs" && colors.home.aboutUs.bg}
      backgroundImage={props.name === "aboutUs" && texts.images.bgTexture}
      color={props.name === "aboutUs" && colors.home.aboutUs.color}
    >
      <Stack
        direction={{ base: "column", xl: "row" }}
        spacing="5%"
        pt={{ base: "5%", md: props.name === "whyUs" && "8rem", xl: "6%" }}
        pb="6%"
        align="center"
        justify="center"
      >
        {props.name !== "aboutUs" && (
          <Image
            src={props.src}
            alt={props.alt}
            width={props.w}
            height={props.h}
          />
        )}
        <VStack spacing="8">
          <Heading>{props.heading}</Heading>
          <Text
            maxW="40rem"
            lineHeight={{ md: "1.8" }}
            fontSize="lg"
            align="justify"
          >
            {props.text}
          </Text>
        </VStack>
        {props.name === "aboutUs" && (
          <img
            src={props.src}
            alt={props.alt}
            width={props.w}
            height={props.h}
          />
        )}
      </Stack>
    </Container>
  );
}
