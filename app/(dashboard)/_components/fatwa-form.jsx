import { createFatwa } from "@/actions/fatwa";
import { getFatwaCategories } from "@/actions/fatwa-category";
import { getFatwaQuestions } from "@/actions/fatwa-question";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DashForwaFrom = async () => {
  const categories = await getFatwaCategories();
  const questions = await getFatwaQuestions();

  const handleNewFatwa = async (formData) => {
    "use server";
    try {
      const newFatwa = {
        fatwa_no: formData.get("fatwa_no"),
        categoryId: formData.get("categoryId"),
        questionerId: formData.get("questionId"),
        answer: formData.get("fatwa"),
        references: formData.get("reference"),
      };

      await createFatwa(newFatwa);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form action={handleNewFatwa} className="w-full grid grid-cols-2 gap-5">
      {/* Category of fatwa */}
      <div className="py-2">
        <p className="text-lg font-medium mb-2">
          ফতোয়া ক্যাটাগরি সিলেক্ট করুন
        </p>
        <Select required className="py-2" name="categoryId">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="ফতোয়া ক্যাটাগরি সিলেক্ট করুন" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>ফতোয়া ক্যাটাগরি সিলেক্ট করুন</SelectLabel>
              {categories.map((category) => (
                <SelectItem key={category._id} value={category._id}>
                  {category.category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Qustion */}
      <div className="py-2">
        <p className="text-lg font-medium mb-2">প্রশ্ন সিলেক্ট করুন</p>
        <Select required className="py-2" name="questionId">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="প্রশ্ন সিলেক্ট করুন" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>প্রশ্ন সিলেক্ট করুন</SelectLabel>
              {questions.map((question) => (
                <SelectItem key={question.id} value={question.id}>
                  {question.question}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Fatwa No */}
      <div className="mt-3">
        <label htmlFor="fatwa_no" className="block text-lg font-medium mb-2">
          ফতোয়া নং
        </label>
        <input
          required
          type="text"
          placeholder=" ফতোয়া নং"
          name="fatwa_no"
          id="fatwa_no"
          className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none`}
        ></input>
      </div>

      <div className="col-span-1">
        <label htmlFor="report" className="block text-lg font-medium mb-2">
          রেফারেন্স
        </label>
        <textarea
          required
          placeholder="রেফারেন্স লিখুন . . ."
          name="reference"
          id="reference"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none"
        ></textarea>
      </div>

      {/* Report of student */}
      <div className="col-span-2">
        <label htmlFor="report" className="block text-lg font-medium mb-2">
          ফতোয়া
        </label>
        <textarea
          required
          placeholder="ফতোয়া লিখুন . . ."
          name="fatwa"
          id="fatwa"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="text-center col-span-2">
        <Button
          type="submit"
          className="w-full py-3 text-white rounded-lg hover:bg-slate-700 transition-all"
        >
          ফতোয়া সাবমিট করুন
        </Button>
      </div>
    </form>
  );
};

export default DashForwaFrom;
