import { Text, Stack, Collapse, Icon, useDisclosure } from "@chakra-ui/react";
import Links from "./Links";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Colors from "../Colors";

export default function MobileNavItem({ closeMenu, label, children, href }) {
  const { isOpen, onToggle } = useDisclosure();
  const colors = Colors();

  return (
    <Stack align="start" spacing={4} onClick={children && onToggle}>
      <Links
        onClick={href && closeMenu}
        zIndex="1"
        py="0.5rem"
        href={href ?? "#"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={colors.navigation.color}>
          {label}
          {label === "Paslaugos" && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen && "rotate(180deg)"}
              w={6}
              h={6}
            />
          )}
        </Text>
        {children && ""}
      </Links>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor="gray.200"
          align="start"
        >
          {children &&
            children.map((child) => (
              <Links
                onClick={closeMenu}
                color={colors.navigation.color}
                key={child.label}
                py={2}
                href={child.href}
              >
                {child.label}
              </Links>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
