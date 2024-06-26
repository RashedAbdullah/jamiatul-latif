import Image from "next/image";
import Link from "next/link";

const MadrashaLogo = ({ lang = "bn" }) => {
  return (
    <div className="flex justify-center align-middle ml-5 lg:ml-10">
      <Link href={`/${lang}`}>
        <Image src="/BName.png" alt="" height={300} width={300} />
      </Link>
    </div>
  );
};

export default MadrashaLogo;
