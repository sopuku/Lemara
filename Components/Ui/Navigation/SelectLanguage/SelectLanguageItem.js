import Colors from "../../Colors";
import { Image, MenuItem } from "@chakra-ui/react";

export default function SelectLanguageItem(props) {
  const colors = Colors();
  return (
    <MenuItem
      px="15px"
      py="5px"
      _hover={{
        background: colors.navigation.subBgHover,
        backgroundImage: colors.navigation.bgTexture,
        color: colors.navigation.colorHover,
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
        mr="12px"
      />
      {props.currentValue}
    </MenuItem>
  );
}
