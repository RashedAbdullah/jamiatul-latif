import Image from "next/image";
import Link from "next/link";

const MadrashaLogo = ({  classes }) => {
  return (
    <div
      className={`flex justify-center align-middle items-center px-2 ${classes}`}
    >
      <Link href={`/`} className="text-2xl font-semibold text-slate-600 text-nowrap">
        জামিয়াতুল লতিফ রূপগঞ্জ
      </Link>
    </div>
  );
};

export default MadrashaLogo;
