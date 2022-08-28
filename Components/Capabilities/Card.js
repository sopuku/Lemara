import {
  Box,
  Stack,
  Image,
  TableContainer,
  Tbody,
  Tr,
  Td,
  Table,
  Thead,
  Th,
  Heading,
} from "@chakra-ui/react";

export default function Card(props) {
  console.log(props.data.src);
  return (
    <Stack
      pt={{ base: 0, md: "3rem", lg: "5rem" }}
      spacing="2rem"
      direction={{ base: "column", lg: "row" }}
      align="center"
      justify="center"
    >
      <Image w="500px" src={props.data.src} />
      <TableContainer>
        <Heading fontSize="24" fontWeight="500" p="1.5rem">
          {props.data.name}
        </Heading>
        <Table size="md" textAlign={"center"} w="33rem">
          <Tbody>
            <Tr>
              <Td>Maksimalus tekinimo ilgis</Td>
              <Td>{props.data.lenght}</Td>
            </Tr>
            <Tr>
              <Td>Maksimalus tekinimo diametras</Td>
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
        </Table>
      </TableContainer>
    </Stack>
  );
}
