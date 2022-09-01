import Mashines from "../Capabilities/Mashines";
import Card from "../Capabilities/Card";
import { Box, Image, Stack, Text, Heading } from "@chakra-ui/react";
import Texts from "../Language/Texts";
import React from "react";

export default function TurningMain() {
  const texts = Texts();
  const mashines = Mashines();
  return (
    <Box
      pb="5rem"
      px={{ sm: "1rem", md: "2rem", lg: "10%", xl: "10%" }}
      py={{ sm: "1rem", md: "2rem", lg: "5rem" }}
    >
      <Stack spacing="2rem" direction={{ base: "column", xl: "row" }}>
        <Image src="/images/turning/t5.jpg" w="40rem" h="20rem" />
        <Box>
          <Heading>{texts.turning.t1.heading}</Heading>
          <Text>{texts.turning.t1.text}</Text>
        </Box>
      </Stack>
      {mashines.map(
        (item) =>
          item.type === "turning" && <Card data={item} key={item.name} />
      )}
    </Box>
  );
}
