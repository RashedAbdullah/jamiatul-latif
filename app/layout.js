import { Hind_Siliguri } from "next/font/google";
import "@/css/globals.css";
import Navbar from "@/components/headers/navbar";
import Footer from "@/components/footer/footer";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import { getResults } from "@/actions/result";

const bengali = Hind_Siliguri({ subsets: ["bengali"], weight: "400" });

export const metadata = {
  title: "জামিয়াতুল লতিফ - হোম",
  description:
    "জামিয়াতুল লতিফ মাদরাসা। রূপগঞ্জ, নারায়ণগঞ্জ। একটি ধর্মীয় কওমি শিক্ষা প্রতিষ্ঠান। ঢাকা বিভাগের নারায়ণগঞ্জ জেলার রূপগঞ্জ থানার বরাব এলাকায় অবস্থিত।",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  const results = await getResults();
  console.log(results[0].marks);

  return (
    <html lang="bn">
      <body className={bengali.className}>
        <div className="bg-gradient-to-br from-indigo-100 to-blue-50 text-[#083042] min-h-screen">
          <Navbar user={session?.user} />
          <Toaster />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
