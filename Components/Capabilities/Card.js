import {
  Stack,
  Image,
  TableContainer,
  Tbody,
  Tr,
  Td,
  Table,
  Heading,
} from "@chakra-ui/react";

export default function Card(props) {
  return (
    <Stack
      spacing="2rem"
      direction={{ base: "column", lg: "row" }}
      align="center"
      justify="center"
    >
      <Image w="460px" src={props.data.src} />
      <TableContainer>
        <Heading fontSize="24" fontWeight="500" p="1.5rem">
          {props.data.name}
        </Heading>
        <Table size="md" textAlign={"center"} w="29rem">
          {props.data.type === "turning" ? (
            <Tbody>
              <Tr>
                <Td>Maksimalus ilgis</Td>
                <Td>{props.data.lenght}</Td>
              </Tr>
              <Tr>
                <Td>Maksimalus diametras</Td>
                <Td>{props.data.diameter}</Td>
              </Tr>
              <Tr>
                <Td>Darbinės apsukos</Td>
                <Td>{props.data.revolutions}</Td>
              </Tr>
              <Tr>
                <Td>Tikslumas</Td>
                <Td>{props.data.accuracy}</Td>
              </Tr>
              <Tr>
                <Td>Aktyvūs įrankiai</Td>
                <Td>{props.data.tools}</Td>
              </Tr>
            </Tbody>
          ) : (
            <Tbody>
              <Tr>
                <Td>Darbinė zona</Td>
                <Td>{props.data.zone}</Td>
              </Tr>
              <Tr>
                <Td>Darbinės apsukos</Td>
                <Td>{props.data.revolutions}</Td>
              </Tr>
              <Tr>
                <Td>Maksimalus svoris</Td>
                <Td>{props.data.weight}</Td>
              </Tr>
            </Tbody>
          )}
        </Table>
      </TableContainer>
    </Stack>
  );
}
