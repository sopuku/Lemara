import Head from "next/head";
import { Fragment } from "react";
import HomeMain from "../Components/Home/HomeMain";

export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Lemara</title>
        <meta
          name="description"
          content="Lemara - one of the best CNC manufacturers in Lithuania working globally"
        />
      </Head>
      <HomeMain />
    </Fragment>
  );
}
