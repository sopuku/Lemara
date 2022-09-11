import { Heading, Stack, Container } from "@chakra-ui/react";
import Form from "./Form";
import Colors from "../Ui/Colors";
import ContactsList from "./ContactsList";
import Texts from "../Texts/Texts";

export default function ContactsMid(props) {
  const texts = Texts();
  const colors = Colors();
  return (
    <Container
      maxW="100%"
      py="8rem"
      align="center"
      centerContent
      bg={colors.contacts.bg}
      backgroundImage={texts.images.bgTexture}
      color={colors.contacts.color}
      boxShadow="0 0 20px 10px grey"
    >
      <Heading pb="5rem" fontSize="6xl">
        {texts.contacts.text1}
      </Heading>
      <Stack
        direction={{ base: "column", xl: "row" }}
        spacing="5rem"
        align="center"
      >
        <ContactsList />
        <Form sendMessage={props.sendMessage} />
      </Stack>
    </Container>
  );
}
