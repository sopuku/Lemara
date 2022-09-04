import Texts from "../Texts/Texts";
import Colors from "../Ui/Colors";
import {
  Box,
  VStack,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Wrap,
} from "@chakra-ui/react";

export default function DesignMain() {
  const texts = Texts();
  const colors = Colors();
  return (
    <VStack overflow="hidden">
      <Box
        w={["90%", "90%", "80%", "80%", "80%", "70%"]}
        h={["70rem", "70rem", "65rem", "65rem", "45rem"]}
        align="center"
        py="7rem"
      >
        <Stack
          justify="center"
          spacing="5%"
          align="center"
          direction={{ base: "column", xl: "row" }}
        >
          <Image
            src={colors.design.image}
            maxW="40rem"
            maxH="25rem"
            boxShadow="0 0 5px 1px "
          />
          <Box bg={colors.design.bg} color={colors.design.color}>
            <Heading pb="1rem">{texts.design.t1.heading}</Heading>
            <Text fontSize="lg" align="justify">
              {texts.design.t1.text}
            </Text>
          </Box>
        </Stack>
      </Box>
    </VStack>
  );
}
