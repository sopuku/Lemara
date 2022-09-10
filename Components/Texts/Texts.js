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
      turning: "CNC Turning",
      milling: "CNC Milling",
      design: "Projektavimas",
    },
    index: {
      text1:
        "Lemara - preciziškai ištekintos detalės jūsų konstrukciniams sumanymams",
      text2:
        "Projektuojame ir gaminame pavienes detales, prototipus, serijas. Išsirinkite tinkamas paslaugas, o jei turite klausimų,",
      text3: "susisiekite su mumis",
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
          { label: "General information", href: "/services/general" },
        ],
      },
      {
        label: "Equipment",
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
