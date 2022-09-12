import Head from "next/head";
import Texts from "../Components/Texts/Texts";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const CareerMain = dynamic(() => import("../Components/Career/CareerMain"), {
  suspense: true,
});

export default function Carrier() {
  const texts = Texts();
  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text15}</title>
        <meta name="description" content={texts.meta.text16} />
      </Head>
      <Suspense>
        <CareerMain fallback={`Loading...`} />
      </Suspense>
    </React.Fragment>
  );
}
