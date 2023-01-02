import Head from "next/head";
import React from "react";
import emailjs from "@emailjs/browser";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import Layout from "../Components/Ui/Layout";
import ContactsMain from "../Components/Contacts/ContactsMain";

export default function Contacts(props) {
  async function sendMessage(form) {
    await emailjs.send(props.SERVICE_ID, props.TEMPLATE_ID, form, props.KEY);
  }
  return (
    <React.Fragment>
      <Head>
        <title>{props.page.data.meta_title}</title>
        <meta name="description" content={props.page.data.meta_description} />
      </Head>
      <Layout navData={props.nav.data} footData={props.foot.data}>
        <ContactsMain data={props.page.data} sendMessage={sendMessage} />
      </Layout>
    </React.Fragment>
  );
}
export async function getStaticProps({ locale }) {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("contacts", "contacts", { lang: locale });
  const nav = await client.getByUID("navigation", "navigation", {
    lang: locale,
  });
  const foot = await client.getByUID("footer", "footer", { lang: locale });
  return {
    props: {
      page,
      foot,
      nav,
      SERVICE_ID: process.env.SERVICE_ID,
      TEMPLATE_ID: process.env.TEMPLATE_ID,
      KEY: process.env.KEY,
    },
  };
}
