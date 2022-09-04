import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import Colors from "../Ui/Colors";

export default function ContactsList() {
  const colors = Colors();
  return (
    <VStack spacing="1rem" align="left" w="15rem">
      <Heading fontSize="5xl" pb="1rem">
        Kontaktai
      </Heading>
      <HStack>
        <MdPhone color={colors.contacts.colorIcon} size="30px" />
        <Text fontSize="xl"> +370 646 57845</Text>
      </HStack>
      <HStack>
        <MdEmail color={colors.contacts.colorIcon} size="30px" />
        <Text fontSize="xl">info@lemara.lt</Text>
      </HStack>
      <HStack>
        <MdLocationOn color={colors.contacts.colorIcon} size="53px" />
        <Text align="justify" fontSize="xl" lineHeight="1.7">
          Pasagų g. 4, Riešės k. LT-14265 Vilniaus r.
        </Text>
      </HStack>
    </VStack>
  );
}
