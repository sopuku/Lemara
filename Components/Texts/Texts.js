import { useContext } from "react";
import { CurrentSettings } from "../../pages/_app";

export default function Texts() {
  const { language } = useContext(CurrentSettings);

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
          { label: "Bendra informacija", href: "/services/general" },
        ],
      },
      {
        label: "Įrengimai",
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
    capabilities: {
      mashines: [
        {
          name: "Doosan LYNX 2100LMB",
          type: "turning",
          lenght: "510 mm",
          diameter: "300 mm",
          revolutions: "4500 rpm",
          tools: "C ašis (frezavimas)",
          src: "/images/capabilities/2100LM.jpg",
        },
        {
          name: "Doosan LYNX 2100LYB",
          type: "turning",
          lenght: "510 mm",
          diameter: "300 mm",
          revolutions: "4500 rpm",
          tools: "C ašis (frezavimas)",
          src: "/images/capabilities/2100LY.jpg",
        },
        {
          name: "Okuma LB15",
          type: "turning",
          lenght: "500 mm",
          diameter: "250mm",
          revolutions: "4200 rpm",
          tools: "-",
          src: "/images/capabilities/LB15.jpg",
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
      ],
    },
    turning: {
      t1: {
        heading: "CNC tekinimas",
        text: " CNC tekinimas yra viena iš paslaugų, kurias teikiame. Mes atliekame ištekinimą (kai apdirbami vidiniai detalės paviršiai), aptekinimą (kai apdirbami išoriniai detalės paviršiai), nutekinimas (kai apdirbami galiniai detalės paviršiai). Siūlome detalių tekinimo paslaugas iš plastiko, nerūdijančio plieno, aliuminio, vario, bronzos, ir daugelio kitų metalų. Mes gaminame varžtus, veržles, velenus, ritinėlius, ratukus, redukcinius perėjimus, ašis, įvores, tarpiklius, kaiščius, įvairias sujungimams skirtas detales ir kt. Jeigu nėra aišku, kokių parametrų detalės reikalingos jūsų gamybiniam sumanymui, arba nežinote, kokios rūšies metalą ar plastiką geriau naudoti jų gamybai, susisiekite su mūsų specialistais, kurie atsakys į visus klausimus.",
      },
      t2: { heading: "Techniniai staklių pajėgumai" },
    },
    milling: {
      t1: {
        heading: "CNC frezavimas",
        text: " CNC frezavimas yra viena iš paslaugų, kurias teikiame. Mes atliekame plokštumų frezavimą (kai tiesialinijine pastūma frezuojami plokšti paviršiai), apvalųjį frezavimą (kai apskritimine pastūma frezuojami cilindriniai paviršiai), sriegių frezavimą (kai sraigtine pastūma frezuojami sraigtiniai paviršiai), fasoninį frezavimą (kai frezos profilis išpjaunamas ruošinyje), kontūrinį frezavimą (kai formuojami tiek paprasti kontūrai tiek sudėtingi erdviniai paviršiai suteikiant staklėms valdomą pastūmą). Siūlome detalių frezavimo paslaugas iš plastiko, nerūdijančio plieno, aliuminio, vario, bronzos, ir daugelio kitų metalų. Jeigu nėra aišku, kokių parametrų detalės reikalingos jūsų gamybiniam sumanymui, arba nežinote, kokios rūšies metalą ar plastiką geriau naudoti jų gamybai, susisiekite su mūsų specialistais, kurie atsakys į visus klausimus.",
      },
      t2: { heading: "Techniniai staklių pajėgumai" },
    },
    design: {
      t1: {
        heading: "Projektavimas",
        text: "Projektavimas yra viena iš paslaugų, kurias teikiame. Projektuojame pagal detalės pavyzdį (kai turima detalė labai tiksliai išmatuojama, padaromi jos brėžiniai, sukuriamas kompiuterinis modelis),pagal pateiktą užduotį ir aprašymą, pagal Jūsų atsiūstą brėžinį. Brėžiniai turi atitikti vieną iš reikalingų formatų (step, dxf, dwg, x_t, x_b), turi būti nurodyta medžiaga, iš kurios bus gaminama detalė, naudojamas 1:1 mastelis, pjovimo kontūras pateiktas tiesioginio atsispindėjimo būdu, objektai pervesti į kreives, matmenys nurodyti milimerais. Brėžinyje negali būti susiliejimų, persidengimų, dvigubų linijų, nereikalingų taškų ir pan. Jei neturite brėžinio, mūsų projektuotojai tai atliks kokybiškai ir atsakingai. Kadangi net ir mažiausia klaida gali būti nekokybiško rezultato priežastis, todėl gautus failus mūsų specialistai visada patikrina.",
      },
    },
    general: { t1: {} },
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
          src: "/images/contacts/povilas.jpg",
        },
        {
          name: "Vytautas Puodžiūnas",
          responsibilities: "Gamybos Vadovas",
          email: "vytautas@lemara.lt",
          number: "+370 674 51761",
          src: "/images/contacts/vytautas.jpg",
        },
        {
          name: "Tadas Plungė",
          responsibilities: "Projektuotojas",
          email: "tadas@lemara.lt",
          number: "+370 647 64659",
          src: "/images/contacts/tadas.jpg",
        },
      ],
    },
    values: [
      {
        title: "Kokybė",
        description: "Garantuojame aukštą gaminių kokybę",
        src: "/images/values/1.png",
      },
      {
        title: "Greitis",
        description: "Detales pagaminame per trumpą laiką",
        src: "/images/values/3.png",
      },
      {
        title: "Tikslumas",
        description:
          "Modernios įrangos dėka, gaminiai pasižymi dideliu tikslumu ",
        src: "/images/values/2.png",
      },
      {
        title: "Tvarumas",
        description: "Tausojame gamtą",
        src: "/images/values/4.png",
      },
    ],
    whyUs: {
      text1: {
        heading: "Kodėl turėtumėte pasirinkti mus?",
        text: `Esame jauni ir ambicingi savo srities profesionalai. Nuolatos
          plečiamės ir keliame darbuotojų kvalifikaciją. Visada užtikriname
          aukščiausios kokybės produktą, kurį atliekame per trumpiausią įmanomą
          laiką. pecializuojamės gaminant didelio tikslumo reikalaujančius
          elementus automatinėms ir robotizuotoms gamybos, apdirbimo linijoms,
          konvejeriams, tačiau atliekame ir kitus darbus. nuo 2016 metų
          sėkmingai gaminame detales didelėms Lietuvos ir užsienio kompanijoms.
 `,
      },
    },
    aboutUs: {
      text1: {
        heading: "Apie mus",
        text: `MB "Lemara" - metalo apdirbimo įmonė, teikianti CNC tekinimo ir frezavimo paslaugas. Specializuojamės gaminant didelio tikslumo reikalaujančius elementus automatinėms ir robotizuotoms gamybos, apdirbimo linijoms, konvejeriams. Mes dirbame su aliuminiu, nerūdijančiu plienu, plienu, variu, žalvariu, kitais metalais bei įvairiais plastikais. Bendradarbiaujame su daug partnerių, todėl su jų pagalba galime atlikti praktiškai visas įmanomas medžiagų apdirbimo operacijas, tokias kaip pjovimą viela, pjovimą vandeniu, pjovimą lazeriu, pjovimą plazma, pjovimą elektroerozija, šlifavimą, anodavimą, virinimą, lankstymą. Bendradarbiaujame tiek su Lietuvos, tiek su užsienio gamintojais. 2016 metais įkurta Lemara sparčiai plečiasi ir sėkmingai dirba tarptautiniu mastu.
 `,
      },
    },
    feedback: [
      {
        id: 1,
        title: "UAB Stelga, Marius",
        text: "Jauni, ambicingi savo sryties specialistai, puikiai žinanatys ir gebantys patarti ir spręsti iškilusias problemas. Greitas ir operatyvus reagavimas į paklausimus, visi projektai buvo įgyvendinti pagal sutartus gamybinius terminus.:)",
      },
      {
        id: 2,
        title: "UAB Lematec, Donatas",
        text: "Pasirinkome Lemara, nes didžioji dalis pamatę reikiamus tikslumus nebetęsia pokalbio, bijo atsakomybės. Reikiami tikslumai buvo išgauti ir preciziškos detalės tilpo į reikiamą vietą. Rekomenduojame Lemara įmonėms, kurioms rūpi kokybė ir žmogiškas bendravimas.",
      },
      {
        id: 3,
        title: "UAB Vildoma, Virginijus",
        text: "Esame dėkingi už kokybiškai atliekamus užsakymus ir pažadėtų terminų laikymąsi",
      },
    ],
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
            label: "Equipment",
            href: "/capabilities",
          },
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
          { label: "General information", href: "/services/general" },
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
    index: {},
    turning: {
      t1: {
        heading: "CNC tekinimas",
        text: " CNC tekinimas yra viena iš paslaugų, kurias teikiame. Mes atliekame ištekinimą (kai apdirbami vidiniai detalės paviršiai), aptekinimą (kai apdirbami išoriniai detalės paviršiai), nutekinimas (kai apdirbami galiniai detalės paviršiai). Siūlome detalių tekinimo paslaugas iš plastiko, nerūdijančio plieno, aliuminio, vario, bronzos, ir daugelio kitų metalų. Mes gaminame varžtus, veržles, velenus, ritinėlius, ratukus, redukcinius perėjimus, ašis, įvores, tarpiklius, kaiščius, įvairias sujungimams skirtas detales ir kt. Jeigu nėra aišku, kokių parametrų detalės reikalingos jūsų gamybiniam sumanymui, arba nežinote, kokios rūšies metalą ar plastiką geriau naudoti jų gamybai, susisiekite su mūsų specialistais, kurie atsakys į visus klausimus.",
      },
      t2: { heading: "Techniniai staklių pajėgumai" },
    },
    milling: {
      t1: {
        heading: "CNC frezavimas",
        text: " CNC frezavimas yra viena iš paslaugų, kurias teikiame. Mes atliekame plokštumų frezavimą (kai tiesialinijine pastūma frezuojami plokšti paviršiai), apvalųjį frezavimą (kai apskritimine pastūma frezuojami cilindriniai paviršiai), sriegių frezavimą (kai sraigtine pastūma frezuojami sraigtiniai paviršiai), fasoninį frezavimą (kai frezos profilis išpjaunamas ruošinyje), kontūrinį frezavimą (kai formuojami tiek paprasti kontūrai tiek sudėtingi erdviniai paviršiai suteikiant staklėms valdomą pastūmą). Siūlome detalių frezavimo paslaugas iš plastiko, nerūdijančio plieno, aliuminio, vario, bronzos, ir daugelio kitų metalų. Jeigu nėra aišku, kokių parametrų detalės reikalingos jūsų gamybiniam sumanymui, arba nežinote, kokios rūšies metalą ar plastiką geriau naudoti jų gamybai, susisiekite su mūsų specialistais, kurie atsakys į visus klausimus.",
      },
      t2: { heading: "Techniniai staklių pajėgumai" },
    },
    design: {
      t1: {
        heading: "Projektavimas",
        text: "Projektavimas yra viena iš paslaugų, kurias teikiame. Projektuojame pagal detalės pavyzdį (kai turima detalė labai tiksliai išmatuojama, padaromi jos brėžiniai, sukuriamas kompiuterinis modelis),pagal pateiktą užduotį ir aprašymą, pagal Jūsų atsiūstą brėžinį. Brėžiniai turi atitikti vieną iš reikalingų formatų (step, dxf, dwg, x_t, x_b), turi būti nurodyta medžiaga, iš kurios bus gaminama detalė, naudojamas 1:1 mastelis, pjovimo kontūras pateiktas tiesioginio atsispindėjimo būdu, objektai pervesti į kreives, matmenys nurodyti milimerais. Brėžinyje negali būti susiliejimų, persidengimų, dvigubų linijų, nereikalingų taškų ir pan. Jei neturite brėžinio, mūsų projektuotojai tai atliks kokybiškai ir atsakingai. Kadangi net ir mažiausia klaida gali būti nekokybiško rezultato priežastis, todėl gautus failus mūsų specialistai visada patikrina.",
      },
    },
    general: { t1: {} },
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
          src: "/images/contacts/povilas.jpg",
        },
        {
          name: "Vytautas Puodžiūnas",
          responsibilities: "Gamybos Vadovas",
          email: "vytautas@lemara.lt",
          number: "+370 674 51761",
          src: "/images/contacts/vytautas.jpg",
        },
        {
          name: "Tadas Plungė",
          responsibilities: "Projektuotojas",
          email: "tadas@lemara.lt",
          number: "+370 647 64659",
          src: "/images/contacts/tadas.jpg",
        },
      ],
    },
    values: [
      {
        title: "Kokybė",
        description: "Garantuojame aukštą gaminių kokybę",
        src: "/images/values/1.png",
      },
      {
        title: "Greitis",
        description: "Detales pagaminame per trumpą laiką",
        src: "/images/values/3.png",
      },
      {
        title: "Tikslumas",
        description:
          "Modernios įrangos dėka, gaminiai pasižymi dideliu tikslumu ",
        src: "/images/values/2.png",
      },
      {
        title: "Atsakingumas",
        description: "Atsakingai gaminame net ir mažiausią užsakymą",
        src: "/images/values/4.png",
      },
    ],
    whyUs: {
      text1: {
        heading: "Kodėl turėtumėte pasirinkti mus?",
        text: `Esame jauni ir ambicingi savo srities profesionalai. Nuolatos
          plečiamės ir keliame darbuotojų kvalifikaciją. Visada užtikriname
          aukščiausios kokybės produktą, kurį atliekame per trumpiausią įmanomą
          laiką. pecializuojamės gaminant didelio tikslumo reikalaujančius
          elementus automatinėms ir robotizuotoms gamybos, apdirbimo linijoms,
          konvejeriams, tačiau atliekame ir kitus darbus. nuo 2016 metų
          sėkmingai gaminame detales didelėms Lietuvos ir užsienio kompanijoms.
 `,
      },
    },
    aboutUs: {
      text1: {
        heading: "Apie mus",
        text: `MB "Lemara" - metalo apdirbimo įmonė, teikianti CNC tekinimo ir frezavimo paslaugas. Specializuojamės gaminant didelio tikslumo reikalaujančius elementus automatinėms ir robotizuotoms gamybos, apdirbimo linijoms, konvejeriams. Mes dirbame su aliuminiu, nerūdijančiu plienu, plienu, variu, žalvariu, kitais metalais bei įvairiais plastikais. Bendradarbiaujame su daug partnerių, todėl su jų pagalba galime atlikti praktiškai visas įmanomas medžiagų apdirbimo operacijas, tokias kaip pjovimą viela, pjovimą vandeniu, pjovimą lazeriu, pjovimą plazma, pjovimą elektroerozija, šlifavimą, anodavimą, virinimą, lankstymą. Bendradarbiaujame tiek su Lietuvos, tiek su užsienio gamintojais. 2016 metais įkurta Lemara sparčiai plečiasi ir sėkmingai dirba tarptautiniu mastu.
 `,
      },
    },
    feedback: [
      {
        id: 1,
        title: "UAB Stelga, Marius",
        text: "Jauni, ambicingi savo sryties specialistai, puikiai žinanatys ir gebantys patarti ir spręsti iškilusias problemas. Greitas ir operatyvus reagavimas į paklausimus, visi projektai buvo įgyvendinti pagal sutartus gamybinius terminus.:)",
      },
      {
        id: 2,
        title: "UAB Lematec, Donatas",
        text: "Pasirinkome Lemara, nes didžioji dalis pamatę reikiamus tikslumus nebetęsia pokalbio, bijo atsakomybės. Reikiami tikslumai buvo išgauti ir preciziškos detalės tilpo į reikiamą vietą. Rekomenduojame Lemara įmonėms, kurioms rūpi kokybė ir žmogiškas bendravimas.",
      },
      {
        id: 3,
        title: "UAB Vildoma, Virginijus",
        text: "Esame dėkingi už kokybiškai atliekamus užsakymus ir pažadėtų terminų laikymąsi",
      },
    ],
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
    index: {},
    turning: {
      t1: {
        heading: "CNC tekinimas",
        text: " CNC tekinimas yra viena iš paslaugų, kurias teikiame. Mes atliekame ištekinimą (kai apdirbami vidiniai detalės paviršiai), aptekinimą (kai apdirbami išoriniai detalės paviršiai), nutekinimas (kai apdirbami galiniai detalės paviršiai). Siūlome detalių tekinimo paslaugas iš plastiko, nerūdijančio plieno, aliuminio, vario, bronzos, ir daugelio kitų metalų. Mes gaminame varžtus, veržles, velenus, ritinėlius, ratukus, redukcinius perėjimus, ašis, įvores, tarpiklius, kaiščius, įvairias sujungimams skirtas detales ir kt. Jeigu nėra aišku, kokių parametrų detalės reikalingos jūsų gamybiniam sumanymui, arba nežinote, kokios rūšies metalą ar plastiką geriau naudoti jų gamybai, susisiekite su mūsų specialistais, kurie atsakys į visus klausimus.",
      },
      t2: { heading: "Techniniai staklių pajėgumai" },
    },
    milling: {
      t1: {
        heading: "CNC frezavimas",
        text: " CNC frezavimas yra viena iš paslaugų, kurias teikiame. Mes atliekame plokštumų frezavimą (kai tiesialinijine pastūma frezuojami plokšti paviršiai), apvalųjį frezavimą (kai apskritimine pastūma frezuojami cilindriniai paviršiai), sriegių frezavimą (kai sraigtine pastūma frezuojami sraigtiniai paviršiai), fasoninį frezavimą (kai frezos profilis išpjaunamas ruošinyje), kontūrinį frezavimą (kai formuojami tiek paprasti kontūrai tiek sudėtingi erdviniai paviršiai suteikiant staklėms valdomą pastūmą). Siūlome detalių frezavimo paslaugas iš plastiko, nerūdijančio plieno, aliuminio, vario, bronzos, ir daugelio kitų metalų. Jeigu nėra aišku, kokių parametrų detalės reikalingos jūsų gamybiniam sumanymui, arba nežinote, kokios rūšies metalą ar plastiką geriau naudoti jų gamybai, susisiekite su mūsų specialistais, kurie atsakys į visus klausimus.",
      },
      t2: { heading: "Techniniai staklių pajėgumai" },
    },
    design: {
      t1: {
        heading: "Projektavimas",
        text: "Projektavimas yra viena iš paslaugų, kurias teikiame. Projektuojame pagal detalės pavyzdį (kai turima detalė labai tiksliai išmatuojama, padaromi jos brėžiniai, sukuriamas kompiuterinis modelis),pagal pateiktą užduotį ir aprašymą, pagal Jūsų atsiūstą brėžinį. Brėžiniai turi atitikti vieną iš reikalingų formatų (step, dxf, dwg, x_t, x_b), turi būti nurodyta medžiaga, iš kurios bus gaminama detalė, naudojamas 1:1 mastelis, pjovimo kontūras pateiktas tiesioginio atsispindėjimo būdu, objektai pervesti į kreives, matmenys nurodyti milimerais. Brėžinyje negali būti susiliejimų, persidengimų, dvigubų linijų, nereikalingų taškų ir pan. Jei neturite brėžinio, mūsų projektuotojai tai atliks kokybiškai ir atsakingai. Kadangi net ir mažiausia klaida gali būti nekokybiško rezultato priežastis, todėl gautus failus mūsų specialistai visada patikrina.",
      },
    },
    general: { t1: {} },
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
          src: "/images/contacts/povilas.jpg",
        },
        {
          name: "Vytautas Puodžiūnas",
          responsibilities: "Gamybos Vadovas",
          email: "vytautas@lemara.lt",
          number: "+370 674 51761",
          src: "/images/contacts/vytautas.jpg",
        },
        {
          name: "Tadas Plungė",
          responsibilities: "Projektuotojas",
          email: "tadas@lemara.lt",
          number: "+370 647 64659",
          src: "/images/contacts/tadas.jpg",
        },
      ],
    },
    values: [
      {
        title: "Kokybė",
        description: "Garantuojame aukštą gaminių kokybę",
        src: "/images/values/1.png",
      },
      {
        title: "Greitis",
        description: "Detales pagaminame per trumpą laiką",
        src: "/images/values/3.png",
      },
      {
        title: "Tikslumas",
        description:
          "Modernios įrangos dėka, gaminiai pasižymi dideliu tikslumu ",
        src: "/images/values/2.png",
      },
      {
        title: "Atsakingumas",
        description: "Atsakingai gaminame net ir mažiausią užsakymą",
        src: "/images/values/4.png",
      },
    ],
    whyUs: {
      text1: {
        heading: "Kodėl turėtumėte pasirinkti mus?",
        text: `Esame jauni ir ambicingi savo srities profesionalai. Nuolatos
          plečiamės ir keliame darbuotojų kvalifikaciją. Visada užtikriname
          aukščiausios kokybės produktą, kurį atliekame per trumpiausią įmanomą
          laiką. pecializuojamės gaminant didelio tikslumo reikalaujančius
          elementus automatinėms ir robotizuotoms gamybos, apdirbimo linijoms,
          konvejeriams, tačiau atliekame ir kitus darbus. nuo 2016 metų
          sėkmingai gaminame detales didelėms Lietuvos ir užsienio kompanijoms.
 `,
      },
    },
    aboutUs: {
      text1: {
        heading: "Apie mus",
        text: `MB "Lemara" - metalo apdirbimo įmonė, teikianti CNC tekinimo ir frezavimo paslaugas. Specializuojamės gaminant didelio tikslumo reikalaujančius elementus automatinėms ir robotizuotoms gamybos, apdirbimo linijoms, konvejeriams. Mes dirbame su aliuminiu, nerūdijančiu plienu, plienu, variu, žalvariu, kitais metalais bei įvairiais plastikais. Bendradarbiaujame su daug partnerių, todėl su jų pagalba galime atlikti praktiškai visas įmanomas medžiagų apdirbimo operacijas, tokias kaip pjovimą viela, pjovimą vandeniu, pjovimą lazeriu, pjovimą plazma, pjovimą elektroerozija, šlifavimą, anodavimą, virinimą, lankstymą. Bendradarbiaujame tiek su Lietuvos, tiek su užsienio gamintojais. 2016 metais įkurta Lemara sparčiai plečiasi ir sėkmingai dirba tarptautiniu mastu.
 `,
      },
    },
    feedback: [
      {
        id: 1,
        title: "UAB Stelga, Marius",
        text: "Jauni, ambicingi savo sryties specialistai, puikiai žinanatys ir gebantys patarti ir spręsti iškilusias problemas. Greitas ir operatyvus reagavimas į paklausimus, visi projektai buvo įgyvendinti pagal sutartus gamybinius terminus.:)",
      },
      {
        id: 2,
        title: "UAB Lematec, Donatas",
        text: "Pasirinkome Lemara, nes didžioji dalis pamatę reikiamus tikslumus nebetęsia pokalbio, bijo atsakomybės. Reikiami tikslumai buvo išgauti ir preciziškos detalės tilpo į reikiamą vietą. Rekomenduojame Lemara įmonėms, kurioms rūpi kokybė ir žmogiškas bendravimas.",
      },
      {
        id: 3,
        title: "UAB Vildoma, Virginijus",
        text: "Esame dėkingi už kokybiškai atliekamus užsakymus ir pažadėtų terminų laikymąsi",
      },
    ],
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
