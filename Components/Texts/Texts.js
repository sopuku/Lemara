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
    capabilities: {
      mashines: [
        {
          name: "DOOSAN LYNX 2100LMB",
          type: "turning",
          lenght: "510 mm",
          diameter: "300 mm",
          revolutions: "4500 rpm",
          tools: "C ašis (frezavimas)",
          src: "/images/capabilities/2100LM.jpg",
        },
        {
          name: "DOOSAN LYNX 2100LYB",
          type: "turning",
          lenght: "510 mm",
          diameter: "300 mm",
          revolutions: "4500 rpm",
          tools: "C ašis (frezavimas)",
          src: "/images/capabilities/2100LY.jpg",
        },
        {
          name: "Doosan DNM 4500",
          type: "milling",
          zone: "800x450x510 mm",
          weight: "600 kg",
          revolutions: "12000 rpm",
          src: "/images/capabilities/DMN4500.jpg",
        },
        {
          name: "Leadwell V40M",
          type: "milling",
          zone: "1000x500x500 mm",
          weight: "800 kg",
          revolutions: "8000 rpm",
          src: "/images/capabilities/V40.jpg",
        },
        {
          name: "OKUMA LB15",
          type: "turning",
          lenght: "500 mm",
          diameter: "250mm",
          revolutions: "4200 rpm",
          tools: "-",
          src: "/images/capabilities/LB15.jpg",
        },
      ],
    },
    turning: {
      t1: {
        heading: "CNC tekinimas",
        text: " CNC tekinimas yra viena iš paslaugų, kurias teikiame. Jeigu nėra aišku, kokių parametrų detalės reikalingos jūsų gamybiniam sumanymui, arba nežinote, kokios rūšies metalą ar plastiką geriau naudoti jų gamybai, susisiekite su mūsų specialistais, kurie atsakys į visus klausimus. Jūs gaunate iš mūsų tikslius CNC (computer numerical control, o lietuviškai kompiuterinis skaitmeninis valdymas) detalių tekinimo darbus  mažomis arba vidutinėmis serijomis savo projektų įgyvendinimui. Priimame ir vienetinius užsakymus, gaminame prototipus. Siūlome detalių tekinimo paslaugas iš plastiko, nerūdijančio plieno, aliuminio, vario, bronzos, ir daugelio kitų metalų. Mes gaminame varžtus, veržles, velenus, ritinėlius, ratukus, redukcinius perėjimus, ašis, įvores, tarpiklius, kaiščius, įvairias sujungimams skirtas detales ir kt.",
      },
      t2: { heading: "Techniniai staklių pajėgumai" },
    },
    milling: {},
    design: {},
    career: {
      jobs: [
        {
          title: "CNC tekinimo staklių operatorius",
          description: [
            "Darbas su CNC tekinimo staklėmis",
            "Detalių matavimas",
            "Programų rašymas",
            "Tvarkos ir švaros palaikymas darbo vietoje",
          ],
          requirments: [
            "Ne mažesnė kaip 1 metų patirtis",
            "Techninių brėžinių skaitymas",
            "Pageidautina profesinis/aukštesnysis techninis inžinerinis išsilavinimas",
            "Geri darbo kompiuteriu įgūdžiai",
            "Darbo patirtis su Fusion 365, Solidworks, Siemens controlas privalumas",
          ],
          offer: [
            "Įdomų darbą pažangioje, jaunatviškoje įmonėje",
            "Organizuojami kursai profesiniam tobulėjimui",
            "Visada laiku mokamą atlyginimą",
            "Karjeros galimybes",
          ],
          salary: "1000-1500 €/mėn. į rankas",
        },
        {
          title: "CNC frezavimo staklių operatorius",
          description: [
            "Darbas su CNC frezavimo staklėmis",
            "Detalių matavimas",
            "Programų rašymas",
            "Tvarkos ir švaros palaikymas darbo vietoje",
          ],
          requirments: [
            "Ne mažesnė kaip 1 metų patirtis",
            "Techninių brėžinių skaitymas",
            "Pageidautina profesinis/aukštesnysis techninis inžinerinis išsilavinimas",
            "Geri darbo kompiuteriu įgūdžiai",
            "Darbo patirtis su Fusion 365, Solidworks, Siemens controlas privalumas",
          ],
          offer: [
            "Įdomų darbą pažangioje, jaunatviškoje įmonėje",
            "Organizuojamus kursus profesiniam tobulėjimui",
            "Visada laiku mokamą atlyginimą",
            "Karjeros galimybes",
          ],
          salary: "1000-1500 €/mėn. į rankas",
        },
        {
          title: "Pramonės vadybininkas",
          description: [
            "Naujų klientų paieška",
            "Bendravimas su esamais klientais",
            "Komercinių pasiūlymš ruošimas",
            "Apskaitos dokumentų valdymas",
          ],
          requirments: [
            "Ne mažesnė kaip 1 metų panašaus darbo patirtis",
            "Pageidautina inžinerinis aukštesnysis/aukštasis išsilavinimas",
            "CNC pramonės išmanymas",
            "Geri darbo kompiuteriu įgūdžiai",
            "Noras tobulėti",
          ],
          offer: [
            "Įdomų darbą pažangioje įmonėje",
            "Galimybes profesiniam tobulėjimui",
            "Visada laiku mokamą, nuo rezultatų priklausantį atlyginimą",
          ],
          salary: "Nuo 1300 €/mėn. į rankas + priedai pagal rezultatus",
        },
        {
          title: "Valytoja",
          description: [
            "Darbas dvi dienas per savaitę",
            "Gamybinių patalpų valymas",
            "Ofiso patalpų valymas",
            "Tvarkos palaikymas",
          ],
          requirments: [
            "Panašaus darbo patirtis būtų privalumas",
            "Punktualumas",
            "Atsakingumas",
          ],
          offer: [
            "Įdomų darbą pažangioje įmonėje",
            "Galimybes profesiniam tobulėjimui",
            "Visada laiku mokamą",
          ],
          salary: "Pagal susitarimą",
        },
      ],
    },
    contacts: {
      cards: [
        {
          name: "Povilas Vilimas",
          responsibilities: "Direktorius",
          email: "povilas@lemara.lt",
          number: "+370 646 57845",
          src: "/images/d1.jpg",
        },
        {
          name: "Vytautas Puodžiūnas",
          responsibilities: "Gamybos Vadovas",
          email: "vytautas@lemara.lt",
          number: "+370 674 51761",
          src: "/images/d2.jpg",
        },
        {
          name: "Tadas Plungė",
          responsibilities: "Projektuotojas",
          email: "tadas@lemara.lt",
          number: "+370 647 64659",
          src: "/images/d3.jpg",
        },
      ],
    },
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
