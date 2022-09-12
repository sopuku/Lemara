import Head from "next/head";
import Texts from "../../Components/Texts/Texts";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const GeneralMain = dynamic(
  () => import("../../Components/General/GeneralMai"),
  {
    suspense: true,
  }
);

export default function General() {
  const texts = Texts();
  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text9}</title>
        <meta name="description" content={texts.meta.text10} />
      </Head>
      <Suspense>
        <GeneralMain fallback={`Loading...`} />
      </Suspense>
    </React.Fragment>
  );
}
