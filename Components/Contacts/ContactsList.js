import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

export default function ContactsList() {
  return (
    <VStack spacing="1rem" align="left" w="15rem">
      <Heading fontSize="5xl" pb="1rem">
        Kontaktai
      </Heading>
      <HStack>
        <MdPhone color="#1970F1" size="30px" />
        <Text fontSize="xl"> +370 646 57845</Text>
      </HStack>
      <HStack>
        <MdEmail color="#1970F1" size="28px" />
        <Text fontSize="xl">info@lemara.lt</Text>
      </HStack>
      <HStack>
        <MdLocationOn color="#1970F1" size="30px" />
        <Text align="justify" fontSize="xl" lineHeight="1.7">
          Pasagų g. 4, Riešės k. LT-14265 Vilniaus r.
        </Text>
      </HStack>
    </VStack>
  );
}
