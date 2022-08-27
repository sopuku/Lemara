import {
  Container,
  Box,
  Heading,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Stack,
  Text,
  Flex,
  Image,
  Divider,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import Maps from "./Maps";
import Captcha from "./Captcha";

export default function ContactsMain() {
  const [verify, setVerify] = useState("");
  return (
    <div>
      <Container bg="#9DC4FB" maxW="full" centerContent overflow="hidden">
        <Stack
          direction={{ sm: "column", xl: "row" }}
          my={{ sm: 4, md: 10, lg: 20 }}
        >
          <Box
            bg="#02054B"
            color="white"
            borderRadius="lg"
            p={{ sm: 6, md: 14, lg: 14 }}
          >
            <Wrap spacing={{ base: 16, sm: 5, md: 5, lg: 16 }} justify="center">
              <WrapItem>
                <Box align="left">
                  <Heading>Kontaktai</Heading>
                  <Box py={{ base: 3, sm: 3, md: 6, lg: 6 }}>
                    <VStack spacing="4" alignItems="left">
                      <Flex align="center" color="#DCE2FF">
                        <MdPhone color="#1970F1" size="24px" />
                        <Text fontSize="18" ml="10px">
                          +370 646 57845
                        </Text>
                      </Flex>
                      <Flex align="center" color="#DCE2FF">
                        <MdEmail color="#1970F1" size="24px" />
                        <Text fontSize="18" ml="10px">
                          info@lemara.lt
                        </Text>
                      </Flex>
                      <Flex align="center" color="#DCE2FF">
                        <MdLocationOn color="#1970F1" size="24px" />
                        <Text fontSize="18" ml="10px" mb="2">
                          Pasagų g. 4, Riešės k. <br />
                          LT-14265 Vilniaus r.
                        </Text>
                      </Flex>
                      <Divider />
                      <Box align="center">
                        <Image
                          src="/images/direktorius.jpg"
                          width="200px"
                          my="3"
                        />
                        <Text mt="10px" fontSize="18">
                          Povilas Vilimas - Direktorius <br /> povilas@lemara.lt{" "}
                          <br />
                          +370 646 57845
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m="8" color="#0B0E3F">
                    <VStack spacing="5">
                      <FormControl id="name">
                        <FormLabel>Jūsų vardas</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email">
                        <FormLabel>El. paštas</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="phone">
                        <FormLabel>Telefono numeris</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlinePhone color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="message">
                        <FormLabel>Žinutė</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="Žinutė"
                        />
                      </FormControl>
                      <FormControl>
                        <Captcha />
                      </FormControl>
                      <FormControl>
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Siųsti Žinutę
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
          <Maps />
        </Stack>
      </Container>
    </div>
  );
}
