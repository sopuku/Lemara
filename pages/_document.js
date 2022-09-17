import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const schemaData = {
    "@context": "http://www.schema.org",
    "@type": "Organization",
    name: "Lemara",
    url: "https://lemara.lt",
    logo: "https://lemara.lt/images/logo/logo2.png",
    description: "Lemara - CNC Tekinimas, Frezavimas, Degalių gamyba",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pasagų g. 4",
      addressLocality: "Riešės k",
      addressRegion: "Vilniaus r.",
      postalCode: "LT-14265",
      addressCountry: "Lietuva",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+37064657845",
    },
  };

  return (
    <Html>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
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

        <scrip
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-QPQYS0TKC7')`,
          }}
        />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/gtag/js?id=G-QPQYS0TKC7" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
