import Head from "next/head";
import React from "react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import HomeMain from "../Components/Home/HomeMain";

export default function HomePage(props) {
  return (
    <main>
      <Head>
        <title>{props.page.data.meta_title}</title>
        <meta name="description" content={props.page.data.meta_description} />
      </Head>
      <HomeMain data={props.page.data} />
    </main>
  );
}

export async function getStaticProps({ locale }) {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("home", "home", { lang: locale });

  return {
    props: {
      page,
    },
  };
}
