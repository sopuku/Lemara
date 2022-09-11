import GeneralMain from "../../Components/General/GeneralMai";
import Head from "next/head";
import React from "react";
import Texts from "../../Components/Texts/Texts";

export default function General() {
  const texts = Texts();
  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text9}</title>
        <meta name="description" content={texts.meta.text10} />
      </Head>
      <GeneralMain />;
    </React.Fragment>
  );
}
