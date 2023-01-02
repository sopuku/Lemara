import Head from "next/head";
import React from "react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import Layout from "../Components/Ui/Layout";
import CapabilitiesMain from "../Components/Capabilities/CapabilitiesMain";

export default function Capabilities({ page, nav, foot }) {
  return (
    <React.Fragment>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} />
      </Head>
      <Layout footData={foot.data} navData={nav.data}>
        <CapabilitiesMain data={page.data} />
      </Layout>
    </React.Fragment>
  );
}

export async function getStaticProps({ locale }) {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("equipment", "equipment", {
    lang: locale,
  });
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
