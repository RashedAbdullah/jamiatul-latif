const ArticleSchemaScript = ({ article }) => {
  const formattedData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    author: {
      "@type": "Person",
      name: article.author,
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    image: article.coverImage,
    articleBody: article.content,
    publisher: {
      "@type": "Organization",
      name: "জামিয়াতুল লতিফ রূপগঞ্জ",
      logo: {
        "@type": "ImageObject",
        url: "https://i.ibb.co/0FZ9bnp/jamia-logo.png",
      },
    },
    description: article.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jamiatullatif.com/articles/${article.id}`,
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

export default ArticleSchemaScript;
