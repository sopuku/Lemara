import { Box } from "@chakra-ui/react";
import React from "react";
import Main from "../Components/Calculator/Main";

export default function calculator() {
  return (
    <React.Fragment>
      <Box
        w={"100%"}
        h={"100vh"}
        position="fixed"
        zIndex="-1"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundImage="url('https://images.unsplash.com/photo-1601045378965-58f245425f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80')"
      ></Box>
      <Box>
        <Main />
      </Box>
    </React.Fragment>
  );
}
