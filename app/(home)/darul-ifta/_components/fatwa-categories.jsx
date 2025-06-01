import { getFatwaCategories } from "@/actions/fatwa-category";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getEngToBnNumber } from "@/utils/number-converter";

const FatwaCategories = async () => {
  const fatwaCategories = await getFatwaCategories();

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-primary">
          ফতোয়া ক্যাটাগরিসমূহ
        </h2>
        <ArrowDownRight className="h-5 w-5 text-muted-foreground" />
      </div>

      <ScrollArea className="h-[300px]">
        <nav>
          <ul className="space-y-3">
            {fatwaCategories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/darul-ifta/${category.id}`}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <span className="font-medium group-hover:text-primary">
                    {category.category}
                  </span>
                  <Badge variant="secondary" className="ml-2">
                    {getEngToBnNumber(fatwaCategories.length) || 0}
                  </Badge>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>

      {fatwaCategories.length === 0 && (
        <p className="text-muted-foreground text-center py-4">
          কোনো ক্যাটাগরি পাওয়া যায়নি
        </p>
      )}
    </Card>
  );
};

export default FatwaCategories;
