import React from "react";
import Feedback from "./Feedback";
import Values from "./Values";
import AboutUs from "./AboutUs";
import {
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  Link,
  Image,
  Stack,
  Show,
} from "@chakra-ui/react";

export default function HomeMain() {
  return (
    <React.Fragment>
      <Box
        position="absolute"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundImage="/images/background/main.jpg"
        w="100%"
        h="50rem"
        filter="auto"
        brightness="50%"
        boxShadow="0 0 20px 10px grey"
      ></Box>
      <VStack spacing="0" overflow="hidden">
        <Flex
          position="relative"
          direction="column"
          align="center"
          justify="center"
          w="80vw"
          h="50rem"
          px={{ base: "1%", sm: "1%", lg: "4%", xl: "10%", "2xl": "15%" }}
          mb={{ base: 0, md: "25rem", lg: "25rem", xl: "10rem" }}
        >
          <Heading
            color="white"
            fontSize={{ base: "4xl", md: "5xl" }}
            pb="2rem"
          >
            Jums reikalingos CNC detalės jau pakeliui
          </Heading>
          <Text color="white" fontSize={{ base: "3xl", md: "4xl" }}>
            Projektuojame ir gaminame tiek pavienes detales, jų prototipus, tiek
            serijas. Išsirinkite tinkamas paslaugas, o jei turite klausimų,{" "}
            <Link color="orange" href="/contacts">
              susisiekite su mumis
            </Link>
            .
          </Text>
        </Flex>
        <Show above="md">
          <Box position="absolute" top="50rem">
            <Values />
          </Box>
        </Show>
        <Box
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
              src="/images/home/whyUs.jpg"
              maxW="40rem"
              maxH="25rem"
              boxShadow="0 0 5px 1px "
            />
            <Box px={["3%", "3%", "7%", "10%", "10%", "15%"]}>
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
