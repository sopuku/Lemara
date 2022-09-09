import { Text, Box, OrderedList, ListItem, IconButton } from "@chakra-ui/react";
import { DeleteIcon, CalendarIcon } from "@chakra-ui/icons";

function OutputBox(props) {
  const width =
    props.name === "Found Sequences"
      ? ["100vw", "460px", "512px"]
      : ["100vw", "460px", "512px", "512px", "300px"];
  const height =
    props.name === "Found Sequences"
      ? "300px"
      : ["298px", "298px", "298px", "298px", "615px"];

  return (
    <Box
      borderRadius="12"
      minH={height}
      w={width}
      bg="whiteAlpha.800"
      my={[5, 5, 5, 5, 8]}
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
      <OrderedList>
        {props.data.map((item) => (
          <Box
            display="flex"
            justifyContent="space-between"
            pl="10"
            pr="2"
            borderBottom="1px"
            key={item.id}
          >
            <ListItem fontSize="xl" pl="5">
              {props.name === "Entered Data"
                ? item.data
                : props.name === "Unused"
                ? item.data.map((value) => value)
                : item.data.map((value) => value + " , ")}
            </ListItem>
            {props.name === "Entered Data" && (
              <IconButton
                bg="none"
                icon={<DeleteIcon />}
                color="red"
                onClick={props.delete}
                data-id={item.id}
              />
            )}
          </Box>
        ))}
      </OrderedList>
    </Box>
  );
}

export default OutputBox;
