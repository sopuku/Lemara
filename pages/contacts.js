import React from "react";
import Head from "next/head";
import ContactsMain from "../Components/Contacts/ContactsMain";
import emailjs from "@emailjs/browser";
import Texts from "../Components/Texts/Texts";

export default function Contacts(props) {
  async function sendMessage(form) {
    await emailjs.send(props.SERVICE_ID, props.TEMPLATE_ID, form, props.KEY);
  }
  const texts = Texts();
  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text17}</title>
        <meta name="description" content={texts.meta.text18} />
      </Head>
      <ContactsMain sendMessage={sendMessage} />
    </React.Fragment>
  );
}
export async function getStaticProps() {
  return {
    props: {
      SERVICE_ID: process.env.SERVICE_ID,
      TEMPLATE_ID: process.env.TEMPLATE_ID,
      KEY: process.env.KEY,
    },
  };
}
