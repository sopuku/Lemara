import { Stack } from "@chakra-ui/react";
import ContactsCard from "./ContactsCard";
import Texts from "../Texts/Texts";

export default function XContactsTop() {
  const texts = Texts();
  return (
    <Stack
      h={{ base: "80rem", md: "30rem", xl: "35rem" }}
      direction={{ base: "column", md: "row" }}
      spacing={{ base: "2rem", lg: "4rem", xl: "6rem" }}
      justify="center"
      align="center"
    >
      {texts.contacts.cards.map((item) => (
        <ContactsCard
          key={item.name}
          name={item.name}
          responsibilities={item.responsibilities}
          email={item.email}
          number={item.number}
          tel={item.tel}
          src={item.src}
          alt={item.alt}
          href={item.href}
        />
      ))}
    </Stack>
  );
}
