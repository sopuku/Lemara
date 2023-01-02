import { Menu, MenuButton, MenuList, Button } from "@chakra-ui/react";
// import Country from "flagit";
import { ChevronDownIcon } from "@chakra-ui/icons";
import SelectLanguageItem from "./SelectLanguageItem";

export default function SelectLanguage(props) {
  return (
    <Menu>
      <MenuButton
        bg={props.data.language_bar_background_color}
        backgroundImage={props.data.language_bar_background_texture.url}
        border="none"
        _hover={{
          background: props.data.language_bar_background_color_hover,
          backgroundImage: props.data.language_bar_bg_texture_hover.url,
        }}
        _active={{
          background: props.data.language_bar_background_color,
          backgroundImage: props.data.language_bar_background_texture.url,
        }}
        color={props.data.language_bar_text_color}
        maxW="8rem"
        as={Button}
        rightIcon={<ChevronDownIcon />}
        leftIcon={
          // <Country
          //   countryShort={props.language !== "EN" ? props.language : "GD"}
          //   size="md"
          // />
          <img src="`/images/flags/LT_flag.png`" />
        }
      >
        {props.language}
      </MenuButton>
      <MenuList
        minW="8rem"
        bg={props.data.language_item_background_color}
        backgroundImage={props.data.language_item_background_texture.url}
        border="none"
        color={props.data.language_item_text_color}
      >
        <SelectLanguageItem
          currentValue="LT"
          handleLanguageSelect={props.handleLanguageSelect}
          data={props.data}
        />
        <SelectLanguageItem
          currentValue="EN"
          handleLanguageSelect={props.handleLanguageSelect}
          data={props.data}
        />
        <SelectLanguageItem
          currentValue="NO"
          handleLanguageSelect={props.handleLanguageSelect}
          data={props.data}
        />
      </MenuList>
    </Menu>
  );
}
