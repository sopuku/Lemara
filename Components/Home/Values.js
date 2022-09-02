import {
  Box,
  Image,
  Heading,
  Text,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import ValuesData from "./ValuesData";

export default function Values() {
  const valuesData = ValuesData();
  return (
    <Center>
      <SimpleGrid
        columns={{ base: 0, md: 2, xl: 4 }}
        spacing={{ base: "1rem", md: "2rem", xl: "3rem" }}
      >
        {valuesData.map((item) => {
          return (
            <Box
              key={uuidv4()}
              w="17rem"
              h="17rem"
              align="center"
              bg="white"
              borderRadius="xl"
              p="2rem"
              boxShadow=" 0px 0px 20px -10px grey"
            >
              <Image src={item.src} h="56px" />
              <Heading size="lg" pt="2rem" pb="1rem">
                {item.title}
              </Heading>
              <Text fontSize="lg">{item.description}</Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </Center>
  );
}
