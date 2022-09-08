import React from "react";
import Head from "next/head";
import ContactsMain from "../Components/Contacts/ContactsMain";
// import emailjs from "@emailjs/browser";
// import { useToast } from "@chakra-ui/react";

export default function Contacts(props) {
  // const toast = useToast();

  // function sendMessage() {
  // emailjs.send(props.SERVICE_ID, props.TEMPLATE_ID, form, props.KEY);

  //   toast({
  //     title: "Žinutė sėkmingai išsiūsta",
  //     status: "success",
  //     position: "top",
  //     duration: 2000,
  //     isClosable: true,
  //   });
  // }

  return (
    <React.Fragment>
      <Head>
        <title>Lemara kontaktai</title>
        <meta
          name="description"
          content="Lemara - one of the best CNC manufacturers in Lithuania working globally"
        />
      </Head>
      <ContactsMain />
    </React.Fragment>
  );
}
// export async function getStaticProps() {
//   return {
//     props: {
//       SERVICE_ID: "service_lemara",
//       TEMPLATE_ID: "template_lemara",
//       KEY: "SEEgDE7p6N_iBx4yL",
//     },
//   };
// }
