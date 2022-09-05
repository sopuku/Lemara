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
        spacing={{ base: "1rem", md: "3rem", xl: "6rem" }}
      >
        {texts.values.map((item) => {
          return (
            <Box
              key={uuidv4()}
              w="17rem"
              h="17rem"
              align="center"
              bg={colors.home.values.bg}
              color={colors.home.values.color}
              borderRadius="xl"
              p="2rem"
              boxShadow=" 0px 4px 10px -2px  grey"
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
