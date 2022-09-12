import Head from "next/head";
import Texts from "../../Components/Texts/Texts";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const DefaultPage = dynamic(() => import("../../Components/Ui/DefaultPage"), {
  suspense: true,
});

export default function Milling() {
  const texts = Texts();

  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text5}</title>
        <meta name="description" content={texts.meta.text6} />
      </Head>
      <Suspense>
        <DefaultPage
          name="milling"
          src={texts.images.millingImage}
          alt={texts.images.millingImageAlt}
          heading={texts.milling.heading}
          text={texts.milling.text}
          w="1024px"
          h="683px"
          fallback={`Loading...`}
        />
      </Suspense>
    </React.Fragment>
  );
}
