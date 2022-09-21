import {
  Text,
  Stack,
  Collapse,
  Icon,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Links from "./Links";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function MobileNavItem({
  closeMenu,
  data,
  navigation_item,
  navigation_link,
}) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      color={data.text_color}
      _hover={{ color: data.text_color_hover }}
      align="start"
      spacing={4}
      onClick={!navigation_link ? onToggle : undefined}
    >
      {navigation_link ? (
        <Links
          onClick={navigation_link && closeMenu}
          zIndex="1"
          py="0.5rem"
          href={navigation_link ?? "#"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text fontWeight={600}>{navigation_item}</Text>
          {!navigation_link && ""}
        </Links>
      ) : (
        <Button
          pl="0"
          bg={data.background_color}
          backgroundImage={data.background_texture.url}
          _hover={{
            bg: data.background_color,
            backgroundImage: data.background_texture.url,
          }}
          _active={{
            bg: data.background_color,
            backgroundImage: data.background_texture.url,
          }}
        >
          {navigation_item}
          {!navigation_link && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen && "rotate(180deg)"}
              w={6}
              h={6}
            />
          )}
        </Button>
      )}

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor="gray.200"
          align="start"
        >
          {!navigation_link &&
            data.slices[1].items.map((child) => (
              <Links
                onClick={closeMenu}
                color={data.submenu_text_color}
                key={child.navigation_item}
                py={2}
                href={child.navigation_link ?? "#"}
              >
                {child.navigation_item}
              </Links>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
