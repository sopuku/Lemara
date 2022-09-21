import { Stack } from "@chakra-ui/react";
import MobileNavItem from "./MobileNavItem";
import { v4 as uuidv4 } from "uuid";

export default function MobileNav(props) {
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
      {props.data.slices[0].items.map((navItem) => (
        <MobileNavItem
          closeMenu={props.closeMenu}
          key={uuidv4()}
          data={props.data}
          {...navItem}
        />
      ))}
    </Stack>
  );
}
