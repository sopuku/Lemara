import Head from "next/head";
import Texts from "../Components/Texts/Texts";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";

const CareerMain = dynamic(() => import("../Components/Career/CareerMain"), {
  suspense: true,
});

export default function Carrier({ page }) {
  const texts = Texts();
  console.log(page);
  return (
    <React.Fragment>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_title} />
      </Head>
      <Suspense>
        <CareerMain data={page.data} fallback={`Loading...`} />
      </Suspense>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("career", "career");

  return {
    props: {
      page,
    },
  };
}
