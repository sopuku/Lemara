import Mashines from "./Mashines";
import React from "react";
import Card from "./Card";
import { Box } from "@chakra-ui/react";

export default function CapabilitiesMain() {
  const mashines = Mashines();
  return (
    <Box
      pb="5rem"
      px={{ sm: "1rem", md: "2rem", lg: "10%", xl: "10%" }}
      py={{ sm: "1rem", md: "2rem", lg: "5rem" }}
    >
      {mashines.map((item) => {
        return <Card data={item} key={item.name} />;
      })}
    </Box>
  );
}
