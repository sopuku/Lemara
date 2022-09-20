import { Flex, IconButton, Stack, Collapse, Image } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Links from "./Links";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import React, { useState } from "react";
import Colors from "../Colors";
import { CurrentSettings } from "../../../pages/_app";
import SelectLanguage from "./SelectLanguage/SeletLanguage";
import Texts from "../../Texts/Texts";

export default function Navigation(props) {
  const { language, setLanguage } = React.useContext(CurrentSettings);
  const [isOpen, setOpen] = useState(false);

  const colors = Colors();
  const texts = Texts();

  function handleLanguageSelect(e) {
    setLanguage(e.target.value);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <Flex
        boxShadow="0 0 20px black"
        bg={colors.navigation.bg}
        h="7rem"
        w="100%"
        py={{ base: 1 }}
        align="center"
        px={{ base: "5%", xl: "10%" }}
        position="fixed"
        zIndex="100"
        backgroundImage={texts.images.navBgTexture}
      >
        <Flex
          flex={{ base: "0", lg: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            _hover={{ background: colors.navigation.hamburgerIconBg }}
            onClick={() => setOpen((prev) => !prev)}
            color={colors.navigation.hamburgerIcon}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", lg: "start" }}>
          <Links href="/">
            <Image
              src={texts.images.logo}
              alt={texts.images.logoAlt}
              w="100px"
              h="100%"
            />
          </Links>

          <Flex
            display={{ base: "none", lg: "flex" }}
            ml={{ lg: 5, xl: 20 }}
            align="center"
          >
            <DesktopNav colors={colors} />
          </Flex>
        </Flex>

        <Stack
          justify={"flex-end"}
          direction={"row"}
          spacing={1}
          width="110px"
          align="center"
          ml="10px"
        >
          <SelectLanguage
            language={language}
            handleLanguageSelect={handleLanguageSelect}
          />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav closeMenu={closeMenu} />
      </Collapse>
    </React.Fragment>
  );
}
