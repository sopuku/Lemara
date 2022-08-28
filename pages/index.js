import Head from "next/head";
import { Fragment } from "react";

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
      <div>cia Main Page</div>
    </Fragment>
  );
}
