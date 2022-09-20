import {
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function PrivacyMain(props) {
  return (
    <Container
      maxW="100%"
      py="5rem"
      px={{ base: "5%", lg: "15%" }}
      align="justify"
      color={props.data.text_color}
      bg={props.data.background_color}
      backgroundImage={props.data.background_texture.url}
    >
      <Heading as="h3" textAlign="center" pb="4rem">
        {props.data.title}
      </Heading>

      {props.data.text.map((item) => {
        switch (item.type) {
          case "heading2":
            return (
              <Heading key={uuidv4()} as="h2" pt="2rem">
                {item.text}
              </Heading>
            );
          case "paragraph":
            return (
              <Text pt="0.5rem" align="justify" fontSize="20px" key={uuidv4()}>
                {item.text}
              </Text>
            );
          case "list-item":
            return (
              <UnorderedList
                pt="1rem"
                textAlign="left"
                align="justify"
                fontSize="20px"
                key={uuidv4()}
              >
                <ListItem>{item.text}</ListItem>
              </UnorderedList>
            );
          default:
            return;
        }
      })}
    </Container>
  );
}
