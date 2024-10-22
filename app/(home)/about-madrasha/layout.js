import Head from "next/head";

export const metadata = {
  title: "মাদ্রাসা পরিচিতি",
  description: "জামিয়াতুল লতিফ রূপগঞ্জ মাদরাসার পরিচিতি",
};

const AboutMadrashaLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://jamiatullatif.com/about-madrasha"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co.com/0FZ9bnp/jamia-pic.jpg"
        />
      </Head>
      <main role="main">
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "জামিয়াতুল লতিফ রূপগঞ্জ",
  "url": "https://jamiatullatif.com",
  "description": "জামিয়াতুল লতিফ রূপগঞ্জ মাদরাসার পরিচিতি",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "রূপগঞ্জ",
    "addressRegion": "বাংলাদেশ"
  },
  "logo": "https://i.ibb.co/0FZ9bnp/jamia-pic.jpg"
}
`}
        </script>
        {children}
      </main>
    </>
  );
};

export default AboutMadrashaLayout;
