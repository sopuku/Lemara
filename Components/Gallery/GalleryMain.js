import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

export default function GalleryMain(props) {
  const slides = props.pictures.map(({ src, width, height }) => ({
    src,
    width,
    height,
  }));

  const [index, setIndex] = useState(-1);

  return (
    <Box
      px={{ sm: "1rem", md: "2rem", lg: "10%", xl: "10%" }}
      py={{ sm: "1rem", md: "2rem", lg: "5rem" }}
      bg="#041126"
      backgroundImage="/images/background/galleryBg.png"
    >
      <PhotoAlbum
        spacing={6}
        photos={props.pictures}
        layout="rows"
        targetRowHeight={300}
        onClick={(event, photo, index) => setIndex(index)}
      />

      <Lightbox
        animation={{ fade: 330 }}
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Thumbnails]}
      />
    </Box>
  );
}
