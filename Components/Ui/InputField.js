import {
  Box,
  FormControl,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";

import { useState } from "react";

function InputField(props) {
  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  function handleChange(e) {
    const text = e.target.value;
    setValue(text);
  }
  return (
    <Box py="10px" w="20rem">
      <Box pos="relative">
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={props.icon} />
            {props.name !== "Žinutė" ? (
              <Input
                p="5"
                pl="2.5rem"
                outline="1px solid #041126"
                onFocus={() => setIsActive(true)}
                onBlur={() =>
                  value === "" ? setIsActive(false) : setIsActive(true)
                }
                value={value}
                onChange={handleChange}
              />
            ) : (
              <Textarea
                minH="125px"
                outline="1px solid #041126"
                onFocus={() => setIsActive(true)}
                onBlur={() =>
                  value === "" ? setIsActive(false) : setIsActive(true)
                }
                value={value}
                onChange={handleChange}
              />
            )}
          </InputGroup>
        </FormControl>

        <Text
          top={isActive ? "-20%" : "50%"}
          left={isActive ? "5px" : "50%"}
          transform={
            isActive
              ? "translate(10px,-45%) scale(0.8)"
              : "translate(-50%,-50%) scale(1)"
          }
          bg="none"
          transformOrigin="top left"
          transition="all .2s ease-out"
          color="black"
          pointerEvents="none"
          pos="absolute"
          w="fit-content"
          h="fit-content"
          zIndex="5"
        >
          {props.name}
        </Text>
      </Box>
    </Box>
  );
}

export default InputField;
