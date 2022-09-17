import {
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Container,
} from "@chakra-ui/react";
import React from "react";
import Colors from "../Ui/Colors";
import Texts from "../Texts/Texts";

export default function PrivacyMain() {
  const colors = Colors();
  const texts = Texts();
  return (
    <Container
      maxW="100%"
      py="5rem"
      px={{ base: "5%", lg: "15%" }}
      align="justify"
      color={colors.privacy.color}
      bg={colors.privacy.bg}
    >
      <Heading as="h3" textAlign="center" pb="4rem">
        {texts.privacy.text1}
      </Heading>
      <Text align="justify" fontSize="20px">
        {texts.privacy.text2}
      </Text>
      <Text align="justify" fontSize="20px" py="1rem">
        {texts.privacy.text3}
      </Text>
      <Text align="justify" fontSize="20px">
        Tel.: +370 646 57845
      </Text>
      <Text align="justify" fontSize="20px">
        El. paštas: povilas@lemara.lt
      </Text>
      <Text align="justify" fontSize="20px">
        Adresas: Pasagų g. 4, Riešės k., LT-14265 Vilniaus r.
      </Text>
      <Heading py="2rem" fontSize="30px">
        {texts.privacy.text4}
      </Heading>
      <Text align="justify" fontSize="20px">
        {texts.privacy.text5}
      </Text>
      <Heading py="2rem" fontSize="30px">
        {texts.privacy.text6}
      </Heading>
      <Text align="justify" fontSize="20px">
        {texts.privacy.text7}
      </Text>
      <Heading py="2rem" fontSize="30px">
        {texts.privacy.text8}
      </Heading>
      <Text align="justify" fontSize="20px" pb="1.5rem">
        {texts.privacy.text9}
      </Text>
      <UnorderedList textAlign="left" align="justify" fontSize="20px">
        <ListItem>{texts.privacy.text10}</ListItem>
        <ListItem>{texts.privacy.text11}</ListItem>
        <ListItem>{texts.privacy.text12}</ListItem>
        <ListItem>{texts.privacy.text13}</ListItem>
        <ListItem>{texts.privacy.text14}</ListItem>
        <ListItem>{texts.privacy.text15}</ListItem>
        <ListItem>{texts.privacy.text16}</ListItem>
      </UnorderedList>
      <Heading py="2rem" fontSize="30px">
        {texts.privacy.text17}
      </Heading>
      <Text align="justify" fontSize="20px">
        {texts.privacy.text18}
      </Text>
      <Heading py="2rem" fontSize="30px">
        {texts.privacy.text19}
      </Heading>
      <Text align="justify" fontSize="20px">
        {texts.privacy.text20}
      </Text>
      <Heading py="2rem" fontSize="30px">
        {texts.privacy.text21}
      </Heading>
      <Text align="justify" fontSize="20px">
        {texts.privacy.text22}
      </Text>

      <Text align="justify" fontSize="20px">
        {texts.privacy.text23}
      </Text>
    </Container>
  );
}
