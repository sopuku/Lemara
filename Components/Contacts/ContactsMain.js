import { Box, Flex, Stack, Heading } from "@chakra-ui/react";
import Maps from "./Maps";
import ContactsCard from "./ContactsCard";
import Form from "./Form";
import Texts from "../Texts/Texts";
import React from "react";
import ContactsList from "./ContactsList";
import Colors from "../Ui/Colors";

export default function ContactsMain() {
  const texts = Texts();
  const colors = Colors();
  return (
    <Box overflow="hidden">
      <Flex
        direction="column"
        bg={colors.contacts.bg}
        backgroundImage={colors.contacts.bgTexture}
        color={colors.contacts.color}
        h={{ base: "76rem", lg: "60rem", xl: "40rem" }}
        w="100vw"
        boxShadow="0 0 20px 10px grey"
        align="center"
        textAlign="center"
        spacing="5rem"
        py="5rem"
      >
        <Heading pb="5rem" fontSize="6xl">
          Susisiekite su mumis
        </Heading>
        <Stack
          direction={{ base: "column", xl: "row" }}
          spacing="5rem"
          align="center"
        >
          <ContactsList />
          <Form />
        </Stack>
      </Flex>
      <Box>
        <Stack
          h={{ base: "80rem", md: "35rem", xl: "40rem" }}
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "2rem", lg: "4rem", xl: "6rem" }}
          justify="center"
          align="center"
        >
          {texts.contacts.cards.map((item) => (
            <ContactsCard
              name={item.name}
              responsibilities={item.responsibilities}
              email={item.email}
              number={item.number}
              src={item.src}
            />
          ))}
        </Stack>
      </Box>

      <Maps />
    </Box>
  );
}
