import {
  Box,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import Links from "./Links";
import DesktopSubNav from "./DesktopSubNav";
import Texts from "../../Language/Texts";

export default function DesktopNav(props) {
  const navItems = Texts();

  return (
    <Stack direction={"row"} spacing={6} align="center" textAlign="center">
      {navItems.navigation.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Links
                href={navItem.href ?? "#"}
                p={{ base: "auto" }}
                fontSize={"xl"}
                fontWeight={500}
                color={props.colors.navigationLinkColor}
                _hover={{
                  textDecoration: "none",
                  color: props.colors.navigationLinkHover,
                }}
              >
                {navItem.label}
              </Links>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={props.colors.navigationSubBg}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav
                      key={child.label}
                      label={child.label}
                      href={child.href}
                      colors={props.colors}
                      {...child}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}
