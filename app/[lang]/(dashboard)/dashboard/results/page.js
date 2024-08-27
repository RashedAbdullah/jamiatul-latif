import { getStudents } from "@/actions";
import Link from "next/link";

const DashboardResultPage = async ({ params: { lang = "bn" } }) => {
  const results = await getStudents();

  return (
    <div>
      {results.map((className) => (
        <Link
          key={className.className}
          href={`/${lang}/dashboard/results/${className.id}`}
        >
          {className.className}
        </Link>
      ))}
    </div>
  );
};

export default DashboardResultPage;
