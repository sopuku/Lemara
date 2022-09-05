import React from "react";
import Feedback from "./Feedback";
import Values from "./Values";
import AboutUs from "./AboutUs";
import Links from "../Ui/Navigation/Links";
import Colors from "../Ui/Colors";
import {
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  Image,
  Stack,
  Show,
} from "@chakra-ui/react";

export default function HomeMain() {
  const colors = Colors();
  return (
    <React.Fragment>
      <Box
        position="absolute"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundImage={colors.home.bgImage}
        bg={colors.home.bg}
        w="100%"
        h={{ base: "35rem", md: "50rem" }}
        boxShadow="0 0 20px 10px grey"
      ></Box>
      <VStack spacing="0" overflow="hidden">
        <Flex
          color={colors.home.color}
          position="relative"
          direction="column"
          align="center"
          h={{ base: "35rem", md: "50rem" }}
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
        </Flex>
        <Show above="md">
          <Box position="absolute" top="50rem">
            <Values />
          </Box>
        </Show>
        <Box
          px={["3%", "3%", "7%", "10%", "10%", "15%"]}
          w="100%"
          h={["70rem", "70rem", "65rem", "65rem", "45rem"]}
          align="center"
          py="7rem"
        >
          <Stack
            justify="start"
            spacing="5%"
            align="center"
            direction={{ base: "column", xl: "row" }}
          >
            <Image
              src={colors.home.image}
              maxW="40rem"
              maxH="25rem"
              boxShadow="0 0 5px 1px "
            />
            <Box color={colors.home.whyUs.color} bg={colors.home.whyUs.bg}>
              <Heading py="5%">Kodėl turėtumėte pasirinkti mus?</Heading>
              <Text fontSize="lg" align="justify">
                Esame jauni ir ambicingi savo srities profesionalai. Nuolatos
                plečiamės ir keliame darbuotojų kvalifikaciją. Visada
                užtikriname aukščiausios kokybės produktą, kurį atliekame per
                trumpiausią įmanomą laiką. Specializuojamės gaminant didelio
                tikslumo reikalaujančius elementus automatinėms ir robotizuotoms
                gamybos, apdirbimo linijoms, konvejeriams, tačiau atliekame ir
                kitus darbus. nuo 2016 metų sėkmingai gaminame detales didelėms
                Lietuvos ir užsienio kompanijoms.
              </Text>
            </Box>
          </Stack>
        </Box>
        <AboutUs />
        <Feedback />
      </VStack>
    </React.Fragment>
  );
}
