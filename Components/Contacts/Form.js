import { VStack, Stack, Button } from "@chakra-ui/react";
import React from "react";
import InputField from "../Ui/InputField";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import Colors from "../Ui/Colors";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useToast } from "@chakra-ui/react";
import Texts from "../Texts/Texts";

export default function Form(props) {
  const recaptchaRef = React.createRef();
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
    recaptchaRef.current.execute();
  }

  async function onReCAPTCHAChange(captchaCode) {
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
      recaptchaRef.current.reset();
      setLoading(false);
      setEmail("");
      setName("");
      setNumber("");
      setMessage("");
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
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey="6LflocohAAAAAAe0A8FuFtVxmDtXX1S3FGb_pQSK"
        onChange={onReCAPTCHAChange}
      />
    </form>
  );
}
