import React from "react";
import Head from "next/head";
import ContactsMain from "../Components/Contacts/ContactsMain";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

export default function Contacts(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const toast = useToast();

  const hcaptchaRef = React.createRef();

  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch("/api/captchaVerify", {
        method: "POST",
        body: JSON.stringify({ captcha: captchaCode }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Email registered successfully");
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error?.message || "Something went wrong");
    } finally {
      setEmail("");
    }
  };

  function sendMessage(e) {
    e.preventDefault();
    hcaptchaRef.current.execute();
    const form = {
      name: name,
      email: email,
      number: number,
      message: message,
    };

    emailjs.send(props.SERVICE_ID, props.TEMPLATE_ID, form, props.KEY).then(
      toast({
        title: "Žinutė sėkmingai išsiūsta",
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true,
      })
    );

    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
  }

  return (
    <React.Fragment>
      <Head>
        <title>Lemara kontaktai</title>
        <meta
          name="description"
          content="Lemara - one of the best CNC manufacturers in Lithuania working globally"
        />
      </Head>
      <ContactsMain
        onReCAPTCHAChange={onReCAPTCHAChange}
        recaptchaRef={recaptchaRef}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        number={number}
        setNumber={setNumber}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </React.Fragment>
  );
}
export async function getStaticProps() {
  return {
    props: {
      SERVICE_ID: "service_lemara",
      TEMPLATE_ID: "template_lemara",
      KEY: "SEEgDE7p6N_iBx4yL",
    },
  };
}
