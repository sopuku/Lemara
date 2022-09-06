import { VStack, Stack, Button } from "@chakra-ui/react";
import InputField from "../Ui/InputField";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import Colors from "../Ui/Colors";

export default function Form(props) {
  const colors = Colors();

  function handleName(e) {
    props.setName(e.target.value);
  }
  function handleEmail(e) {
    props.setEmail(e.target.value);
  }
  function handleNumber(e) {
    props.setNumber(e.target.value);
  }
  function handleMessage(e) {
    props.setMessage(e.target.value);
  }

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
          type="text"
          onChange={handleName}
          value={props.name}
          icon={<BsPerson color={colors.contacts.form.colorIcon} />}
        />
        <InputField
          name="El. paštas"
          type="email"
          onChange={handleEmail}
          value={props.email}
          icon={<MdOutlineEmail color={colors.contacts.form.colorIcon} />}
        />
        <InputField
          name="Telefono numeris"
          type="number"
          onChange={handleNumber}
          value={props.number}
          icon={<MdOutlinePhone color={colors.contacts.form.colorIcon} />}
        />
      </Stack>
      <VStack>
        <InputField
          name="Žinutė"
          type="textarea"
          value={props.message}
          onChange={handleMessage}
        />

        <Button
          onClick={props.sendMessage}
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
