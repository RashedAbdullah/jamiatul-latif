import { getTeachers } from "@/actions/teachers";
import PageTitle from "@/components/page-title";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="my-10">
      <PageTitle>শিক্ষকবৃন্দ</PageTitle>
      <div className="flex justify-center items-center">
        <Carousel className="w-full relative">
          <CarouselContent className="-ml-1">
            {teachers
              .sort((a, b) => a.teacherSerial - b.teacherSerial)
              .map(
                (teacher) =>
                  !teacher.resignation.resigned && (
                    <CarouselItem
                      key={teacher.id}
                      className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                      <TeacherSchemaScript teacher={teacher} />
                      <div className="p-1">
                        <Card className="transition-transform transform hover:scale-105">
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <div
                              className={`h-[400px] w-[400px] bg-cover bg-no-repeat bg-center flex justify-center items-end rounded-lg shadow-lg overflow-hidden`}
                              style={{
                                backgroundImage: teacher.image
                                  ? `url(${teacher.image})`
                                  : "url(https://i.ibb.co.com/VtvbmpP/imgbin-computer-icons-teacher-professor-education-lecturer-png.png)",
                              }}
                            >
                              <div className="bg-primary text-white bg-opacity-70 w-full p-2">
                                <h2 className="text-xl font-semibold">
                                  {teacher.name}
                                </h2>
                                <p className="text-sm italic">{teacher.post}</p>
                                <div className="flex justify-between mt-1">
                                  <Link
                                    className="underline text-white hover:text-gray-300 transition duration-200"
                                    href={`/teachers/${teacher.id}`}
                                  >
                                    বিস্তারিত
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  )
              )}
          </CarouselContent>

          {/* Hide controls on small screens */}
          <div className="absolute inset-y-1/2 flex justify-between w-full px-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePageTeachers;
