import { Box, Heading, Text, Image, Stack, Center } from "@chakra-ui/react";
import AboutUsText from "./AboutUsText";

export default function AboutUs() {
  const texts = AboutUsText();
  return (
    <Center>
      <Stack
        direction={{ base: "column", xl: "row" }}
        bg="blue.200"
        minH="40rem"
        w="100%"
        boxShadow="0 0 20px  grey"
        zIndex={1}
        px={["0", "2%", "5%", "10%", "15%"]}
        align="center"
      >
        <Image src="/images/logo.png" w="30rem" p="3rem" h="30rem" />
        <Box w="100%" textAlign="center" py="2rem">
          <Heading>Apie Mus</Heading>
          <Text fontSize="lg" p="2rem" align="justify">
            {texts.aboutUs}
          </Text>
        </Box>
      </Stack>
    </Center>
  );
}
