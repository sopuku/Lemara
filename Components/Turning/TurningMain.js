import Card from "../Capabilities/Card";
import { useContext } from "react";
import { CurrentSettings } from "../../pages/_app";
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
  const { language } = useContext(CurrentSettings);
  const texts = Texts();
  const colors = Colors();
  return (
    <React.Fragment>
      <Stack
        direction={{ base: "column", xl: "row" }}
        spacing="5%"
        overflow="hidden"
        px={{ base: "4%", md: "6%", "2xl": "15%" }}
        py="5%"
        align="center"
        justify="center"
        color={colors.turning.colorTop}
        bg={colors.turning.bgTop}
      >
        <Image
          src={colors.turning.image}
          maxW="40rem"
          maxH="25rem"
          boxShadow="0 0 5px 1px "
        />
        <VStack spacing="3">
          <Heading>{texts.turning.t1.heading}</Heading>
          <Text
            maxW="40rem"
            lineHeight={{ md: "1.8" }}
            fontSize="lg"
            align="justify"
          >
            {texts.turning.t1.text}
          </Text>
        </VStack>
      </Stack>

      {language === "EN" && (
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
            {texts.capabilities.mashines.map(
              (item) =>
                item.type === "turning" && <Card data={item} key={item.name} />
            )}
          </SimpleGrid>
        </VStack>
      )}
    </React.Fragment>
  );
}
