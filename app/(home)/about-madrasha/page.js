import { getMadrashaInfo } from "@/actions/madrasha";
import AboutSchemaScript from "@/meta/about-madrasha-meta";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { MdMosque } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { BookOpenText, MapPin, Users, Calendar } from "lucide-react";

export const metadata = {
  title: "জামিয়াতুল লতিফের পরিচিতি | মাদ্রাসা সম্পর্কে",
  description:
    "জামিয়াতুল লতিফের সম্পর্কে জানুন, এর অবস্থান, প্রতিষ্ঠাতা, শিক্ষক এবং এই ইসলামিক প্রতিষ্ঠানের শিক্ষা পটভূমি সম্পর্কে তথ্য পেয়ে যান।",
  keywords:
    "জামিয়াতুল লতিফ, ইসলামিক শিক্ষা, মাদ্রাসা, দেওবন্দী, ইসলামিক শিক্ষা, নারায়ণগঞ্জ মাদ্রাসা, রূপগঞ্জ ইসলামিক স্কুল",
  openGraph: {
    title: "জামিয়াতুল লতিফের পরিচিতি",
    description:
      "জামিয়াতুল লতিফ সম্পর্কে বিস্তারিত তথ্য পান, এর অবস্থান, প্রতিষ্ঠাতা এবং শিক্ষামূলক উদ্দেশ্য সম্পর্কে জানুন।",
    type: "website",
    url: "https://jamiatullatif.com/about-madrasha",
    images: ["https://i.ibb.co/0FZ9bnp/jamia-pic.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "জামিয়াতুল লতিফের পরিচিতি",
    description:
      "জামিয়াতুল লতিফ, এর প্রতিষ্ঠাতা, অবস্থান এবং ইসলামিক শিক্ষার উদ্দেশ্য সম্পর্কে জানুন।",
    images: ["https://i.ibb.co/0FZ9bnp/jamia-pic.jpg"],
  },
};

const AboutPage = async () => {
  const madrashaInfo = await getMadrashaInfo();

  // Icon mapping for different about sections
  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case "নাম":
        return <MdMosque className="w-5 h-5 text-primary" />;
      case "প্রতিষ্ঠাকাল":
        return <Calendar className="w-5 h-5 text-primary" />;
      case "অবস্থান":
        return <MapPin className="w-5 h-5 text-primary" />;
      case "শিক্ষক সংখ্যা":
        return <Users className="w-5 h-5 text-primary" />;
      default:
        return <BookOpenText className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <div className="container py-12">
      <AboutSchemaScript />

      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge
          variant="outline"
          className="mb-4 py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20"
        >
          <MdMosque className="w-4 h-4 mr-2" />
          আমাদের প্রতিষ্ঠান
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          জামিয়াতুল <span className="text-primary">লতিফ</span> পরিচিতি
        </h1>
        <Separator className="w-20 h-1 bg-primary mx-auto my-6" />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          ইসলামী শিক্ষা ও আদর্শের আলোকে গড়ে উঠা একটি প্রসিদ্ধ দ্বীনী
          শিক্ষাপ্রতিষ্ঠান। প্রতিষ্ঠালগ্ন থেকে অদ্যাবধি নিরলসভাবে দ্বীনী শিক্ষা
          বিস্তারে কাজ করে যাচ্ছে।
        </p>
      </div>

      {/* Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {madrashaInfo.map((about, ind) => (
          <Card
            key={ind}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="flex flex-row items-center space-x-4 space-y-0 pb-2">
              {getIcon(about.title)}
              <h3 className="text-xl font-semibold text-gray-900">
                {about.title}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">{about.details}</p>
            </CardContent>
            <CardFooter className="text-sm text-gray-500">
              জামিয়াতুল লতিফ
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Additional Information Section */}
      <Card className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900">
            আমাদের মিশন ও ভিশন
          </h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            ইসলামের সঠিক আকীদা-বিশ্বাস ও আদর্শের আলোকে শিক্ষার্থীদের গড়ে তোলা
            এবং তাদেরকে সমাজের উপযুক্ত নাগরিক হিসেবে গড়ে তোলাই আমাদের মূল
            লক্ষ্য।
          </p>
          <p className="text-gray-700 leading-relaxed">
            আমরা বিশ্বাস করি যে সত্যিকার ইসলামী শিক্ষাই পারে একটি সুস্থ ও সুন্দর
            সমাজ গঠনে ভূমিকা রাখতে। তাই আমরা কুরআন-সুন্নাহ ভিত্তিক শিক্ষার উপর
            বিশেষ গুরুত্ব দিয়ে থাকি।
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
