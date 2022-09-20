import {
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
import React from "react";

const ListHeader = ({ children }) => {
  return (
    <Text textColor="orange" fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer(props) {
  const texts = Texts();
  const colors = Colors();

  return (
    <React.Fragment>
      <Container
        overflow="hidden"
        bg={colors.footer.bg}
        color={colors.footer.color}
        backgroundImage={texts.images.navBgTexture}
        as={Stack}
        maxW="100%"
        py={10}
        align="center"
      >
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={{ md: 3, lg: 10, xl: 32 }}
        >
          <Stack spacing={6} align="center">
            <Center>
              <Image
                src={texts.images.logo}
                alt={texts.images.logoAlt}
                w="100px"
                h="100%"
              />
            </Center>
            <Text fontSize="sm" color={colors.footer.color}>
              {texts.footer.rights}
            </Text>
          </Stack>
          <Stack align={"flex-start"} mt={{ sm: 10, md: 0 }}>
            <ListHeader>MB „Lemara“</ListHeader>
            <Text>{texts.footer.code}</Text>
            <Text>{texts.footer.pvmCode}</Text>
            <Links href="/privacy" _hover={{ color: colors.footer.colorHover }}>
              {texts.footer.privacy}
            </Links>
          </Stack>
          <Stack align={"flex-start"} mt={{ sm: 10, md: 0 }}>
            <ListHeader>{texts.footer.contacts}</ListHeader>
            <Text>Pasagų g. 4, Riešės k., LT-14265 Vilniaus r.</Text>
            <Links
              href="mailto:info@lemara.lt"
              _hover={{ color: colors.footer.colorHover }}
            >
              info@lemara.lt
            </Links>
            <Links
              href="tel:+37064657845"
              _hover={{ color: colors.footer.colorHover }}
            >
              +370 646 57845
            </Links>
          </Stack>
          <Stack align={"flex-start"} mt={{ sm: 10, md: 0 }}>
            <ListHeader>{texts.footer.services}</ListHeader>
            <Links
              href="/services/turning"
              _hover={{ color: colors.footer.colorHover }}
            >
              {texts.footer.turning}
            </Links>
            <Links
              href="/services/milling"
              _hover={{ color: colors.footer.colorHover }}
            >
              {texts.footer.milling}
            </Links>
            <Links
              href="/services/design"
              _hover={{ color: colors.footer.colorHover }}
            >
              {texts.footer.design}
            </Links>
          </Stack>
        </SimpleGrid>
      </Container>
    </React.Fragment>
  );
}
