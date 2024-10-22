const TeacherSchemaScript = ({ teacher }) => {
  const formattedData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: teacher.name,
    jobTitle: teacher.post,
    image: teacher.image || "https://i.ibb.co/0FZ9bnp/default-avatar.png", // Provide a default image if none is available
    email: teacher.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: teacher.address || "Unknown",
      addressCountry: "BD",
    },
    sameAs: teacher.socials,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: teacher.masters,
    },
    telephone: teacher.number,
    description: teacher.about,
    dateJoined: teacher.joined_date,
    additionalType: "https://schema.org/EducationalOrganization", // If you want to add additional context
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

export default TeacherSchemaScript;
