import { getClasses } from "@/actions/classes";
import { createNewStudent } from "@/actions/students";
import { getYear } from "@/actions/year";
import DashInput from "@/app/(dashboard)/_components/dash-input";
import SubTitle from "@/components/sub-title";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const DashboardAddStudentPage = async () => {
  const years = await getYear();
  const classes = await getClasses();

  const handleNewStudent = async (e) => {
    "use server";
    try {
      const newStudent = {
        name: e.get("name"),
        father: e.get("father"),
        academicYearId: e.get("yearId"),
        dakhila: e.get("dakhila"),
        classNameId: e.get("classId"),
        image: e.get("image"),
        address: e.get("address"),
        contact: e.get("contact"),
        report: e.get("report"),
      };

      createNewStudent(newStudent);
      revalidatePath("/students");
      redirect("/students");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center container">
      <div className="w-full p-8 max-w-4xl bg-white shadow-lg rounded-lg transform transition duration-700 ease-in-out opacity-0 translate-y-6 animate-fade-in">
        <SubTitle>নতুন ছাত্র যুক্ত করুন</SubTitle>
        <form
          action={handleNewStudent}
          className="w-full grid grid-cols-2 gap-10"
        >
          <div>
            {/* Academic Year Select */}
            <div className="mt-5">
              <label
                htmlFor="yearId"
                className="block text-lg font-medium mb-2"
              >
                শিক্ষাবর্ষ সিলেক্ট করুন
              </label>
              <select
                required
                name="yearId"
                id="yearId"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none"
              >
                <option value="">শিক্ষাবর্ষ সিলেক্ট করুন</option>
                {years.map((year) => (
                  <option key={year.id} value={year.id}>
                    {year.academicYear}
                  </option>
                ))}
              </select>
            </div>
            {/* Class Select */}
            <div className="mt-5">
              <label
                htmlFor="classId"
                className="block text-lg font-medium mb-2"
              >
                ক্লাস সিলেক্ট করুন
              </label>
              <select
                required
                name="classId"
                id="classId"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none"
              >
                <option value="">ক্লাস সিলেক্ট করুন</option>
                {classes.map((cls) => (
                  <option key={cls.id} value={cls.id}>
                    {cls.class}
                  </option>
                ))}
              </select>
            </div>
            {/* Name of student */}
            <DashInput
              req={true}
              name={"name"}
              title={"শিক্ষার্থীর নাম লিখুন"}
              type={"text"}
            />
            {/* Father of student */}
            <DashInput
              name={"father"}
              title={"পিতার নাম লিখুন"}
              type={"text"}
              req={true}
            />
          </div>

          <div>
            {/* Dakhila of student */}
            <DashInput
              name={"dakhila"}
              title={"দাখিলা নাম্বার লিখুন"}
              type={"number"}
              req={true}
            />
            {/* Address of student */}
            <DashInput
              name={"address"}
              title={"ঠিকানা লিখুন (থানা ও জেলা)"}
              type={"text"}
              req={true}
            />
            {/* Image url of student */}
            <DashInput name={"image"} title={"পিকচার URL"} type={"text"} />
            {/* Contact of student */}
            <DashInput
              name={"contact"}
              title={"ফোন নাম্বার"}
              type={"text"}
              req={true}
            />
          </div>

          {/* Report of student */}
          <div className="col-span-2">
            <label htmlFor="report" className="block text-lg font-medium mb-2">
              রিপোর্ট লিখুন
            </label>
            <textarea
              type="number"
              placeholder="রিপোর্ট লিখুন . . ."
              name="report"
              id="report"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center col-span-2">
            <Button
              type="submit"
              className="w-full py-3 text-white rounded-lg hover:bg-slate-700 transition-all"
            >
              তথ্য সাবমিট করুন
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardAddStudentPage;
