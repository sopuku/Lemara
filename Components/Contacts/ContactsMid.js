import { Heading, Stack, Container } from "@chakra-ui/react";
import Form from "./Form";
import Colors from "../Ui/Colors";
import ContactsList from "./ContactsList";

export default function ContactsMid(props) {
  const colors = Colors();
  return (
    <Container
      maxW="100%"
      py="8rem"
      align="center"
      centerContent
      bg={colors.contacts.bg}
      backgroundImage={colors.contacts.bgTexture}
      color={colors.contacts.color}
      boxShadow="0 0 20px 10px grey"
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
        <Form
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
      </Stack>
    </Container>
  );
}
