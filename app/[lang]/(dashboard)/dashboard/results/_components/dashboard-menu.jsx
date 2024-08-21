import Link from "next/link";

const DeashboardMenu = ({ lang = "bn" }) => {
  return (
    <div>
      <ul className="col-span-2 bg-red-500 px-2 py-2">
        <li className="">
          <Link href={`/${lang}/dashboard/results`}>ফলাফল</Link>
        </li>
      </ul>
    </div>
  );
};

export default DeashboardMenu;
