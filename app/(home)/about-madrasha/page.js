import { getMadrashaInfo } from "@/actions/madrasha";
import PageTitle from "@/components/page-title";
import AboutSchemaScript from "@/meta/about-madrasha-meta";
import Head from "next/head";

const AboutPage = async () => {
  const madrashaInfo = await getMadrashaInfo();

  return (
    <>
      <Head>
        <title>About Jamia Tul Latif | About the Madrasa</title>
        <meta
          name="description"
          content="Learn about Jamia Tul Latif, its location, founders, teachers, and the educational background of this Islamic institution in Narayanganj."
        />
        <meta
          name="keywords"
          content="Jamia Tul Latif, Islamic education, Madrasa, Deobandi, Islamic learning, Narayanganj Madrasa, Rupganj Islamic school"
        />
        <meta property="og:title" content="About Jamia Tul Latif" />
        <meta
          property="og:description"
          content="Find detailed information about Jamia Tul Latif, including its location, founders, and educational mission."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://jamiatullatif.com/about-madrasha`}
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/0FZ9bnp/jamia-pic.jpg"
        />
        <meta name="robots" content="index,follow" />
        <meta name="language" content="bn" />
        <meta name="author" content="Rashed Abdullah" />
        <link rel="canonical" href="https://jamiatullatif.com/about-madrasha" />
        <meta property="og:locale" content="bn_BD" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Jamia Tul Latif" />
        <meta
          name="twitter:description"
          content="Learn about Jamia Tul Latif, its founder, location, and mission in Islamic education."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/0FZ9bnp/jamia-pic.jpg"
        />
      </Head>

      <div className="container mb-10">
        <section className="my-8">
          <PageTitle>প্রতিষ্ঠান পরিচিতি</PageTitle>
          <article className="bg-gray-100 rounded-lg shadow p-6">
            <ul className="space-y-4">
              {madrashaInfo.map((about, ind) => (
                <li
                  key={ind}
                  className="grid grid-cols-12 gap-4 items-center border-b border-gray-300 pb-4"
                >
                  <AboutSchemaScript />
                  <p className="md:col-span-2 col-span-3 font-semibold text-gray-700">
                    {about.title}:
                  </p>
                  <p className="md:col-span-10 col-span-9 text-gray-600">
                    {about.details}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
