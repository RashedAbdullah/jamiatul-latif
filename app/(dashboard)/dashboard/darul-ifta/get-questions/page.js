import { getFatwaQuestions } from "@/actions/fatwa-question";
import SubTitle from "@/components/sub-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashGetQuestions = async () => {
  const questions = await getFatwaQuestions();

  return (
    <div className="container">
      <SubTitle>ইস্তেফতা সমূহ</SubTitle>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 p-2">
        {questions.length > 0 ? (
          questions.map((question) => (
            <div key={question} className="bg-white shadow col-span-1 p-4">
              <div className="py-2 border-b">
                <p>{question.question}</p>
              </div>
              <div className="text-sm py-2 grid grid-cols-10">
                <h2 className="col-span-3">নাম: </h2>
                <h3 className="col-span-7">{question.name}</h3>
                <p className="col-span-3">ঠিকানা: </p>
                <p className="col-span-7">{question.address}</p>
                <p className="col-span-3">যোগাযোগ: </p>
                <p className="col-span-7">{question.contact}</p>
                <p className="col-span-3">প্রশ্নের তারিখ: </p>
                <p className="col-span-7 font-NotoSerifBengali">
                  {new Date(question.createdAt).toLocaleString("bn")}
                </p>
              </div>
              <div className="text-end">
                <Link href="/dashboard/darul-ifta/add-fatwa">
                  <Button>উত্তর দিন</Button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 text-center text-gray-400">
            <p>কোন প্রশ্ন খুৃঁজে পাওয়া যায় নি।</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashGetQuestions;
