import DefaultPage from "../../Components/Ui/DefaultPage";
import Head from "next/head";
import React from "react";
import Texts from "../../Components/Texts/Texts";

export default function Turning() {
  const texts = Texts();

  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text3}</title>
        <meta name="description" content={texts.meta.text4} />
      </Head>
      <DefaultPage
        name="turning"
        src={texts.images.turningImage}
        alt={texts.images.turningImageAlt}
        heading={texts.turning.heading}
        text={texts.turning.text}
        w="645px"
        h="430px"
      />
    </React.Fragment>
  );
}
