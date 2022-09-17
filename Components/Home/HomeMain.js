import Values from "./Values";
import Links from "../Ui/Navigation/Links";
import Colors from "../Ui/Colors";
import { VStack, Heading, Text, Show, Flex, Container } from "@chakra-ui/react";
import Texts from "../../Components/Texts/Texts";
import DefaultPage from "../Ui/DefaultPage";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const Feedback = dynamic(() => import("./Feedback"), {
  suspense: true,
});

export default function HomeMain() {
  const colors = Colors();
  const texts = Texts();
  return (
    <VStack spacing="0" overflow="hidden">
      <Container
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundImage={texts.images.mainImage}
        backgroundImageAlt=""
        boxShadow="0 0 20px 10px grey"
        color={colors.home.color}
        bg={colors.home.bg}
        maxW="100%"
        h="35rem"
        align="center"
        px={{ base: "4%", sm: "4%", lg: "10%", xl: "10%", "2xl": "20%" }}
        mb={{ base: 0, md: "25rem", lg: "25rem", xl: "10rem" }}
      >
        <Heading
          as="h1"
          pt="7%"
          fontSize={{ base: "35px", md: "45px" }}
          pb="2rem"
        >
          {texts.index.text1}
        </Heading>
        <Text fontSize={{ base: "2xl", md: "3xl" }}>
          {texts.index.text2}{" "}
          <Links color={colors.home.colorLink} href="/contacts">
            {texts.index.text3}
          </Links>
          .
        </Text>
      </Container>
      <Show above="md">
        <Flex position="absolute" top="35rem">
          <Values />
        </Flex>
      </Show>
      <DefaultPage
        name="whyUs"
        src={texts.images.whyUsImage}
        alt={texts.images.whyUsImageAlt}
        heading={texts.index.whyUs.text1.heading}
        text={texts.index.whyUs.text1.text}
        py="8rem"
        w="899px"
        h="600px"
      />
      <DefaultPage
        name="aboutUs"
        src={texts.images.aboutUsImage}
        alt={texts.images.aboutUsImageAlt}
        heading={texts.index.aboutUs.text1.heading}
        text={texts.index.aboutUs.text1.text}
        w="900px"
        h="600px"
      />
      <Suspense>
        <Feedback fallback={`Loading...`} />
      </Suspense>
    </VStack>
  );
}
