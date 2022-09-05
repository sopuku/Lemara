import {
  Box,
  Image,
  Heading,
  Text,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import Colors from "../Ui/Colors";
import Texts from "../Texts/Texts";

export default function Values() {
  const colors = Colors();
  const texts = Texts();
  return (
    <Center>
      <SimpleGrid
        columns={{ base: 0, md: 2, xl: 4 }}
        spacing={{ base: "1rem", md: "5rem", xl: "8rem" }}
      >
        {texts.values.map((item) => {
          return (
            <Box
              key={uuidv4()}
              w="12rem"
              h="12rem"
              align="center"
              bg={colors.home.values.bg}
              color={colors.home.values.color}
              borderRadius="xl"
              p="1rem"
              boxShadow=" 0px 0px 0 5px  orange"
            >
              <Image src={item.src} h="30px" />
              <Heading size="md" pt="1rem" pb="1rem">
                {item.title}
              </Heading>
              <Text fontSize="md">{item.description}</Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </Center>
  );
}
