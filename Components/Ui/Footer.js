import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";
import Links from "./Navigation/Links";
import Colors from "./Colors";
import Texts from "../Texts/Texts";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const texts = Texts();
  const colors = Colors();
  return (
    <Box
      bg={colors.footerBg}
      color={colors.footerLinkColor}
      backgroundImage="/images/background/navBg1.png"
    >
      <Container as={Stack} maxW={"8xl"} py={10} align="center">
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={{ md: 3, lg: 10, xl: 32 }}
        >
          <Stack spacing={6} align="center">
            <Center>
              <Image src="/images/logo/logo2.png" width="100px" />
            </Center>
            <Text fontSize={"sm"}>UAB LEMARA © 2022 Visos teisės saugomos</Text>
          </Stack>
          <Stack align={"flex-start"} mt={{ sm: 10, md: 0 }}>
            <ListHeader>MB „Lemara“</ListHeader>
            <Text>Įmonės kodas: 304374938</Text>
            <Text>PVM mokėtojo kodas: LT100010561112</Text>
          </Stack>
          <Stack align={"flex-start"} mt={{ sm: 10, md: 0 }}>
            <ListHeader>{texts.footer.contacts}</ListHeader>
            <Text>Pasagų g. 4, Riešės k., LT-14265 Vilniaus r.</Text>
            <Text>info@lemara.lt</Text>
            <Text>+370 646 57845</Text>
          </Stack>
          <Stack align={"flex-start"} mt={{ sm: 10, md: 0 }}>
            <ListHeader>Paslaugos</ListHeader>
            <Links href="/services/turning" _hover={{ color: "orange" }}>
              CNC TEKINIMAS
            </Links>
            <Links href="/services/milling" _hover={{ color: "orange" }}>
              CNC FREZAVIMAS
            </Links>
            <Links href="/services/design" _hover={{ color: "orange" }}>
              PROJEKTAVIMAS
            </Links>
            <Links href="/privacy" _hover={{ color: "orange" }}>
              PRIVATUMO POLITIKA
            </Links>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
