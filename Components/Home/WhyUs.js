import { Stack, Image, Box, Heading, Text, VStack } from "@chakra-ui/react";
import Colors from "../Ui/Colors";
import Texts from "../Texts/Texts";
import React from "react";

export default function WhyUs() {
  const colors = Colors();
  const texts = Texts();
  return (
    <Box w="100%">
      <Stack
        direction={{ base: "column", xl: "row" }}
        spacing="5%"
        px={{ base: "4%", md: "6%", "2xl": "15%" }}
        py={{ base: "5rem", md: "8rem", xl: "5%" }}
        align="center"
        justify="center"
      >
        <Image
          src={colors.home.image}
          maxW="40rem"
          maxH="25rem"
          boxShadow="0 0 5px 1px "
        />
        <VStack
          spacing="5"
          color={colors.home.whyUs.color}
          bg={colors.home.whyUs.bg}
        >
          <Heading>{texts.whyUs.text1.heading}</Heading>
          <Text
            maxW="40rem"
            lineHeight={{ md: "1.8" }}
            fontSize="lg"
            align="justify"
          >
            {texts.whyUs.text1.text}
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
}
