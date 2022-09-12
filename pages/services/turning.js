import Head from "next/head";
import Texts from "../../Components/Texts/Texts";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const DefaultPage = dynamic(() => import("../../Components/Ui/DefaultPage"), {
  suspense: true,
});

export default function Turning() {
  const texts = Texts();

  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text3}</title>
        <meta name="description" content={texts.meta.text4} />
      </Head>
      <Suspense>
        <DefaultPage
          name="turning"
          src={texts.images.turningImage}
          alt={texts.images.turningImageAlt}
          heading={texts.turning.heading}
          text={texts.turning.text}
          w="645px"
          h="430px"
          fallback={`Loading...`}
        />
      </Suspense>
    </React.Fragment>
  );
}
