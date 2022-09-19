import Head from "next/head";
import Texts from "../Components/Texts/Texts";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";

const CapabilitiesMain = dynamic(
  () => import("../Components/Capabilities/CapabilitiesMain"),
  {
    suspense: true,
  }
);

export default function Capabilities({ page }) {
  const texts = Texts();
  return (
    <React.Fragment>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} />
      </Head>
      <Suspense>
        <CapabilitiesMain data={page.data} fallback={`Loading...`} />
      </Suspense>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("equipment", "equipment");

  return {
    props: {
      page,
    },
  };
}
