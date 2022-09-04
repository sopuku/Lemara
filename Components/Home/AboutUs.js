import { Box, Heading, Text, Image, Stack, Center } from "@chakra-ui/react";
import Texts from "../Texts/Texts";
import Colors from "../Ui/Colors";

export default function AboutUs() {
  const texts = Texts();
  const colors = Colors();
  return (
    <Stack
      px={["3%", "3%", "7%", "10%", "10%", "15%"]}
      direction={{ base: "column", xl: "row" }}
      bg={colors.home.aboutUs.bg}
      backgroundImage={colors.home.aboutUs.bgTexture}
      color={colors.home.aboutUs.color}
      h={{ base: "70rem", md: "64rem", xl: "50rem" }}
      w="100%"
      boxShadow="0 0 20px 10px grey"
      zIndex={1}
      align="center"
      py={{ base: "2rem", lg: "5rem" }}
      spacing="5%"
    >
      <Box w="100%" textAlign="center" py="2rem">
        <Heading>Apie Mus</Heading>
        <Text fontSize="lg" py="2rem" align="justify">
          {texts.aboutUs.text1.text}
        </Text>
      </Box>
      <Image
        src={colors.home.aboutUs.image}
        maxW="40rem"
        maxH="25rem"
        boxShadow="0 0 5px black"
      />
    </Stack>
  );
}
