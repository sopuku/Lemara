import { Image, Heading, Text, SimpleGrid, Container } from "@chakra-ui/react";

import Colors from "../Ui/Colors";
import Texts from "../Texts/Texts";

export default function Values() {
  const colors = Colors();
  const texts = Texts();
  return (
    <SimpleGrid
      columns={{ base: 0, md: 2, xl: 4 }}
      spacing={{ md: "3rem", xl: "5rem" }}
    >
      {texts.index.values.map((item) => {
        return (
          <Container
            maxW="17rem"
            key={item.title}
            align="center"
            bg={colors.home.values.bg}
            color={colors.home.values.color}
            borderRadius="xl"
            p="2rem"
            boxShadow=" 0px 4px 10px -2px  grey"
          >
            <Image src={item.src} alt={item.alt} h={item.h} w={item.w} />
            <Heading size="lg" pt="2rem" pb="1rem">
              {item.title}
            </Heading>
            <Text fontSize="lg">{item.description}</Text>
          </Container>
        );
      })}
    </SimpleGrid>
  );
}
