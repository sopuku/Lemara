import InputField from '../Input/InputField';
import Buttons from '../Input/Buttons';
import { Box, Text } from '@chakra-ui/react';
import InputTotal from '../Input/InputTotal';

function InputTable(props) {
  return (
    <Box
      bg="whiteAlpha.800"
      borderRadius="12"
      w={['100vw', '460px', '512px']}
      mb={[5, 5, 5, 5, 8]}
      align="center"
    >
      <Text
        bg="blue.500"
        color="white"
        borderTopRadius="6"
        p="1"
        align="center"
        fontSize="xl"
      >
        {props.name}
      </Text>
      <Box px={[6, 6, 14, 14]} py="9">
        <InputField
          handler={props.enteredDataHandler}
          value={props.enteredData}
          keyPress={props.enteredButtonHandler}
          clear={props.clear}
          paste={props.paste}
        />

        <Buttons text="Enter Data" handler={props.enteredButtonHandler} />
        <Buttons text="Calculate" handler={props.calculateHandler} />
        <Buttons text="Clear All" handler={props.clearHandler} />
        <InputTotal
          handler={props.enteredTotalHandler}
          value={props.enteredTotal}
          clear={props.clear}
          paste={props.paste}
        />
        <Text
          mb="8px"
          align="center"
          color="red"
          fontSize="3xl"
          h="26px"
          w={['20rem', '25rem']}
        >
          {props.error}
        </Text>
      </Box>
    </Box>
  );
}

export default InputTable;
