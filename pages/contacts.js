import Head from "next/head";
import emailjs from "@emailjs/browser";
import Texts from "../Components/Texts/Texts";

import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const ContactsMain = dynamic(
  () => import("../Components/Contacts/ContactsMain"),
  {
    suspense: true,
  }
);

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
      <Suspense>
        <ContactsMain sendMessage={sendMessage} fallback={`Loading...`} />
      </Suspense>
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
