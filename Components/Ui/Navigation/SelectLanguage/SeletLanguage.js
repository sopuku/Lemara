import { Menu, MenuButton, MenuList, Button } from "@chakra-ui/react";
import Country from "flagit";
import Colors from "../../Colors";
import { ChevronDownIcon } from "@chakra-ui/icons";
import SelectLanguageItem from "./SelectLanguageItem";
import Texts from "../../../Texts/Texts";

export default function SelectLanguage(props) {
  const colors = Colors();
  const texts = Texts();
  let display = "";
  switch (props.language) {
    case "lt":
      display = "LT";
      break;
    case "en-gb":
      display = "EN";
      break;
    case "no":
      display = "NO";
      break;
    default:
      break;
  }
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
        maxW="8rem"
        as={Button}
        rightIcon={<ChevronDownIcon />}
        leftIcon={
          <Country countryShort={display !== "EN" ? display : "GD"} size="md" />
        }
      >
        {display}
      </MenuButton>
      <MenuList
        minW="8rem"
        bg={colors.navigation.selectLanguage.bg}
        backgroundImage={texts.images.navBgTexture}
        border="none"
        color={colors.navigation.selectLanguage.color}
      >
        <SelectLanguageItem
          display="LT"
          currentValue="lt"
          handleLanguageSelect={props.handleLanguageSelect}
        />
        <SelectLanguageItem
          display="EN"
          currentValue="en-gb"
          handleLanguageSelect={props.handleLanguageSelect}
        />
        <SelectLanguageItem
          display="NO"
          currentValue="no"
          handleLanguageSelect={props.handleLanguageSelect}
        />
      </MenuList>
    </Menu>
  );
}
