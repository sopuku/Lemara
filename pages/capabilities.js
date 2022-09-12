import CapabilitiesMain from "../Components/Capabilities/CapabilitiesMain";
import React from "react";
import Head from "next/head";
import Texts from "../Components/Texts/Texts";

export default function Capabilities() {
  const texts = Texts();
  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text11}</title>
        <meta name="description" content={texts.meta.text12} />
      </Head>
      <CapabilitiesMain />
    </React.Fragment>
  );
}
