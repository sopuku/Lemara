import CareerMain from "../Components/Career/CareerMain";
import Head from "next/head";
import React from "react";
import Texts from "../Components/Texts/Texts";

export default function Carrier() {
  const texts = Texts();
  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text15}</title>
        <meta name="description" content={texts.meta.text16} />
      </Head>
      <CareerMain />
    </React.Fragment>
  );
}
