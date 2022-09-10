import {
  Image,
  Heading,
  HStack,
  VStack,
  Text,
  Container,
} from "@chakra-ui/react";
import React from "react";
import Texts from "../Texts/Texts";

export default function Card(props) {
  const texts = Texts();
  return (
    <Container centerContent maxW="lg">
      <Image src={props.data.src} boxShadow="0 0 5px 1px black" />
      <Container centerContent>
        <Heading py="1rem" fontSize="28px">
          {props.data.name}
        </Heading>
        <HStack fontSize="lg">
          {props.data.type === "turning" ? (
            <React.Fragment>
              <VStack align="left" pr={["0.5rem", "3rem"]}>
                <Text>{texts.capabilities.specifications.text1}</Text>
                <Text>{texts.capabilities.specifications.text2}</Text>
                <Text>{texts.capabilities.specifications.text3}</Text>
                <Text>{texts.capabilities.specifications.text4}</Text>
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
                <Text>{texts.capabilities.specifications.text5}</Text>
                <Text>{texts.capabilities.specifications.text3}</Text>
                <Text>{texts.capabilities.specifications.text6}</Text>
              </VStack>
              <VStack align="left">
                <Text>{props.data.zone}</Text>
                <Text>{props.data.revolutions}</Text>
                <Text>{props.data.weight}</Text>
              </VStack>
            </React.Fragment>
          )}
        </HStack>
      </Container>
    </Container>
  );
}
