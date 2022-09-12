import galleryImages from "../Components/Gallery/Images";
import Head from "next/head";
import Texts from "../Components/Texts/Texts";
// import axios from "axios";

import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const GalleryMain = dynamic(() => import("../Components/Gallery/GalleryMain"), {
  suspense: true,
});

export default function Galery(props) {
  const texts = Texts();
  return (
    <React.Fragment>
      <Head>
        <title>{texts.meta.text13}</title>
        <meta name="description" content={texts.meta.text14} />
      </Head>
      <Suspense>
        <GalleryMain pictures={props.pictures} fallback={`Loading...`} />
      </Suspense>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const pictures = galleryImages();
  return {
    props: {
      pictures: pictures,
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
