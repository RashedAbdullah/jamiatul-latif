import ArticleSchemaScript from "@/meta/article-meta";
import Link from "next/link";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ArticleCard = ({ article }) => {
  const { title, author, description, publishedAt, _id } = article;
  const formattedDate = new Date(publishedAt).toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
      <ArticleSchemaScript article={article} />

      <CardHeader className="pb-2">
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-grow">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <FaUser className="w-3 h-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCalendarAlt className="w-3 h-3" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Article Description */}
        <p className="text-foreground line-clamp-3">{description}</p>
      </CardContent>

      <CardFooter className="justify-end pt-4">
        <Link href={`/articles/${_id}`} passHref>
          <Button variant="outline" size="sm">
            প্রবন্ধ পড়ুন
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
