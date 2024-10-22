const StudentSchemaScript = ({ student }) => {
  const formattedData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: student.name,
    father: student.father,
    image: student.image || "https://i.ibb.co/0FZ9bnp/default-avatar.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: student.address,
      addressCountry: "BD",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: student.contact,
      contactType: "Student",
    },
    additionalType: "https://schema.org/Student",
    enrollment: {
      "@type": "EducationalOrganization",
      name: "Jamiatul Latif Madrasha",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rupganj",
        addressCountry: "BD",
      },
    },
    dakhila: student.dakhila,
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

export default StudentSchemaScript;
