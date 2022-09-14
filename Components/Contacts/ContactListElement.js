import { HStack, Icon, Text } from "@chakra-ui/react";
import Colors from "../Ui/Colors";
import Links from "../Ui/Navigation/Links";

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

      {props.href !== "" ? (
        <Links
          href={props.href}
          _hover={{ color: colors.footer.colorHover }}
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
