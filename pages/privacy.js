import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import Layout from "../Components/Ui/Layout";

const PrivacyMain = dynamic(() => import("../Components/Privacy/PrivacyMain"), {
  suspense: true,
});
export default function Privacy({ page, nav, foot }) {
  return (
    <React.Fragment>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} />
      </Head>
      <Suspense>
        <Layout footData={foot.data} navData={nav.data}>
          <PrivacyMain data={page.data} fallback={`Loading...`} />
        </Layout>
      </Suspense>
    </React.Fragment>
  );
}

export async function getStaticProps({ locale }) {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("privacy", "privacy", { lang: locale });

  const foot = await client.getByUID("footer", "footer", { lang: locale });
  const nav = await client.getByUID("navigation", "navigation", {
    lang: locale,
  });

  return {
    props: {
      page,
      foot,
      nav,
    },
  };
}
