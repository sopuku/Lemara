import { Menu, MenuButton, MenuList, Button } from "@chakra-ui/react";
import Country from "flagit";
import Colors from "../../Colors";
import { ChevronDownIcon } from "@chakra-ui/icons";
import SelectLanguageItem from "./SelectLanguageItem";

export default function SelectLanguage(props) {
  const colors = Colors();
  return (
    <Menu>
      <MenuButton
        bg={colors.navigation.selectLanguage.bg}
        backgroundImage={colors.navigation.bgTexture}
        border="none"
        _hover={{
          background: colors.navigation.selectLanguage.bg,
          backgroundImage: colors.navigation.bgTexture,
        }}
        _active={{
          background: colors.navigation.selectLanguage.bg,
          backgroundImage: colors.navigation.bgTexture,
        }}
        color={colors.navigation.selectLanguage.color}
        minW="8rem"
        as={Button}
        rightIcon={<ChevronDownIcon />}
        leftIcon={
          <Country
            countryShort={props.language !== "EN" ? props.language : "GD"}
            size="md"
          />
        }
      >
        {props.language}
      </MenuButton>
      <MenuList
        minW="8rem"
        bg={colors.navigation.selectLanguage.bg}
        backgroundImage={colors.navigation.bgTexture}
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
