import React from "react";
import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Navigation from "./Navigation/Navigation";

export default function Layout(props) {
  return (
    <React.Fragment>
      <Navigation data={props.navData} />
      <Box pt="7rem" align="start" minH="83.7vh" bg="#F8F7F3">
        {props.children}
      </Box>
      <Footer data={props.footData} />
    </React.Fragment>
  );
}
