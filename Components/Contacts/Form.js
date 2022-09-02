import { VStack, Stack, Button } from "@chakra-ui/react";
import InputField from "../Ui/InputField";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

export default function Form() {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      spacing="3rem"
      bg="white"
      color="black"
      rounded="6px"
      p="2rem"
      shadow="0 0 10px black"
    >
      <Stack>
        <InputField name="Jūsų vardas" icon={<BsPerson />} />
        <InputField name="El. paštas" icon={<MdOutlineEmail />} />
        <InputField name="Telefono numeris" icon={<MdOutlinePhone />} />
      </Stack>
      <VStack>
        <InputField name="Žinutė" />
        <Button
          type="submit"
          w="100%"
          bg="#072155"
          color="white"
          _hover={{ color: "orange" }}
        >
          Siūsti žinutę
        </Button>
      </VStack>
    </Stack>
  );
}
