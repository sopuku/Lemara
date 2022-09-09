import {
  Input,
  Icon,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
  Hide,
} from "@chakra-ui/react";
import { DeleteIcon, CalendarIcon } from "@chakra-ui/icons";

function InputTotal(props) {
  function totalHandler(event) {
    props.handler(event.target.value);
  }

  return (
    <InputGroup w={["90%", "25rem"]} m="auto" mt="1">
      <Hide below="sm">
        <InputLeftAddon
          children={<Icon as={CalendarIcon} w={6} h={6} />}
          color="blue.400"
          w={14}
          mb={1}
          data-id="ttl"
          _hover={{ bg: "blue.400", color: "white" }}
          onClick={props.paste}
        />
      </Hide>
      <Input
        placeholder="Enter Total Value"
        borderColor="white"
        border="2px"
        borderRadius="6"
        value={props.value}
        _hover={{ borderColor: "blue.400" }}
        onChange={totalHandler}
      />
      <Hide below="sm">
        <InputRightElement
          children={<Icon as={DeleteIcon} w={6} h={6} />}
          borderRadius="6"
          color="red"
          data-id="ttl"
          _hover={{ bg: "red.500", color: "white" }}
          onClick={props.clear}
        />
      </Hide>
    </InputGroup>
  );
}

export default InputTotal;
