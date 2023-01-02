import { Heading, Avatar, Box, Flex, Text, Stack } from "@chakra-ui/react";
import React from "react";
import Links from "../Ui/Navigation/Links";
export default function ContactsCard(props) {
  return (
    <Box
      maxW="290px"
      w="100%"
      color={props.data.contact_card_text_color}
      bg={props.data.contact_card_background_color_bot}
      backgroundImage={props.data.contact_card_background_texture_bot.url}
      boxShadow="0 0 20px 1px grey"
      rounded="6px"
    >
      <Box
        h="7rem"
        roundedTop="6px"
        w="full"
        color={props.data.contact_card_text_color}
        bg={props.data.contact_card_background_color_top}
        backgroundImage={props.data.contact_card_background_texture_top.url}
      />
      <Flex justify="center" mt={-12}>
        <Avatar
          size="xl"
          alt={props.alt}
          src={props.src}
          css={{
            border: "2px solid ",
            borderColor: props.data.contact_card_avatar_border_color,
          }}
        />
      </Flex>
      <Stack spacing={2} align="center" mb={8} p="6" textAlign="center">
        <Heading as="h1" fontSize="24px" fontWeight={500} fontFamily="body">
          {props.name}
        </Heading>
        <Text fontSize="18px" color={props.data.contact_card_text_color}>
          {props.responsibilities}
        </Text>
        <Links
          href={props.href}
          fontWeight="600"
          fontSize="18px"
          _hover={{ color: props.data.link_hover_color }}
        >
          {props.email}
        </Links>
        <Links
          href={props.tel}
          _hover={{ color: props.data.link_hover_color }}
          fontSize="18px"
          fontWeight="600"
        >
          {props.number}
        </Links>
      </Stack>
    </Box>
  );
}
