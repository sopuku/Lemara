import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../Components/Ui/Layout";
import Navigation from "../Components/Ui/Navigation/Navigation";
import Footer from "../Components/Ui/Footer";
import theme from "../Components/Ui/Theme/theme";
import "../Components/Ui/Theme/styles.css";

export const CurrentSettings = React.createContext(null);

export default function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState("LT");

  return (
    <React.Fragment>
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
