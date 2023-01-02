import Head from "next/head";
import React from "react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import HomeMain from "../Components/Home/HomeMain";

export default function HomePage({ page }) {
  return (
    <main>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} />
      </Head>
      <HomeMain data={page.data} />
    </main>
  );
}

export async function getStaticProps({ locale }) {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("home", "home", { lang: locale });
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
