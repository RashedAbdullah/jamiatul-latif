import { getClasses } from "@/actions/classes";
import { getDeleteStudent, getStudentById, updateSingleStudent } from "@/actions/students";
import { getYear } from "@/actions/year";
import DashInput from "@/app/(dashboard)/_components/dash-input";
import DeleteStudent from "@/app/(dashboard)/_components/delete-student";
import SubTitle from "@/components/sub-title";
import { Button } from "@/components/ui/button";

const DashSingleStudentPage = async ({ params: { id } }) => {
  const years = await getYear();
  const classes = await getClasses();
  const singleStudent = await getStudentById(id);
  const deleteStudent = await getDeleteStudent(id)

  console.log(singleStudent);
  const UpdateStudentForm = async (e) => {
    "use server";
    try {
      const updatedStudent = {
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

      updateSingleStudent(id, updatedStudent);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="min-h-screen flex justify-center mt-5 container">
      <div className="w-full p-8 max-w-4xl bg-white shadow-lg rounded-lg transform transition duration-700 ease-in-out opacity-0 translate-y-6 animate-fade-in">
        <SubTitle>ছাত্র তথ্য আপডেট করুন</SubTitle>
        <form
          action={UpdateStudentForm}
          className="w-full grid grid-cols-2 gap-10"
        >
          <div>
            {/* Academic Year Select */}
            <div className="mt-5">
              <label
                htmlFor="yearId"
                className="block text-lg font-medium mb-2"
              >
                শিক্ষাবর্ষ
              </label>
              <select
                required
                name="yearId"
                id="yearId"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none"
              >
                <option value={singleStudent.academicYearId._id}>
                  {singleStudent.academicYearId.academicYear}
                </option>
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
                <option value={singleStudent.classNameId._id}>
                  {singleStudent.classNameId.class}
                </option>
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
              dValue={singleStudent.name}
              name={"name"}
              title={"শিক্ষার্থীর নাম লিখুন"}
              type={"text"}
            />
            {/* Father of student */}
            <DashInput
              dValue={singleStudent.father}
              name={"father"}
              title={"পিতার নাম লিখুন"}
              type={"text"}
              req={true}
            />
          </div>

          <div>
            {/* Dakhila of student */}
            <DashInput
              dValue={singleStudent.dakhila}
              name={"dakhila"}
              title={"দাখিলা নাম্বার লিখুন"}
              type={"number"}
              req={true}
            />
            {/* Address of student */}
            <DashInput
              dValue={singleStudent.address}
              name={"address"}
              title={"ঠিকানা লিখুন (থানা ও জেলা)"}
              type={"text"}
              req={true}
            />
            {/* Image url of student */}
            <DashInput
              name={"image"}
              dValue={singleStudent.image}
              title={"পিকচার URL"}
              type={"text"}
            />
            {/* Contact of student */}
            <DashInput
              dValue={singleStudent.contact}
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
              defaultValue={singleStudent.report}
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
        <DeleteStudent name={singleStudent.name} onDelete={deleteStudent} />
      </div>
    </div>
  );
};

export default DashSingleStudentPage;
