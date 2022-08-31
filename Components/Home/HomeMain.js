import React from "react";
import Feedback from "./Feedback";
import Values from "./Values";
import AboutUs from "./AboutUs";
import { VStack } from "@chakra-ui/react";
import { CurrentLanguage } from "../../pages/_app";

export default function HomeMain() {
  return (
    <VStack
      spacing="0"
      px={{ sm: "1rem", md: "2rem", lg: "8%" }}
      py={{ sm: "1rem", md: "2rem", lg: "5rem" }}
    >
      <Values />
      <AboutUs />
      <Feedback />
    </VStack>
  );
}
