import Card from "../Capabilities/Card";
import { Heading, SimpleGrid, Container } from "@chakra-ui/react";
import Texts from "../Texts/Texts";
import React from "react";
import Colors from "../Ui/Colors";

export default function CapabilitiesMain(props) {
  const texts = Texts();
  const colors = Colors();
  return (
    <Container
      px="0"
      maxW="100%"
      centerContent
      bg={colors.turning.bgBot}
      backgroundImage={colors.turning.bgTexture}
      color={colors.turning.colorBot}
      boxShadow="-0 -20px 20px -10px grey"
    >
      <Container
        centerContent
        maxW="100%"
        bg={colors.navigation.bg}
        backgroundImage={colors.navigation.bgTexture}
        py="1rem"
      >
        <Heading>Tekinimo staklės</Heading>
      </Container>
      <SimpleGrid
        columns={{ base: 1, lg: 2, "2xl": 3 }}
        spacing="3rem"
        py="1rem"
        my="5rem"
      >
        {texts.capabilities.mashines.map(
          (item) =>
            item.type === "turning" && <Card data={item} key={item.name} />
        )}
      </SimpleGrid>
      <Container
        centerContent
        maxW="100%"
        bg={colors.navigation.bg}
        backgroundImage={colors.navigation.bgTexture}
        py="1rem"
      >
        <Heading>Frezavimo staklės</Heading>
      </Container>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="3rem" py="5rem">
        {texts.capabilities.mashines.map(
          (item) =>
            item.type === "milling" && <Card data={item} key={item.name} />
        )}
      </SimpleGrid>
    </Container>
  );
}
