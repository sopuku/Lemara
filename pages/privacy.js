import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";

const PrivacyMain = dynamic(() => import("../Components/Privacy/PrivacyMain"), {
  suspense: true,
});
//
export default function Privacy({ page }) {
  return (
    <React.Fragment>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} />
      </Head>
      <Suspense>
        <PrivacyMain data={page.data} fallback={`Loading...`} />
      </Suspense>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("privacy", "privacy");

  return {
    props: {
      page,
    },
  };
}
