import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import * as prismic from "@prismicio/client";
import sm from "../../sm.json";

const GeneralMain = dynamic(
  () => import("../../Components/General/GeneralMai"),
  {
    suspense: true,
  }
);

export default function General({ page }) {
  return (
    <React.Fragment>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} />
      </Head>
      <Suspense>
        <GeneralMain data={page.data} fallback={`Loading...`} />
      </Suspense>
    </React.Fragment>
  );
}

export async function getStaticProps({ locale }) {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("general", "general", { lang: locale });

  return {
    props: {
      page,
    },
  };
}
