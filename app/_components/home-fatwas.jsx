import { getLatestFatwas } from "@/actions/fatwa";
import { Button } from "@/components/ui/button";
import { getEngToBnNumber } from "@/utils/number-converter";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HomeFatwas = async () => {
  const latestFatwas = await getLatestFatwas();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          সর্বশেষ ফতোয়া
        </h1>
        <p className="text-lg text-muted-foreground">
          ইসলামিক জীবনধারা ও নির্দেশনা সম্পর্কে জানুন
        </p>
      </div>

      {/* Fatwa Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestFatwas.map((fatwa) => (
          <Card key={fatwa._id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant="secondary" className="text-sm">
                  {getEngToBnNumber(fatwa.fatwa_no)} নং
                </Badge>
                <Badge variant="outline">
                  {fatwa.categoryId?.category}
                </Badge>
              </div>
              <CardTitle className="mt-2 text-lg">
                {fatwa.questionerId?.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">প্রশ্ন:</h3>
                <p className="text-foreground line-clamp-3">
                  {fatwa.questionerId?.question}
                </p>
              </div>

              <div>
                <h3 className="font-medium text-sm text-muted-foreground">উত্তর:</h3>
                <p className="text-foreground line-clamp-4">
                  {fatwa.answer}
                </p>
              </div>

              {fatwa.references && (
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">তথ্যসূত্র:</h3>
                  <p className="text-sm italic line-clamp-2">
                    {fatwa.references}
                  </p>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex justify-between items-center">
              <Link
                href={`/darul-ifta/${fatwa.categoryId._id}/${fatwa.id}`}
                className="text-sm font-medium hover:underline"
              >
                বিস্তারিত দেখুন
              </Link>
              <span className="text-xs text-muted-foreground">
                {fatwa.questionerId?.address}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12 text-center">
        <Link href="/darul-ifta">
          <Button variant="outline" className="px-8 py-5">
            আরও ফতোয়া দেখুন
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeFatwas;