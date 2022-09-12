import Head from "next/head";
import Texts from "../../Components/Texts/Texts";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const DefaultPage = dynamic(() => import("../../Components/Ui/DefaultPage"), {
  suspense: true,
});
export default function Design() {
  const texts = Texts();

  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text7}</title>
        <meta name="description" content={texts.meta.text8} />
      </Head>
      <Suspense>
        <DefaultPage
          name="design"
          src={texts.images.designImage}
          alt={texts.images.designImageAlt}
          heading={texts.design.heading}
          text={texts.design.text}
          w="900px"
          h="600px"
          fallback={`Loading...`}
        />
      </Suspense>
    </React.Fragment>
  );
}
