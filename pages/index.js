import Head from "next/head";
import React from "react";
import HomeMain from "../Components/Home/HomeMain";

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Lemara</title>
        <meta
          name="description"
          content="Lemara - one of the best CNC manufacturers in Lithuania working globally"
        />
      </Head>
      <HomeMain />
    </React.Fragment>
  );
}
