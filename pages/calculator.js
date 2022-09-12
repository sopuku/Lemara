import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Main = dynamic(() => import("../Components/Calculator/Main"), {
  suspense: true,
});

export default function calculator() {
  return (
    <React.Fragment>
      <Head>
        <title>Lemara Invoice Checker</title>
      </Head>
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
      <Suspense fallback={`Loading...`}>
        <Main />
      </Suspense>
    </React.Fragment>
  );
}
