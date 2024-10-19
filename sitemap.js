export default function sitemap() {
  return [
    {
      url: "https://jamiatullatif.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://jamiatullatif.com/about-madrasha",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://jamiatullatif.com/notices/admission",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    {
      url: "https://jamiatullatif.com/darul-ifta",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://jamiatullatif.com/curriculums",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://jamiatullatif.com/teachers",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },

    {
      url: "https://jamiatullatif.com/students",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
