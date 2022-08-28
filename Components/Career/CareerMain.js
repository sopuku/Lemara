import Jobs from "./Jobs";
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
    <Box w="100%" minH="71.6vh" align="center" py="5rem">
      <Heading as="h1" size="3xl">
        Darbo Skelbimai
      </Heading>
      <Accordion allowToggle w="80%" py="8rem">
        {jobs.map((job) => {
          return (
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize="30" fontWeight="500">
                    {job.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb="4" textAlign="left" size="sm">
                <Text fontSize="30" fontWeight="400">
                  Darbo pobūdis
                </Text>
                <UnorderedList pb="1rem">
                  {job.description.map((item) => {
                    return <ListItem>{item}</ListItem>;
                  })}
                </UnorderedList>
                <Text fontSize="30" fontWeight="400">
                  Reikalavimai darbuotojui
                </Text>
                <UnorderedList pb="1rem">
                  {job.requirments.map((item) => {
                    return <ListItem>{item}</ListItem>;
                  })}
                </UnorderedList>
                <Text fontSize="30" fontWeight="400">
                  Mes siūlome
                </Text>
                <UnorderedList pb="1rem">
                  {job.offer.map((item) => {
                    return <ListItem>{item}</ListItem>;
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
