import { useContext } from "react";
import { CurrentSettings } from "../../pages/_app";

export default function Colors() {
  const { currentColor } = useContext(CurrentSettings);
  const COLORS_1 = {
    background: "#F8F7F3",
    navigation: {
      logo: "/images/logo/logo2.png",
      bgTexture: "/images/background/navBg1.png",
      bg: "#04132A",
      color: "white",
      colorHover: "orange",
      bgHover: "#072146",
      subBg: "#04132A",
      subColor: "white",
      subBgHover: "#072146",
      subIcon: "orange",
      hamburgerIcon: "white",
      hamburgerIconBg: "#072147",
      selectColors: { color: "white", bg: "#04132A" },
      selectLanguage: { color: "white", bg: "#04132A" },
    },
    footer: {
      logo: "/images/logo/logo2.png",
      bgTexture: "/images/background/navBg1.png",
      bg: "#04132A",
      color: "white",
      colorHover: "orange",
    },

    career: {
      color: "black",
      bg: "",
      colorExpanded: "black",
      bgExpanded: "gray.200",
      button: {
        color: "black",
        bg: "",
        colorHover: "black",
        bgHover: "#E4E5E7",
        colorExpanded: "white",
        bgExpanded: "#072248",
      },
    },
    contacts: {
      card: {
        bgTop: "#08254F",
        bgBot: "White",
        color: "#1A202C",
        bgTopTexture: "/images/background/aboutBg.png",
        border: "072248",
      },
      form: { color: "black", bg: "white", colorIcon: "black" },
      button: { bg: "#072155", color: "white", colorHover: "orange" },
      bg: "#08254F",
      bgTexture: "/images/background/aboutBg.png",
      color: "white",
      colorIcon: "#1970F1",
    },
    gallery: { bg: "#041126", bgTexture: "/images/background/galleryBg.png" },
    home: {
      bgImage: "/images/background/main1.jpg",
      image: "/images/home/whyUs.jpg",
      color: "white",
      bg: "",
      whyUs: { color: "black", bg: "" },
      aboutUs: {
        image: "/images/home/aboutUs.jpg",
        color: "white",
        bg: "#08254F",
        bgTexture: "/images/background/aboutBg.png",
      },
      feedback: { color: "black", bg: "" },
      values: { color: "black", bg: "white" },
    },
    turning: {
      image: "/images/turning/t5.jpg",
      bgTexture: "/images/background/aboutBg.png",
      bgBot: "#08254F",
      bgTop: "",
      colorTop: "black",
      colorBot: "white",
    },
    milling: {
      image: "/images/milling/m1.jpg",
      bgTexture: "/images/background/aboutBg.png",
      bgBot: "#08254F",
      bgTop: "",
      colorTop: "black",
      colorBot: "white",
    },
    design: { image: "/images/design/d1.jpg", color: "black", bg: "" },
    general: { color: "black", bg: "" },
    privacy: { color: "black", bg: "" },
  };

  const COLORS_2 = {
    background: "#F8F7F3",
    navigation: {
      logo: "/images/logo/logo2.png",
      bgTexture: "/images/background/navBg1.png",
      bg: "#082450",
      color: "white",
      colorHover: "orange",
      bgHover: "#072146",
      subBg: "#082656",
      subColor: "white",
      subBgTexture: "/images/background/navBg1.png",
      subBgHover: "#072146",
      subIcon: "orange",
      hamburgerIcon: "white",
      hamburgerIconBg: "#072147",
      selectColors: { color: "white", bg: "#082450" },
      selectLanguage: { color: "white", bg: "#082450" },
    },
    footer: {
      logo: "/images/logo/logo2.png",
      bgTexture: "/images/background/navBg1.png",
      bg: "#082450",
      color: "white",
      colorHover: "orange",
    },

    career: {
      color: "black",
      bg: "",
      colorExpanded: "black",
      bgExpanded: "#E4E5E7",
      button: {
        color: "black",
        bg: "",
        colorHover: "black",
        bgHover: "#E4E5E7",
        colorExpanded: "white",
        bgExpanded: "#082450",
      },
    },
    contacts: {
      card: {
        bgTop: "#082450",
        bgBot: "White",
        color: "#1A202C",
        bgTopTexture: "/images/background/aboutBg.png",
        border: "072248",
      },
      form: { color: "black", bg: "white", colorIcon: "black" },
      button: { bg: "#082450", color: "white", colorHover: "orange" },
      bg: "#0b306b",
      bgTexture: "/images/background/aboutBg.png",
      color: "white",
      colorIcon: "#1970F1",
    },
    gallery: { bg: "#082450", bgTexture: "/images/background/galleryBg.png" },
    home: {
      bgImage: "/images/background/main1.jpg",
      image: "/images/home/whyUs.jpg",
      color: "white",
      bg: "whiteAlpha.200",
      whyUs: { color: "black", bg: "" },
      aboutUs: {
        image: "/images/home/aboutUs.jpg",
        color: "white",
        bg: "#0b306b",
        bgTexture: "/images/background/aboutBg.png",
      },
      feedback: { color: "black", bg: "" },
      values: { color: "black", bg: "white" },
    },
    turning: {
      image: "/images/turning/t5.jpg",
      bgTexture: "/images/background/aboutBg.png",
      bgBot: "#0b306b",
      bgTop: "",
      colorTop: "black",
      colorBot: "white",
    },
    milling: {
      image: "/images/milling/m1.jpg",
      bgTexture: "/images/background/aboutBg.png",
      bgBot: "#0b306b",
      bgTop: "",
      colorTop: "black",
      colorBot: "white",
    },
    design: { image: "/images/design/d1.jpg", color: "black", bg: "" },
    general: { color: "black", bg: "" },
    privacy: { color: "black", bg: "" },
  };

  const COLORS_3 = {
    background: "#F8F7F3",
    navigation: {
      logo: "/images/logo/logo.png",
      bgTexture: "/images/background/bg_l7.png",
      bg: "#d7dee2",
      color: "Black",
      colorHover: "orange",
      bgHover: "#072146",
      subBg: "#F5F5F5",
      subColor: "black",
      subBgHover: "#eaeaea",
      subIcon: "orange",
      hamburgerIcon: "black",
      hamburgerIconBg: "#E3E8EB",
      selectColors: { color: "black", bg: "##F5F5F5" },
      selectLanguage: { color: "black", bg: "#F5F5F5" },
    },
    footer: {
      logo: "/images/logo/logo.png",
      bgTexture: "/images/background/bg_l7.png",
      bg: "#d7dee2",
      color: "black",
      colorHover: "orange",
    },

    career: {
      color: "black",
      bg: "",
      colorExpanded: "black",
      bgExpanded: "#E3E8EB",
      button: {
        color: "black",
        bg: "",
        colorHover: "black",
        bgHover: "#E4E5E7",
        colorExpanded: "white",
        bgExpanded: "#0E3287",
      },
    },
    contacts: {
      card: {
        bgTop: "#d7dee2",
        bgBot: "White",
        color: "#1A202C",
        bgTopTexture: "/images/background/aboutBg.png",
        border: "#d7dee2",
      },
      form: { color: "black", bg: "white", colorIcon: "black" },
      button: { bg: "#0C5AD0", color: "white", colorHover: "orange" },
      bg: "#E3E8EB",
      bgTexture: "/images/background/bg_l7.png",
      color: "black",
      colorIcon: "#1970F1",
    },
    gallery: { bg: "#E3E8EB", bgTexture: "/images/background/bg_l7.png" },
    home: {
      bgImage: "/images/background/main2.jpg",
      image: "/images/home/whyUs.jpg",
      color: "black",
      colorLink: "#0B54D6",
      bg: "whiteAlpha.500",
      whyUs: { color: "black", bg: "" },
      aboutUs: {
        image: "/images/home/aboutUs.jpg",
        color: "black",
        bg: "#E3E8EB",
        bgTexture: "/images/background/bg_l7.png",
      },
      feedback: { color: "black", bg: "" },
      values: { color: "black", bg: "white" },
    },
    turning: {
      image: "/images/turning/t5.jpg",
      bgTexture: "/images/background/bg_l7.png",
      bgBot: "#E3E8EB",
      colorBot: "black",
      bgTop: "",
      colorTop: "black",
    },
    milling: {
      image: "/images/milling/m1.jpg",
      bgTexture: "/images/background/bg_l7.png",
      bgBot: "#E3E8EB",
      colorBot: "black",
      bgTop: "",
      colorTop: "black",
    },
    design: { image: "/images/design/d1.jpg", color: "black", bg: "" },
    general: { color: "black", bg: "" },
    privacy: { color: "black", bg: "" },
  };

  switch (currentColor) {
    case "1":
      return COLORS_1;
    case "2":
      return COLORS_2;
    case "3":
      return COLORS_3;
    default:
      return TEXTS_LT;
  }
}
