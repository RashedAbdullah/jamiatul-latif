const AboutSchemaScript = () => {
  const formattedData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jamiatul Latif Madrasha",
    description:
      "Jamiatul Latif Madrasha is an Islamic educational institution located in Rupganj, Narayanganj, dedicated to teaching Islamic studies following the Deobandi curriculum.",
    url: "https://jamiatullatif.com",
    logo: "https://i.ibb.co/0FZ9bnp/jamia-logo.png",
    founder: {
      "@type": "Person",
      name: "Mufti Ibrahim Nomani",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Barab Bazar, Rupganj",
      addressLocality: "Narayanganj",
      addressRegion: "Dhaka",
      postalCode: "1460",
      addressCountry: "BD",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Administration",
      telephone: "+880-1810-445445",
      email: "contact@jamiatullatif.com",
    },
    numberOfEmployees: 15,
    numberOfStudents: 120,
    sameAs: ["https://www.facebook.com/jamiatullatifrupganj"],
    location: {
      "@type": "Place",
      name: "Jamiatul Latif Madrasha",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Barab Bazar, Rupganj",
        addressLocality: "Narayanganj",
        addressRegion: "Dhaka",
        postalCode: "1460",
        addressCountry: "BD",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(formattedData),
        }}
      />
    </>
  );
};

export default AboutSchemaScript;
