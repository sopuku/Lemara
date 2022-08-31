import React from "react";
import { Box } from "@chakra-ui/react";
import Colors from "./Colors";

export default function Layout(props) {
  const colors = Colors();
  return (
    <React.Fragment>
      <Box py="7rem" align="start" minH="81.3vh" bg={colors.background}>
        {props.children}
      </Box>
    </React.Fragment>
  );
}
