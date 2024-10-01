import SubTitle from "@/components/sub-title";
import FatwaCategoryForm from "@/app/(dashboard)/_components/fatwa-category-form";
import DashForwaFrom from "@/app/(dashboard)/_components/fatwa-form";

const DashAddFatwa = () => {
  return (
    <div className="flex justify-center mt-10 container gap-5">
      <div className="w-full p-8 max-w-4xl bg-white shadow-lg rounded-lg transform transition duration-700 ease-in-out opacity-0 translate-y-6 animate-fade-in">
        <SubTitle>ফতোয়া সাবমিট করুন</SubTitle>
        <DashForwaFrom />
      </div>

      <FatwaCategoryForm />
    </div>
  );
};

export default DashAddFatwa;
