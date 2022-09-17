import Texts from "../../Components/Texts/Texts";
import {
  Container,
  Text,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Colors from "../Ui/Colors";

export default function GeneralMain() {
  const texts = Texts();
  const colors = Colors();
  return (
    <Container
      maxW="100%"
      py="5rem"
      px={{ base: "5%", lg: "15%" }}
      align="justify"
      bg={colors.general.bg}
      color={colors.general.color}
    >
      <Heading textAlign="center" fontSize="50" as="h2" pb="2rem">
        {texts.general.text1}
      </Heading>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        {texts.general.text2}
      </Heading>
      <Text>{texts.general.text3}</Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        {texts.general.text4}
      </Heading>
      <Text>{texts.general.text5}</Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        {texts.general.text6}
      </Heading>
      <Text>{texts.general.text7}</Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        {texts.general.text8}
      </Heading>
      <Text>{texts.general.text9}</Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        {texts.general.text10}
      </Heading>
      <Text>{texts.general.text11}</Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        {texts.general.text12}
      </Heading>
      <Text>{texts.general.text13}</Text>

      <Heading as="h1" pt="5rem" pb="2rem">
        {texts.general.text14}
      </Heading>
      <Text pb="1rem">{texts.general.text15}</Text>
      <Text pb="1rem">{texts.general.text16}</Text>
      <Text>{texts.general.text17}</Text>
      <Heading as="h1" pt="5rem" pb="2rem">
        {texts.general.text18}
      </Heading>
      <Text pb="1rem">{texts.general.text19}</Text>
      <Text pb="1rem">{texts.general.text20}</Text>
      <Text pb="0.5rem">{texts.general.text21}</Text>
      <UnorderedList>
        <ListItem>{texts.general.text22}</ListItem>
        <ListItem>{texts.general.text23}</ListItem>
        <ListItem>{texts.general.text24}</ListItem>
        <ListItem>{texts.general.text25}</ListItem>
        <ListItem>{texts.general.text26}</ListItem>
        <ListItem>{texts.general.text27}</ListItem>
        <ListItem>{texts.general.text28}</ListItem>
        <ListItem>{texts.general.text29}</ListItem>
        <ListItem>{texts.general.text30}</ListItem>
      </UnorderedList>
      <Text pt="0.5rem">{texts.general.text31} </Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        {texts.general.text32}
      </Heading>
      <Text pb="1rem">{texts.general.text33}</Text>
      <Text>{texts.general.text34}</Text>

      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        {texts.general.text35}
      </Heading>
      <Text pb="1rem">{texts.general.text36}</Text>
      <Text>{texts.general.text37}</Text>

      <Heading as="h1" pt="5rem" pb="2rem">
        {texts.general.text38}
      </Heading>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        {texts.general.text39}
      </Heading>
      <Text>{texts.general.text40}</Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        {texts.general.text41}
      </Heading>
      <Text>{texts.general.text42}</Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        {texts.general.text43}
      </Heading>
      <Text>{texts.general.text44}</Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        {texts.general.text45}
      </Heading>
      <Text>{texts.general.text46}</Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        {texts.general.text47}
      </Heading>
      <Text>{texts.general.text48}</Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        {texts.general.text49}
      </Heading>
      <Text>{texts.general.text50}</Text>
    </Container>
  );
}
