import Image from "next/image";
import Link from "next/link";

const MadrashaLogo = ({ lang = "bn", classes }) => {
  return (
    <div
      className={`flex justify-center align-middle items-center px-2 ${classes}`}
    >
      <Link href={`/${lang}`} className="text-2xl font-semibold text-slate-600">
        {/* <Image src="/BName.png" alt="" height={300} width={250} /> */}
        জামিয়াতুল লতিফ
      </Link>
    </div>
  );
};

export default MadrashaLogo;
