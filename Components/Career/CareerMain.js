import Jobs from "./Jobs";
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
  const jobs = Jobs();
  return (
    <Box
      align="center"
      borderRadius="xl"
      px={{ sm: "1rem", md: "2rem", lg: "10%", xl: "10%" }}
      py={{ sm: "1rem", md: "2rem", lg: "5rem" }}
    >
      <Heading as="h1" size="3xl">
        Darbo Skelbimai
      </Heading>
      <Accordion allowToggle pt={{ sm: "1rem", md: "2rem", lg: "5rem" }}>
        {jobs.map((job) => {
          return (
            <AccordionItem key={uuidv4()}>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize="30"
                    fontWeight="500"
                    px="2rem"
                  >
                    {job.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb="4" textAlign="left" size="sm">
                <Text fontSize="30" fontWeight="400" pb="0.5rem">
                  Darbo pobūdis
                </Text>
                <UnorderedList pb="2rem">
                  {job.description.map((item) => {
                    return <ListItem key={uuidv4()}>{item}</ListItem>;
                  })}
                </UnorderedList>
                <Text fontSize="30" fontWeight="400">
                  Reikalavimai darbuotojui
                </Text>
                <UnorderedList pb="2rem">
                  {job.requirments.map((item) => {
                    return <ListItem key={uuidv4()}>{item}</ListItem>;
                  })}
                </UnorderedList>
                <Text fontSize="30" fontWeight="400">
                  Mes siūlome
                </Text>
                <UnorderedList pb="2rem">
                  {job.offer.map((item) => {
                    return <ListItem key={uuidv4()}>{item}</ListItem>;
                  })}
                </UnorderedList>
                <Text fontSize="30" fontWeight="400">
                  Atlyginimas
                </Text>
                <UnorderedList pb="1rem">
                  <ListItem>{job.salary}</ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
}
