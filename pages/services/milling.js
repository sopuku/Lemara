import DefaultPage from "../../Components/Ui/DefaultPage";
import Head from "next/head";
import React from "react";
import Texts from "../../Components/Texts/Texts";

export default function Milling() {
  const texts = Texts();

  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text5}</title>
        <meta name="description" content={texts.meta.text6} />
      </Head>
      <DefaultPage
        name="milling"
        src={texts.images.millingImage}
        alt={texts.images.millingImageAlt}
        heading={texts.milling.heading}
        text={texts.milling.text}
        w="1024px"
        h="683px"
      />
    </React.Fragment>
  );
}
