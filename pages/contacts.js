import Head from "next/head";
import emailjs from "@emailjs/browser";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Layout from "../Components/Ui/Layout";
import ContactsMain from "../Components/Contacts/ContactsMain";
// const ContactsMain = dynamic(
//   () => import("../Components/Contacts/ContactsMain"),
//   {
//     suspense: true,
//   }
// );

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
      {/* <Suspense> */}
      <Layout navData={props.nav.data} footData={props.foot.data}>
        <ContactsMain
          data={props.page.data}
          sendMessage={sendMessage}
          // fallback={`Loading...`}
        />
      </Layout>
      {/* </Suspense> */}
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
      SERVICE_ID: "service_nnxf4e4",
      TEMPLATE_ID: "template_vu1n99l",
      KEY: "iVNT9JCWHJMBNgFwD",
    },
  };
}
