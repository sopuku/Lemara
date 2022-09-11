import Head from "next/head";
import React from "react";
import PrivacyMain from "../Components/Privacy/PrivacyMain";
import Texts from "../Components/Texts/Texts";

export default function Privacy() {
  const texts = Texts();
  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text19}</title>
        <meta name="description" content={texts.meta.text20} />
      </Head>
      <PrivacyMain />;
    </React.Fragment>
  );
}
