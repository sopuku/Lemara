import Card from "../Capabilities/Card";
import {
  Box,
  Image,
  Stack,
  Text,
  Heading,
  VStack,
  SimpleGrid,
  Flex,
  Wrap,
} from "@chakra-ui/react";
import Texts from "../Texts/Texts";
import React from "react";
import Colors from "../Ui/Colors";

export default function TurningMain() {
  const texts = Texts();
  const colors = Colors();
  return (
    <VStack overflow="hidden">
      <Box
        w={["90%", "90%", "80%", "80%", "80%", "70%"]}
        h={["70rem", "70rem", "65rem", "65rem", "45rem"]}
        align="center"
        py="7rem"
        color={colors.turning.colorTop}
        bg={colors.turning.bgTop}
      >
        <Stack
          justify="center"
          spacing="5%"
          align="center"
          direction={{ base: "column", xl: "row" }}
        >
          <Image
            src={colors.turning.image}
            maxW="40rem"
            maxH="25rem"
            boxShadow="0 0 5px 1px "
          />
          <Box>
            <Heading pb="1rem">{texts.turning.t1.heading}</Heading>
            <Text fontSize="lg" align="justify">
              {texts.turning.t1.text}
            </Text>
          </Box>
        </Stack>
      </Box>
      <VStack
        bg={colors.turning.bgBot}
        backgroundImage={colors.turning.bgTexture}
        w="100%"
        color={colors.turning.colorBot}
        boxShadow="-0 -20px 20px -10px grey"
        zIndex={0}
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
          {texts.capabilities.mashines.map(
            (item) =>
              item.type === "turning" && <Card data={item} key={item.name} />
          )}
        </SimpleGrid>
      </VStack>
    </VStack>
  );
}
