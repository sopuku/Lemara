import Colors from "../../Colors";
import { Image, MenuItem } from "@chakra-ui/react";
import Texts from "../../../Texts/Texts";

export default function SelectLanguageItem(props) {
  const colors = Colors();
  const texts = Texts();
  return (
    <MenuItem
      px="15px"
      py="5px"
      _hover={{
        background: colors.navigation.subBgHover,
        backgroundImage: texts.images.navBgTexture,
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
        alt="Naudojamos kalbos vėliava"
        mr="12px"
      />
      {props.currentValue}
    </MenuItem>
  );
}
