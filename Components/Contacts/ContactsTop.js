import { Stack } from "@chakra-ui/react";
import ContactsCard from "./ContactsCard";

export default function ContactsTop(props) {
  return (
    <Stack
      h={{ base: "80rem", md: "30rem", xl: "35rem" }}
      direction={{ base: "column", md: "row" }}
      spacing={{ base: "2rem", lg: "4rem", xl: "6rem" }}
      justify="center"
      align="center"
      color={props.data.text_color_top}
      bg={props.data.background_color_top}
      backgroundImage={props.data.background_texture_top.url}
    >
      {props.data.slices.map((item) => (
        <ContactsCard
          data={props.data}
          key={item.id}
          name={item.primary.name}
          responsibilities={item.primary.responsibilities}
          email={item.primary.email}
          number={item.primary.phone_number}
          tel={item.primary.phone_link}
          src={item.primary.image.url}
          alt={item.primary.image.alt}
          href={item.primary.email_link}
        />
      ))}
    </Stack>
  );
}
