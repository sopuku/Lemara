import {
  Flex,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
  Image,
  Select,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Links from "./Links";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import React from "react";
import Colors from "../Colors";
import { CurrentSettings } from "../../../pages/_app";

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();

  const { language, setLanguage } = React.useContext(CurrentSettings);

  const { currentColor, setCurrentColor } = React.useContext(CurrentSettings);

  const flagSelect = `/images/flags/${language}_flag.png`;

  const colors = Colors();

  function handleLanguageSelect(e) {
    setLanguage(e.target.value);
  }

  function handleColorSelect(e) {
    setCurrentColor(e.target.value);
  }

  return (
    <React.Fragment>
      <Flex
        boxShadow="0 0 20px black"
        bg={colors.navigation.bg}
        h="7rem"
        w="100vw"
        py={{ base: 1 }}
        align="center"
        px={{ base: "5%", xl: "10%" }}
        position="fixed"
        zIndex="100"
        backgroundImage={colors.navigation.bgTexture}
      >
        <Flex
          flex={{ base: "0", lg: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            _hover={{ background: colors.navigation.hamburgerIconBg }}
            onClick={onToggle}
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
            <Image src={colors.navigation.logo} width="100px" />
          </Links>

          <Flex
            display={{ base: "none", lg: "flex" }}
            ml={{ lg: 5, xl: 20 }}
            align="center"
          >
            <DesktopNav colors={colors} />
          </Flex>
        </Flex>

        <Select
          onChange={handleColorSelect}
          width="100px"
          border="none"
          color={colors.navigation.selectColors.color}
          focusBorderColor="none"
          defaultValue={currentColor}
        >
          <option
            style={{
              backgroundColor: colors.navigation.selectColors.bg,
            }}
            value="1"
          >
            dark
          </option>
          <option
            style={{ backgroundColor: colors.navigation.selectColors.bg }}
            value="2"
          >
            darker
          </option>

          <option
            style={{ backgroundColor: colors.navigation.selectColors.bg }}
            value="3"
          >
            blue1
          </option>
          <option
            style={{ backgroundColor: colors.navigation.selectColors.bg }}
            value="4"
          >
            blue2
          </option>
          <option
            style={{ backgroundColor: colors.navigation.selectColors.bg }}
            value="5"
          >
            blue3
          </option>
          <option
            style={{ backgroundColor: colors.navigation.selectColors.bg }}
            value="6"
          >
            brown
          </option>
        </Select>

        <Stack
          justify={"flex-end"}
          direction={"row"}
          spacing={1}
          width="110px"
          align="center"
          ml="10px"
        >
          <Image src={flagSelect} width="30px" />
          <Select
            onChange={handleLanguageSelect}
            width="80px"
            border="none"
            color={colors.navigation.selectLanguage.color}
            focusBorderColor="none"
            defaultValue={language}
          >
            <option
              style={{
                backgroundColor: colors.navigation.selectLanguage.bg,
              }}
              value="LT"
            >
              LT
            </option>
            <option
              style={{ backgroundColor: colors.navigation.selectLanguage.bg }}
              value="EN"
            >
              EN
            </option>
            <option
              style={{ backgroundColor: colors.navigation.selectLanguage.bg }}
              value="NO"
            >
              NO
            </option>
          </Select>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </React.Fragment>
  );
}
