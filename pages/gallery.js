import galleryImages from "../Components/Gallery/Images";
import GalleryMain from "../Components/Gallery/GalleryMain";
// import axios from "axios";

export default function Galery(props) {
  return <GalleryMain pictures={props.pictures} />;
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
