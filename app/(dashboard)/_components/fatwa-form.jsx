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

const DashForwaForm = async () => {
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
    <form action={handleNewFatwa} className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Category of fatwa */}
      <div className="py-2">
        <label className="block text-lg font-semibold mb-2 text-gray-700">
          ফতোয়া ক্যাটাগরি সিলেক্ট করুন
        </label>
        <Select required className="py-2" name="categoryId">
          <SelectTrigger className="w-full border rounded-lg focus:ring-2 focus:ring-blue-500">
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

      {/* Question */}
      <div className="py-2">
        <label className="block text-lg font-semibold mb-2 text-gray-700">
          প্রশ্ন সিলেক্ট করুন
        </label>
        <Select required className="py-2" name="questionId">
          <SelectTrigger className="w-full border rounded-lg focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="প্রশ্ন সিলেক্ট করুন" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup  className="max-w-80">
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
        <label htmlFor="fatwa_no" className="block text-lg font-semibold mb-2 text-gray-700">
          ফতোয়া নং
        </label>
        <input
          required
          type="text"
          placeholder="ফতোয়া নং"
          name="fatwa_no"
          id="fatwa_no"
          className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Reference */}
      <div className="mt-3">
        <label htmlFor="reference" className="block text-lg font-semibold mb-2 text-gray-700">
          রেফারেন্স
        </label>
        <textarea
          required
          placeholder="রেফারেন্স লিখুন . . ."
          name="reference"
          id="reference"
          className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Fatwa */}
      <div className="md:col-span-2 mt-3">
        <label htmlFor="fatwa" className="block text-lg font-semibold mb-2 text-gray-700">
          ফতোয়া
        </label>
        <textarea
          required
          placeholder="ফতোয়া লিখুন . . ."
          name="fatwa"
          rows={6}
          id="fatwa"
          className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <div className="text-center md:col-span-2 mt-5">
        <Button
          type="submit"
          className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
        >
          ফতোয়া সাবমিট করুন
        </Button>
      </div>
    </form>
  );
};

export default DashForwaForm;
