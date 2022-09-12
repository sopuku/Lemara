import Head from "next/head";
import Texts from "../Components/Texts/Texts";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const CapabilitiesMain = dynamic(
  () => import("../Components/Capabilities/CapabilitiesMain"),
  {
    suspense: true,
  }
);

export default function Capabilities() {
  const texts = Texts();
  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text11}</title>
        <meta name="description" content={texts.meta.text12} />
      </Head>
      <Suspense>
        <CapabilitiesMain fallback={`Loading...`} />
      </Suspense>
    </React.Fragment>
  );
}
