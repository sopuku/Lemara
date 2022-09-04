import { Box, Flex, Text, Stack, Icon } from "@chakra-ui/react";
import Links from "./Links";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function DesktopSubNav(props) {
  return (
    <Links
      href={props.href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: props.colors.navigation.subBgHover }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: props.colors.navigation.colorHover }}
            fontWeight={500}
          >
            {props.label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon
            color={props.colors.navigation.subIcon}
            w={5}
            h={5}
            as={ChevronRightIcon}
          />
        </Flex>
      </Stack>
    </Links>
  );
}
