import Texts from "../Texts/Texts";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Heading,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";

export default function CareerMain() {
  const texts = Texts();
  return (
    <Box
      align="center"
      borderRadius="xl"
      px={{ sm: "1rem", md: "2rem", lg: "10%", xl: "10%" }}
      py={{ sm: "1rem", md: "2rem", lg: "5rem" }}
    >
      <Heading size="3xl" py={{ base: "1rem" }}>
        Darbo Skelbimai
      </Heading>
      <Accordion allowToggle pt={{ sm: "1rem", md: "2rem", lg: "5rem" }}>
        {texts.career.jobs.map((job) => {
          return (
            <AccordionItem key={uuidv4()} maxW="60rem">
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: "#072248",
                    color: "white",
                    borderBottomRadius: "8",
                  }}
                >
                  <Box flex="1" textAlign="left" fontSize="32" fontWeight="600">
                    {job.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb="4" textAlign="left" pl="3rem">
                <Text fontSize="30" fontWeight="500" pb="0.5rem">
                  Darbo pobūdis
                </Text>
                <UnorderedList pb="2rem">
                  {job.description.map((item) => {
                    return (
                      <ListItem fontSize="20" key={uuidv4()}>
                        {item}
                      </ListItem>
                    );
                  })}
                </UnorderedList>
                <Text fontSize="28" fontWeight="500">
                  Reikalavimai darbuotojui
                </Text>
                <UnorderedList pb="2rem">
                  {job.requirments.map((item) => {
                    return (
                      <ListItem fontSize="20" key={uuidv4()}>
                        {item}
                      </ListItem>
                    );
                  })}
                </UnorderedList>
                <Text fontSize="28" fontWeight="500">
                  Mes siūlome
                </Text>
                <UnorderedList pb="2rem">
                  {job.offer.map((item) => {
                    return (
                      <ListItem fontSize="20" key={uuidv4()}>
                        {item}
                      </ListItem>
                    );
                  })}
                </UnorderedList>
                <Text fontSize="28" fontWeight="500">
                  Atlyginimas
                </Text>
                <UnorderedList pb="1rem">
                  <ListItem fontSize="20">{job.salary}</ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
}
