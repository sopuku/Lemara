import React from "react";
import Feedback from "./Feedback";
import Values from "./Values";
import { VStack } from "@chakra-ui/react";

export default function HomeMain() {
  return (
    <VStack>
      <Values />
      <Feedback />
    </VStack>
  );
}
