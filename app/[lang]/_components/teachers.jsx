import { getTeachers } from "@/actions";
import PageTitle from "@/components/page-title";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const HomePageTeachers = async ({ lang = "bn" }) => {
  const teachers = await getTeachers();

  return (
    <div>
      <div>
        <PageTitle>শিক্ষকবৃন্দ</PageTitle>
      </div>
      <div className="flex justify-center items-center">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {teachers.map((teacher) => (
              <CarouselItem
                key={teacher.id}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div
                        className={`h-[400px] w-[400px] bg-cover bg-no-repeat bg-center flex justify-center items-end`}
                        style={{ backgroundImage: `url(${teacher.image})` }}
                      >
                        <div className="bg-primary text-white bg-opacity-60 w-full p-2">
                          <div>
                            <h2 className="text-xl font-semibold">
                              {teacher.name}
                            </h2>
                          </div>
                          <div className="flex justify-between mt-1">
                            <p>{teacher.post}</p>
                            <Link
                              className="underline"
                              href={`/${lang}/teachers/${teacher.id}`}
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
            ))}
          </CarouselContent>
          <CarouselPrevious className="" />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default HomePageTeachers;
