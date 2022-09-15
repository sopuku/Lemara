import Head from "next/head";
import React from "react";
import Texts from "../Components/Texts/Texts";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const PrivacyMain = dynamic(() => import("../Components/Privacy/PrivacyMain"), {
  suspense: true,
});
//test
export default function Privacy() {
  const texts = Texts();
  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text19}</title>
        <meta name="description" content={texts.meta.text20} />
      </Head>
      <Suspense>
        <PrivacyMain fallback={`Loading...`} />
      </Suspense>
    </React.Fragment>
  );
}
