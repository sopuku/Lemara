import Texts from "../Texts/Texts";
import Card from "../Capabilities/Card";
import React, { useContext } from "react";
import { CurrentSettings } from "../../pages/_app";
import {
  VStack,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Wrap,
} from "@chakra-ui/react";
import Colors from "../Ui/Colors";

export default function MillingMain() {
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
        color={colors.milling.colorTop}
        bg={colors.milling.bgTop}
      >
        <Image
          src={colors.milling.image}
          maxW="40rem"
          maxH="25rem"
          boxShadow="0 0 5px 1px "
        />
        <VStack>
          <Heading pb="1rem">{texts.milling.t1.heading}</Heading>

          <Text maxW="40rem" lineHeight={1.8} fontSize="lg" align="justify">
            {texts.milling.t1.text}
          </Text>
        </VStack>
      </Stack>

      {language === "EN" && (
        <VStack
          bg={colors.milling.bgBot}
          backgroundImage={colors.milling.bgTexture}
          w="100%"
          color={colors.milling.colorBot}
          boxShadow="-0 -20px 20px -10px grey"
          zIndex={0}
        >
          <Wrap textAlign="center">
            <Heading pt="5rem" fontSize="45px">
              Techniniai staklių pajėgumai
            </Heading>
          </Wrap>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="3rem" py="5rem">
            {texts.capabilities.mashines.map(
              (item) =>
                item.type === "milling" && <Card data={item} key={item.name} />
            )}
          </SimpleGrid>
        </VStack>
      )}
    </React.Fragment>
  );
}
