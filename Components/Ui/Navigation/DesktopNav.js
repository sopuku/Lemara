import {
  Box,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import Links from "./Links";
import DesktopSubNav from "./DesktopSubNav";
import Texts from "../../Language/NavigationTexts";

export default function DesktopNav(props) {
  const linkColor = "gray.600";
  const linkHoverColor = "orange";
  const popoverContentBgColor = "white";
  const navItems = Texts(props.language);

  return (
    <Stack direction={"row"} spacing={6} align="center" textAlign="center">
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Links
                href={navItem.href ?? "#"}
                p={{ base: "auto" }}
                fontSize={"xl"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Links>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
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
