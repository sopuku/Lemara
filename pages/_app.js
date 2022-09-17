import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../Components/Ui/Layout";
import Navigation from "../Components/Ui/Navigation/Navigation";
import Footer from "../Components/Ui/Footer";
import theme from "../Components/Ui/Theme/theme";
import "../Components/Ui/Theme/styles.css";
import Head from "next/head";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

export const CurrentSettings = React.createContext(null);

export default function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState("LT");

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
  }),
    [language];

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GoogleAnalytics measurementId="G-QPQYS0TKC7" />
      <ChakraProvider theme={theme}>
        <CurrentSettings.Provider value={{ language, setLanguage }}>
          <Navigation />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </CurrentSettings.Provider>
      </ChakraProvider>
    </React.Fragment>
  );
}
