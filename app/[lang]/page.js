import { Button } from "@/components/ui/button";
import Link from "next/link";

import Image from "next/image";
import HeaderInfo from "./_components/header";
import BesicMadrashaInfo from "./_components/besic-madrasa-info";
import DarulIftaHome from "./_components/darul-ifta-home";
import HomaPageCourses from "./_components/courses";

export default function Home({ params: { lang } }) {
  return (
    <main className="container flex flex-col gap-20">
      <HeaderInfo />
      <BesicMadrashaInfo />
      <DarulIftaHome />
      <HomaPageCourses />
    </main>
  );
}
