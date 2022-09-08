import React from "react";
import Head from "next/head";
import ContactsMain from "../Components/Contacts/ContactsMain";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

export default function Contacts(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const toast = useToast();

  const form = {
    name: name,
    email: email,
    number: number,
    message: message,
  };

  async function sendMessage(e) {
    e.preventDefault();
    await captchaRef.current.execute();

    token
      ? emailjs
          .send(props.SERVICE_ID, props.TEMPLATE_ID, form, props.KEY)
          .then(
            toast({
              title: "Žinutė sėkmingai išsiūsta",
              status: "success",
              position: "top",
              duration: 2000,
              isClosable: true,
            })
          )
          .then(() => {
            setName("");
            setEmail("");
            setNumber("");
            setMessage("");
          })
      : toast({
          title: "Žinutė neišsiūsta",
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
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
        setToken={setToken}
        captchaRef={captchaRef}
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
