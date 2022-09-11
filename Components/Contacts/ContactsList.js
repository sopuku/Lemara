import { Heading, VStack } from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import ContactListElement from "./ContactListElement";
import Texts from "../Texts/Texts";

export default function ContactsList() {
  const texts = Texts();
  return (
    <VStack spacing="1rem" align="left" w="15rem">
      <Heading fontSize="5xl" pb="1rem">
        {texts.footer.contacts}
      </Heading>
      <ContactListElement icon={MdPhone} text="+370 646 57845" />
      <ContactListElement icon={MdEmail} text="info@lemara.lt" />
      <ContactListElement
        icon={MdLocationOn}
        text="Pasagų g. 4, Riešės k. LT-14265 Vilniaus r."
      />
    </VStack>
  );
}
