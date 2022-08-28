import { Wrap } from "@chakra-ui/react";

export default function MainBox(props) {
  return (
    <Wrap w="100%" minH="81.3vh" pt="7rem" justify="center" bg="#F8F7F3">
      {props.children}
    </Wrap>
  );
}
