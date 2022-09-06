import { Image, Heading, Flex, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

export default function Card(props) {
  return (
    <VStack align="center" justify="top">
      <Image w="460px" src={props.data.src} boxShadow="0 0 5px 1px black" />
      <Flex direction="column">
        <Heading pb="1rem" fontSize="28px">
          {props.data.name}
        </Heading>
        <HStack fontSize="lg">
          {props.data.type === "turning" ? (
            <React.Fragment>
              <VStack align="left" pr={["0.5rem", "3rem"]}>
                <Text>Maksimalus ilgis</Text>
                <Text>Maksimalus diametras</Text>
                <Text>Darbinės apsukos</Text>
                <Text>Aktyvūs įrankiai</Text>
              </VStack>
              <VStack align="left">
                <Text>{props.data.lenght}</Text>
                <Text>{props.data.diameter}</Text>
                <Text>{props.data.revolutions}</Text>
                <Text>{props.data.tools}</Text>
              </VStack>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <VStack align="left" pr={["1rem", "3rem"]}>
                <Text>Darbinė zona</Text>
                <Text>Darbinės apsukos</Text>
                <Text>Maksimalus svoris</Text>
              </VStack>
              <VStack align="left">
                <Text>{props.data.zone}</Text>
                <Text>{props.data.revolutions}</Text>
                <Text>{props.data.weight}</Text>
              </VStack>
            </React.Fragment>
          )}
        </HStack>
      </Flex>
    </VStack>
  );
}
