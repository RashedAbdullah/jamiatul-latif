import { getClasses } from "@/actions/classes";
import { createNewStudent } from "@/actions/students";
import { getYear } from "@/actions/year";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DashboardAddStudentPage = async () => {
  const years = await getYear();
  const classes = await getClasses();

  const handleNewStudent = async (formData) => {
    "use server";
    try {
      const newStudent = {
        name: formData.get("name"),
        father: formData.get("father"),
        academicYearId: formData.get("yearId"),
        dakhila: formData.get("dakhila"),
        classNameId: formData.get("classId"),
        image: formData.get("image"),
        address: formData.get("address"),
        contact: formData.get("contact"),
        report: formData.get("report"),
      };

      await createNewStudent(newStudent);
      revalidatePath("/students");
      redirect("/students");
    } catch (err) {
      console.error(err);
      redirect("/error");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800">
            নতুন ছাত্র যুক্ত করুন
          </CardTitle>
          <CardDescription className="text-gray-600">
            নিচের ফর্মটি পূরণ করে নতুন ছাত্র যুক্ত করুন
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleNewStudent} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  ছাত্র/ছাত্রীর নাম
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="ছাত্র/ছাত্রীর নাম লিখুন"
                  required
                />
              </div>

              {/* Father's Name */}
              <div className="space-y-2">
                <Label htmlFor="father" className="text-gray-700">
                  পিতার নাম
                </Label>
                <Input
                  id="father"
                  name="father"
                  type="text"
                  placeholder="পিতার নাম লিখুন"
                  required
                />
              </div>

              {/* Academic Year */}
              <div className="space-y-2">
                <Label htmlFor="yearId" className="text-gray-700">
                  শিক্ষাবর্ষ
                </Label>
                <Select name="yearId" required>
                  <SelectTrigger>
                    <SelectValue placeholder="শিক্ষাবর্ষ নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year.id} value={year.id}>
                        {year.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Class */}
              <div className="space-y-2">
                <Label htmlFor="classId" className="text-gray-700">
                  শ্রেণী
                </Label>
                <Select name="classId" required>
                  <SelectTrigger>
                    <SelectValue placeholder="শ্রেণী নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((cls) => (
                      <SelectItem key={cls.id} value={cls.id}>
                        {cls.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Dakhila Number */}
              <div className="space-y-2">
                <Label htmlFor="dakhila" className="text-gray-700">
                  দাখিলা নম্বর
                </Label>
                <Input
                  id="dakhila"
                  name="dakhila"
                  type="text"
                  placeholder="দাখিলা নম্বর লিখুন"
                  required
                />
              </div>

              {/* Contact */}
              <div className="space-y-2">
                <Label htmlFor="contact" className="text-gray-700">
                  যোগাযোগ নম্বর
                </Label>
                <Input
                  id="contact"
                  name="contact"
                  type="tel"
                  placeholder="মোবাইল নম্বর লিখুন"
                  required
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="address" className="text-gray-700">
                  ঠিকানা
                </Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="পূর্ণ ঠিকানা লিখুন"
                  required
                />
              </div>

              {/* Image */}
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="image" className="text-gray-700">
                  ছবি (Image URL)
                </Label>
                <Input
                  id="image"
                  name="image"
                  type="url"
                  placeholder="ছবির URL লিখুন"
                />
              </div>

              {/* Report */}
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="report" className="text-gray-700">
                  বিশেষ নোট (যদি থাকে)
                </Label>
                <Input
                  id="report"
                  name="report"
                  type="text"
                  placeholder="বিশেষ নোট লিখুন"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                ছাত্র/ছাত্রী যুক্ত করুন
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardAddStudentPage;
