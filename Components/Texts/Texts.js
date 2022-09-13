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
    footer: {
      rights: "MB „Lemara“ © 2022 Visos teisės saugomos",
      code: "Įmonės kodas: 304374938",
      pvmCode: "PVM mokėtojo kodas: LT100010561112",
      privacy: "Pivatumo politika",
      contacts: "Kontaktai",
      services: "Paslaugos",
      turning: "CNC Tekinimas",
      milling: "CNC Frezavimas",
      design: "Projektavimas",
    },
    index: {
      text1:
        "Lemara - preciziškai pagamintos detalės jūsų konstrukciniams sumanymams",
      text2:
        "Projektuojame ir gaminame pavienes detales, serijas ir jų prototipus. Išsirinkite tinkamas paslaugas, o jei turite klausimų,",
      text3: "susisiekite su mūsų specialistais",
      text4: "Atsiliepimai",
      values: [
        {
          title: "Kokybė",
          description: "Garantuojame aukštą gaminių kokybę",
          src: "/images/values/1.png",
          alt: "Kokybės ženklo logotipas",
          w: "45px",
          h: "47px",
        },
        {
          title: "Greitis",
          description: "Detales pagaminame per trumpą laiką",
          src: "/images/values/3.png",
          alt: "Greičio ženklo logotipas",
          w: "58px",
          h: "49px",
        },
        {
          title: "Tikslumas",
          description:
            "Modernios įrangos dėka, gaminiai pasižymi dideliu tikslumu ",
          src: "/images/values/2.png",
          alt: "Tikslumo ženklo logotipas",
          w: "56px",
          h: "56px",
        },
        {
          title: "Tvarumas",
          description: "Tausojame gamtą",
          src: "/images/values/4.png",
          alt: "Tvarumo ženklo logotipas",
          w: "53px",
          h: "58px",
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
        {
          id: 4,
          title: "UAB Roteksas, Viktorija",
          text: "Ieškojome CNC tekinimo- frezavimo mažų detalių gamybai. Radau tiesiog internetu ieškodama CNC mechaninio apdirbimo, pasirinkau, nes pagamino kelių detalių pavyzdukus- kokybės įvertinimui. Kokybė nenuvylė ir toliau užsakant tekinimo- frezavimo apdirbimą.",
        },
      ],
    },
    capabilities: {
      text1: "Tekinimo staklės",
      text2: "Frezavimo staklės",
      specifications: {
        text1: "Maksimalus ilgis",
        text2: "Maksimalus diametras",
        text3: "Darbinės apsukos",
        text4: "Aktyvūs įrankiai",
        text4: "Aktyvūs įrankiai",
        text5: "Darbinė zona",
        text6: "Maksimalus svoris",
      },
      mashines: [
        {
          name: "Doosan LYNX 2100LMB",
          type: "turning",
          lenght: "510 mm",
          diameter: "300 mm",
          revolutions: "4500 rpm",
          tools: "C ašis (frezavimas)",
          src: "/images/capabilities/2100LM.jpg",
          alt: "Doosan LYNX 2100LMB tekinimo staklių nuotrauka",
        },
        {
          name: "Doosan LYNX 2100LYB",
          type: "turning",
          lenght: "510 mm",
          diameter: "300 mm",
          revolutions: "4500 rpm",
          tools: "C ašis (frezavimas)",
          src: "/images/capabilities/2100LY.jpg",
          alt: "Doosan LYNX 2100LYB tekinimo staklių nuotrauka",
        },
        {
          name: "Okuma LB15",
          type: "turning",
          lenght: "500 mm",
          diameter: "250mm",
          revolutions: "4200 rpm",
          tools: "-",
          src: "/images/capabilities/LB15.jpg",
          alt: "Okuma LB15 tekinimo staklių nuotrauka ",
        },
        {
          name: "Doosan DNM 4500",
          type: "milling",
          zone: "800x450x510 mm",
          weight: "600 kg",
          revolutions: "12000 rpm",
          src: "/images/capabilities/DMN4500.jpg",
          alt: "Doosan DNM 4500 frezavimo staklių nuotrauka",
        },
        {
          name: "Leadwell V40M",
          type: "milling",
          zone: "1000x500x500 mm",
          weight: "800 kg",
          revolutions: "8000 rpm",
          src: "/images/capabilities/V40.jpg",
          alt: "Leadwell V40M frezavimo staklių nuotrauka",
        },
      ],
    },
    turning: {
      heading: "CNC tekinimas",
      text: " CNC tekinimas yra viena iš paslaugų, kurias teikiame. Mes atliekame ištekinimą (kai apdirbami vidiniai detalės paviršiai), aptekinimą (kai apdirbami išoriniai detalės paviršiai), nutekinimas (kai apdirbami galiniai detalės paviršiai). Siūlome detalių tekinimo paslaugas iš plastiko, nerūdijančio plieno, aliuminio, vario, bronzos, ir daugelio kitų metalų. Mes gaminame varžtus, veržles, velenus, ritinėlius, ratukus, redukcinius perėjimus, ašis, įvores, tarpiklius, kaiščius, įvairias sujungimams skirtas detales ir kt. Jeigu nėra aišku, kokių parametrų detalės reikalingos jūsų gamybiniam sumanymui, arba nežinote, kokios rūšies metalą ar plastiką geriau naudoti jų gamybai, susisiekite su mūsų specialistais, kurie atsakys į visus klausimus.",
    },
    milling: {
      heading: "CNC frezavimas",
      text: " CNC frezavimas yra viena iš paslaugų, kurias teikiame. Mes atliekame plokštumų frezavimą (kai tiesialinijine pastūma frezuojami plokšti paviršiai), apvalųjį frezavimą (kai apskritimine pastūma frezuojami cilindriniai paviršiai), sriegių frezavimą (kai sraigtine pastūma frezuojami sraigtiniai paviršiai), fasoninį frezavimą (kai frezos profilis išpjaunamas ruošinyje), kontūrinį frezavimą (kai formuojami tiek paprasti kontūrai tiek sudėtingi erdviniai paviršiai suteikiant staklėms valdomą pastūmą). Siūlome detalių frezavimo paslaugas iš plastiko, nerūdijančio plieno, aliuminio, vario, bronzos, ir daugelio kitų metalų. Jeigu nėra aišku, kokių parametrų detalės reikalingos jūsų gamybiniam sumanymui, arba nežinote, kokios rūšies metalą ar plastiką geriau naudoti jų gamybai, susisiekite su mūsų specialistais, kurie atsakys į visus klausimus.",
    },
    design: {
      heading: "Projektavimas",
      text: "Projektavimas yra viena iš paslaugų, kurias teikiame. Projektuojame pagal detalės pavyzdį (kai turima detalė labai tiksliai išmatuojama, padaromi jos brėžiniai, sukuriamas kompiuterinis modelis),pagal pateiktą užduotį ir aprašymą, pagal Jūsų atsiūstą brėžinį. Brėžiniai turi atitikti vieną iš reikalingų formatų (step, dxf, dwg, x_t, x_b), turi būti nurodyta medžiaga, iš kurios bus gaminama detalė, naudojamas 1:1 mastelis, pjovimo kontūras pateiktas tiesioginio atsispindėjimo būdu, objektai pervesti į kreives, matmenys nurodyti milimerais. Brėžinyje negali būti susiliejimų, persidengimų, dvigubų linijų, nereikalingų taškų ir pan. Jei neturite brėžinio, mūsų projektuotojai tai atliks kokybiškai ir atsakingai. Kadangi net ir mažiausia klaida gali būti nekokybiško rezultato priežastis, todėl gautus failus mūsų specialistai visada patikrina.",
    },
    general: {
      text1: "Bendra informacija",
      text2: "Maksimalus ir minimalus užsakomas detalių kiekis",
      text3:
        "Dažniausiai vykdome užsakymus mažų ar vidutinių gaminių serijų, kurias sudaro 1-500 vienetų detalių. Kuo didesnis kiekis, tuo mažesnė vieno vieneto kaina, todėl finansiniu atžvilgiu visada taupesni yra didesni užsakymai. Žinoma, jeigu jums reikia tik vienos detalės, mes pagaminsime tik vieną detalę. Jeigu jums reikia vienos detalės ir skubiai, mes pasistengsime pagaminti tą išganingąją detalę skubiai. Juk būna, kad dėl vienos mažos detalytės trūkumo ima ir sustoja visas gamybos cechas. Turite skubų, grafike nenumatytą atvejį? Susisiekite su mumis. Pasistengsime padėti – juk taip gera pradžiuginti savo klientus! Detales ne tik gaminame, bet ir taisome Mūsų staklės pajėgios ne tik naujas detales „kepti“, bet ir taisyti / restauruoti senas, taip pat gaminti prototipus.",
      text4: "Per kiek laiko gausite savo detales?",
      text5:
        "Paprastai užsakymus įvykdome per ne daugiau kaip 20 darbo dienų nuo paslaugų teikimo sutarties pasirašymo. Jei klientas savo užsakymą nori gauti greičiau, tai taip pat įmanoma. Gamybos laikas labai priklauso nuo jau turimų ir vykdomų užsakymų kiekio, medžiagų tiekimo grafiko ir serijos dydžio.",
      text6: "Detalių medžiagos: iš ko mes jas gaminame?",
      text7:
        "Populiariausios medžiagos yra aliuminis, metalas, plastikas. Kiekvienos medžiagos savybės skirtingos, todėl dirbant su jomis, reikia žinoti tam tikrus niuansus. Aliuminis yra minkštas, lengvas, atsparus karščiui, lengvai apdirbamas. Jis nerūdija ir puikiai tinka su kitomis medžiagomis. Metalas yra pigesnis už aliuminį, tačiau jis sunkiau pasiduoda apdorojimui, nes yra tvirtas, stiprus. Deja, šiai medžiagai būtina apsauga nuo korozijos – dažymas ar specialus apsauginis cheminis sluoksnis. Plastikas taip pat dažnai įvairiausioms detalėm naudojama medžiaga. Ją lengva formuoti, ji lengva, nerūdijanti, atspari drėgmei, gali būti įvairių spalvų ir pan.",
      text8: "Nuo ko priklauso galutinė kaina?",
      text9:
        "Galutinę kainą lemia: detalės sudėtingumas; reikalavimai detalės matmenų tikslumui, paviršiaus švarumui, eometrijai; medžiagos, iš kurios gaminama detalė, kaina, medžiagos kietumas, tamprumas, specifinių apdirbimo rankių naudojimo būtinybė, partijos dydis (detalių kiekis).  Detalių kainos taip pat susijusios su projektavimu, programavimu, staklių suderinimu. Ši gamybos dalis išeikvoja tuos pačius resursus tiek gaminant 1, tiek ir 500 detalių. Todėl jums, kaip klientui, visada ekonomiškiau užsakyti kuo didesnį kiekį. Mes rekomenduojame, kad jis būtų ne mažesnis nei 10 vienetų.",
      text10: "Kaip atsiimti pagamintas detales?",
      text11:
        "Detalių CNC frezavimą atliekame Vilniuje, tačiau užsakymai priimami iš visos Lietuvos ir iš kitų valstybių. Detales siunčiame, o siuntimo kaina priklauso nuo atstumo bei užsakymo skubumo.",
      text12: "Protingas medžiagų likučių panaudojimas",
      text13:
        "Tvarumo principai užtikrintai skinasi kelią į įvairias gamybos sritis. Mes taip pat visada stengiamės apgalvoti visą savo veiklą taip, kad sukurtume kuo mažiau atliekų (beje, taip net dar ir sutaupome tiek savo, tiek klientų išlaidas). Niekada neišmetame medžiagų likučių, jei tik yra galimybė juos panaudoti mažesniems užsakymams, o visas nepanaudotas atliekas atiduodame perdirbimui.",
      text14: "CNC tekinimas",
      text15:
        "CNC staklės – įrenginys, kurį pagal operatoriaus nustatytas programas valdo kompiuteris. Tekinimas vyksta sukant ruošinį aplink savo ašį bei liečiant jį įrankiais (peiliais), kurie nupjauna / pašalina nereikalingas medžiagos dalis. Taip suformuojama norima forma, kuri yra apvali ir simetriška. Sustabdžius sukimą atskiru aktyviu įrankiu suformuojamos reikiamos nesimetrinės formos dalys. Tekinimo paslaugas atlikti mums padeda modernios japoniškos CNC staklės OKUMA LB15 (OKUMA prekės ženklas yra vienas brangiausių pasaulyje tarp CNC įrangos gamintojų) ir naujesnės už jas, itin tikslios Doosan LYNX 2100 LYB ir Doosan LYNX 2100 LMB turinčios aktyvius įrankius, kurie suteikia daugiau galimybių. Šie nepavargstantys ir ypatingai savo darbą mylintys „darbuotojai“ tiesiog apsėsti tikslumu bei tik ir laukia, kol gaus „pakramtyti“ metalo ar plastiko bei sukurti iš jo mūsų klientų lūkesčius atitinkančias detales. CNC tekinimo būdu iš metalo ar plastiko gaminamos cilindrinės, kūginės, sferinės, fasoninės detalės, apdirbami jų galiniai plokšti paviršiai.",
      text16:
        "Moderni įranga užtikrina greitį ir tikslumą. CNC tekinimo staklės – moderni šiuolaikinė įranga, kuri pagal kompiuterinės programos nustatytus išmatavimus ištekina itin tikslias detales iš plastiko, metalo ar kitų medžiagų. Pagal tą pačią programinę užduotį pagamintos detalės būna maksimaliai tikslios ir identiškos. Iš metalo pagamintos detalės tvirtesnės, tačiau iš plastiko – lengvesnės. Medžiagos parinkimas priklauso nuo to, kur jos bus naudojamos.",
      text17:
        "Jūs gaunate iš mūsų tikslius CNC (computer numerical control, o lietuviškai kompiuterinis skaitmeninis valdymas) detalių tekinimo darbus mažomis arba vidutinėmis serijomis savo projektų įgyvendinimui. Priimame ir vienetinius užsakymus, gaminame prototipus.",
      text18: "CNC frezavimas",
      text19:
        "Frezavimas – vienas iš mechaninio medžiagų apdirbimo būdų, kai darbo įrankis (freza) sukdamasis nupjauna nuo apdorojamo ruošinio paviršiaus nustatyto dydžio drožlę. Frezuojant galima išlyginti ruošinio paviršių, išpjauti jame įvairių formų, gylių ir profilių griovelius, formuoti nuožulnumus, fasoninius paviršius.",
      text20:
        "CNC – angliško žodžių junginio computer numerical control trumpinys. Na, o CNC frezavimas – tai įvairių detalių gamyba frezavimo staklėmis, kurias pagal užduotas programas valdo kompiuteris. Šitaip apdoroti galima įvairias medžiagas: plastiką, medį, metalus ir t. t. Du pagrindiniai tokios detalių gamybos privalumai yra greitis (iki 20000 mm / min.) ir tikslumas.",
      text21: "Dar daugiau privalumų:",
      text22: "detales galima apdoroti nustatytu gyliu;",
      text23: "galima pjauti didelio storio medžiagų ruošinius;",
      text24: "galima naudoti skirtingų dydžių ir tipų įrankius išpjovimui;",
      text25:
        "galima apdoroti įvairias medžiagas (plastiką, medieną ir iš jos pagamintas medžiagas, įvairius metalus ir pan.), kiekvienai jų parenkant tinkamus įrankius ir taip išgaunant maksimalų našumą ir kokybę;",
      text26:
        "galima pagaminti tiek paprastas detales, tiek itin sudėtingas, dirbant tiek 2D, tiek 3D formatais;",
      text27: "detalės išpjaunamos itin tiksliai;",
      text28: "labai sumažėja šitokiu būdu pagamintų detalių kaina;",
      text29: "galima pagaminti neribotą kiekį identiškų detalių;",
      text30:
        "galima gaminti tiek technines, tiek dekoratyvias detales, reikalingas pačioms įvairiausioms sritims: reklamos gamybai, baldų pramonei, interjero dekoravimui, santechnikai, maisto gamybos įrangai ir t. t.",
      text31:
        "Visi šie privalumai nulėmė, jog CNC frezavimas šiuo metu yra vienas populiariausių metalo apdirbimo metodų.",
      text32: "Kaip vyksta CNC frezavimas?",
      text33:
        "Pasiruošimo etapas. Tai reikšminga, atsakinga ir pati ilgiausia detalių gamybos dalis. Operatorius įkelia technologo pagal brėžinį (kliento atsiųstą failą) paruoštą programą į staklių valdiklį, surenka reikalingus įrankius, įtvirtina medžiagos ruošinį, nustato ruošinio nulinį tašką. Visa tai gali užtrukti ir pusvalandį, ir net kelias valandas, atsižvelgiant į galutinio gaminio sudėtingumą.",
      text34:
        "Detalės / -ių išpjovimas. Šiame etape operatorius tiesiogiai nebedalyvauja, kadangi staklės tiesiog darbuojasi pagal joms užduotą programą. Tai gali užtrukti nuo kelių minučių iki kelių dešimčių valandų – viskas priklauso nuo gaminio sudėtingumo.",
      text35: "Kokių detalių frezavimo paslaugas siūlome",
      text36:
        "Dažniausiai frezuojamos detalės forma būna artima stačiakampiui gretasieniui, cilindrui ar sferai, tačiau galima suformuoti detales ir su sudėtingais erdviniais paviršiais. Pradinis ruošinio kontūras išgaunamas liejant, štampuojant, atpjaunant (tai priklauso, iš kokios medžiagos gaminama detalė). Detalių matmenys taip pat labai įvairūs: nuo kelių iki kelių šimtų milimetrų (tačiau negali viršyti staklių darbinės zonos matmenų ir maksimalios ruošinio masės).",
      text37:
        "Be tokių preciziškai išfrezuotų detalių neįsivaizduojama įmonių, gaminančių įrangą maisto pramonei, transportui, laboratorijoms, automobilių gamybai, robotikai ir t. t. Beje, mūsų numylėtų CNC frezavimo staklių detalės juk taip pat kažkada buvo frezuotos panašiose staklėse.",
      text38: "CNC dalys: jų projektavimas ir gamyba",
      text39: "Detalės projektuojamos ir gaminamos mūsų ceche",
      text40:
        "Projektuojame ir gaminame įvairius gaminius iš metalo ir plastiko. Specializuojamės gaminant didelio tikslumo reikalaujančius elementus automatinėms ir robotizuotoms gamybos, apdirbimo linijoms, konvejeriams. Itin didelio tikslumo CNC staklėms įkandamos pačios preciziškiausios užduotys ir įvairios medžiagos. Populiariausia metalinių ir plastikinių detalių gamyba, tačiau gali būti naudojamos ir kitokios medžiagos.",
      text41:
        "Skirtingų gamybos procesų ir technologijų reikalaujančios detalės gaminamos keliais etapais",
      text42:
        "Sudėtingos detalės gaminamos pasitelkiant skirtingas technologijas. Pavyzdžiui, detalė gali būti iš pradžių ištekinama, o vėliau perkeliama į kitas stakles frezavimui. Taip pat iš pradžių gali būti lazeriu išpjaunamas ruošinys, vėliau jis frezuojamas, o paskui šlifuojamas abrazyvinėmis granulėmis. Visi šie gamybiniai etapai turi būti atliekami teisingu, iš anksto numatytu eiliškumu ir kontroliuojami.",
      text43: "Kaip vyksta CNC detalių projektavimas?",
      text44:
        "Pagal detalės pavyzdį, kai turima detalė labai tiksliai išmatuojama, padaromi jos brėžiniai, sukuriamas kompiuterinis modelis. Šis metodas vadinamas atvirkštine inžinerija (reverse ingeneering). Pagal pateiktą užduotį ir aprašymą. Jeigu nėra aprašymo, o detalės atgabenti pas mus nėra galimybių (negalima išmontuoti), jos apžiūrėti ir išmatuoti - keliaujame patys.",
      text45:
        "Kaip greitai paruošiamas gaminio projektas ir pagaminamas pats gaminys?",
      text46:
        "CNC staklėse įvairių įrenginių dalys ir kitos detalės gimsta labai sparčiai, tačiau visa projektavimo ir gamybos trukmė priklauso nuo sudėtingumo ir nuo mūsų staklių užimtumo. Taigi viskas gali užtrukti ir vieną valandą ir keletą savaičių.",
      text47:
        "Ar galima pagaminti tik vieną detalę (prototipą) ir kiek tai kainuoja?",
      text48:
        "Taip, žinoma, gaminame tiek vieną, tiek daugiau. Galime suprojektuoti detalės kompiuterinį 3D modelį, pateikti brėžinius 2D variante. Gaminame prototipus testavimui pagal projektą. Kaina priklauso nuo sudėtingumo. Suprantama, vienos detalės gamyba visada bus brangesnė, nei dviejų tokių pačių.",
      text49:
        "O jei konkrečios detalės gamybai neturime reikiamų apdirbimo priemonių?",
      text50:
        "Net ir tokiu atveju jūsų detalė bus preciziškai pagaminta. Bendradarbiaujame su daug partnerių, todėl su jų pagalba galime atlikti praktiškai visas įmanomas medžiagų apdirbimo operacijas: frezavimą, tekinimą, pjovimą viela, pjovimą vandeniu, pjovimą lazeriu, pjovimą plazma, pjovimą elektroerozija, šlifavimą, anodavimą, virinimą, lankstymą ir kt.",
    },
    career: {
      text1: "Karjeros galimybės",
      text2: "Darbo pobūdis",
      text3: "Reikalavimai darbuotojui",
      text4: "Mes siūlome",
      text5: "Atlyginimas",
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
            "Darbo patirtis su Fusion 365, Solidworks, Siemens / Fanuc valdymo pultais privalumas",
          ],
          offer: [
            "Įdomų darbą pažangioje, jaunatviškoje įmonėje",
            "Organizuojami kursai profesiniam tobulėjimui",
            "Visada laiku mokamą atlyginimą",
            "Karjeros galimybes",
          ],
          salary: ["1000-1400 €/mėn. į rankas"],
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
            "Darbo patirtis su Fusion 365, Solidworks, Siemens / Fanuc valdymo pultais privalumas",
          ],
          offer: [
            "Įdomų darbą pažangioje, jaunatviškoje įmonėje",
            "Organizuojamus kursus profesiniam tobulėjimui",
            "Visada laiku mokamą atlyginimą",
            "Karjeros galimybes",
          ],
          salary: ["1000-1400 €/mėn. į rankas"],
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
          salary: ["Nuo 1300 €/mėn. į rankas + priedai pagal rezultatus"],
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
          salary: ["Pagal susitarimą"],
        },
      ],
    },
    contacts: {
      text1: "Susisiekite su mumis",
      text2: "Žinutė sėkmingai išsiūsta",
      text3: "Žinutė neišsiūsta 🤔",
      text4: "Jūsų vardas",
      text5: "El. paštas",
      text6: "Telefono numeris",
      text7: "Žinutė",
      text8: "Siūsti žinutę",
      cards: [
        {
          name: "Povilas Vilimas",
          responsibilities: "Direktorius",
          email: "povilas@lemara.lt",
          number: "+370 646 57845",
          src: "/images/contacts/povilas.jpg",
          alt: "Povilo Vilimo, MB Lemara direktoriaus nuotrauka",
        },
        {
          name: "Vytautas Puodžiūnas",
          responsibilities: "Gamybos Vadovas",
          email: "vytautas@lemara.lt",
          number: "+370 674 51761",
          src: "/images/contacts/vytautas.jpg",
          alt: "Vytauto Puodžiūno, MB Lemara gamybos vadovo nuotrauka",
        },
        {
          name: "Tadas Plungė",
          responsibilities: "Projektuotojas",
          email: "tadas@lemara.lt",
          number: "+370 647 64659",
          src: "/images/contacts/tadas.jpg",
          alt: "Tabo Plungės, MB Lemara projektuotojo nuotrauka",
        },
      ],
    },
    privacy: {
      text1: "Privatumo politika",
      text2:
        "Šioje privatumo politikoje (toliau – Privatumo politika) Jums pateikiame informaciją, kaip MB Lemara, juridinio asmens kodas 304374938, registruotos buveinės adresas Pasagų g. 4, Riešė, Vilniaus rajono savivaldybė, Lietuva (toliau – Duomenų valdytojas) tvarko Jūsų asmens duomenis https://www.lemara.lt internetinėje svetainėje. Su Duomenų valdytoju galite susisiekti šiais kontaktais:",
      text3: "Su Duomenų valdytoju galite susisiekti šiais kontaktais:",
      text4: "Kam galime perduoti Jūsų asmens duomenis?",
      text5:
        "Mes galime perduoti informaciją apie Jus mūsų darbuotojams, tarpininkams, paslaugų teikėjams, tokiems kaip skolų administravimą ar išieškojimą vykdančioms įmonėms, archyvavimo paslaugas teikiančioms įmonėms, teisines, rinkodaros paslaugas, IT paslaugas teikiantiems asmenims ar subrangovams, jei pagrįstai reikia tiems tikslams, kaip nurodyta šioje Privatumo politikoje. Taip pat mes galime atskleisti informaciją apie Jus, jei turime padaryti tai pagal įstatymą arba siekdami apginti savo teises ar interesus (įskaitant Jūsų asmens duomenų pateikimą tretiesiems asmenims, siekiant išieškoti Jūsų įsiskolinimus mums), taip pat ketinant perleisti bendrovės veiklos ar jos turto dalį ar reorganizuoti bendrovę ar vykdant šiuos procesus, atskleidžiant Jūsų asmens duomenis (potencialiam) veiklos ar jos dalies įgijėjui, kitiems reorganizavimo dalyviams.",
      text6: "Kaip tvarkomi Jūsų asmens duomenys?",
      text7:
        "Jūsų asmens duomenys bus tvarkomi laikantis Bendrojo duomenų apsaugos reglamento (toliau – BDAR), Lietuvos Respublikos asmens duomenų teisinės apsaugos įstatymo bei kitų teisės aktų nustatytų reikalavimų. Duomenų valdytojas, tiek nustatydamas asmens duomenų tvarkymo priemones, tiek paties duomenų tvarkymo metu, įgyvendina tinkamas teisės aktuose nustatytas duomenų apsaugos technines ir organizacines priemones, skirtas apsaugoti tvarkomus asmens duomenis nuo atsitiktinio ar neteisėto sunaikinimo, sugadinimo, pakeitimo, praradimo, atskleidimo, taip pat nuo bet kokio kito neteisėto tvarkymo. Atitinkamos priemonės nustatomos atsižvelgiant į pavojus, kurie kyla dėl asmens duomenų tvarkymo.",
      text8: "Kokios yra Jūsų teisės?",
      text9:
        "Žemiau pateikiame informaciją apie Jūsų teises, susijusias su Duomenų valdytojo vykdomu Jūsų asmens duomenų tvarkymu, ir atvejus, kada šiomis teisėmis galite pasinaudoti. Jei norite gauti daugiau informacijos apie savo teises ar jas įgyvendinti, susisiekite su mumis šioje Privatumo politikoje nurodytu el. pašto adresu.",
      text10:
        "Jūs galite bet kada susisiekti su mumis ir pasiteirauti, ar mes tvarkome kokius nors Jūsų asmens duomenis. Jei mes saugome ar bet kokiu būdu naudojame Jūsų asmens duomenis, Jūs turite teisę su jais susipažinti. Norėdami tai padaryti, pateikite mums rašytinį prašymą šioje Privatumo politikoje nurodytu el. pašto adresu. Mes Jūsų prašymo įvykdymo tikslu galime Jūsų paprašyti patvirtinti savo asmens tapatybę. Teikdami tokį prašymą, laikykitės sąžiningumo ir protingumo principų.",
      text11:
        "Jei esate pateikę mums sutikimą dėl Jūsų duomenų tvarkymo, jį galite bet kada atšaukti šioje Privatumo politikoje nurodytu el. pašto adresu.",
      text12:
        "Jūs turite teisę prašyti mūsų ištaisyti bet kokius turimų duomenų netikslumus. Tokiu atveju mes galime paprašyti Jūsų patvirtinti ištaisytą informaciją.",
      text13:
        "Jūs turite teisę prašyti mūsų ištrinti Jūsų asmens duomenis. Ši teisė įgyvendinama BDAR 17 straipsnyje numatytais atvejais.",
      text14:
        "ūs turite teisę prašyti mūsų riboti Jūsų asmens duomenų tvarkymą arba jų netvarkyti.",
      text15:
        "Jūs turite teisę į duomenų, kurie tvarkomi automatizuotomis priemonėmis ir kuriuos iš Jūsų gavome Jums sutinkant arba sutarties sudarymo tikslais, perkėlimą. Jums pasinaudojus šia teise, Jūsų prašymu perkelsime Jūsų pateiktų duomenų kopiją.",
      text16:
        "Jūs turite teisę BDAR 21 str. nustatyta tvarka nesutikti, kad mes naudotumėme Jūsų asmens duomenis.",
      text17: "Kaip galite įgyvendinti savo teises?",
      text18:
        "Siekdami įgyvendinti savo teises, prašymus, skundus ar reikalavimus pateikite mums raštu šioje Privatumo politikoje nurodytais kontaktais. Į gautus prašymus, skundus ar reikalavimus Jums atsakysime raštu teisės aktų nustatyta tvarka ir terminais. Stengiamės pateikti Jums informaciją kiek įmanoma greičiau, bet ne vėliau kaip per 30 dienų nuo Jūsų prašymo gavimo. Jeigu, gavus prašymą, skundą ar reikalavimą, mums kils įtarimų dėl besikreipiančiojo asmens tapatybės, mes turime teisę paprašyti besikreipiančiojo asmens tapatybės dokumento.",
      text19: "Nusiskundimai",
      text20:
        "Jei manote, kad Jūsų, kaip duomenų subjekto, teisės yra ir (ar) gali būti pažeistos, prašome nedelsiant kreiptis į mus šioje Privatumo politikoje nurodytu el. paštu. Mes užtikriname, kad tik gavus Jūsų skundą susisieksime su Jumis per pagrįstą laikotarpį ir informuosime apie skundo tyrimo eigą, o vėliau ir apie rezultatą. Jei tyrimo rezultatai Jūsų netenkins, galėsite pateikti skundą priežiūros institucijai – Valstybinei duomenų apsaugos inspekcijai (www.vdai.lrv.lt/).",
      text21: "Atsakomybė",
      text22:
        "Jūs esate atsakingi už tai, kad Jūsų mums pateikti duomenys būtų tikslūs, teisingi ir išsamūs. Jeigu pasikeičia Jūsų pateikti duomenys, Jūs turite nedelsdami mus apie tai informuoti el. paštu. Mes jokiu atveju nebūsime atsakingi už žalą, atsiradusią Jums dėl to, jog Jūs nurodėte neteisingus ar neišsamius asmens duomenis arba neinformavote mūsų jiems pasikeitus. Privatumo politika atnaujinta 2021 m. gruodžio 10 d.",
      text23:
        "Ši Privatumo politika sukurta Glimstedt doke. Advokatų kontorai Glimstedt priklauso visos autorių teisės į Privatumo politiką, ji suteikia teisę MB Lemara naudoti Privatumo politiką savo internetinėje svetainėje http://www.lemara.lt. Kopijuoti ar kitaip naudoti Privatumo politiką ar jos dalį be advokatų kontoros Glimstedt rašytinio sutikimo draudžiama.",
    },
    images: {
      logo: "/images/logo/logo2.png",
      logoAlt: "MB Lemara logotipas",
      navBgTexture: "/images/background/navBg1.png",
      bgTexture: "/images/background/aboutBg.png",
      galleryBgTexture: "/images/background/galleryBg.png",
      mainImage: "/images/background/main1a.webp",
      whyUsImage: "/images/home/whyUs.jpg",
      whyUsImageAlt: "Gaminio, pagaminto CNC frezavimo būdu, nuotrauka",
      aboutUsImage: "/images/home/aboutUs.jpg",
      aboutUsImageAlt: "Lemara kolektyvo nuotrauka",
      turningImage: "/images/turning/t5.jpg",
      turningImageAlt: "CNC tekinimo staklių nuotrauka",
      millingImage: "/images/milling/m1.jpg",
      millingImageAlt: "CNC frezavimo staklių nuotrauka",
      designImage: "/images/design/d1.jpg",
      designImageAlt: "Dizainerio nuotrauka",
      galleryTurningAlt: "Detalė pagaminta CNC tekinimo arba frezavimo būdu",
      galleryMillingAlt: "Detalė pagaminta CNC frezavimo būdu",
    },
    meta: {
      text1: "Lemara CNC Detalių Gamyba",
      text2:
        "CNC detalių gamyba: jų projektavimas, tekinimas, frezavimas iš plastiko ir metalo.",
      text3: "Lemara CNC Tekinimas",
      text4:
        "Informacija apie CNC tekinimą, medžiagas, su kuriomis dirbame, detales, kurias galime pagaminti.",
      text5: "Lemara CNC Frezavimas",
      text6:
        "Informacija apie CNC frezavimą, medžiagas, su kuriomis dirbame, detales, kurias galime pagaminti.",
      text7: "Lemara CNC Detalių Projektavimas",
      text8: "Informacija apie CNC detalų projektavimo paslaugą",
      text9: "Lemara Bendra Informacija",
      text10:
        "Bendra informacija apie MB Lemara, CNC detalių gamybą, tekinimą, frezavimą, projektavimą, užsakymų reikalavimus, pristatymą ir kt.",
      text11: "Lemara Įrengimai",
      text12:
        "Lemara turimos CNC tekinimo ir frezavimo įrangos ir techninių specifikacijų bei techninių galimybių puslapis.",
      text13: "Lemara Galerija",
      text14:
        "Lemara galerijoje galite rasti detalių pavyzdžių,  kurias pagamino Lemara CNC tekinimo ir frezavimo specialistai.",
      text15: "Lemara Karjeros galimybės",
      text16:
        "Jei ieškote darbo CNC detalių gamybos srityje - užsukite į Lemara karjeros puslapį",
      text17: "Lemara Kontaktai",
      text18:
        "Jei norite susisiekti su Lemara specialistais - šiame puslapyje rasite visus būtiniausius kontaktus.",
      text19: "Lemara Privatumo Politika",
      text20: "Informacija apie MB Lemara privatumo politiką.",
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
            label: "Designing",
            href: "/services/design",
          },
          { label: "General information", href: "/services/general" },
        ],
      },
      {
        label: "Machines",
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
    footer: {
      rights: "MB Lemara © 2022 All rights reserved",
      code: "Company code: 304374938",
      pvmCode: "VAT payer code: LT100010561112",
      privacy: "Privacy policy",
      contacts: "Contacts",
      services: "Services",
      turning: "CNC Turning",
      milling: "CNC Milling",
      design: "Designing",
    },
    index: {
      text1:
        "Lemara - precisely manufactured parts for your construction ideas",
      text2:
        "We design and manufacture individual parts, series and their prototypes. Choose the right services, and if you have any questions,",
      text3: "contact our specialists",
      text4: "Reviews",
      values: [
        {
          title: "Quality",
          description: "We guarantee high product quality",
          src: "/images/values/1.png",
          alt: "Quality sign logo",
          w: "45px",
          h: "47px",
        },
        {
          title: "Speed",
          description: "We produce parts in a short time",
          src: "/images/values/3.png",
          alt: "Speed dign logo",
          w: "58px",
          h: "49px",
        },
        {
          title: "Accuracy",
          description:
            "Thanks to modern equipment, the products are characterized by high accuracy",
          src: "/images/values/2.png",
          alt: "Accuracy sign logo",
          w: "56px",
          h: "56px",
        },
        {
          title: "Sustainability",
          description: "We protect nature",
          src: "/images/values/4.png",
          alt: "Sustainability sign logo",
          w: "53px",
          h: "58px",
        },
      ],
      whyUs: {
        text1: {
          heading: "Why should you choose us?",
          text: "We are young and ambitious professionals in our field. We are constantly expanding and raising the qualifications of our employees. We always ensure the highest quality product, which we do in the shortest possible time. we specialize in the production of elements requiring high precision for automatic and robotic production, processing lines, conveyors, but we also perform other works. since 2016, we have been successfully producing parts for large Lithuanian and foreign companies.",
        },
      },
      aboutUs: {
        text1: {
          heading: "About us",
          text: `MB "Lemara" is a metal processing company that provides CNC turning and milling services. We specialize in the production of elements requiring high precision for automatic and robotic production, processing lines and conveyors. We work with aluminum, stainless steel, steel, copper, brass, other metals and various plastics. We cooperate with many partners, so with their help we can perform practically all possible material processing operations, such as wire cutting, water cutting, laser cutting, plasma cutting, electroerosion cutting, grinding, anodizing, welding, bending. We cooperate with both Lithuanian and foreign manufacturers. Founded in 2016, Lemara is rapidly expanding and successfully working internationally.
 `,
        },
      },
      feedback: [
        {
          id: 1,
          title: "UAB Stelga, Marius",
          text: "Young, ambitious specialists in their field, well-informed and able to advise and solve problems. Quick and prompt response to inquiries, all projects were implemented according to the agreed production terms. :)",
        },
        {
          id: 2,
          title: "UAB Lematec, Donatas",
          text: "We chose Lemara because most of them don't continue the conversation when they see the necessary details, they are afraid of responsibility. The required accuracies were obtained and the precise parts fit in the right place. We recommend Lemara to companies that care about quality and human interaction.",
        },
        {
          id: 3,
          title: "UAB Vildoma, Virginijus",
          text: "We are grateful for the quality of the orders and the adherence to the promised deadlines",
        },
        {
          id: 4,
          title: "UAB Roteksas, Viktorija",
          text: "We were looking for CNC turning-milling for the production of small parts. I found it simply by looking for CNC machining on the Internet, I chose it because they produced samples of several parts - for quality evaluation. The quality did not disappoint and continued to order turning-milling processing.",
        },
      ],
    },
    capabilities: {
      text1: "Turning machines",
      text2: "Milling machines",
      specifications: {
        text1: "Maximum length",
        text2: "Maximum diameter",
        text3: "Working revolutions",
        text4: "Active tools",
        text5: "Working area",
        text6: "Maximum weight",
      },
      mashines: [
        {
          name: "Doosan LYNX 2100LMB",
          type: "turning",
          lenght: "510 mm",
          diameter: "300 mm",
          revolutions: "4500 rpm",
          tools: "C axis (milling)",
          src: "/images/capabilities/2100LM.jpg",
          alt: "Photo of Doosan LYNX 2100LMB turning machine",
        },
        {
          name: "Doosan LYNX 2100LYB",
          type: "turning",
          lenght: "510 mm",
          diameter: "300 mm",
          revolutions: "4500 rpm",
          tools: "C axis (milling)",
          src: "/images/capabilities/2100LY.jpg",
          alt: "Photo of Doosan LYNX 2100LYB turning machine",
        },
        {
          name: "Okuma LB15",
          type: "turning",
          lenght: "500 mm",
          diameter: "250mm",
          revolutions: "4200 rpm",
          tools: "-",
          src: "/images/capabilities/LB15.jpg",
          alt: "Photo of Okuma LB15 turning machine",
        },
        {
          name: "Doosan DNM 4500",
          type: "milling",
          zone: "800x450x510 mm",
          weight: "600 kg",
          revolutions: "12000 rpm",
          src: "/images/capabilities/DMN4500.jpg",
          alt: "Photo of Doosan DNM 4500 milling machine",
        },
        {
          name: "Leadwell V40M",
          type: "milling",
          zone: "1000x500x500 mm",
          weight: "800 kg",
          revolutions: "8000 rpm",
          src: "/images/capabilities/V40.jpg",
          alt: "Photo of Leadwell V40M milling machine",
        },
      ],
    },
    turning: {
      heading: "CNC Turning",
      text: " CNC Turning is one of the services we provide. We perform reaming (when the internal surfaces of the part are processed), surfacing (when the external surfaces of the part are processed), draining (when the back surfaces of the part are processed). We offer turning services for parts made of plastic, stainless steel, aluminum, copper, bronze, and many other metals. We manufacture screws, nuts, shafts, rollers, wheels, reducers, axles, bushings, gaskets, pins, various parts for connections, etc. If it is not clear what parameter details are needed for your production idea, or you do not know what kind of metal or plastic is better to use for their production, contact our specialists who will answer all your questions.",
    },
    milling: {
      heading: "CNC Milling",
      text: " CNC Milling is one of the services we provide. We perform plane milling (when flat surfaces are milled with a linear feed), circular milling (when cylindrical surfaces are milled with a circular feed), thread milling (when helical surfaces are milled with a screw feed), shape milling (when the milling cutter profile is cut in the workpiece), contour milling (when forming both simple contours and complex three-dimensional surfaces by providing a controlled feed to the machine tool). We offer detail milling services from plastic, stainless steel, aluminum, copper, bronze, and many other metals. If it is not clear what parameter details are needed for your production idea, or you do not know what kind of metal or plastic is better to use for their production, contact our specialists who will answer all your questions.",
    },
    design: {
      heading: "Designing",
      text: "Designing is one of the services we provide. We design according to the sample of the part (when the available part is measured very precisely, its drawings are made, a computer model is created), according to the given task and description, according to the drawing sent by you. The drawings must correspond to one of the required formats (step, dxf, dwg, x_t, x_b), the material from which the part will be made must be specified, a scale of 1:1 is used, the cutting contour is provided by direct reflection, objects are converted to curves, dimensions are specified in millimeters. The drawing must not contain merges, overlaps, double lines, unnecessary points, etc. If you don't have a drawing, our designers will do it with quality and responsibility. Since even the smallest error can be the cause of a poor result, the received files are always checked by our specialists.",
    },
    general: {
      text1: "General information",
      text2: "Maximum and minimum order quantity of parts",
      text3: `We usually carry out orders for small or medium series of products, consisting of 1-500 pieces of parts. The higher the quantity, the lower the price per unit, so larger orders are always more economical. Of course, if you only need one part, we will make only one part. If you need one part and urgently, we will try to make that saving part urgently. After all, it happens that due to the lack of one small detail, the entire production workshop starts and stops. Do you have an emergency that is not on the schedule? Contact us. We will try to help - it's so good to make our customers happy! We don't just make parts, we also repair them. Our machines are not only capable of "baking" new parts, but also repairing/restoring old ones, as well as producing prototypes.`,
      text4: "How long will it take to receive your details?",
      text5:
        "We usually fulfill orders within no more than 20 working days after signing the service contract. If the customer wants to receive their order faster, that is also possible. The production time is highly dependent on the amount of orders already available and in progress, the material supply schedule and the batch size.",
      text6: "Part materials: what do we make them from?",
      text7:
        "The most popular materials are aluminum, metal, plastic. The properties of each material are different, so when working with them, you need to know certain nuances. Aluminum is soft, light, heat-resistant, and easy to work with. It does not rust and works well with other materials. The metal is cheaper than aluminum, but it is more difficult to process because it is strong and strong. Unfortunately, this material requires corrosion protection - painting or a special protective chemical layer. Plastic is also a material often used for various details. It is easy to form, light, rust-proof, moisture-proof, can be in different colors, etc.",
      text8: "What does the final price depend on?",
      text9:
        "The final price is determined by: the complexity of the part; requirements for detail dimensional accuracy, surface cleanliness, geometry; price of the material from which the part is made, hardness, elasticity of the material, necessity of using specific processing hands, batch size (quantity of parts). The prices of parts are also related to design, programming, machine alignment. This part of production consumes the same resources for both 1 and 500 parts. Therefore, it is always more economical for you as a customer to order as large a quantity as possible. We recommend that it be at least 10 units.",
      text10:
        "How to take back manufactured parts? How to take back manufactured parts?",
      text11:
        "We perform detailed CNC milling in Vilnius, but orders are accepted from all over Lithuania and from other countries. We send the details, and the shipping price depends on the distance and the urgency of the order.",
      text12: "Smart use of material residues",
      text13:
        "The principles of sustainability are confidently making their way into various areas of production. We also always try to think through all our activities in such a way as to create as little waste as possible (by the way, we also save both our own and our customers' costs). We never throw away material scraps, as long as there is an opportunity to use them for smaller orders, and we recycle all unused waste.",
      text14: "CNC Turning",
      text15: `A CNC machine is a device that is controlled by a computer according to programs set by the operator. Turning takes place by rotating the workpiece around its axis and touching it with tools (knives) that cut/remove unnecessary parts of the material. This creates the desired shape that is round and symmetrical. After stopping the rotation, a separate active tool forms the required non-symmetrical parts. Turning services are supported by modern Japanese OKUMA LB15 CNC machines (the OKUMA brand is one of the most expensive CNC equipment manufacturers in the world) and newer, highly accurate Doosan LYNX 2100 LYB and Doosan LYNX 2100 LMB with active tools that provide more opportunities. These tireless and especially loving "employees" are simply obsessed with precision and are just waiting to "chew" metal or plastic and create parts that meet the expectations of our customers. Cylindrical, conical, spherical, shaped parts are produced from metal or plastic by CNC turning, and their end flat surfaces are processed.`,
      text16:
        "Modern equipment ensures speed and accuracy. CNC lathes are modern modern equipment that, according to the measurements determined by the computer program, turn out extremely precise parts from plastic, metal or other materials. The parts produced according to the same software task are maximally accurate and identical. Metal parts are stronger, but plastic parts are lighter. The choice of material depends on where they will be used.",
      text17:
        "You receive from us precise CNC (computer numerical control) parts turning works in small or medium series for the implementation of your projects. We also accept single orders and produce prototypes.",
      text18: "CNC Milling",
      text19:
        "Milling is one of the methods of mechanical processing of materials, when the work tool (mill) rotates to cut a chip of a predetermined size from the surface of the workpiece to be processed. During milling, the surface of the workpiece can be smoothed, grooves of various shapes, depths and profiles can be cut in it, slopes and shaped surfaces can be formed.",
      text20:
        "CNC is an abbreviation of the English word combination computer numerical control. Well, CNC milling is the production of various parts with milling machines, which are controlled by a computer according to the assigned programs. Various materials can be processed in this way: plastic, wood, metals, etc. i.e. The two main advantages of such part production are speed (up to 20000 mm/min.) and accuracy.",
      text21: "Even more benefits:",
      text22: "details can be processed to a set depth;",
      text23: "workpieces of large thickness can be cut;",
      text24: "tools of different sizes and types can be used for cutting;",
      text25:
        "it is possible to process various materials (plastic, wood and materials made from it, various metals, etc.) by choosing the right tools for each of them, thus obtaining maximum productivity and quality;",
      text26:
        "both simple and extremely complex parts can be produced, working in both 2D and 3D formats;",
      text27: "the details are cut very precisely;",
      text28: "the cost of parts produced in this way is greatly reduced;",
      text29: "an unlimited number of identical parts can be produced;",
      text30:
        "it is possible to produce both technical and decorative parts needed for the most diverse areas: advertising production, furniture industry, interior decoration, plumbing, food production equipment, etc. ",
      text31:
        "All these advantages determined that CNC milling is currently one of the most popular methods of metal processing.",
      text32: "How does CNC milling work?",
      text33:
        "Preparation stage. It is significant, responsible and the longest part of parts production. The operator uploads the program prepared by the technologist according to the drawing (the file sent by the client) to the machine controller, collects the necessary tools, fixes the material blank, and sets the zero point of the blank. All this can take half an hour or even several hours, depending on the complexity of the final product.",
      text34:
        "Cutting out the part/s. At this stage, the operator is no longer directly involved, as the machines simply work according to the program assigned to them. It can take from a few minutes to several tens of hours - it all depends on the complexity of the product.",
      text35: "What kind of milling services do we offer?",
      text36:
        "Most often, the shape of the milled part is close to a rectangular parallelepiped, cylinder or sphere, but it is also possible to form parts with complex three-dimensional surfaces. The initial contour of the workpiece is obtained by casting, stamping, cutting (it depends on the material from which the part is made). The dimensions of the parts are also very diverse: from a few to several hundred millimeters (however, they cannot exceed the dimensions of the working area of ​​the machine and the maximum mass of the workpiece).",
      text37:
        "Companies producing equipment for the food industry, transport, laboratories, car manufacturing, robotics, etc. cannot be imagined without such precisely milled details. i.e. By the way, the parts of our beloved CNC milling machines were also once milled in similar machines.",
      text38: "CNC parts: their design and production",
      text39: "The parts are designed and manufactured in our workshop",
      text40:
        "We design and manufacture various products from metal and plastic. We specialize in the production of elements requiring high precision for automatic and robotic production, processing lines and conveyors. The most precise tasks and various materials are bitten by ultra-high-precision CNC machines. The most popular production of metal and plastic parts, but other materials can be used.",
      text41:
        "Parts requiring different production processes and technologies are produced in several stages",
      text42:
        "Complex parts are produced using different technologies. For example, a part may be initially cast and then transferred to another machine for milling. Also, the workpiece can be laser-cut first, then milled, and then sanded with abrasive grains. All these production steps must be carried out in the correct, predetermined sequence and under control.",
      text43: "How does CNC part design work?",
      text44:
        "According to the part sample, when the available part is measured very precisely, its drawings are made, and a computer model is created. This method is called reverse engineering. According to the given task and description. If there is no description, and there is no possibility to bring the part to us (it cannot be disassembled), we will travel to inspect and measure it ourselves.",
      text45:
        "How quickly is the product design prepared and the product itself manufactured?",
      text46:
        "In CNC machines, parts and other details of various devices are born very quickly, but the entire duration of design and production depends on the complexity and on the availability of our machines. So everything can take from one hour to several weeks.",
      text47:
        "Is it possible to produce only one part (prototype) and how much does it cost?",
      text48:
        "Yes, of course we make both one and more. We can design a 3D computer model of the part, provide drawings in 2D version. We produce prototypes for testing according to the project. The price depends on the complexity. Of course, the production of one part will always be more expensive than two of the same.",
      text49:
        "What if we do not have the necessary processing tools for the production of a specific part?",
      text50:
        "Even so, your part will be precisely manufactured. We cooperate with many partners, so with their help we can perform practically all possible material processing operations: milling, turning, wire cutting, water cutting, laser cutting, plasma cutting, electroerosion cutting, grinding, anodizing, welding, bending, etc.",
    },
    career: {
      text1: "Career opportunities",
      text2: "Job description",
      text3: "Requirements for the employee",
      text4: "We offer",
      text5: "Salary",
      jobs: [
        {
          title: "CNC Turning machine operator",
          description: [
            "Working with CNC turning machine",
            "Measurement of product",
            "Writing programs",
            "Maintaining order and cleanliness in the workplace",
          ],
          requirments: [
            "At least 1 year of experience",
            "Reading technical drawings",
            "Professional/advanced technical engineering education preferred",
            "Good computer skills",
            "Working experience with Fusion 365, Solidworks, Siemens / Fanuc control panels is an advantage",
          ],
          offer: [
            "Interesting work in an advanced, youthful company",
            "Courses are organized for professional development",
            "Salary always paid on time",
            "Career opportunities",
          ],
          salary: ["1000-1400 €/month after taxes"],
        },
        {
          title: "CNC Milling machine operator",
          description: [
            "Working with CNC milling machines",
            "Measurement of product",
            "Writing programs",
            "Maintaining order and cleanliness in the workplace",
          ],
          requirments: [
            "At least 1 year of experience",
            "Reading technical drawings",
            "Professional/advanced technical engineering education preferred",
            "Good computer skills",
            "Working experience with Fusion 365, Solidworks, Siemens / Fanuc control panels is an advantage",
          ],
          offer: [
            "Interesting work in an advanced, youthful company",
            "Courses are organized for professional development",
            "Salary always paid on time",
            "Career opportunities",
          ],
          salary: ["1000-1400 €/month after taxes"],
        },
        {
          title: "Industry manager",
          description: [
            "New client search",
            "Communication with existing customers",
            "Preparation of commercial offers",
            "Management of accounting documents",
          ],
          requirments: [
            "At least 1 year of similar work experience",
            "Engineering higher/higher education is preferred",
            "Knowledge of the CNC industry",
            "Good computer skills",
            "Desire to improve",
          ],
          offer: [
            "Interesting work in an advanced company",
            "Opportunities for professional development",
            "Always on time, performance-based salary",
          ],
          salary: ["From €1300/month after taxes + bonuses based on results"],
        },
        {
          title: "Cleaner",
          description: [
            "Work two days a week",
            "Cleaning of production premises",
            "Cleaning of office premises",
            "Maintenance of order",
          ],
          requirments: [
            "Experience in similar work would be an advantage",
            "Punctuality",
            "Accountability",
          ],
          offer: [
            "Interesting work in an advanced company",
            "Opportunities for professional development",
            "Always paid on time",
          ],
          salary: ["By agreement"],
        },
      ],
    },
    contacts: {
      text1: "Contact us",
      text2: "The message has been sent successfully",
      text3: "The message is not sent 🤔",
      text4: "Your name",
      text5: "Email",
      text6: "Phone number",
      text7: "Message",
      text8: "Send message",
      cards: [
        {
          name: "Povilas Vilimas",
          responsibilities: "Director",
          email: "povilas@lemara.lt",
          number: "+370 646 57845",
          src: "/images/contacts/povilas.jpg",
          alt: "Photo of Povilas Vilimas mb Lemara director",
        },
        {
          name: "Vytautas Puodžiūnas",
          responsibilities: "Production manager",
          email: "vytautas@lemara.lt",
          number: "+370 674 51761",
          src: "/images/contacts/vytautas.jpg",
          alt: "Photo of Vytautas Puodžiūnas mb Lemara production manager",
        },
        {
          name: "Tadas Plungė",
          responsibilities: "Designer",
          email: "tadas@lemara.lt",
          number: "+370 647 64659",
          src: "/images/contacts/tadas.jpg",
          alt: "Photo of Tadas Plungė mb Lemara designer",
        },
      ],
    },
    privacy: {
      text1: "Privacy policy",
      text2:
        "In this privacy policy (hereinafter - Privacy Policy) we provide you with information such as MB Lemara, legal entity code 304374938, registered office address Pasagų st. 4, Riešė, Vilnius District Municipality, Lithuania (hereinafter - the Data Controller) processes your personal data on the website https://www.lemara.lt. You can contact the Data Controller through the following contacts:",
      text3:
        "You can contact the Data Controller through the following contacts:",
      text4: "Who can we transfer your personal data to?",
      text5:
        "We may transfer information about you to our employees, intermediaries, service providers, such as debt administration or collection companies, companies providing archiving services, legal, marketing services, IT service providers or subcontractors, if reasonably necessary for the purposes specified in this Privacy Policy. in politics. We may also disclose information about you if we have to do so in accordance with the law or in order to defend our rights or interests (including providing your personal data to third parties in order to collect your debts to us), as well as intending to transfer a part of the company's activities or its assets or to reorganize company or during these processes, disclosing your personal data to the (potential) acquirer of the activity or part of it, other reorganization participants.",
      text7:
        "Your personal data will be processed in accordance with the requirements of the General Data Protection Regulation (hereinafter - GDPR), the Law on Legal Protection of Personal Data of the Republic of Lithuania and other legal acts. The data controller, both when determining personal data processing measures and during the data processing itself, implements appropriate data protection technical and organizational measures established in legal acts, designed to protect processed personal data from accidental or unlawful destruction, damage, alteration, loss, disclosure, as well as from any other unlawful processing. Appropriate measures are determined taking into account the risks arising from the processing of personal data.",
      text8: "What are your rights?",
      text9:
        "Below we provide information about your rights related to the processing of your personal data by the Data Controller, and the cases when you can use these rights. If you wish to receive more information about your rights or to exercise them, please contact us at the email specified in this Privacy Policy. postal address.",
      text10:
        "You can contact us at any time and ask whether we process any of your personal data. If we store or use your personal data in any way, you have the right to access them. To do this, send us a written request at the email address specified in this Privacy Policy. postal address. In order to fulfill your request, we may ask you to confirm your personal identity. When making such a request, you must be fair and reasonable.",
      text11:
        "If you have given us your consent for the processing of your data, you can withdraw it at any time by email specified in this Privacy Policy. postal address.",
      text12:
        "You have the right to ask us to correct any inaccuracies in the data we hold. In this case, we may ask you to confirm the corrected information.",
      text13:
        "You have the right to ask us to delete your personal data. This right is exercised in the cases provided for in Article 17 of the GDPR.",
      text14:
        "You have the right to ask us to limit the processing of your personal data or not to process them.",
      text15:
        "You have the right to the transfer of data that is processed by automated means and that we received from you with your consent or for the purposes of concluding a contract. After you exercise this right, we will transfer a copy of the data you provided at your request.",
      text16:
        "You have the right under Art. 21 of the GDPR. in accordance with the established procedure, do not agree that we use your personal data.",
      text17: "How can you enforce your rights?",
      text18:
        "In order to exercise your rights, requests, complaints or demands, please submit them to us in writing at the contacts indicated in this Privacy Policy. We will respond to received requests, complaints or demands in writing in accordance with the procedure and deadlines established by legal acts. We try to provide you with information as soon as possible, but no later than within 30 days of receiving your request. If, upon receiving a request, complaint or demand, we have suspicions about the identity of the applicant, we have the right to request the identity document of the applicant.",
      text19: "Complaints",
      text20:
        "If you believe that your rights as a data subject are and/or may be violated, please contact us immediately at the e-mail address specified in this Privacy Policy. by post We guarantee that only after receiving your complaint, we will contact you within a reasonable period of time and inform you about the progress of the investigation of the complaint, and later about the result. If you are not satisfied with the results of the investigation, you can file a complaint with the supervisory authority - the State Data Protection Inspectorate (www.vdai.lrv.lt/).",
      text21: "Responsibility",
      text22:
        "You are responsible for ensuring that the data you provide to us is accurate, correct and complete. If the data you provided changes, you must immediately inform us about it by e-mail. by post In no case will we be liable for any damage caused to you due to the fact that you have provided incorrect or incomplete personal data or have not informed us when they have changed. Privacy policy updated in 2021. December 10",
      text23:
        "This Privacy Policy has been developed by Glimstedt Dock. The Glimstedt law firm owns all copyrights to the Privacy Policy, and grants MB Lemara the right to use the Privacy Policy on its website http://www.lemara.lt. Copying or otherwise using the Privacy Policy or its part is prohibited without the written consent of the law firm Glimstedt.",
    },
    images: {
      logo: "/images/logo/logo2.png",
      logoAlt: "MB Lemara logo",
      navBgTexture: "/images/background/navBg1.png",
      bgTexture: "/images/background/aboutBg.png",
      galleryBgTexture: "/images/background/galleryBg.png",
      mainImage: "/images/background/main1a.jpg",
      mainImageAlt: "Image of CNC machine in manufacturing progress",
      whyUsImage: "/images/home/whyUs.jpg",
      whyUsImageAlt: "Photo of a product made by CNC milling",
      aboutUsImage: "/images/home/aboutUs.jpg",
      aboutUsImageAlt: "Image of Lemara staff",
      turningImage: "/images/turning/t5.jpg",
      turningImageAlt: "image of CNC Turning machine",
      millingImage: "/images/milling/m1.jpg",
      millingImageAlt: "image of CNC Milling machine",
      designImage: "/images/design/d1.jpg",
      designImageAlt: "image of a designer",
      galleryTurningAlt: "The part is made by CNC turning or milling",
      galleryMillingAlt: "The part is made by CNC  milling",
    },
    meta: {
      text1: "Lemara CNC Parts Production",
      text2:
        "Manufacturing of CNC parts: their designing, turning, milling from plastic and metal.",
      text3: "Lemara CNC Turning",
      text4:
        "Information about CNC turning, the materials we work with, the parts we can produce.",
      text5: "Lemara CNC Milling",
      text6:
        "Information about CNC milling, the materials we work with, the parts we can produce.",
      text7: "Lemara CNC Parts Design",
      text8: "Information about CNC parts designing service",
      text9: "Lemara General Information",
      text10:
        "General information about MB Lemara, CNC part manufacturing, turning, milling, design, order requirements, delivery, etc.",
      text11: "Lemara Equipment",
      text12:
        "Lemara's available CNC turning and milling equipment and technical specifications and technical capabilities page.",
      text13: "Lemara Gallery",
      text14:
        "In the Lemara gallery you can find examples of parts produced by Lemara's CNC turning and milling specialists.",
      text15: "Lemara Career Opportunities",
      text16:
        "If you are looking for a job in the field of CNC parts production - visit Lemara's career page",
      text17: "Lemara Contacts",
      text18:
        "If you want to contact Lemara specialists - on this page you will find all the necessary contacts.",
      text19: "Lemara Privacy Policy",
      text20: "Information about MB Lemara's privacy policy.",
    },
  };

  const TEXTS_NO = {
    navigation: [
      {
        label: "Hjem",
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
            label: "Designing",
            href: "/services/design",
          },
          { label: "Generell informasjon", href: "/services/general" },
        ],
      },
      {
        label: "Maskiner",
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
    footer: {
      rights: "MB Lemara © 2022 Alle rettigheter reservert",
      code: "Firmakode: 304374938",
      pvmCode: "Momsbetalerkode: LT100010561112",
      privacy: "Personvernerklæring",
      contacts: "Kontakter",
      services: "Tjenester",
      turning: "CNC Dreiing",
      milling: "CNC Fresing",
      design: "Designing",
    },
    index: {
      text1: "Lemara - nøyaktig produserte deler for dine byggeideer",
      text2:
        "Vi designer og produserer enkeltdeler, serier og deres prototyper. Velg de riktige tjenestene, og hvis du har spørsmål,",
      text3: "kontakt våre spesialister",
      text4: "Anmeldelser",
      values: [
        {
          title: "Kvalitet",
          description: "Vi garanterer høy produktkvalitet",
          src: "/images/values/1.png",
          alt: "Kvalitetsskiltlogo",
          w: "45px",
          h: "47px",
        },
        {
          title: "Hastighet",
          description: "Vi produserer deler på kort tid",
          src: "/images/values/3.png",
          alt: "Speed ​​dign logo",
          w: "58px",
          h: "49px",
        },
        {
          title: "Nøyaktighet",
          description:
            "Takket være moderne utstyr er produktene preget av høy nøyaktighet",
          src: "/images/values/2.png",
          alt: "Nøyaktighetsskiltlogo",
          w: "56px",
          h: "56px",
        },
        {
          title: "Bærekraft",
          description: "Vi verner om naturen",
          src: "/images/values/4.png",
          alt: "Bærekraftsskiltlogo",
          w: "53px",
          h: "58px",
        },
      ],
      whyUs: {
        text1: {
          heading: "Hvorfor skal du velge oss?",
          text: "Vi er unge og ambisiøse fagfolk innen vårt felt. Vi utvider og hever stadig kvalifikasjonene til våre ansatte. Vi sikrer alltid produktet av høyeste kvalitet, noe vi gjør på kortest mulig tid. vi spesialiserer oss på produksjon av elementer som krever høy presisjon for automatisk og robotproduksjon, prosesslinjer, transportører, men vi utfører også andre arbeider. siden 2016 har vi med suksess produsert deler for store litauiske og utenlandske selskaper.",
        },
      },
      aboutUs: {
        text1: {
          heading: "Om oss",
          text: `MB "Lemara" er et metallforedlingsselskap som tilbyr CNC-dreiing og -fresing. Vi er spesialister på produksjon av elementer som krever høy presisjon for automatisk og robotproduksjon, prosesslinjer og transportører. Vi arbeider med aluminium, rustfritt stål, stål, kobber, messing, andre metaller og ulike plaster. Vi samarbeider med mange partnere, så med deres hjelp kan vi utføre praktisk talt alle mulige materialbehandlingsoperasjoner, som trådskjæring, vannskjæring, laserskjæring, plasmaskjæring, elektroerosjonsskjæring, sliping, anodisering, sveising, bøying. Vi samarbeider med både litauiske og utenlandske produsenter. Lemara ble grunnlagt i 2016 og ekspanderer raskt og jobber med suksess internasjonalt.`,
        },
      },
      feedback: [
        {
          id: 1,
          title: "UAB Stelga, Marius",
          text: "Unge, ambisiøse spesialister på sitt felt, velinformerte og i stand til å gi råd og løse problemer. Rask og rask respons på henvendelser, alle prosjekter ble gjennomført i henhold til avtalte produksjonsbetingelser. :)",
        },
        {
          id: 2,
          title: "UAB Lematec, Donatas",
          text: "Vi valgte Lemara fordi de fleste av dem ikke fortsetter samtalen når de ser de nødvendige detaljene, de er redde for ansvar. De nødvendige nøyaktighetene ble oppnådd og de nøyaktige delene passet på rett sted. Vi anbefaler Lemara til selskaper som bryr seg om kvalitet og menneskelig samhandling.",
        },
        {
          id: 3,
          title: "UAB Vildoma, Virginijus",
          text: "Vi er takknemlige for kvaliteten på bestillingene og overholdelse av lovede frister",
        },
        {
          id: 4,
          title: "UAB Roteksas, Viktorija",
          text: "Vi var på utkikk etter CNC dreiing-fresing for produksjon av små deler. Jeg fant det ganske enkelt ved å se etter CNC-bearbeiding på Internett, jeg valgte det fordi de produserte prøver av flere deler - for kvalitetsevaluering. Kvaliteten skuffet ikke og fortsatte å bestille dreie-fresing.",
        },
      ],
    },
    capabilities: {
      text1: "Dreiemaskiner",
      text2: "Fresemaskiner",
      specifications: {
        text1: "Maksimal lengde",
        text2: "Maksimal diameter",
        text3: "Arbeidsrevolusjoner",
        text4: "Aktive verktøy",
        text5: "Arbeidsplass",
        text6: "Maks vekt",
      },
      mashines: [
        {
          name: "Doosan LYNX 2100LMB",
          type: "turning",
          lenght: "510 mm",
          diameter: "300 mm",
          revolutions: "4500 rpm",
          tools: "C-akse (fresing)",
          src: "/images/capabilities/2100LM.jpg",
          alt: "Foto av Doosan LYNX 2100LMB dreiemaskin",
        },
        {
          name: "Doosan LYNX 2100LYB",
          type: "turning",
          lenght: "510 mm",
          diameter: "300 mm",
          revolutions: "4500 rpm",
          tools: "C-akse (fresing)",
          src: "/images/capabilities/2100LY.jpg",
          alt: "Foto av Doosan LYNX 2100LYB dreiemaskin",
        },
        {
          name: "Okuma LB15",
          type: "turning",
          lenght: "500 mm",
          diameter: "250mm",
          revolutions: "4200 rpm",
          tools: "-",
          src: "/images/capabilities/LB15.jpg",
          alt: "Foto av Okuma LB15 dreiemaskin",
        },
        {
          name: "Doosan DNM 4500",
          type: "milling",
          zone: "800x450x510 mm",
          weight: "600 kg",
          revolutions: "12000 rpm",
          src: "/images/capabilities/DMN4500.jpg",
          alt: "Foto av Doosan DNM 4500 fresemaskin",
        },
        {
          name: "Leadwell V40M",
          type: "milling",
          zone: "1000x500x500 mm",
          weight: "800 kg",
          revolutions: "8000 rpm",
          src: "/images/capabilities/V40.jpg",
          alt: "Foto av Leadwell V40M fresemaskin",
        },
      ],
    },
    turning: {
      t1: {
        heading: "CNC Dreiing",
        text: " CNC Dreiing er en av tjenestene vi leverer. Vi utfører opprømming (når delens indre overflater behandles), overflatebehandling (når delens ytre overflater behandles), drenering (når delens bakoverflater behandles). Vi tilbyr dreietjenester for deler laget av plast, rustfritt stål, aluminium, kobber, bronse og mange andre metaller. Vi produserer skruer, muttere, aksler, ruller, hjul, reduksjonsstykker, aksler, foringer, pakninger, pinner, ulike deler for koblinger osv. Hvis det ikke er klart hvilke parameterdetaljer som trengs for din produksjonside, eller du ikke vet hva type metall eller plast er bedre å bruke for produksjonen deres, kontakt våre spesialister som vil svare på alle spørsmålene dine.",
      },
      t2: { heading: "Maskiners tekniske kapasitet" },
    },
    milling: {
      t1: {
        heading: "CNC Fresing",
        text: " CNC Fresing er en av tjenestene vi tilbyr. Vi utfører planfresing (når flate flater freses med lineær mating), sirkulær fresing (når sylindriske flater freses med sirkulær mating), gjengefresing (når spiralformede flater freses med skrumating), formfresing (når fresingen kutterprofil kuttes i arbeidsstykket), konturfresing (ved dannelse av både enkle konturer og komplekse tredimensjonale overflater ved å gi en kontrollert mating til verktøymaskinen). Vi tilbyr detaljfresing fra plast, rustfritt stål, aluminium, kobber, bronse og mange andre metaller. Hvis det ikke er klart hvilke parameterdetaljer som trengs for produksjonsideen din, eller du ikke vet hva slags metall eller plast som er bedre å bruke for produksjonen, kontakt våre spesialister som vil svare på alle spørsmålene dine.",
      },
      t2: { heading: "Maskiners tekniske kapasitet" },
    },
    design: {
      t1: {
        heading: "Designing",
        text: "Design er en av tjenestene vi tilbyr. Vi designer i henhold til prøven av delen (når den tilgjengelige delen er målt veldig nøyaktig, tegningene er laget, en datamaskinmodell opprettes), i henhold til den gitte oppgaven og beskrivelsen, i henhold til tegningen sendt av deg. Tegningene må samsvare med et av de nødvendige formatene (trinn, dxf, dwg, x_t, x_b), materialet som delen skal lages av må spesifiseres, en skala på 1:1 brukes, skjærekonturen er gitt av direkte refleksjon, objekter konverteres til kurver, dimensjoner er spesifisert i millimeter. Tegningen må ikke inneholde sammenslåinger, overlappinger, doble linjer, unødvendige punkter osv. Har du ikke tegning vil våre designere gjøre det med kvalitet og ansvar. Siden selv den minste feil kan være årsaken til et dårlig resultat, blir de mottatte filene alltid sjekket av våre spesialister.",
      },
    },
    general: {
      text1: "Generell informasjon",
      text2: "Maksimal og minimum bestillingsantall deler",
      text3: `Vi utfører vanligvis bestillinger på små eller mellomstore serier av produkter, bestående av 1-500 deler. Jo høyere kvantum, jo ​​lavere pris per enhet, så større bestillinger er alltid mer økonomiske. Hvis du bare trenger én del, lager vi selvfølgelig kun én del. Hvis du trenger en del og det haster, vil vi prøve å lage den sparedelen raskt. Tross alt skjer det at på grunn av mangelen på en liten detalj, starter og stopper hele produksjonsverkstedet. Har du en nødsituasjon som ikke står på timeplanen? Kontakt oss. Vi skal prøve å hjelpe – det er så godt å gjøre kundene våre fornøyde! Vi lager ikke bare deler, vi reparerer dem også. Maskinene våre er ikke bare i stand til å "bake" nye deler, men også reparere/restaurere gamle, samt produsere prototyper.`,
      text4: "Hvor lang tid vil det ta å motta informasjonen din?",
      text5:
        "Vi utfører vanligvis bestillinger innen ikke mer enn 20 virkedager etter signering av servicekontrakten. Dersom kunden ønsker å motta bestillingen sin raskere, er det også mulig. Produksjonstiden er svært avhengig av mengden bestillinger som allerede er tilgjengelig og i gang, materialforsyningsplanen og batchstørrelsen.",
      text6: "Delmaterialer: hva lager vi dem av?",
      text7:
        "De mest populære materialene er aluminium, metall, plast. Egenskapene til hvert materiale er forskjellige, så når du arbeider med dem, må du kjenne til visse nyanser. Aluminium er mykt, lett, varmebestandig og lett å jobbe med. Den ruster ikke og fungerer godt med andre materialer. Metallet er billigere enn aluminium, men det er vanskeligere å bearbeide fordi det er sterkt og sterkt. Dessverre krever dette materialet korrosjonsbeskyttelse - maling eller et spesielt beskyttende kjemisk lag. Plast er også et materiale som ofte brukes til ulike detaljer. Den er lett å forme, lett, rustsikker, fuktsikker, kan være i forskjellige farger osv.",
      text8: "Hva avhenger den endelige prisen av?",
      text9:
        "Tden endelige prisen bestemmes av: kompleksiteten til delen; krav til detaljdimensjonal nøyaktighet, overflaterenhet, geometri; pris på materialet som delen er laget av, hardhet, elastisitet av materialet, nødvendigheten av å bruke spesifikke behandlingshender, batchstørrelse (antall deler). Prisene på deler er også relatert til design, programmering, maskinoppretting. Denne delen av produksjonen bruker de samme ressursene for både 1 og 500 deler. Derfor er det alltid mer økonomisk for deg som kunde å bestille et så stort kvantum som mulig. Vi anbefaler at det er minst 10 enheter.",
      text10:
        "Hvordan ta tilbake produserte deler? Hvordan ta tilbake produserte deler?",
      text11:
        "Vi utfører detaljert CNC-fresing i Vilnius, men bestillinger aksepteres fra hele Litauen og fra andre land. Vi sender detaljene, og fraktprisen avhenger av avstanden og det haster med bestillingen.",
      text12: "Smart bruk av materialrester",
      text13:
        "Prinsippene for bærekraft er trygt på vei inn i ulike produksjonsområder. Vi prøver også alltid å tenke gjennom alle våre aktiviteter på en slik måte at vi skaper minst mulig avfall (vi sparer forresten også både egne og kundenes kostnader). Vi kaster aldri materialrester, så lenge det er mulighet for å bruke det til mindre bestillinger, og vi resirkulerer alt ubrukt avfall.",
      text14: "CNC Dreiing",
      text15: `En CNC-maskin er en enhet som styres av en datamaskin i henhold til programmer satt av operatøren. Snuing skjer ved å rotere arbeidsstykket rundt sin akse og berøre det med verktøy (kniver) som kutter/fjerner unødvendige deler av materialet. Dette skaper den ønskede formen som er rund og symmetrisk. Etter å ha stoppet rotasjonen, danner et separat aktivt verktøy de nødvendige ikke-symmetriske delene. Dreietjenester støttes av moderne japanske OKUMA LB15 CNC-maskiner (OKUMA-merket er en av de dyreste produsentene av CNC-utstyr i verden) og nyere, svært nøyaktige Doosan LYNX 2100 LYB og Doosan LYNX 2100 LMB med aktive verktøy som gir flere muligheter. Disse utrettelige og spesielt kjærlige "medarbeiderne" er rett og slett besatt av presisjon og venter bare på å "tygge" metall eller plast og lage deler som oppfyller forventningene til kundene våre. Sylindriske, koniske, sfæriske, formede deler produseres av metall eller plast ved CNC-dreiing, og deres flate endeflater behandles.`,
      text16:
        "Moderne utstyr sikrer hastighet og nøyaktighet. CNC dreiebenker er moderne moderne utstyr som, i henhold til målene bestemt av dataprogrammet, blir ekstremt presise deler fra plast, metall eller andre materialer. Delene produsert i henhold til samme programvareoppgave er maksimalt nøyaktige og identiske. Metalldeler er sterkere, men plastdeler er lettere. Valg av materiale avhenger av hvor de skal brukes.",
      text17:
        "Du mottar fra oss presise CNC (computer numerical control) dreiearbeider i små eller mellomstore serier for gjennomføring av dine prosjekter. Vi tar også imot enkeltbestillinger og produserer prototyper.",
      text18: "CNC Fresing",
      text19:
        "Fresing er en av metodene for mekanisk bearbeiding av materialer, når arbeidsverktøyet (fresen) roterer for å kutte en spon av en forhåndsbestemt størrelse fra overflaten av arbeidsstykket som skal behandles. Under fresing kan overflaten på arbeidsstykket glattes, spor av forskjellige former, dybder og profiler kan kuttes i den, skråninger og formede overflater kan dannes.",
      text20:
        "CNC er en forkortelse av den engelske ordkombinasjonen computer numerical control. Vel, CNC-fresing er produksjon av ulike deler med fresemaskiner, som styres av en datamaskin i henhold til de tildelte programmene. Ulike materialer kan bearbeides på denne måten: plast, tre, metaller, etc. det vil si at de to hovedfordelene med slik delproduksjon er hastighet (opptil 20 000 mm/min.) og nøyaktighet.",
      text21: "Enda flere fordeler:",
      text22: "detaljer kan behandles til en bestemt dybde;",
      text23: "arbeidsstykker med stor tykkelse kan kuttes;",
      text24:
        "verktøy av forskjellige størrelser og typer kan brukes til å kutte;",
      text25:
        "det er mulig å behandle forskjellige materialer (plast, tre og materialer laget av det, forskjellige metaller, etc.) ved å velge de riktige verktøyene for hver av dem, og dermed oppnå maksimal produktivitet og kvalitet;",
      text26:
        "både enkle og ekstremt komplekse deler kan produseres, som fungerer i både 2D- og 3D-formater;",
      text27: "detaljene er kuttet veldig presist;",
      text28:
        "kostnadene for deler produsert på denne måten reduseres kraftig;",
      text29: "et ubegrenset antall identiske deler kan produseres;",
      text30:
        "det er mulig å produsere både tekniske og dekorative deler som trengs for de mest mangfoldige områdene: reklameproduksjon, møbelindustri, interiør, rørleggerarbeid, matproduksjonsutstyr, etc. ",
      text31:
        "Alle disse fordelene bestemte at CNC-fresing for tiden er en av de mest populære metodene for metallbearbeiding.",
      text32: "Hvordan fungerer CNC-fresing?",
      text33:
        "Forberedelsesstadiet. Det er betydelig, ansvarlig og den lengste delen av deleproduksjonen. Operatøren laster opp programmet utarbeidet av teknologen i henhold til tegningen (filen sendt av klienten) til maskinkontrolleren, samler de nødvendige verktøyene, fikser materialemnet og setter nullpunktet til emnet. Alt dette kan ta en halv time eller til og med flere timer, avhengig av kompleksiteten til sluttproduktet.",
      text34:
        "Kutte ut delen/delene. På dette stadiet er operatøren ikke lenger direkte involvert, siden maskinene ganske enkelt fungerer i henhold til programmet som er tildelt dem. Det kan ta fra noen få minutter til flere titalls timer - alt avhenger av kompleksiteten til produktet.",
      text35: "Hva slags fresetjenester tilbyr vi?",
      text36:
        "Oftest er formen på den freste delen nær et rektangulært parallellepipedum, sylinder eller kule, men det er også mulig å danne deler med komplekse tredimensjonale overflater. Den første konturen til arbeidsstykket oppnås ved støping, stempling, kutting (det avhenger av materialet som delen er laget av). Dimensjonene til delene er også veldig forskjellige: fra noen få til flere hundre millimeter (de kan imidlertid ikke overskride dimensjonene til maskinens arbeidsområde og arbeidsstykkets maksimale masse).",
      text37:
        "Bedrifter som produserer utstyr til næringsmiddelindustrien, transport, laboratorier, bilproduksjon, robotikk osv. kan ikke tenkes uten slike presist freste detaljer. forresten, delene til våre elskede CNC-fresemaskiner ble også en gang frest i lignende maskiner.",
      text38: "CNC-deler: deres design og produksjon",
      text39: "Delene er designet og produsert i vårt verksted",
      text40:
        "Vi designer og produserer ulike produkter av metall og plast. Vi er spesialister på produksjon av elementer som krever høy presisjon for automatisk og robotproduksjon, prosesslinjer og transportører. De mest presise oppgavene og ulike materialene blir bitt av ultra-høypresisjons CNC-maskiner. Den mest populære produksjonen av metall- og plastdeler, men andre materialer kan brukes.",
      text41:
        "Deler som krever ulike produksjonsprosesser og teknologier produseres i flere trinn",
      text42:
        "Komplekse deler produseres ved hjelp av forskjellige teknologier. For eksempel kan en del først støpes og deretter overføres til en annen maskin for fresing. Arbeidsstykket kan også laserskjæres først, deretter freses og deretter slipes med slipekorn. Alle disse produksjonstrinnene må utføres i riktig, forhåndsbestemt rekkefølge og under kontroll.",
      text43: "Hvordan fungerer CNC-deldesign?",
      text44:
        "I følge delprøven, når den tilgjengelige delen er målt veldig nøyaktig, lages tegningene og en datamaskinmodell lages. Denne metoden kalles reverse engineering. I henhold til oppgitt oppgave og beskrivelse. Hvis det ikke er noen beskrivelse, og det ikke er mulighet for å bringe delen til oss (den kan ikke demonteres), reiser vi for å inspisere og måle den selv.",
      text45:
        "Hvor raskt blir produktdesignet forberedt og selve produktet produsert?",
      text46:
        "I CNC-maskiner blir deler og andre detaljer til ulike enheter født veldig raskt, men hele varigheten av design og produksjon avhenger av kompleksiteten og tilgjengeligheten til maskinene våre. Så alt kan ta fra én time til flere uker.",
      text47:
        "Er det mulig å produsere kun én del (prototype) og hvor mye koster det?",
      text48:
        "Ja, selvfølgelig lager vi både en og flere. Vi kan designe en 3D datamodell av delen, gi tegninger i 2D versjon. Vi produserer prototyper for testing i henhold til prosjektet. Prisen avhenger av kompleksiteten. Produksjonen av én del vil selvsagt alltid være dyrere enn to av samme.",
      text49:
        "Hva om vi ikke har de nødvendige prosesseringsverktøyene for produksjon av en bestemt del?",
      text50:
        "Likevel vil din del bli nøyaktig produsert. Vi samarbeider med mange partnere, så med deres hjelp kan vi utføre praktisk talt alle mulige materialbehandlingsoperasjoner: fresing, dreiing, trådskjæring, vannskjæring, laserskjæring, plasmaskjæring, elektroerosjonsskjæring, sliping, anodisering, sveising, bøying, etc.",
    },
    career: {
      text1: "Karrieremuligheter",
      text2: "Stillingsbeskrivelse",
      text3: "Krav til den ansatte",
      text4: "Vi tilbyr",
      text5: "Lønn",
      jobs: [
        {
          title: "CNC Dreiemaskinoperatør",
          description: [
            "Arbeider med CNC-dreiemaskin",
            "Måling av produkt",
            "Skrive programmer",
            "Opprettholde orden og renslighet på arbeidsplassen",
          ],
          requirments: [
            "Minst 1 års erfaring",
            "Lese tekniske tegninger",
            "Profesjonell/videregående teknisk ingeniørutdanning foretrekkes",
            "Gode ​​datakunnskaper",
            "Arbeidserfaring med Fusion 365, Solidworks, Siemens / Fanuc kontrollpaneler er en fordel",
          ],
          offer: [
            "Interessant arbeid i en avansert, ungdommelig bedrift",
            "Det arrangeres kurs for faglig utvikling",
            "Lønn alltid utbetalt til rett tid",
            "Karrieremuligheter",
          ],
          salary: ["1000-1400 €/måned etter skatt"],
        },
        {
          title: "CNC Fresemaskinoperatør",
          description: [
            "Arbeider med CNC-dreiemaskin",
            "Måling av produkt",
            "Skrive programmer",
            "Opprettholde orden og renslighet på arbeidsplassen",
          ],
          requirments: [
            "Minst 1 års erfaring",
            "Lese tekniske tegninger",
            "Profesjonell/videregående teknisk ingeniørutdanning foretrekkes",
            "Gode ​​datakunnskaper",
            "Arbeidserfaring med Fusion 365, Solidworks, Siemens / Fanuc kontrollpaneler er en fordel",
          ],
          offer: [
            "Interessant arbeid i en avansert, ungdommelig bedrift",
            "Det arrangeres kurs for faglig utvikling",
            "Lønn alltid utbetalt til rett tid",
            "Karrieremuligheter",
          ],
          salary: ["1000-1400 €/måned etter skatt"],
        },
        {
          title: "Bransjesjef",
          description: [
            "Nytt klientsøk",
            "Kommunikasjon med eksisterende kunder",
            "Utarbeidelse av kommersielle tilbud",
            "Håndtering av regnskapsdokumenter",
          ],
          requirments: [
            "Minst 1 års tilsvarende arbeidserfaring",
            "Ingeniør høyere/høyere utdanning foretrekkes",
            "Kjennskap til CNC-bransjen",
            "Gode ​​datakunnskaper",
            "Ønske om å forbedre",
          ],
          offer: [
            "Interessant arbeid i et avansert selskap",
            "Muligheter for faglig utvikling",
            "Alltid i tide, prestasjonsbasert lønn",
          ],
          salary: [
            "Fra €1300/måned etter skatt + bonuser basert på resultater",
          ],
        },
        {
          title: "Renere",
          description: [
            "Jobber to dager i uken",
            "Renhold av produksjonslokaler",
            "Renhold av kontorlokaler",
            "Vedlikehold av orden",
          ],
          requirments: [
            "Erfaring fra lignende arbeid vil være en fordel",
            "Punktlighet",
            "Ansvarlighet",
          ],
          offer: [
            "Interessant arbeid i et avansert selskap",
            "Muligheter for faglig utvikling",
            "Alltid betalt i tide",
          ],
          salary: ["Etter avtale"],
        },
      ],
    },
    contacts: {
      text1: "Kontakt oss",
      text2: "Meldingen er sendt",
      text3: "Meldingen sendes ikke 🤔",
      text4: "Navnet ditt",
      text5: "E-post",
      text6: "Telefonnummer",
      text7: "Beskjed",
      text8: "Sende melding",
      cards: [
        {
          name: "Povilas Vilimas",
          responsibilities: "Regissør",
          email: "povilas@lemara.lt",
          number: "+370 646 57845",
          src: "/images/contacts/povilas.jpg",
          alt: "Foto av Povilas Vilimas mb Lemara-regissør",
        },
        {
          name: "Vytautas Puodžiūnas",
          responsibilities: "Produksjonssjef",
          email: "vytautas@lemara.lt",
          number: "+370 674 51761",
          src: "/images/contacts/vytautas.jpg",
          alt: "Foto av Vytautas Puodžiūnas mb Lemara produksjonssjef",
        },
        {
          name: "Tadas Plungė",
          responsibilities: "Designer",
          email: "tadas@lemara.lt",
          number: "+370 647 64659",
          src: "/images/contacts/tadas.jpg",
          alt: "Foto av Tadas Plungė mb Lemara designer",
        },
      ],
    },
    privacy: {
      text1: "Personvernerklæring",
      text2:
        "I denne personvernerklæringen (heretter - Personvernerklæring) gir vi deg informasjon som MB Lemara, juridisk enhetskode 304374938, registrert kontoradresse Pasagų st. 4, Riešė, Vilnius distriktskommune, Litauen (heretter – datakontrolløren) behandler dine personopplysninger på nettstedet https://www.lemara.lt. Du kan kontakte dataansvarlig gjennom følgende kontakter:",
      text3: "Du kan kontakte dataansvarlig gjennom følgende kontakter:",
      text4: "Hvem kan vi overføre dine personopplysninger til?",
      text5:
        "Vi kan overføre informasjon om deg til våre ansatte, mellommenn, tjenesteleverandører, som for eksempel gjeldsadministrasjon eller inkassoselskaper, selskaper som leverer arkivtjenester, juridiske tjenester, markedsføringstjenester, IT-tjenesteleverandører eller underleverandører, hvis det er rimelig nødvendig for formålene spesifisert i denne personvernerklæringen . i politikken. Vi kan også avsløre informasjon om deg hvis vi må gjøre det i samsvar med loven eller for å forsvare våre rettigheter eller interesser (inkludert å gi dine personopplysninger til tredjeparter for å samle inn gjelden din til oss), i tillegg til å ha til hensikt å overføre en del av selskapets aktiviteter eller dets eiendeler eller å omorganisere selskapet eller under disse prosessene, utlevere dine personopplysninger til den (potensielle) erververen av aktiviteten eller deler av den, andre omorganiseringsdeltakere.",
      text7:
        "Dine personopplysninger vil bli behandlet i samsvar med kravene i den generelle databeskyttelsesforordningen (heretter – GDPR), loven om juridisk beskyttelse av personopplysninger i Republikken Litauen og andre juridiske handlinger. Den behandlingsansvarlige, både ved fastsettelse av tiltak for behandling av personopplysninger og under selve databehandlingen, iverksetter passende databeskyttelsestekniske og organisatoriske tiltak fastsatt i rettsakter, utformet for å beskytte behandlede personopplysninger mot utilsiktet eller ulovlig ødeleggelse, skade, endring, tap, avsløring , samt fra annen ulovlig behandling. Hensiktsmessige tiltak fastsettes under hensyntagen til risikoene som oppstår ved behandling av personopplysninger.",
      text8: "Hva er dine rettigheter?",
      text9:
        "Nedenfor gir vi informasjon om dine rettigheter knyttet til behandling av personopplysningene dine av behandlingsansvarlig, og tilfeller der du kan bruke disse rettighetene. Hvis du ønsker å motta mer informasjon om dine rettigheter eller å utøve dem, vennligst kontakt oss på e-posten som er spesifisert i denne personvernerklæringen. postadresse.",
      text10:
        "Du kan når som helst kontakte oss og spørre om vi behandler noen av dine personopplysninger. Hvis vi lagrer eller bruker dine personopplysninger på noen måte, har du rett til å få tilgang til dem. For å gjøre dette, send oss ​​en skriftlig forespørsel til e-postadressen som er spesifisert i denne personvernerklæringen. postadresse. For å oppfylle forespørselen din kan vi be deg om å bekrefte din personlige identitet. Når du sender en slik forespørsel, må du være rettferdig og rimelig.",
      text11:
        "Hvis du har gitt oss ditt samtykke til behandlingen av dataene dine, kan du når som helst trekke det tilbake via e-post spesifisert i denne personvernerklæringen. postadresse.",
      text12:
        "Du har rett til å be oss om å korrigere eventuelle unøyaktigheter i dataene vi har. I dette tilfellet kan vi be deg om å bekrefte den korrigerte informasjonen.",
      text13:
        "Du har rett til å be oss om å slette dine personopplysninger. Denne retten utøves i de tilfellene som er fastsatt i artikkel 17 i GDPR.",
      text14:
        "Du har rett til å be oss om å begrense behandlingen av dine personopplysninger eller ikke å behandle dem.",
      text15:
        "Du har rett til overføring av data som behandles på automatiserte måter og som vi har mottatt fra deg med ditt samtykke eller med det formål å inngå en kontrakt. Etter at du har utøvd denne retten, vil vi overføre en kopi av dataene du oppga på din forespørsel.",
      text16:
        "Du har rett i henhold til art. 21 i GDPR. i samsvar med den etablerte prosedyren, ikke godta at vi bruker dine personopplysninger.",
      text17: "Hvordan kan du håndheve dine rettigheter?",
      text18:
        "For å utøve dine rettigheter, forespørsler, klager eller krav, vennligst send dem til oss skriftlig på kontaktene som er angitt i denne personvernerklæringen. Vi vil svare på mottatte forespørsler, klager eller krav skriftlig i samsvar med prosedyren og fristene fastsatt av rettsakter. Vi prøver å gi deg informasjon så snart som mulig, men senest innen 30 dager etter at vi mottok forespørselen din. Dersom vi etter mottak av en forespørsel, klage eller krav har mistanker om identiteten til søkeren, har vi rett til å be om identitetsdokumentet til søkeren.",
      text19: "Klager",
      text20:
        "Hvis du mener at dine rettigheter som datasubjekt blir og/eller kan bli krenket, vennligst kontakt oss umiddelbart på e-postadressen spesifisert i denne personvernerklæringen. per post Vi garanterer at vi først etter å ha mottatt klagen din vil kontakte deg innen rimelig tid og informere deg om fremdriften i etterforskningen av klagen, og senere om resultatet. Hvis du ikke er fornøyd med resultatet av undersøkelsen, kan du sende inn en klage til tilsynsmyndigheten – Statens datatilsyn (www.vdai.lrv.lt/).",
      text21: "Ansvar",
      text22:
        "Du er ansvarlig for å sikre at dataene du gir oss er nøyaktige, korrekte og fullstendige. Hvis dataene du har oppgitt endres, må du umiddelbart informere oss om det på e-post. per post Vi vil ikke i noe tilfelle være ansvarlige for skader påført deg på grunn av at du har oppgitt uriktige eller ufullstendige personopplysninger eller ikke har informert oss når de har endret seg. Personvernerklæring oppdatert i 2021. 10. desember",
      text23:
        "Denne personvernerklæringen er utviklet av Glimstedt Dock. Advokatfirmaet Glimstedt eier alle opphavsrettigheter til personvernreglene, og gir MB Lemara rett til å bruke personvernreglene på nettstedet http://www.lemara.lt. Kopiering eller på annen måte bruk av personvernerklæringen eller dens del er forbudt uten skriftlig samtykke fra advokatfirmaet Glimstedt.",
    },
    images: {
      logo: "/images/logo/logo2.png",
      logoAlt: "MB Lemara logo",
      navBgTexture: "/images/background/navBg1.png",
      bgTexture: "/images/background/aboutBg.png",
      galleryBgTexture: "/images/background/galleryBg.png",
      mainImage: "/images/background/main1a.jpg",
      mainImageAlt: "Bilde av CNC-maskin under produksjon",
      whyUsImage: "/images/home/whyUs.jpg",
      whyUsImageAlt: "Bilde av et produkt laget av CNC-fresing",
      aboutUsImage: "/images/home/aboutUs.jpg",
      aboutUsImageAlt: "Bilde av Lemara-ansatte",
      turningImage: "/images/turning/t5.jpg",
      turningImageAlt: "bilde av CNC-dreiemaskin",
      millingImage: "/images/milling/m1.jpg",
      millingImageAlt: "bilde av CNC-fresemaskin",
      designImage: "/images/design/d1.jpg",
      designImageAlt: "bilde av en designer",
      galleryTurningAlt: "Delen er laget ved CNC-dreiing eller fresing",
      galleryMillingAlt: "Delen er laget ved CNC-fresing",
    },
    meta: {
      text1: "Lemara CNC-Delerproduksjon",
      text2:
        "Produksjon av CNC-deler: deres design, dreiing, fresing fra plast og metall.",
      text3: "Lemara CNC-Dreiing",
      text4:
        "Informasjon om CNC-dreiing, materialene vi jobber med, delene vi kan produsere.",
      text5: "Lemara CNC-Fresing",
      text6:
        "Informasjon om CNC-fresing, materialene vi jobber med, delene vi kan produsere.",
      text7: "Lemara CNC Parts Design",
      text8: "Informasjon om design av CNC-deler",
      text9: "Lemara Generell Informasjon",
      text10:
        "Generell informasjon om MB Lemara, produksjon av CNC-deler, dreiing, fresing, design, ordrekrav, levering, etc.",
      text11: "Lemara-Utstyr",
      text12:
        "Lemaras tilgjengelige CNC-dreie- og freseutstyr og tekniske spesifikasjoner og tekniske muligheter side.",
      text13: "Lemara Gallery",
      text14:
        "I Lemara-galleriet kan du finne eksempler på deler produsert av Lemaras CNC-drei- og fresespesialister.",
      text15: "Lemara Karrieremuligheter",
      text16:
        "Hvis du ser etter en jobb innen produksjon av CNC-deler - besøk Lemaras karriereside",
      text17: "Lemara-Kontakter",
      text18:
        "Hvis du vil kontakte Lemara-spesialister - på denne siden finner du alle nødvendige kontakter.",
      text19: "Lemaras Retningslinjer For Personvern",
      text20: "Informasjon om MB Lemaras personvernpolicy.",
    },
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
