import Texts from "../Texts/Texts";
import {
  Heading,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Container,
} from "@chakra-ui/react";
import Colors from "../Ui/Colors";
import CareerList from "./CareerList";

export default function CareerMain() {
  const texts = Texts();
  const colors = Colors();
  return (
    <Container
      maxW="8xl"
      color={colors.career.color}
      bg={colors.career.bg}
      align="center"
      borderRadius="xl"
      py={{ sm: "1rem", md: "2rem", lg: "5rem" }}
    >
      <Heading size="2xl" py="2rem">
        Karjeros galimybės
      </Heading>
      <Accordion allowToggle pt={{ sm: "1rem", md: "2rem", lg: "5rem" }}>
        {texts.career.jobs.map((job) => {
          return (
            <AccordionItem key={job.title} maxW="60rem">
              <AccordionButton
                color={colors.career.button.color}
                bg={colors.career.button.bg}
                _hover={{
                  background: colors.career.button.bgHover,
                  color: colors.career.button.colorHover,
                }}
                _expanded={{
                  bg: colors.career.button.bgExpanded,
                  color: colors.career.button.colorExpanded,
                }}
              >
                <Container
                  textAlign="left"
                  px="0"
                  fontSize="30"
                  fontWeight="600"
                >
                  {job.title}
                </Container>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel
                pb="4"
                textAlign="left"
                pl="3rem"
                bg={"colors.career.bgExpanded"}
                color={colors.career.colorExpanded}
                roundedBottom="8"
              >
                <CareerList name="Darbo pobūdis" items={job.description} />

                <CareerList
                  name="Reikalavimai darbuotojui"
                  items={job.requirments}
                />

                <CareerList name="Mes siūlome" items={job.offer} />

                <CareerList name="Atlyginimas" items={job.salary} />
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Container>
  );
}
