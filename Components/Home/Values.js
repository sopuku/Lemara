import { Box, Image, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import ValuesData from "./ValuesData";

export default function Values() {
  const valuesData = ValuesData();
  return (
    <Box>
      <SimpleGrid
        h={{ base: "70rem", md: "40rem", xl: "30rem" }}
        columns={{ base: 1, md: 2, xl: 4 }}
        spacing={{ base: 0, md: "2rem", xl: "3rem" }}
      >
        {valuesData.map((item) => {
          return (
            <Box
              mt={{ base: "1rem", md: "2rem", xl: "7rem" }}
              mb={{ base: "1rem", md: "2rem", xl: "7rem" }}
              w="17rem"
              h="15rem"
              align="center"
              bg="white"
              borderRadius="xl"
              p="2rem"
              boxShadow="xl"
            >
              <Image src={item.src} h="56px" />
              <Heading size="lg" py="0.5rem">
                {item.title}
              </Heading>
              <Text fontSize="lg">{item.description}</Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
