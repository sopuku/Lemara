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
  Center,
  Stack,
  Hide,
  Show,
} from "@chakra-ui/react";

export default function HomeMain() {
  return (
    <VStack spacing="0" overflow="hidden">
      <Flex
        position="relative"
        direction="column"
        align="center"
        justify="center"
        w="100vw"
        h="50rem"
        px={{ base: "2rem", sm: "10%", lg: "20%" }}
        mb={{ base: 0, md: "25rem", lg: "25rem", xl: "10rem" }}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundImage="/images/background/bg1.jpg"
        boxShadow="0 0 20px 10px grey"
      >
        <Heading color="white" fontSize="6xl" pb="2rem">
          Jums reikalingos CNC detalės jau pakeliui
        </Heading>
        <Text color="white" fontSize="3xl">
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
          justify="center"
          spacing="1rem"
          align="center"
          direction={{ base: "column", xl: "row" }}
          px={["2%", "2%", "5%", "10%", "10%", "15%"]}
        >
          <Image src="/images/whyUs.jpg" minW="40rem" minH="25rem" />
          <Box>
            <Heading py="3rem">Kodėl turėtumėte pasirinkti mus?</Heading>
            <Text fontSize="lg" align="justify">
              Esame jauni ir ambicingi savo srities profesionalai. Nuolatos
              plečiamės ir keliame darbuotojų kvalifikaciją. Visada užtikriname
              aukščiausios kokybės produktą, kurį atliekame per trumpiausią
              įmanomą laiką. Specializuojamės gaminant didelio tikslumo
              reikalaujančius elementus automatinėms ir robotizuotoms gamybos,
              apdirbimo linijoms, konvejeriams, tačiau atliekame ir kitus
              darbus. nuo 2016 metų sėkmingai gaminame detales didelėms Lietuvos
              ir užsienio kompanijoms.
            </Text>
          </Box>
        </Stack>
      </Box>

      <AboutUs />
      <Feedback />
    </VStack>
  );
}
