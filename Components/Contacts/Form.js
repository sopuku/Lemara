import { VStack, HStack, Button } from "@chakra-ui/react";
import React from "react";
import InputField from "../Ui/InputField";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import Colors from "../Ui/Colors";
import HCaptcha from "@hcaptcha/react-hcaptcha";

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
    <form onSubmit={props.sendMessage}>
      <HCaptcha
        sitekey="2478aa4d-eac5-471b-8cf5-1fb9ef6254c8"
        onLoad={props.onLoad}
        onVerify={props.setToken}
        ref={props.captchaRef}
      />
      <HStack
        direction={{ base: "column", lg: "row" }}
        spacing="3rem"
        bg={colors.contacts.form.bg}
        color={colors.contacts.form.color}
        rounded="6px"
        p="2rem"
        shadow="0 0 10px black"
      >
        <VStack>
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
        </VStack>
        <VStack>
          <InputField
            name="Žinutė"
            value={props.message}
            onChange={handleMessage}
          />
          <Button
            type="submit"
            className="h-captcha"
            w="100%"
            bg={colors.contacts.button.bg}
            color={colors.contacts.button.color}
            _hover={{ color: colors.contacts.button.colorHover }}
          >
            Siūsti žinutę
          </Button>
        </VStack>
      </HStack>
    </form>
  );
}
