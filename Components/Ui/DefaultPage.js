import { useContext } from "react";
import { CurrentSettings } from "../../pages/_app";
import { Image, Stack, Text, Heading, VStack, Box } from "@chakra-ui/react";
import React from "react";
import Colors from "../Ui/Colors";
import CapabilitiesMain from "../Capabilities/CapabilitiesMain";

export default function DefaultPage(props) {
  const { language } = useContext(CurrentSettings);
  const colors = Colors();

  return (
    <Box
      w="100%"
      bg={props.name === "aboutUs" && colors.home.aboutUs.bg}
      backgroundImage={
        props.name === "aboutUs" && colors.home.aboutUs.bgTexture
      }
      color={props.name === "aboutUs" && colors.home.aboutUs.color}
    >
      <Stack
        direction={{ base: "column", xl: "row" }}
        spacing="5%"
        overflow="hidden"
        px={{ base: "4%", md: "6%", "2xl": "15%" }}
        // pt={{ base: "5%", md: props.name === "whyUs" && "8rem", xl: "5%" }}
        // py="5%"
        align="center"
        justify="center"
      >
        {props.name !== "aboutUs" && (
          <Image
            src={props.src}
            maxW="40rem"
            maxH="25rem"
            boxShadow="0 0 5px 1px black"
          />
        )}
        <VStack spacing="5">
          <Heading>{props.heading}</Heading>
          <Text
            maxW="40rem"
            lineHeight={{ md: "1.8" }}
            fontSize="lg"
            align="justify"
          >
            {props.text}
          </Text>
        </VStack>
        {props.name === "aboutUs" && (
          <Image
            src={props.src}
            maxW="40rem"
            maxH="25rem"
            boxShadow="0 0 5px 1px black"
          />
        )}
      </Stack>
      {props.name === "turning" && language === "EN" && (
        <CapabilitiesMain name="turning" />
      )}
      {props.name === "milling" && language === "EN" && (
        <CapabilitiesMain name="milling" />
      )}
    </Box>
  );
}
