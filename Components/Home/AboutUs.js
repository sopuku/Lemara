import { Box, Heading, Text, Image, Stack, Center } from "@chakra-ui/react";
import AboutUsText from "./AboutUsText";

export default function AboutUs() {
  const texts = AboutUsText();
  return (
    <Center w="100vw">
      <Stack
        direction={{ base: "column", xl: "row" }}
        px={["2%", "2%", "5%", "10%", "10%", "15%"]}
        bg="#08254F"
        backgroundImage="/images/aboutBg.png"
        color="whiteAlpha.800"
        minH="50rem"
        w="100vw"
        boxShadow="0 0 20px 10px grey"
        zIndex={1}
        align="center"
        justify="center"
      >
        <Box w="100%" textAlign="center" py="2rem">
          <Heading>Apie Mus</Heading>
          <Text fontSize="lg" p="2rem" align="justify">
            {texts.aboutUs}
          </Text>
        </Box>
        <Image src="/images/aboutUs.jpg" minW="40rem" minH="25rem" />
      </Stack>
    </Center>
  );
}
