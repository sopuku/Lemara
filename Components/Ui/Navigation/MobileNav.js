import { Stack } from "@chakra-ui/react";
import Colors from "../Colors";
import Texts from "../../Texts/Texts";
import MobileNavItem from "./MobileNavItem";

export default function MobileNav(props) {
  const texts = Texts();
  const colors = Colors();
  return (
    <Stack
      bg={colors.navigation.bg}
      backgroundImage={texts.images.navBgTexture}
      p={4}
      display={{ lg: "none" }}
      w="100%"
      position="fixed"
      mt="7rem"
      zIndex={100}
    >
      {texts.navigation.map((navItem) => (
        <MobileNavItem
          closeMenu={props.closeMenu}
          key={navItem.label}
          {...navItem}
        />
      ))}
    </Stack>
  );
}
