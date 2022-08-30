import React from "react";
import Navigation from "../Ui/Navigation/Navigation";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";
import Colors from "./Colors";

export default function Layout(props) {
  const colors = Colors();
  return (
    <React.Fragment>
      <Navigation />
      <Box
        align="start"
        minH="81.3vh"
        pt="7rem"
        bg={colors.background}
        zIndex="-1"
      >
        {props.children}
      </Box>
      <Footer />
    </React.Fragment>
  );
}
