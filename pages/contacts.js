import React from "react";
import Head from "next/head";
import ContactsMain from "../Components/Contacts/ContactsMain";
import emailjs from "@emailjs/browser";

export default function Contacts(props) {
  async function sendMessage(form) {
    await emailjs.send(props.SERVICE_ID, props.TEMPLATE_ID, form, props.KEY);
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
      <ContactsMain sendMessage={sendMessage} />
    </React.Fragment>
  );
}
export async function getStaticProps() {
  return {
    props: {
      SERVICE_ID: "",
      TEMPLATE_ID: "template_6juxtrk",
      KEY: "AKeemSzyhhC8W76gf",
    },
  };
}
