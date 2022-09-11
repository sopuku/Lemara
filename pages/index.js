import Head from "next/head";
import React from "react";
import HomeMain from "../Components/Home/HomeMain";
import Texts from "../Components/Texts/Texts";

export default function HomePage() {
  const texts = Texts();
  return (
    <main>
      <Head>
        <title>{texts.meta.text1}</title>
        <meta name="description" content={texts.meta.text2} />
      </Head>
      <HomeMain />
    </main>
  );
}
