import { HStack, Icon, Text } from "@chakra-ui/react";
import Colors from "../Ui/Colors";

export default function ContactListElement(props) {
  const colors = Colors();
  return (
    <HStack>
      <Icon
        as={props.icon}
        color={colors.contacts.colorIcon}
        w="2rem"
        h="2rem"
      />
      <Text align="left" fontSize="xl">
        {props.text}
      </Text>
    </HStack>
  );
}
