import { getFatwas } from "@/actions/fatwa";
import FatwaCategories from "./_components/fatwa-categories";
import PageTitle from "@/components/page-title";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BookOpenText } from "lucide-react";
import FatwaCard from "./_components/fatwa-catd";

export const metadata = {
  title: "দারুল ইফতা | আপনার প্রশ্নের উত্তর",
  description: "ফতোয়া কেন্দ্র - আপনার প্রশ্নের উত্তর এবং তথ্যের জন্য একটি উৎস",
};

const DarulIftaPage = async () => {
  const fatwas = await getFatwas();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="mb-2 font-semibold text-3xl">দারুল ইফতা</h2>
        <p className="text-xl text-muted-foreground">
          আপনার প্রশ্নের উত্তর এবং ইসলামিক নির্দেশনা
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content - Fatwa List */}
        <div className="lg:col-span-8 space-y-6">
          {fatwas.length > 0 ? (
            fatwas.map((fatwa) => <FatwaCard key={fatwa.id} fatwa={fatwa} />)
          ) : (
            <Alert className="text-center py-12">
              <BookOpenText className="h-6 w-6 mx-auto" />
              <AlertDescription className="mt-2 text-lg">
                এই ক্যাটাগরির কোনো ফতোয়া পাওয়া যায় নি
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4 text-primary">
              ফতোয়া ক্যাটাগরিসমূহ
            </h2>
            <FatwaCategories />
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4 text-primary">
              ফতোয়া জমা দিন
            </h2>
            <p className="text-muted-foreground mb-4">
              আপনার প্রশ্ন জমা দিয়ে ফতোয়া পান
            </p>
            <a
              href="/submit-fatwa"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              প্রশ্ন জমা দিন
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DarulIftaPage;
