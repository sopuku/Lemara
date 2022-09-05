import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../Components/Ui/Layout";
import Navigation from "../Components/Ui/Navigation/Navigation";
import Footer from "../Components/Ui/Footer";
export const CurrentSettings = React.createContext(null);

export default function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState("LT");
  const [currentColor, setCurrentColor] = useState("5");
  return (
    <ChakraProvider>
      <CurrentSettings.Provider
        value={{ language, setLanguage, currentColor, setCurrentColor }}
      >
        <Navigation />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </CurrentSettings.Provider>
    </ChakraProvider>
  );
}
