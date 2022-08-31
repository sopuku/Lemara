import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../Components/Ui/Layout";
import Navigation from "../Components/Ui/Navigation/Navigation";
import Footer from "../Components/Ui/Footer";
export const CurrentLanguage = React.createContext(null);

export default function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState("LT");
  return (
    <ChakraProvider>
      <CurrentLanguage.Provider value={{ language, setLanguage }}>
        <Navigation />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </CurrentLanguage.Provider>
    </ChakraProvider>
  );
}
