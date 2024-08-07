import { Hind_Siliguri } from "next/font/google";
import "@/css/globals.css";
import Navbar from "@/components/headers/navbar";
import MadrashaThumbnail from "@/components/thumbnail/madrasha-thumbnail";
import Footer from "@/components/footer/footer";
import { auth } from "@/auth";

const bengali = Hind_Siliguri({ subsets: ["bengali"], weight: "400" });

export const metadata = {
  title: "জামিয়াতুল লতিফ - হোম",
  description:
    "জামিয়াতুল লতিফ মাদরাসা। রূপগঞ্জ, নারায়ণগঞ্জ। একটি ধর্মীয় কওমি শিক্ষা প্রতিষ্ঠান। ঢাকা বিভাগের নারায়ণগঞ্জ জেলার রূপগঞ্জ থানার বরাব এলাকায় অবস্থিত।",
};

export default async function RootLayout({ children, params: { lang } }) {
  const session = await auth();

  return (
    <html lang={lang}>
      <body className={bengali.className}>
        <div>
          {/* <MadrashaThumbnail /> */}
          <Navbar user={session?.user} />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
