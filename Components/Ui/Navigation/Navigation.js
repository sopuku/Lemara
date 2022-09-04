import {
  Flex,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
  Image,
  Select,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Links from "./Links";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import React from "react";
import Colors from "../Colors";
import { CurrentLanguage } from "../../../pages/_app";

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();

  const { language, setLanguage } = React.useContext(CurrentLanguage);

  const flagSelect = `/images/flags/${language}_flag.png`;

  const colors = Colors();

  function handleLanguageSelect(e) {
    setLanguage(e.target.value);
  }

  return (
    <React.Fragment>
      <Flex
        boxShadow="0 0 20px black"
        bg={colors.navigationBg}
        h="7rem"
        w="100vw"
        py={{ base: 1 }}
        align="center"
        px={{ base: "5%", xl: "10%" }}
        position="fixed"
        zIndex="100"
        backgroundImage="/images/background/navBg1.png"
      >
        <Flex
          flex={{ base: "0", lg: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            _hover={{ background: "#072147" }}
            onClick={onToggle}
            color="white"
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", lg: "start" }}>
          <Links href="/">
            <Image src="/images/logo/logo2.png" width="100px" />
          </Links>

          <Flex
            display={{ base: "none", lg: "flex" }}
            ml={{ lg: 5, xl: 20 }}
            align="center"
          >
            <DesktopNav colors={colors} />
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
          <Select
            onChange={handleLanguageSelect}
            width="80px"
            border="none"
            color="white"
            focusBorderColor="none"
          >
            <option
              style={{
                backgroundColor: "#04132A",
              }}
              value="LT"
            >
              LT
            </option>
            <option style={{ backgroundColor: "#04132A" }} value="EN">
              EN
            </option>
            <option style={{ backgroundColor: "#04132A" }} value="NO">
              NO
            </option>
          </Select>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </React.Fragment>
  );
}
