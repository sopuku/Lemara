import { Wrap } from "@chakra-ui/react";
import Colors from "./Color";

export default function MainBox(props) {
  const colors = Colors();
  return (
    <Wrap
      w="100%"
      minH="81.3vh"
      pt="7rem"
      justify="center"
      bg={colors.background}
    >
      {props.children}
    </Wrap>
  );
}
