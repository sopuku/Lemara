import Texts from "../Texts/Texts";
import Card from "../Capabilities/Card";
import {
  Box,
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
  const texts = Texts();
  const colors = Colors();
  return (
    <VStack overflow="hidden">
      <Box
        w={["90%", "90%", "80%", "80%", "80%", "70%"]}
        h={["70rem", "70rem", "65rem", "65rem", "45rem"]}
        align="center"
        py="7rem"
        color={colors.milling.colorTop}
        bg={colors.milling.bgTop}
      >
        <Stack
          justify="center"
          spacing="5%"
          align="center"
          direction={{ base: "column", xl: "row" }}
        >
          <Image
            src={colors.milling.image}
            maxW="40rem"
            maxH="25rem"
            boxShadow="0 0 5px 1px "
          />
          <Box>
            <Heading pb="1rem">{texts.milling.t1.heading}</Heading>
            <Text lineHeight={1.8} fontSize="lg" align="justify">
              {texts.milling.t1.text}
            </Text>
          </Box>
        </Stack>
      </Box>
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
        <SimpleGrid
          columns={{ base: 1, lg: 2, "2xl": 3 }}
          spacing="3rem"
          py="5rem"
        >
          {texts.capabilities.mashines.map(
            (item) =>
              item.type === "milling" && <Card data={item} key={item.name} />
          )}
        </SimpleGrid>
      </VStack>
    </VStack>
  );
}
