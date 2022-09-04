import { Heading, Avatar, Box, Flex, Text, Stack } from "@chakra-ui/react";
import React from "react";

export default function ContactsCard(props) {
  return (
    <React.Fragment>
      <Box
        maxW="280px"
        w="full"
        bg="white"
        boxShadow="0 0 20px 1px grey"
        rounded="md"
        overflow="hidden"
      >
        <Box
          h="7rem"
          w="full"
          bg="#072248"
          backgroundImage="/images/background/aboutBg.png"
        />
        <Flex justify="center" mt={-12}>
          <Avatar
            size="xl"
            src={props.src}
            alt="image of Lemara director"
            css={{
              border: "2px solid #072248",
            }}
          />
        </Flex>
        <Stack spacing={2} align="center" mb={8} p="6" textAlign="center">
          <Heading fontSize="24px" fontWeight={500} fontFamily="body">
            {props.name}
          </Heading>
          <Text fontSize="18px" color="gray.500">
            {props.responsibilities}
          </Text>
          <Text fontSize="18px" fontWeight="600">
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
