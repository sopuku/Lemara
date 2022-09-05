import { Stack, Image, Box, Heading, Text } from "@chakra-ui/react";
import Colors from "../Ui/Colors";

export default function WhyUs() {
  const colors = Colors();
  return (
    <Stack
      direction={{ base: "column", xl: "row" }}
      spacing="5%"
      align="center"
      w="100%"
      h={["70rem", "70rem", "65rem", "65rem", "45rem"]}
      px={["3%", "3%", "7%", "10%", "10%", "15%"]}
      py="7rem"
    >
      <Image
        src={colors.home.image}
        maxW="40rem"
        maxH="25rem"
        boxShadow="0 0 5px 1px "
      />
      <Box color={colors.home.whyUs.color} bg={colors.home.whyUs.bg}>
        <Heading py="5%">Kodėl turėtumėte pasirinkti mus?</Heading>
        <Text fontSize="lg" align="justify">
          Esame jauni ir ambicingi savo srities profesionalai. Nuolatos
          plečiamės ir keliame darbuotojų kvalifikaciją. Visada užtikriname
          aukščiausios kokybės produktą, kurį atliekame per trumpiausią įmanomą
          laiką. Specializuojamės gaminant didelio tikslumo reikalaujančius
          elementus automatinėms ir robotizuotoms gamybos, apdirbimo linijoms,
          konvejeriams, tačiau atliekame ir kitus darbus. nuo 2016 metų
          sėkmingai gaminame detales didelėms Lietuvos ir užsienio kompanijoms.
        </Text>
      </Box>
    </Stack>
  );
}
