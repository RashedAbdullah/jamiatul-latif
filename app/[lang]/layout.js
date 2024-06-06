import { Noto_Serif_Bengali } from "next/font/google";
import "@/css/globals.css";
import Navbar from "@/components/headers/navbar";

const bengali = Noto_Serif_Bengali({ subsets: ["bengali"] });

export const metadata = {
  title: "জামিয়াতুল লতিফ - হোম",
  description:
    "জামিয়াতুল লতিফ মাদরাসা। রূপগঞ্জ, নারায়ণগঞ্জ। একটি ধর্মীয় কওমি শিক্ষা প্রতিষ্ঠান। ঢাকা বিভাগের নারায়ণগঞ্জ জেলার রূপগঞ্জ থানার বরাব এলাকায় অবস্থিত।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bengali.className}>
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
