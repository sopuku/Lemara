import React from "react";
import Feedback from "./Feedback";
import Values from "./Values";
import AboutUs from "./AboutUs";
import { VStack } from "@chakra-ui/react";

export default function HomeMain() {
  return (
    <VStack spacing="0">
      <Values />
      <AboutUs />
      <Feedback />
    </VStack>
  );
}
