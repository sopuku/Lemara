import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Center,
  color,
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
      bg={colors.footer.bg}
      color={colors.footer.color}
      backgroundImage={colors.footer.bgTexture}
    >
      <Container as={Stack} maxW={"8xl"} py={10} align="center">
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={{ md: 3, lg: 10, xl: 32 }}
        >
          <Stack spacing={6} align="center">
            <Center>
              <Image src={colors.footer.logo} width="100px" />
            </Center>
            <Text fontSize="sm" color={colors.footer.color}>
              MB „Lemara“ © 2022 Visos teisės saugomos
            </Text>
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
            <Links
              href="/services/turning"
              _hover={{ color: colors.footer.colorHover }}
            >
              CNC TEKINIMAS
            </Links>
            <Links
              href="/services/milling"
              _hover={{ color: colors.footer.colorHover }}
            >
              CNC FREZAVIMAS
            </Links>
            <Links
              href="/services/design"
              _hover={{ color: colors.footer.colorHover }}
            >
              PROJEKTAVIMAS
            </Links>
            <Links href="/privacy" _hover={{ color: colors.footer.colorHover }}>
              PRIVATUMO POLITIKA
            </Links>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
