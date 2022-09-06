import Texts from "../../Components/Texts/Texts";
import { Box, Text, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import Colors from "../Ui/Colors";

export default function GeneralMain() {
  const texts = Texts();
  const colors = Colors();
  return (
    <Box
      mx="auto"
      w={["90%", "90%", "70%"]}
      align="justify"
      py="5rem"
      bg={colors.general.bg}
      color={colors.general.color}
    >
      <Heading textAlign="center" fontSize="50" as="h1" pb="2rem">
        Bendra informacija
      </Heading>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        Maksimalus ir minimalus užsakomas detalių kiekis
      </Heading>
      <Text>
        Dažniausiai vykdome užsakymus mažų ar vidutinių gaminių serijų, kurias
        sudaro 1-500 vienetų detalių. Kuo didesnis kiekis, tuo mažesnė vieno
        vieneto kaina, todėl finansiniu atžvilgiu visada taupesni yra didesni
        užsakymai. Žinoma, jeigu jums reikia tik vienos detalės, mes pagaminsime
        tik vieną detalę. Jeigu jums reikia vienos detalės ir skubiai, mes
        pasistengsime pagaminti tą išganingąją detalę skubiai. Juk būna, kad dėl
        vienos mažos detalytės trūkumo ima ir sustoja visas gamybos cechas.
        Turite skubų, grafike nenumatytą atvejį? Susisiekite su mumis.
        Pasistengsime padėti – juk taip gera pradžiuginti savo klientus! Detales
        ne tik gaminame, bet ir taisome Mūsų staklės pajėgios ne tik naujas
        detales „kepti“, bet ir taisyti / restauruoti senas, taip pat gaminti
        prototipus.
      </Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        Per kiek laiko gausite savo detales?
      </Heading>
      <Text>
        Paprastai užsakymus įvykdome per ne daugiau kaip 20 darbo dienų nuo
        paslaugų teikimo sutarties pasirašymo. Jei klientas savo užsakymą nori
        gauti greičiau, tai taip pat įmanoma. Gamybos laikas labai priklauso nuo
        jau turimų ir vykdomų užsakymų kiekio, medžiagų tiekimo grafiko ir
        serijos dydžio.
      </Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        Detalių medžiagos: iš ko mes jas gaminame?
      </Heading>
      <Text>
        Populiariausios medžiagos yra aliuminis, metalas, plastikas. Kiekvienos
        medžiagos savybės skirtingos, todėl dirbant su jomis, reikia žinoti tam
        tikrus niuansus. Aliuminis yra minkštas, lengvas, atsparus karščiui,
        lengvai apdirbamas. Jis nerūdija ir puikiai tinka su kitomis
        medžiagomis. Metalas yra pigesnis už aliuminį, tačiau jis sunkiau
        pasiduoda apdorojimui, nes yra tvirtas, stiprus. Deja, šiai medžiagai
        būtina apsauga nuo korozijos – dažymas ar specialus apsauginis cheminis
        sluoksnis. Plastikas taip pat dažnai įvairiausioms detalėm naudojama
        medžiaga. Ją lengva formuoti, ji lengva, nerūdijanti, atspari drėgmei,
        gali būti įvairių spalvų ir pan.
      </Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        Nuo ko priklauso galutinė kaina?
      </Heading>
      <Text>
        Galutinę kainą lemia: detalės sudėtingumas; reikalavimai detalės matmenų
        tikslumui, paviršiaus švarumui, eometrijai; medžiagos, iš kurios
        gaminama detalė, kaina, medžiagos kietumas, tamprumas, specifinių
        apdirbimo rankių naudojimo būtinybė, partijos dydis (detalių kiekis).
        Detalių kainos taip pat susijusios su projektavimu, programavimu,
        staklių suderinimu. Ši gamybos dalis išeikvoja tuos pačius resursus tiek
        gaminant 1, tiek ir 500 detalių. Todėl jums, kaip klientui, visada
        ekonomiškiau užsakyti kuo didesnį kiekį. Mes rekomenduojame, kad jis
        būtų ne mažesnis nei 10 vienetų.
      </Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        Kaip atsiimti pagamintas detales?
      </Heading>
      <Text>
        Detalių CNC frezavimą atliekame Vilniuje, tačiau užsakymai priimami iš
        visos Lietuvos ir iš kitų valstybių. Detales siunčiame, o siuntimo kaina
        priklauso nuo atstumo bei užsakymo skubumo.
      </Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        Protingas medžiagų likučių panaudojimas
      </Heading>
      <Text>
        Tvarumo principai užtikrintai skinasi kelią į įvairias gamybos sritis.
        Mes taip pat visada stengiamės apgalvoti visą savo veiklą taip, kad
        sukurtume kuo mažiau atliekų (beje, taip net dar ir sutaupome tiek savo,
        tiek klientų išlaidas). Niekada neišmetame medžiagų likučių, jei tik yra
        galimybė juos panaudoti mažesniems užsakymams, o visas nepanaudotas
        atliekas atiduodame perdirbimui.
      </Text>

      <Heading as="h1" pt="5rem" pb="2rem">
        CNC tekinimas
      </Heading>
      <Text pb="1rem">
        CNC staklės – įrenginys, kurį pagal operatoriaus nustatytas programas
        valdo kompiuteris. Tekinimas vyksta sukant ruošinį aplink savo ašį bei
        liečiant jį įrankiais (peiliais), kurie nupjauna / pašalina
        nereikalingas medžiagos dalis. Taip suformuojama norima forma, kuri yra
        apvali ir simetriška. Sustabdžius sukimą atskiru aktyviu įrankiu
        suformuojamos reikiamos nesimetrinės formos dalys. Tekinimo paslaugas
        atlikti mums padeda modernios japoniškos CNC staklės OKUMA LB15 (OKUMA
        prekės ženklas yra vienas brangiausių pasaulyje tarp CNC įrangos
        gamintojų) ir naujesnės už jas, itin tikslios Doosan LYNX 2100 LYB ir
        Doosan LYNX 2100 LMB turinčios aktyvius įrankius, kurie suteikia daugiau
        galimybių. Šie nepavargstantys ir ypatingai savo darbą mylintys
        „darbuotojai“ tiesiog apsėsti tikslumu bei tik ir laukia, kol gaus
        „pakramtyti“ metalo ar plastiko bei sukurti iš jo mūsų klientų lūkesčius
        atitinkančias detales. CNC tekinimo būdu iš metalo ar plastiko gaminamos
        cilindrinės, kūginės, sferinės, fasoninės detalės, apdirbami jų galiniai
        plokšti paviršiai.
      </Text>
      <Text pb="1rem">
        Moderni įranga užtikrina greitį ir tikslumą. CNC tekinimo staklės –
        moderni šiuolaikinė įranga, kuri pagal kompiuterinės programos
        nustatytus išmatavimus ištekina itin tikslias detales iš plastiko,
        metalo ar kitų medžiagų. Pagal tą pačią programinę užduotį pagamintos
        detalės būna maksimaliai tikslios ir identiškos. Iš metalo pagamintos
        detalės tvirtesnės, tačiau iš plastiko – lengvesnės. Medžiagos
        parinkimas priklauso nuo to, kur jos bus naudojamos.
      </Text>
      <Text>
        Jūs gaunate iš mūsų tikslius CNC (computer numerical control, o
        lietuviškai kompiuterinis skaitmeninis valdymas) detalių tekinimo darbus
        mažomis arba vidutinėmis serijomis savo projektų įgyvendinimui. Priimame
        ir vienetinius užsakymus, gaminame prototipus.
      </Text>
      <Heading as="h1" pt="5rem" pb="2rem">
        CNC frezavimas
      </Heading>
      <Text pb="1rem">
        Frezavimas – vienas iš mechaninio medžiagų apdirbimo būdų, kai darbo
        įrankis (freza) sukdamasis nupjauna nuo apdorojamo ruošinio paviršiaus
        nustatyto dydžio drožlę. Frezuojant galima išlyginti ruošinio paviršių,
        išpjauti jame įvairių formų, gylių ir profilių griovelius, formuoti
        nuožulnumus, fasoninius paviršius.
      </Text>
      <Text pb="1rem">
        CNC – angliško žodžių junginio computer numerical control trumpinys. Na,
        o CNC frezavimas – tai įvairių detalių gamyba frezavimo staklėmis,
        kurias pagal užduotas programas valdo kompiuteris. Šitaip apdoroti
        galima įvairias medžiagas: plastiką, medį, metalus ir t. t. Du
        pagrindiniai tokios detalių gamybos privalumai yra greitis (iki 20000 mm
        / min.) ir tikslumas.
      </Text>
      <Text pb="0.5rem">Dar daugiau privalumų:</Text>
      <UnorderedList>
        <ListItem>detales galima apdoroti nustatytu gyliu;</ListItem>
        <ListItem>galima pjauti didelio storio medžiagų ruošinius;</ListItem>
        <ListItem>
          galima naudoti skirtingų dydžių ir tipų įrankius išpjovimui;
        </ListItem>
        <ListItem>
          galima apdoroti įvairias medžiagas (plastiką, medieną ir iš jos
          pagamintas medžiagas, įvairius metalus ir pan.), kiekvienai jų
          parenkant tinkamus įrankius ir taip išgaunant maksimalų našumą ir
          kokybę;
        </ListItem>
        <ListItem>
          galima pagaminti tiek paprastas detales, tiek itin sudėtingas, dirbant
          tiek 2D, tiek 3D formatais;
        </ListItem>
        <ListItem>detalės išpjaunamos itin tiksliai;</ListItem>
        <ListItem>
          labai sumažėja šitokiu būdu pagamintų detalių kaina;
        </ListItem>
        <ListItem>galima pagaminti neribotą kiekį identiškų detalių;</ListItem>
        <ListItem>
          galima gaminti tiek technines, tiek dekoratyvias detales, reikalingas
          pačioms įvairiausioms sritims: reklamos gamybai, baldų pramonei,
          interjero dekoravimui, santechnikai, maisto gamybos įrangai ir t. t.
        </ListItem>
      </UnorderedList>
      <Text pt="0.5rem">
        Visi šie privalumai nulėmė, jog CNC frezavimas šiuo metu yra vienas
        populiariausių metalo apdirbimo metodų.{" "}
      </Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        Kaip vyksta CNC frezavimas?
      </Heading>
      <Text pb="1rem">
        Pasiruošimo etapas. Tai reikšminga, atsakinga ir pati ilgiausia detalių
        gamybos dalis. Operatorius įkelia technologo pagal brėžinį (kliento
        atsiųstą failą) paruoštą programą į staklių valdiklį, surenka
        reikalingus įrankius, įtvirtina medžiagos ruošinį, nustato ruošinio
        nulinį tašką. Visa tai gali užtrukti ir pusvalandį, ir net kelias
        valandas, atsižvelgiant į galutinio gaminio sudėtingumą.
      </Text>
      <Text>
        Detalės / -ių išpjovimas. Šiame etape operatorius tiesiogiai
        nebedalyvauja, kadangi staklės tiesiog darbuojasi pagal joms užduotą
        programą. Tai gali užtrukti nuo kelių minučių iki kelių dešimčių valandų
        – viskas priklauso nuo gaminio sudėtingumo.
      </Text>

      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        Kokių detalių frezavimo paslaugas siūlome
      </Heading>
      <Text pb="1rem">
        Dažniausiai frezuojamos detalės forma būna artima stačiakampiui
        gretasieniui, cilindrui ar sferai, tačiau galima suformuoti detales ir
        su sudėtingais erdviniais paviršiais. Pradinis ruošinio kontūras
        išgaunamas liejant, štampuojant, atpjaunant (tai priklauso, iš kokios
        medžiagos gaminama detalė). Detalių matmenys taip pat labai įvairūs: nuo
        kelių iki kelių šimtų milimetrų (tačiau negali viršyti staklių darbinės
        zonos matmenų ir maksimalios ruošinio masės).
      </Text>
      <Text>
        Be tokių preciziškai išfrezuotų detalių neįsivaizduojama įmonių,
        gaminančių įrangą maisto pramonei, transportui, laboratorijoms,
        automobilių gamybai, robotikai ir t. t. Beje, mūsų numylėtų CNC
        frezavimo staklių detalės juk taip pat kažkada buvo frezuotos panašiose
        staklėse.
      </Text>

      <Heading as="h1" pt="5rem" pb="2rem">
        CNC dalys: jų projektavimas ir gamyba{" "}
      </Heading>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        Detalės projektuojamos ir gaminamos mūsų ceche
      </Heading>
      <Text>
        Projektuojame ir gaminame įvairius gaminius iš metalo ir plastiko.
        Specializuojamės gaminant didelio tikslumo reikalaujančius elementus
        automatinėms ir robotizuotoms gamybos, apdirbimo linijoms, konvejeriams.
        Itin didelio tikslumo CNC staklėms įkandamos pačios preciziškiausios
        užduotys ir įvairios medžiagos. Populiariausia metalinių ir plastikinių
        detalių gamyba, tačiau gali būti naudojamos ir kitokios medžiagos.
      </Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        Skirtingų gamybos procesų ir technologijų reikalaujančios detalės
        gaminamos keliais etapais
      </Heading>
      <Text>
        Sudėtingos detalės gaminamos pasitelkiant skirtingas technologijas.
        Pavyzdžiui, detalė gali būti iš pradžių ištekinama, o vėliau perkeliama
        į kitas stakles frezavimui. Taip pat iš pradžių gali būti lazeriu
        išpjaunamas ruošinys, vėliau jis frezuojamas, o paskui šlifuojamas
        abrazyvinėmis granulėmis. Visi šie gamybiniai etapai turi būti atliekami
        teisingu, iš anksto numatytu eiliškumu ir kontroliuojami.
      </Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        Kaip vyksta CNC detalių projektavimas?
      </Heading>
      <Text>
        Pagal detalės pavyzdį, kai turima detalė labai tiksliai išmatuojama,
        padaromi jos brėžiniai, sukuriamas kompiuterinis modelis. Šis metodas
        vadinamas atvirkštine inžinerija (reverse ingeneering). Pagal pateiktą
        užduotį ir aprašymą. Jeigu nėra aprašymo, o detalės atgabenti pas mus
        nėra galimybių (negalima išmontuoti), jos apžiūrėti ir išmatuoti -
        keliaujame patys.
      </Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        Kaip greitai paruošiamas gaminio projektas ir pagaminamas pats gaminys?
      </Heading>
      <Text>
        CNC staklėse įvairių įrenginių dalys ir kitos detalės gimsta labai
        sparčiai, tačiau visa projektavimo ir gamybos trukmė priklauso nuo
        sudėtingumo ir nuo mūsų staklių užimtumo. Taigi viskas gali užtrukti ir
        vieną valandą ir keletą savaičių.{" "}
      </Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        Ar galima pagaminti tik vieną detalę (prototipą) ir kiek tai kainuoja?
      </Heading>
      <Text>
        Taip, žinoma, gaminame tiek vieną, tiek daugiau. Galime suprojektuoti
        detalės kompiuterinį 3D modelį, pateikti brėžinius 2D variante. Gaminame
        prototipus testavimui pagal projektą. Kaina priklauso nuo sudėtingumo.
        Suprantama, vienos detalės gamyba visada bus brangesnė, nei dviejų tokių
        pačių.{" "}
      </Text>
      <Heading as="h2" fontSize="22px" pt="1.5rem" pb="0.5rem">
        O jei konkrečios detalės gamybai neturime reikiamų apdirbimo priemonių?
      </Heading>
      <Text>
        Net ir tokiu atveju jūsų detalė bus preciziškai pagaminta.
        Bendradarbiaujame su daug partnerių, todėl su jų pagalba galime atlikti
        praktiškai visas įmanomas medžiagų apdirbimo operacijas: frezavimą,
        tekinimą, pjovimą viela, pjovimą vandeniu, pjovimą lazeriu, pjovimą
        plazma, pjovimą elektroerozija, šlifavimą, anodavimą, virinimą,
        lankstymą ir kt.
      </Text>
    </Box>
  );
}
