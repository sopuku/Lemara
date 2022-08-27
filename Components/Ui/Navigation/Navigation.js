import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
  Image,
  Select,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import React, { useState } from "react";

export default function Navigation(props) {
  const { isOpen, onToggle } = useDisclosure();
  const [language, setLanguage] = useState("LT");

  const flagSelect = `/images/${language}_flag.png`;

  function handleLanguageSelect(e) {
    setLanguage(e.target.value);
  }

  return (
    <React.Fragment>
      <Flex
        bg="white"
        color="gray.600"
        minH="60px"
        py={{ base: 1 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
        px={{ base: "5%", xl: "10%" }}
      >
        <Flex
          flex={{ base: "0", lg: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", lg: "start" }}>
          <Image src="/images/logo.png" width="100px" />

          <Flex
            display={{ base: "none", lg: "flex" }}
            ml={{ lg: 5, xl: 20 }}
            align="center"
          >
            <DesktopNav language={language} />
          </Flex>
        </Flex>

        <Stack
          justify={"flex-end"}
          direction={"row"}
          spacing={1}
          width="110px"
          align="center"
          ml="10px"
        >
          <Image src={flagSelect} width="30px" />
          <Select onChange={handleLanguageSelect} width="80px">
            <option value="LT">LT</option>
            <option value="EN">EN</option>
            <option value="NO">NO</option>
          </Select>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav language={language} />
      </Collapse>
    </React.Fragment>
  );
}
