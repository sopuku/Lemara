import { Button } from "@chakra-ui/react";

function Buttons(props) {
  return (
    <Button m="1" colorScheme="blue" fontSize="22px" onClick={props.handler}>
      {props.text}
    </Button>
  );
}

export default Buttons;
