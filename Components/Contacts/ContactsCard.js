import { Heading, Avatar, Box, Flex, Text, Stack } from "@chakra-ui/react";
import Colors from "../Ui/Colors";
import React from "react";
import Texts from "../Texts/Texts";
import Links from "../Ui/Navigation/Links";

export default function ContactsCard(props) {
  const colors = Colors();
  const texts = Texts();
  return (
    <React.Fragment>
      <Box
        maxW="290px"
        w="100%"
        bg={colors.contacts.card.bgBot}
        boxShadow="0 0 20px 1px grey"
        rounded="6px"
      >
        <Box
          h="7rem"
          roundedTop="6px"
          w="full"
          bg={colors.contacts.card.bgTop}
          backgroundImage={texts.images.bgTexture}
        />
        <Flex justify="center" mt={-12}>
          <Avatar
            size="xl"
            alt={props.alt}
            src={props.src}
            css={{
              border: "2px solid ",
              borderColor: colors.contacts.card.border,
            }}
          />
        </Flex>
        <Stack spacing={2} align="center" mb={8} p="6" textAlign="center">
          <Heading as="h1" fontSize="24px" fontWeight={500} fontFamily="body">
            {props.name}
          </Heading>
          <Text fontSize="18px" color={colors.contacts.card.color}>
            {props.responsibilities}
          </Text>
          <Links
            href={props.href}
            fontWeight="600"
            fontSize="18px"
            _hover={{ color: colors.footer.colorHover }}
          >
            {props.email}
          </Links>
          <Links
            href={props.tel}
            _hover={{ color: colors.footer.colorHover }}
            fontSize="18px"
            fontWeight="600"
          >
            {props.number}
          </Links>
        </Stack>
      </Box>
    </React.Fragment>
  );
}
