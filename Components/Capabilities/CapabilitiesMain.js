import Mashines from "./Mashines";
import React from "react";
import Card from "./Card";
import { Box } from "@chakra-ui/react";

export default function CapabilitiesMain() {
  const mashines = Mashines();
  return (
    <Box pb="5rem">
      {mashines.map((item) => {
        return <Card data={item} key={item.name} />;
      })}
    </Box>
  );
}
