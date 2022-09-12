import { Menu, MenuButton, MenuList, Button } from "@chakra-ui/react";
import Colors from "../../Colors";
import { ChevronDownIcon } from "@chakra-ui/icons";
import SelectLanguageItem from "./SelectLanguageItem";
import Texts from "../../../Texts/Texts";

export default function SelectLanguage(props) {
  const colors = Colors();
  const texts = Texts();
  return (
    <Menu>
      <MenuButton
        bg={colors.navigation.selectLanguage.bg}
        backgroundImage={texts.images.navBgTexture}
        border="none"
        _hover={{
          background: colors.navigation.selectLanguage.bg,
          backgroundImage: texts.images.navBgTexture,
        }}
        _active={{
          background: colors.navigation.selectLanguage.bg,
          backgroundImage: texts.images.navBgTexture,
        }}
        color={colors.navigation.selectLanguage.color}
        minW="8rem"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        {props.language}
      </MenuButton>
      <MenuList
        minW="8rem"
        bg={colors.navigation.selectLanguage.bg}
        backgroundImage={texts.images.navBgTexture}
        border="none"
        color={colors.navigation.selectLanguage.color}
      >
        <SelectLanguageItem
          currentValue="LT"
          handleLanguageSelect={props.handleLanguageSelect}
        />
        <SelectLanguageItem
          currentValue="EN"
          handleLanguageSelect={props.handleLanguageSelect}
        />
        <SelectLanguageItem
          currentValue="NO"
          handleLanguageSelect={props.handleLanguageSelect}
        />
      </MenuList>
    </Menu>
  );
}
