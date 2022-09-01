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
    turning: {
      t1: {
        heading: "CNC tekinimas",
        text: " CNC tekinimas yra viena iš paslaugų, kurias teikiame. Jeigu nėra aišku, kokių parametrų detalės reikalingos jūsų gamybiniam sumanymui, arba nežinote, kokios rūšies metalą ar plastiką geriau naudoti jų gamybai, susisiekite su mūsų specialistais, kurie atsakys į visus klausimus. Jūs gaunate iš mūsų tikslius CNC (computer numerical control, o lietuviškai kompiuterinis skaitmeninis valdymas) detalių tekinimo darbus  mažomis arba vidutinėmis serijomis savo projektų įgyvendinimui. Priimame ir vienetinius užsakymus, gaminame prototipus. Siūlome detalių tekinimo paslaugas iš plastiko, nerūdijančio plieno, aliuminio, vario, bronzos, ir daugelio kitų metalų. Mes gaminame varžtus, veržles, velenus, ritinėlius, ratukus, redukcinius perėjimus, ašis, įvores, tarpiklius, kaiščius, įvairias sujungimams skirtas detales ir kt.",
      },
      t2: { heading: "Techniniai staklių pajėgumai" },
    },
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
