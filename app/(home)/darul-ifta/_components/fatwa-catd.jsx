import { getEngToBnNumber } from "@/utils/number-converter";
import CopyLinkButton from "./share-link-fatwa";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, User, MapPin, BookOpen } from "lucide-react";

const FatwaCard = ({ fatwa }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow p-0 px-0 py-0">
      <CardHeader className="pb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {fatwa.questionerId && (
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={fatwa.questionerId?.image}
                  alt={fatwa.questionerId?.name}
                />
                <AvatarFallback>
                  {fatwa.questionerId?.name?.charAt(0) || (
                    <User className="h-5 w-5" />
                  )}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold text-gray-800 dark:text-gray-200">
                  {fatwa.questionerId?.name}
                </h2>
                {fatwa.questionerId?.address && (
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <address className="not-italic">
                      {fatwa.questionerId?.address}
                    </address>
                  </div>
                )}
              </div>
            </div>
          )}

          {fatwa.createdAt && (
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <CalendarDays className="h-4 w-4" />
              <span>
                {new Date(fatwa.createdAt).toLocaleDateString("bn-BD")}
              </span>
            </div>
          )}
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="pt-6">
        <div className="space-y-6">
          {/* Question Section */}
          <section>
            <Badge variant="secondary" className="mb-3">
              {getEngToBnNumber(fatwa.fatwa_no)} নং. প্রশ্ন
            </Badge>
            {fatwa.questionerId?.question && (
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {fatwa.questionerId?.question}
              </p>
            )}
          </section>

          {/* Answer Section */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                উত্তর:
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {fatwa.answer}
            </p>
          </section>

          {/* References */}
          {fatwa.references && (
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">তথ্যসূত্র:</span>{" "}
                {fatwa.references}
              </p>
            </div>
          )}
        </div>
      </CardContent>

      <Separator />

      <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
        <CopyLinkButton fatwaId={fatwa.id} categoryId={fatwa.categoryId._id} />

        <Button asChild variant="default" className="w-full sm:w-auto">
          <Link href={`/darul-ifta/${fatwa.categoryId._id}/${fatwa.id}`}>
            বিস্তারিত ফতোয়া দেখুন
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FatwaCard;
