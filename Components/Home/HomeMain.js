import React from "react";
import Feedback from "./Feedback";
import Values from "./Values";
import AboutUs from "./AboutUs";
import WhyUs from "./WhyUs";
import Links from "../Ui/Navigation/Links";
import Colors from "../Ui/Colors";
import { Box, VStack, Heading, Text, Show } from "@chakra-ui/react";

export default function HomeMain() {
  const colors = Colors();
  return (
    <VStack spacing="0" overflow="hidden">
      <Box
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundImage={colors.home.bgImage}
        boxShadow="0 0 20px 10px grey"
        color={colors.home.color}
        bg={colors.home.bg}
        w="100%"
        h={{ base: "35rem", md: "50rem" }}
        align="justify"
        px={{ base: "4%", sm: "4%", lg: "10%", xl: "10%", "2xl": "20%" }}
        mb={{ base: 0, md: "25rem", lg: "25rem", xl: "10rem" }}
      >
        <Heading pt="10%" fontSize={{ base: "4xl", md: "5xl" }} pb="2rem">
          Kokybiškos, preciziškai ištekintos detalės jūsų konstrukciniams
          sumanymams: greitai ir už protingą kainą
        </Heading>
        <Text fontSize={{ base: "2xl", md: "3xl" }}>
          Projektuojame ir gaminame tiek pavienes detales, jų prototipus, tiek
          serijas. Išsirinkite tinkamas paslaugas, o jei turite klausimų,{" "}
          <Links color={colors.home.colorLink} href="/contacts">
            susisiekite su mumis
          </Links>
          .
        </Text>
      </Box>
      <Show above="md">
        <Box position="absolute" top="50rem">
          <Values />
        </Box>
      </Show>
      <WhyUs />
      <AboutUs />
      <Feedback />
    </VStack>
  );
}
