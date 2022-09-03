import { Stack } from "@chakra-ui/react";
import Texts from "../../Texts/Texts";
import MobileNavItem from "./MobileNavItem";

export default function MobileNav(props) {
  const navItems = Texts();

  return (
    <Stack
      bg="#04132A"
      p={4}
      display={{ lg: "none" }}
      w="100%"
      position="fixed"
      mt="7rem"
      zIndex={100}
    >
      {navItems.navigation.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}
