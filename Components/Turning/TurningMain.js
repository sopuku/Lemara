import Mashines from "../Capabilities/Mashines";
import Card from "../Capabilities/Card";
import { Box } from "@chakra-ui/react";

export default function TurningMain() {
  const mashines = Mashines();
  return (
    <Box
      pb="5rem"
      px={{ sm: "1rem", md: "2rem", lg: "10%", xl: "10%" }}
      py={{ sm: "1rem", md: "2rem", lg: "5rem" }}
    >
      {mashines.map(
        (item) =>
          item.type === "turning" && <Card data={item} key={item.name} />
      )}
    </Box>
  );
}
