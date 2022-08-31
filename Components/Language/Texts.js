import { useContext } from "react";
import { CurrentLanguage } from "../../pages/_app";

export default function Texts() {
  const { language } = useContext(CurrentLanguage);

  const TEXTS_LT = {
    navigation: [
      {
        label: "Pradžia",
        href: "/",
      },
      {
        label: "Paslaugos",
        children: [
          {
            label: "CNC Tekinimas",
            href: "/services/turning",
          },
          {
            label: "CNC Frezavimas",
            href: "/services/milling",
          },
          {
            label: "Projektavimas",
            href: "/services/design",
          },
        ],
      },
      {
        label: "Gamybiniai Pajėgumai",
        href: "/capabilities",
      },
      {
        label: "Galerija",
        href: "/gallery",
      },
      {
        label: "Karjera",
        href: "/career",
      },
      {
        label: "Kontaktai",
        href: "/contacts",
      },
    ],
    footer: { contacts: "Kontaktai" },
    index: {},
    turning: {},
    milling: {},
    design: {},
    career: {},
    contacts: {},
  };

  const TEXTS_EN = {
    navigation: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Services",
        children: [
          {
            label: "CNC Turning",
            href: "/services/turning",
          },
          {
            label: "CNC Milling",
            href: "/services/milling",
          },
          {
            label: "Design",
            href: "/services/design",
          },
        ],
      },
      {
        label: "Production Capabilities",
        href: "/capabilities",
      },
      {
        label: "Gallery",
        href: "/gallery",
      },
      {
        label: "Career",
        href: "/career",
      },
      {
        label: "Contacts",
        href: "/contacts",
      },
    ],
    footer: { contacts: "Contacts" },
    index: {},
    turning: {},
    milling: {},
    design: {},
    career: {},
    contacts: {},
  };

  const TEXTS_NO = {
    navigation: [
      {
        label: "Hjemmeside",
        href: "/",
      },
      {
        label: "Tjenester",
        children: [
          {
            label: "CNC Dreiing",
            href: "/services/turning",
          },
          {
            label: "CNC Fresing",
            href: "/services/milling",
          },
          {
            label: "Design",
            href: "/services/design",
          },
        ],
      },
      {
        label: "Muligheter",
        href: "/capabilities",
      },
      {
        label: "Galleri",
        href: "/gallery",
      },
      {
        label: "Karriere",
        href: "/career",
      },
      {
        label: "Kontakter",
        href: "/contacts",
      },
    ],
    footer: { contacts: "Kontakter" },
    index: {},
    turning: {},
    milling: {},
    design: {},
    career: {},
    contacts: {},
  };

  switch (language) {
    case "LT":
      return TEXTS_LT;
    case "EN":
      return TEXTS_EN;
    case "NO":
      return TEXTS_NO;
    default:
      return TEXTS_LT;
  }
}
