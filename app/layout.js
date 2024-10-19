import { Hind_Siliguri } from "next/font/google";
import "@/css/globals.css";
import Navbar from "@/components/headers/navbar";
import Footer from "@/components/footer/footer";
import { auth } from "@/auth";
import { Analytics } from "@vercel/analytics/react";

const bengali = Hind_Siliguri({ subsets: ["bengali"], weight: "400" });

// SEO Metadata
export const metadata = {
  title: "জামিয়াতুল লতিফ রূপগঞ্জ",
  description:
    "জামিয়াতুল লতিফ রূপগঞ্জ মাদরাসা। নারায়ণগঞ্জ। একটি ধর্মীয় কওমি শিক্ষা প্রতিষ্ঠান। ঢাকা বিভাগের নারায়ণগঞ্জ জেলার রূপগঞ্জ থানার বরাব এলাকায় অবস্থিত।",
  keywords: [
    "Islamic education",
    "Islamic Education Platform",
    "Madrasha",
    "Darul Ifta",
    "Islamic courses",
    "Quranic studies",
    "জামিয়াতুল লতিফ রূপগঞ্জ",
    "জামিয়াতুল লতিফ",
    "ইসলামি এডুকশন",
    "দারুল ইফতা",
    "ফতোয়া বিভাাাগ",
    "রূপগজ্ঞ মাদ্রাসা",
    "কওমি মাদ্রাসা",
    "নারায়ণগঞ্জ মাদ্রাসা",
  ],
  openGraph: {
    title: "জামিয়াতুল লতিফ | Islamic Education Platform",
    description:
      "Join Darul Madrasha for Islamic education, courses, and expert guidance from knowledgeable teachers and Darul Ifta services.",
    url: "https://jamiatullatif.com/",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co.com/0FZ9bnp/jamia-pic.jpg",
        width: 800,
        height: 600,
        alt: "Islamic Education Platform",
      },
    ],
  },
};

export default async function RootLayout({ children }) {
  const session = await auth();

  return (
    <html lang="bn">
      <head>
        <meta charSet="UTF-8" />
        <meta name="google-adsense-account" content="ca-pub-6921856465558245" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6921856465558245"
          crossorigin="anonymous"
        ></script>
      </head>
      <body
        className={`${bengali.className} bg-gradient-to-br from-indigo-100 to-blue-50 text-[#083042] min-h-screen`}
      >
        <Navbar user={session?.user} />
        <main>{children}</main>
        <Footer />
        <Analytics /> 
      </body>
    </html>
  );
}
