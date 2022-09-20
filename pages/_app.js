import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../Components/Ui/Layout";
import theme from "../Components/Ui/Theme/theme";
import "../Components/Ui/Theme/styles.css";
import Head from "next/head";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { useRouter } from "next/router";

export const CurrentSettings = React.createContext(null);

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [language, setLanguage] = useState("lt");

  useEffect(() => {
    router.push(router.asPath, router.asPath, { locale: language });
  }, [language]);

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GoogleAnalytics measurementId="G-QPQYS0TKC7" />
      <ChakraProvider theme={theme}>
        <CurrentSettings.Provider value={{ language, setLanguage }}>
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </CurrentSettings.Provider>
      </ChakraProvider>
    </React.Fragment>
  );
}
