import { Image, MenuItem } from "@chakra-ui/react";

export default function SelectLanguageItem(props) {
  return (
    <MenuItem
      px="15px"
      py="5px"
      _hover={{
        background: props.data.language_item_background_color_hove,
        backgroundImage: props.data.language_item_background_texture.url,
        color: props.data.language_item_textcolor_hover,
      }}
      _focus={{
        background: "none",
        backgroundImage: "none",
      }}
      onClick={props.handleLanguageSelect}
      value={props.currentValue}
    >
      <Image
        h="1rem"
        w="1.5rem"
        src={`/images/flags/${props.currentValue}_flag.png`}
        alt="Naudojamos kalbos vėliava"
        mr="12px"
      />
      {props.currentValue}
    </MenuItem>
  );
}
