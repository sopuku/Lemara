import { Heading, Text, Image, Stack, VStack, Box } from "@chakra-ui/react";
import Texts from "../Texts/Texts";
import Colors from "../Ui/Colors";

export default function AboutUs() {
  const texts = Texts();
  const colors = Colors();
  return (
    <Box
      bg={colors.home.aboutUs.bg}
      backgroundImage={colors.home.aboutUs.bgTexture}
      color={colors.home.aboutUs.color}
      w="100%"
      h="100%"
    >
      <Stack
        direction={{ base: "column", xl: "row" }}
        spacing="5%"
        overflow="hidden"
        px={{ base: "4%", md: "6%", "2xl": "15%" }}
        py="5%"
        boxShadow="0 0 20px 10px black"
        align="center"
      >
        <VStack spacing="5" w="100%">
          <Heading>Apie Mus</Heading>
          <Text
            maxW="40rem"
            lineHeight={{ md: "1.8" }}
            fontSize="lg"
            align="justify"
          >
            {texts.aboutUs.text1.text}
          </Text>
        </VStack>
        <Image
          src={colors.home.aboutUs.image}
          maxW="40rem"
          maxH="25rem"
          boxShadow="0 0 5px black"
        />
      </Stack>
    </Box>
  );
}
