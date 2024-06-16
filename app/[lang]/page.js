import HomeTexts from "@/components/home/home-texts";

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/jamia_pic.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <HomeTexts />
    </main>
  );
}
