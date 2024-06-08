import { Hind_Siliguri } from "next/font/google";
const bengali = Hind_Siliguri({ subsets: ["bengali"], weight: "400" });

export default function Home() {
  return (
    <main className="min-h-[4000px]">
      <div className="container">
        <h2 className="text-3xl text-center my-4">জামিয়াতুল লতিফ রূপগঞ্জ</h2>
      </div>
    </main>
  );
}
