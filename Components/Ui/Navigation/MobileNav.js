import { Stack, Wrap } from "@chakra-ui/react";
import Texts from "../../Language/Texts";
import MobileNavItem from "./MobileNavItem";

export default function MobileNav(props) {
  const navItems = Texts();

  return (
    <Stack
      bg="white"
      p={4}
      display={{ lg: "none" }}
      w="100%"
      position="fixed"
      mt="7rem"
      zIndex={1}
    >
      {navItems.navigation.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}
