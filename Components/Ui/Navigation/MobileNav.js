import { Stack } from "@chakra-ui/react";
import MobileNavItem from "./MobileNavItem";
import { v4 as uuidv4 } from "uuid";
import Texts from "../../Texts/Texts";

export default function MobileNav(props) {
  console.log(props.data);
  const test = [];
  const texts = Texts();

  return (
    <Stack
      bg={props.data.background_color}
      backgroundImage={props.data.background_texture.url}
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
          key={uuidv4()}
          {...navItem}
        />
      ))}
    </Stack>
  );
}
