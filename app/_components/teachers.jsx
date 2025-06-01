import { getTeachers } from "@/actions/teachers";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TeacherSchemaScript from "@/meta/teacher-meta";
import Link from "next/link";

const HomePageTeachers = async () => {
  const teachers = await getTeachers();

  return (
    <div className="my-16 px-4 md:px-8 lg:px-16">
      {/* Page Title */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          শিক্ষকবৃন্দ
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          জামিয়ার নিবেদিতপ্রাণ শিক্ষকবৃন্দ, যারা তাঁদের গভীর জ্ঞান ও অভিজ্ঞতা
          দিয়ে ছাত্রদের উজ্জীবিত করেন এবং সঠিক পথনির্দেশনা দিয়ে থাকেন।
        </p>
      </div>

      {/* Teacher Carousel */}
      <div className="flex justify-center items-center">
        <Carousel className="w-full max-w-7xl">
          <CarouselContent>
            {teachers
              .sort((a, b) => a.teacherSerial - b.teacherSerial)
              .map(
                (teacher) =>
                  !teacher.resignation.resigned && (
                    <CarouselItem
                      key={teacher.id}
                      className="pl-4 md:basis-1/2 lg:basis-1/3"
                    >
                      <TeacherSchemaScript teacher={teacher} />
                      <Card className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
                        <div
                          className="h-[400px] w-full bg-cover bg-center relative"
                          style={{
                            backgroundImage: `url(${
                              teacher.image ||
                              "https://i.ibb.co.com/VtvbmpP/imgbin-computer-icons-teacher-professor-education-lecturer-png.png"
                            })`,
                          }}
                        >
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 rounded-2xl"></div>

                          <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10">
                            <h2 className="text-xl font-bold">
                              {teacher.name}
                            </h2>
                            <p className="text-sm italic">{teacher.post}</p>
                            <div className="mt-2">
                              <Link
                                href={`/teachers/${teacher.id}`}
                                className="inline-block text-sm underline hover:text-gray-200 transition"
                              >
                                বিস্তারিত
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </CarouselItem>
                  )
              )}
          </CarouselContent>

          {/* Carousel Controls */}
          <div className="absolute inset-y-1/2 flex justify-between w-full px-4 pointer-events-none">
            <div className="pointer-events-auto">
              <CarouselPrevious />
            </div>
            <div className="pointer-events-auto">
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePageTeachers;
