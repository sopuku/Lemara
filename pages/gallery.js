import Head from "next/head";
import React from "react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import Layout from "../Components/Ui/Layout";
import GalleryMain from "../Components/Gallery/GalleryMain";

export default function Galery({ page, nav, foot, picture }) {
  return (
    <React.Fragment>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} />
      </Head>
      <Layout footData={foot.data} navData={nav.data}>
        <GalleryMain pictures={picture} data={page.data} />
      </Layout>
    </React.Fragment>
  );
}

export async function getStaticProps({ locale }) {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("gallery", "gallery", { lang: locale });
  const picture = [];
  page.data.slices[0].items.map((item) => {
    const temp = {
      src: item.images.url,
      alt: "Detalės, pagamintos CNC tekinimo arba CNC frezavimo būdu",
      width: item.images.dimensions.width,
      height: item.images.dimensions.height,
    };
    picture.push(temp);
  });
  const foot = await client.getByUID("footer", "footer", { lang: locale });
  const nav = await client.getByUID("navigation", "navigation", {
    lang: locale,
  });

  return {
    props: {
      picture,
      page,
      foot,
      nav,
    },
  };
}
