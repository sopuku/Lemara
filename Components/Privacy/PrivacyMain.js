import {
  Text,
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Container,
} from "@chakra-ui/react";
import React from "react";
import Colors from "../Ui/Colors";

export default function PrivacyMain() {
  const colors = Colors();
  return (
    <Container
      maxW="100%"
      py="5rem"
      px={{ base: "5%", lg: "15%" }}
      align="justify"
      color={colors.privacy.color}
      bg={colors.privacy.bg}
    >
      <Heading textAlign="center" pb="4rem">
        PRIVATUMO POLITIKA
      </Heading>
      <Text align="justify" fontSize="20px">
        Šioje privatumo politikoje (toliau – Privatumo politika) Jums pateikiame
        informaciją, kaip MB Lemara, juridinio asmens kodas 304374938,
        registruotos buveinės adresas Pasagų g. 4, Riešė, Vilniaus rajono
        savivaldybė, Lietuva (toliau – Duomenų valdytojas) tvarko Jūsų asmens
        duomenis https://www.lemara.lt internetinėje svetainėje. Su Duomenų
        valdytoju galite susisiekti šiais kontaktais:
      </Text>
      <Text align="justify" fontSize="20px" py="1rem">
        Su Duomenų valdytoju galite susisiekti šiais kontaktais:
      </Text>
      <Text align="justify" fontSize="20px">
        Tel.: +370 646 57845
      </Text>
      <Text align="justify" fontSize="20px">
        El. paštas: povilas@lemara.lt
      </Text>
      <Text align="justify" fontSize="20px">
        Adresas: Pasagų g. 4, Riešės k., LT-14265 Vilniaus r.
      </Text>
      <Heading py="2rem" fontSize="30px">
        Kam galime perduoti Jūsų asmens duomenis?
      </Heading>
      <Text align="justify" fontSize="20px">
        Mes galime perduoti informaciją apie Jus mūsų darbuotojams,
        tarpininkams, paslaugų teikėjams, tokiems kaip skolų administravimą ar
        išieškojimą vykdančioms įmonėms, archyvavimo paslaugas teikiančioms
        įmonėms, teisines, rinkodaros paslaugas, IT paslaugas teikiantiems
        asmenims ar subrangovams, jei pagrįstai reikia tiems tikslams, kaip
        nurodyta šioje Privatumo politikoje. Taip pat mes galime atskleisti
        informaciją apie Jus, jei turime padaryti tai pagal įstatymą arba
        siekdami apginti savo teises ar interesus (įskaitant Jūsų asmens duomenų
        pateikimą tretiesiems asmenims, siekiant išieškoti Jūsų įsiskolinimus
        mums), taip pat ketinant perleisti bendrovės veiklos ar jos turto dalį
        ar reorganizuoti bendrovę ar vykdant šiuos procesus, atskleidžiant Jūsų
        asmens duomenis (potencialiam) veiklos ar jos dalies įgijėjui, kitiems
        reorganizavimo dalyviams.
      </Text>
      <Heading py="2rem" fontSize="30px">
        Kaip tvarkomi Jūsų asmens duomenys?
      </Heading>
      <Text align="justify" fontSize="20px">
        Jūsų asmens duomenys bus tvarkomi laikantis Bendrojo duomenų apsaugos
        reglamento (toliau – BDAR), Lietuvos Respublikos asmens duomenų teisinės
        apsaugos įstatymo bei kitų teisės aktų nustatytų reikalavimų. Duomenų
        valdytojas, tiek nustatydamas asmens duomenų tvarkymo priemones, tiek
        paties duomenų tvarkymo metu, įgyvendina tinkamas teisės aktuose
        nustatytas duomenų apsaugos technines ir organizacines priemones,
        skirtas apsaugoti tvarkomus asmens duomenis nuo atsitiktinio ar
        neteisėto sunaikinimo, sugadinimo, pakeitimo, praradimo, atskleidimo,
        taip pat nuo bet kokio kito neteisėto tvarkymo. Atitinkamos priemonės
        nustatomos atsižvelgiant į pavojus, kurie kyla dėl asmens duomenų
        tvarkymo.
      </Text>
      <Heading py="2rem" fontSize="30px">
        Kokios yra Jūsų teisės?
      </Heading>
      <Text align="justify" fontSize="20px" pb="1.5rem">
        Žemiau pateikiame informaciją apie Jūsų teises, susijusias su Duomenų
        valdytojo vykdomu Jūsų asmens duomenų tvarkymu, ir atvejus, kada šiomis
        teisėmis galite pasinaudoti. Jei norite gauti daugiau informacijos apie
        savo teises ar jas įgyvendinti, susisiekite su mumis šioje Privatumo
        politikoje nurodytu el. pašto adresu.
      </Text>
      <UnorderedList textAlign="left" align="justify" fontSize="20px">
        <ListItem>
          Jūs galite bet kada susisiekti su mumis ir pasiteirauti, ar mes
          tvarkome kokius nors Jūsų asmens duomenis. Jei mes saugome ar bet
          kokiu būdu naudojame Jūsų asmens duomenis, Jūs turite teisę su jais
          susipažinti. Norėdami tai padaryti, pateikite mums rašytinį prašymą
          šioje Privatumo politikoje nurodytu el. pašto adresu. Mes Jūsų prašymo
          įvykdymo tikslu galime Jūsų paprašyti patvirtinti savo asmens
          tapatybę. Teikdami tokį prašymą, laikykitės sąžiningumo ir protingumo
          principų.
        </ListItem>
        <ListItem>
          Jei esate pateikę mums sutikimą dėl Jūsų duomenų tvarkymo, jį galite
          bet kada atšaukti šioje Privatumo politikoje nurodytu el. pašto
          adresu.
        </ListItem>
        <ListItem>
          Jūs turite teisę prašyti mūsų ištaisyti bet kokius turimų duomenų
          netikslumus. Tokiu atveju mes galime paprašyti Jūsų patvirtinti
          ištaisytą informaciją.
        </ListItem>
        <ListItem>
          Jūs turite teisę prašyti mūsų ištrinti Jūsų asmens duomenis. Ši teisė
          įgyvendinama BDAR 17 straipsnyje numatytais atvejais.
        </ListItem>
        <ListItem>
          Jūs turite teisę prašyti mūsų riboti Jūsų asmens duomenų tvarkymą arba
          jų netvarkyti.
        </ListItem>
        <ListItem>
          Jūs turite teisę į duomenų, kurie tvarkomi automatizuotomis
          priemonėmis ir kuriuos iš Jūsų gavome Jums sutinkant arba sutarties
          sudarymo tikslais, perkėlimą. Jums pasinaudojus šia teise, Jūsų
          prašymu perkelsime Jūsų pateiktų duomenų kopiją.
        </ListItem>
        <ListItem>
          Jūs turite teisę BDAR 21 str. nustatyta tvarka nesutikti, kad mes
          naudotumėme Jūsų asmens duomenis.
        </ListItem>
      </UnorderedList>
      <Heading py="2rem" fontSize="30px">
        Kaip galite įgyvendinti savo teises?
      </Heading>
      <Text align="justify" fontSize="20px">
        Siekdami įgyvendinti savo teises, prašymus, skundus ar reikalavimus
        pateikite mums raštu šioje Privatumo politikoje nurodytais kontaktais. Į
        gautus prašymus, skundus ar reikalavimus Jums atsakysime raštu teisės
        aktų nustatyta tvarka ir terminais. Stengiamės pateikti Jums informaciją
        kiek įmanoma greičiau, bet ne vėliau kaip per 30 dienų nuo Jūsų prašymo
        gavimo. Jeigu, gavus prašymą, skundą ar reikalavimą, mums kils įtarimų
        dėl besikreipiančiojo asmens tapatybės, mes turime teisę paprašyti
        besikreipiančiojo asmens tapatybės dokumento.
      </Text>
      <Heading py="2rem" fontSize="30px">
        Nusiskundimai
      </Heading>
      <Text align="justify" fontSize="20px">
        Jei manote, kad Jūsų, kaip duomenų subjekto, teisės yra ir (ar) gali
        būti pažeistos, prašome nedelsiant kreiptis į mus šioje Privatumo
        politikoje nurodytu el. paštu. Mes užtikriname, kad tik gavus Jūsų
        skundą susisieksime su Jumis per pagrįstą laikotarpį ir informuosime
        apie skundo tyrimo eigą, o vėliau ir apie rezultatą. Jei tyrimo
        rezultatai Jūsų netenkins, galėsite pateikti skundą priežiūros
        institucijai – Valstybinei duomenų apsaugos inspekcijai
        (www.vdai.lrv.lt/).
      </Text>
      <Heading py="2rem" fontSize="30px">
        Atsakomybė
      </Heading>
      <Text align="justify" fontSize="20px">
        Jūs esate atsakingi už tai, kad Jūsų mums pateikti duomenys būtų
        tikslūs, teisingi ir išsamūs. Jeigu pasikeičia Jūsų pateikti duomenys,
        Jūs turite nedelsdami mus apie tai informuoti el. paštu. Mes jokiu
        atveju nebūsime atsakingi už žalą, atsiradusią Jums dėl to, jog Jūs
        nurodėte neteisingus ar neišsamius asmens duomenis arba neinformavote
        mūsų jiems pasikeitus. Privatumo politika atnaujinta 2021 m. gruodžio 10
        d.
      </Text>

      <Text align="justify" fontSize="20px">
        Ši Privatumo politika sukurta Glimstedt doke. Advokatų kontorai
        Glimstedt priklauso visos autorių teisės į Privatumo politiką, ji
        suteikia teisę MB Lemara naudoti Privatumo politiką savo internetinėje
        svetainėje http://www.lemara.lt. Kopijuoti ar kitaip naudoti Privatumo
        politiką ar jos dalį be advokatų kontoros Glimstedt rašytinio sutikimo
        draudžiama.
      </Text>
    </Container>
  );
}
