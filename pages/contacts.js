import React from "react";
import Head from "next/head";
import ContactsMain from "../Components/Contacts/ContactsMain";

export default function Contacts() {
  return (
    <React.Fragment>
      <Head>
        <title>Lemara kontaktai</title>
        <meta
          name="description"
          content="Lemara - one of the best CNC manufacturers in Lithuania working globally"
        />
      </Head>
      <ContactsMain />
    </React.Fragment>
  );
}
