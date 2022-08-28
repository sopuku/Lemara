import { Wrap } from "@chakra-ui/react";

export default function MainBox(props) {
  return (
    <Wrap w="100%" minH="71.6vh" justify="center" bg="#F8F7F3">
      {props.children}
    </Wrap>
  );
}
