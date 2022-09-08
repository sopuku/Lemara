import { VStack, HStack, Button } from "@chakra-ui/react";
import React from "react";
import InputField from "../Ui/InputField";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import Colors from "../Ui/Colors";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const recaptchaRef = React.createRef();

export default function Form(props) {
  const colors = Colors();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

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
    recaptchaRef.current.execute();
  }

  async function onReCAPTCHAChange(captchaCode) {
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch("/api/sendMessage", {
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
        alert("Email registered successfully");
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error?.message || "Something went wrong");
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      recaptchaRef.current.reset();
      setEmail("");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey="6LflocohAAAAAAe0A8FuFtVxmDtXX1S3FGb_pQSK"
        onChange={onReCAPTCHAChange}
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
            value={name}
            icon={<BsPerson color={colors.contacts.form.colorIcon} />}
          />
          <InputField
            name="El. paštas"
            type="email"
            onChange={handleEmail}
            value={email}
            icon={<MdOutlineEmail color={colors.contacts.form.colorIcon} />}
          />
          <InputField
            name="Telefono numeris"
            type="number"
            onChange={handleNumber}
            value={number}
            icon={<MdOutlinePhone color={colors.contacts.form.colorIcon} />}
          />
        </VStack>
        <VStack>
          <InputField name="Žinutė" value={message} onChange={handleMessage} />
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
