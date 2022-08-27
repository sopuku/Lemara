import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box bg="gray.50" color="gray.700">
      <Container as={Stack} maxW={"8xl"} py={10} align="center">
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={{ md: 3, lg: 10, xl: 32 }}
        >
          <Stack spacing={6} align="center">
            <Box>
              <Image src="/images/logo.png" width="100px" />
            </Box>
            <Text fontSize={"sm"}>UAB LEMARA © 2022 Visos teisės saugomos</Text>
          </Stack>
          <Stack align={"flex-start"} mt={{ sm: 10, md: 0 }}>
            <ListHeader>MB „Lemara“</ListHeader>
            <Link>Įmonės kodas: 304374938</Link>
            <Link>PVM mokėtojo kodas: LT100010561112</Link>
            <Link>PRIVATUMO POLITIKA</Link>
          </Stack>
          <Stack align={"flex-start"} mt={{ sm: 10, md: 0 }}>
            <ListHeader>Kontaktai</ListHeader>
            <Link>Pasagų g. 4, Riešės k., LT-14265 Vilniaus r.</Link>
            <Link>info@lemara.lt</Link>
            <Link>+370 646 57845</Link>
          </Stack>
          <Stack align={"flex-start"} mt={{ sm: 10, md: 0 }}>
            <ListHeader>Paslaugos</ListHeader>
            <Link>CNC FREZAVIMAS</Link>
            <Link>CNC TEKINIMAS</Link>
            <Link>PROJEKTAVIMAS IR GAMYBA</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
