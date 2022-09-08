import React from "react";
import Feedback from "./Feedback";
import Values from "./Values";
import Links from "../Ui/Navigation/Links";
import Colors from "../Ui/Colors";
import { VStack, Heading, Text, Show, Flex, Container } from "@chakra-ui/react";
import Texts from "../../Components/Texts/Texts";
import DefaultPage from "../Ui/DefaultPage";

export default function HomeMain() {
  const colors = Colors();

  const texts = Texts();
  return (
    <VStack spacing="0" overflow="hidden">
      <Container
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundImage={colors.home.bgImage}
        boxShadow="0 0 20px 10px grey"
        color={colors.home.color}
        bg={colors.home.bg}
        maxW="100%"
        h="35rem"
        align="center"
        px={{ base: "4%", sm: "4%", lg: "10%", xl: "10%", "2xl": "20%" }}
        mb={{ base: 0, md: "25rem", lg: "25rem", xl: "10rem" }}
      >
        <Heading pt="7%" fontSize={{ base: "35px", md: "45px" }} pb="2rem">
          Lemara - preciziškai ištekintos detalės jūsų konstrukciniams
          sumanymams
        </Heading>
        <Text fontSize={{ base: "2xl", md: "3xl" }}>
          Projektuojame ir gaminame pavienes detales, prototipus, serijas.
          Išsirinkite tinkamas paslaugas, o jei turite klausimų,{" "}
          <Links color={colors.home.colorLink} href="/contacts">
            susisiekite su mumis
          </Links>
          .
        </Text>
      </Container>
      <Show above="md">
        <Flex position="absolute" top="35rem">
          <Values />
        </Flex>
      </Show>
      <DefaultPage
        name="whyUs"
        src={colors.home.image}
        heading={texts.whyUs.text1.heading}
        text={texts.whyUs.text1.text}
        py="8rem"
      />
      <DefaultPage
        name="aboutUs"
        src={colors.home.aboutUs.image}
        heading={texts.aboutUs.text1.heading}
        text={texts.aboutUs.text1.text}
      />
      <Feedback />
    </VStack>
  );
}
