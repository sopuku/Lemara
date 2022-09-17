function makeSchema() {
  return {
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
  };
}

export default function Schema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(makeSchema()) }}
    />
  );
}
