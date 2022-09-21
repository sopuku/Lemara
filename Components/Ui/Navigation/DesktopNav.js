import {
  Box,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import Links from "./Links";
import DesktopSubNav from "./DesktopSubNav";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { v4 as uuidv4 } from "uuid";

export default function DesktopNav(props) {
  return (
    <Stack direction={"row"} spacing={6} align="center" textAlign="center">
      {props.data.slices[0].items.map((navItem) => (
        <Box key={uuidv4()}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Links
                href={navItem.navigation_link ?? "#"}
                py="0.5rem"
                fontSize={"xl"}
                fontWeight={500}
                color={props.data.text_color}
                _hover={{
                  color: props.data.text_color_hover,
                }}
              >
                {navItem.navigation_item}
                {navItem.navigation_link === null && <ChevronDownIcon />}
              </Links>
            </PopoverTrigger>

            {navItem.navigation_link === null && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={props.data.submenu_background_color}
                backgroundImage={props.data.submenu_background_texture}
                color={props.data.submenu_text_color}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {props.data.slices[1].items.map((child) => (
                    <DesktopSubNav
                      key={child.navigation_item}
                      label={child.navigation_item}
                      href={child.navigation_link}
                      data={props.data}
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
