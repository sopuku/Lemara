import { Heading, Avatar, Box, Flex, Text, Stack } from "@chakra-ui/react";
import Colors from "../Ui/Colors";
import React from "react";

export default function ContactsCard(props) {
  const colors = Colors();
  return (
    <React.Fragment>
      <Box
        maxW="280px"
        w="full"
        bg={colors.contacts.card.bgBot}
        boxShadow="0 0 20px 1px grey"
        rounded="md"
        overflow="hidden"
      >
        <Box
          h="7rem"
          w="full"
          bg={colors.contacts.card.bgTop}
          backgroundImage={colors.contacts.card.bgTopTexture}
        />
        <Flex justify="center" mt={-12}>
          <Avatar
            size="xl"
            src={props.src}
            alt="image of Lemara director"
            css={{
              border: "2px solid ",
              borderColor: colors.contacts.card.border,
            }}
          />
        </Flex>
        <Stack spacing={2} align="center" mb={8} p="6" textAlign="center">
          <Heading fontSize="24px" fontWeight={500} fontFamily="body">
            {props.name}
          </Heading>
          <Text fontSize="18px" color={colors.contacts.card.color}>
            {props.responsibilities}
          </Text>
          <Text fontWeight="600" fontSize="18px">
            {props.email}
          </Text>
          <Text fontSize="18px" fontWeight="600">
            {props.number}
          </Text>
        </Stack>
      </Box>
    </React.Fragment>
  );
}
