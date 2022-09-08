import { Container } from "@chakra-ui/react";
import Maps from "./Maps";
import React from "react";
import ContactsTop from "./ContactsTop";
import ContactsMid from "./ContactsMid";

export default function ContactsMain(props) {
  return (
    <Container maxW="100%" px="0">
      <ContactsTop />
      <ContactsMid sendMessage={props.sendMessage} />
      <Maps />
    </Container>
  );
}
