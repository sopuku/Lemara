import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Icon,
  Hide,
} from "@chakra-ui/react";
import { DeleteIcon, CalendarIcon } from "@chakra-ui/icons";

function InputField(props) {
  function inputHandler(event) {
    props.handler(event.target.value);
  }

  return (
    <InputGroup w={["90%", "25rem"]} m="auto">
      <Hide below="sm">
        <InputLeftAddon
          children={<Icon as={CalendarIcon} w="6" h="6" />}
          color="blue.400"
          bg="white"
          data-id="inp"
          w="14"
          mb="1"
          _hover={{ bg: "blue.400", color: "white" }}
          onClick={props.paste}
        />
      </Hide>
      <Input
        placeholder="Enter Data"
        bg="white"
        value={props.value}
        onChange={inputHandler}
        onKeyPress={(e) => e.key === "Enter" && props.keyPress()}
      />
      <Hide below="sm">
        <InputRightElement
          children={<Icon as={DeleteIcon} w={6} h={6} />}
          borderRadius="6"
          color="red"
          data-id="inp"
          _hover={{ bg: "red.500", color: "white" }}
          onClick={props.clear}
        />
      </Hide>
    </InputGroup>
  );
}

export default InputField;
