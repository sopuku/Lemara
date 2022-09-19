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

export default function CareerMain(props) {
  const texts = Texts();
  const colors = Colors();

  return (
    <Container
      maxW="8xl"
      color={props.data.text_color}
      bg={props.data.background_color}
      align="center"
      borderRadius="xl"
      py={{ sm: "1rem", md: "2rem", lg: "5rem" }}
    >
      <Heading as="h3" size="2xl" py="2rem">
        {props.data.title}
      </Heading>
      <Accordion allowToggle pt={{ sm: "1rem", md: "2rem", lg: "5rem" }}>
        {props.data.slices.map((job) => {
          return (
            <AccordionItem key={job.id} maxW="60rem">
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
                  {job.primary.title}
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
                <CareerList
                  name={props.data.description_title}
                  items={job.primary.description}
                />

                <CareerList
                  name={props.data.requirments_title}
                  items={job.primary.requirments}
                />

                <CareerList
                  name={props.data.offer_title}
                  items={job.primary.offer}
                />

                <CareerList
                  name={props.data.salary_title}
                  items={job.primary.salary}
                />
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Container>
  );
}
