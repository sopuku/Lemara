import { Stack } from "@chakra-ui/react";
import Texts from "../../Language/NavigationTexts";
import MobileNavItem from "./MobileNavItem";

export default function MobileNav(props) {
  const navItems = Texts(props.language);

  return (
    <Stack bg="white" p={4} display={{ lg: "none" }}>
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}
