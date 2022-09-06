import Card from "../Capabilities/Card";
import { Heading, VStack, SimpleGrid, Center, Wrap } from "@chakra-ui/react";
import Texts from "../Texts/Texts";
import React from "react";
import Colors from "../Ui/Colors";

export default function CapabilitiesMain(props) {
  const texts = Texts();
  const colors = Colors();
  return (
    <VStack
      bg={colors.turning.bgBot}
      backgroundImage={colors.turning.bgTexture}
      color={colors.turning.colorBot}
      boxShadow="-0 -20px 20px -10px grey"
    >
      <Wrap textAlign="center">
        <Heading pt="5rem" fontSize="45px">
          Techniniai staklių pajėgumai
        </Heading>
      </Wrap>
      <SimpleGrid
        columns={{ base: 1, lg: 2, "2xl": 3 }}
        spacing="3rem"
        py="5rem"
      >
        {texts.capabilities.mashines.map((item) => (
          <Card data={item} key={item.name} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
