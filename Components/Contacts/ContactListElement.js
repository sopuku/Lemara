import { HStack, Icon, Text } from "@chakra-ui/react";
import Links from "../Ui/Navigation/Links";

export default function ContactListElement(props) {
  return (
    <HStack>
      <Icon as={props.icon} color={props.iconColor} w="2rem" h="2rem" />

      {props.href !== "" ? (
        <Links
          href={props.href}
          _hover={{ color: props.hoverColor }}
          align="left"
          fontSize="xl"
        >
          {props.text}
        </Links>
      ) : (
        <Text align="left" fontSize="xl">
          {props.text}
        </Text>
      )}
    </HStack>
  );
}
