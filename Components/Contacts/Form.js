import { VStack, Stack, Button } from "@chakra-ui/react";
import InputField from "../Ui/InputField";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import Colors from "../Ui/Colors";

export default function Form() {
  const colors = Colors();
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      spacing="3rem"
      bg={colors.contacts.form.bg}
      color={colors.contacts.form.color}
      rounded="6px"
      p="2rem"
      shadow="0 0 10px black"
    >
      <Stack>
        <InputField
          name="Jūsų vardas"
          icon={<BsPerson color={colors.contacts.form.colorIcon} />}
        />
        <InputField
          name="El. paštas"
          icon={<MdOutlineEmail color={colors.contacts.form.colorIcon} />}
        />
        <InputField
          name="Telefono numeris"
          icon={<MdOutlinePhone color={colors.contacts.form.colorIcon} />}
        />
      </Stack>
      <VStack>
        <InputField name="Žinutė" />
        <Button
          type="submit"
          w="100%"
          bg={colors.contacts.button.bg}
          color={colors.contacts.button.color}
          _hover={{ color: colors.contacts.button.colorHover }}
        >
          Siūsti žinutę
        </Button>
      </VStack>
    </Stack>
  );
}
