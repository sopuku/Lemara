import { Container } from "@chakra-ui/react";
import Maps from "./Maps";
import React from "react";
import ContactsTop from "./ContactsTop";
import ContactsMid from "./ContactsMid";

export default function ContactsMain(props) {
  return (
    <Container maxW="100%" px="0">
      <ContactsTop />
      <ContactsMid
        sendMessage={props.sendMessage}
        setToken={props.setToken}
        captchaRef={props.captchaRef}
        name={props.name}
        setName={props.setName}
        email={props.email}
        setEmail={props.setEmail}
        number={props.number}
        setNumber={props.setNumber}
        message={props.message}
        setMessage={props.setMessage}
        onSubmit={props.onSubmit}
      />
      <Maps />
    </Container>
  );
}
