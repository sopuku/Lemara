import Head from "next/head";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Layout from "../Components/Ui/Layout";
import GalleryMain from "../Components/Gallery/GalleryMain";
// import axios from "axios";

// const GalleryMain = dynamic(() => import("../Components/Gallery/GalleryMain"), {
//   suspense: true,
// });

export default function Galery({ page, nav, foot, picture }) {
  return (
    <React.Fragment>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} />
      </Head>
      {/* <Suspense> */}
      <Layout footData={foot.data} navData={nav.data}>
        <GalleryMain
          pictures={picture}
          data={page.data}
          // fallback={`Loading...`}
        />
      </Layout>
      {/* </Suspense> */}
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

//========== import from google photos ================
// const url = "https://photos.app.goo.gl/7Zh7P55oAKDmuN2W6";
// const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g;
// const response = await axios.get(url);
// const links = [];
// let match;
// while ((match = regex.exec(response.data))) {
//   links.push(match[1]);
// }
// return {
//   props: {
//     pictures: links,
//   },
// };
//=====================================================
