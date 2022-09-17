import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="google-site-verification"
          content="qppZOOy2pWf1pTQ4ViD_5nL_2V4xA3IP5BQCde6tBYc"
        />
        <meta
          name="ahrefs-site-verification"
          content="f7527cada7672808a6be9dd5596d0503aec65c98ade66ab5968823a4abada74b"
        ></meta>
        <meta
          name="keywords"
          content="CNC Tekinimas, Frezavimas, Degalių gamyba"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              name: "Lemara",
              image: "https://lemara.lt/images/logo/logo2.png",
              telephone: "+37064657845",
              email: "info@lemara.lt",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Pasagų g. 4",
                addressLocality: ", Riešės k",
                addressRegion: "Vilniaus r.",
                addressCountry: "Lietuva",
                postalCode: "LT-14265",
              },
              url: "https://lemara.lt/",
            },
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
