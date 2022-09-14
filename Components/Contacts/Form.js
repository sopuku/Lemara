import { VStack, Stack, Button } from "@chakra-ui/react";
import React from "react";
import InputField from "../Ui/InputField";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import Colors from "../Ui/Colors";
import { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import { useToast } from "@chakra-ui/react";
import Texts from "../Texts/Texts";
import HCaptcha from "react-hcaptcha";

export default function Form(props) {
  const hcaptchaRef = React.createRef();
  const colors = Colors();
  const texts = Texts();
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const form = {
    name: name,
    email: email,
    number: number,
    message: message,
  };

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleNumber(e) {
    setNumber(e.target.value);
  }
  function handleMessage(e) {
    setMessage(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    hcaptchaRef.current.execute();
  }

  async function onHCaptchaChange(captchaCode) {
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch("/api/captcha", {
        method: "POST",
        body: JSON.stringify({
          captcha: captchaCode,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        props.sendMessage(form);
        toast({
          title: texts.contacts.text2,
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: texts.contacts.text3,
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      toast({
        title: "Error 😮",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
      setEmail("");
      setName("");
      setNumber("");
      setMessage("");
      hcaptchaRef.current.reset();
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Stack
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
            name={texts.contacts.text4}
            type="text"
            onChange={handleName}
            value={name}
            icon={<BsPerson color={colors.contacts.form.colorIcon} />}
          />
          <InputField
            name={texts.contacts.text5}
            type="email"
            onChange={handleEmail}
            value={email}
            icon={<MdOutlineEmail color={colors.contacts.form.colorIcon} />}
          />
          <InputField
            name={texts.contacts.text6}
            type="number"
            onChange={handleNumber}
            value={number}
            icon={<MdOutlinePhone color={colors.contacts.form.colorIcon} />}
          />
        </VStack>
        <VStack>
          <InputField
            name={texts.contacts.text7}
            value={message}
            onChange={handleMessage}
          />
          <Button
            isLoading={loading}
            type="submit"
            w="100%"
            bg={colors.contacts.button.bg}
            color={colors.contacts.button.color}
            _hover={{ color: colors.contacts.button.colorHover }}
          >
            {texts.contacts.text8}
          </Button>
        </VStack>
      </Stack>
      <HCaptcha
        id="test"
        ref={hcaptchaRef}
        size="invisible"
        sitekey="8f6fc59f-8b70-422f-9e78-0ce325c1fb6f"
        onVerify={onHCaptchaChange}
      />
    </form>
  );
}
