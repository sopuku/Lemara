import DefaultPage from "../../Components/Ui/DefaultPage";
import Head from "next/head";
import Texts from "../../Components/Texts/Texts";
import React from "react";

export default function Design() {
  const texts = Texts();

  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text7}</title>
        <meta name="description" content={texts.meta.text8} />
      </Head>
      <DefaultPage
        name="design"
        src={texts.images.designImage}
        alt={texts.images.designImageAlt}
        heading={texts.design.heading}
        text={texts.design.text}
        w="900px"
        h="600px"
      />
    </React.Fragment>
  );
}
