import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../Components/Ui/Layout";
import MainBox from "../Components/Ui/MainBox";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <MainBox>
          <Component {...pageProps} />
        </MainBox>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
