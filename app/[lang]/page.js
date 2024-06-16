import HomeTexts from "@/components/home/home-texts";
import { ImagesExit } from "@/components/home/iamges-exit";

export default function Home() {
  return (
    <main>
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/jamia_pic.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <ImagesExit />
        <HomeTexts />
      </div>
    </main>
  );
}
