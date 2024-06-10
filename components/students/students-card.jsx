import Image from "next/image";
import Link from "next/link";

const StudentsCard = ({ lang = "bn", year = "2023-24", studentId = "807" }) => {
  return (
    <Link href={`/${lang}/students/${year}/${studentId}`}>
      <div className="shadow p-4 bg-white hover:shadow-lg transition-all duration-300">
        <div className="flex justify-center my-4">
          <Image
            src={`https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/433139882_2525540687655990_4919676745037325759_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFKeY0fR85QAVsbbGWVCh5oORlW4xM4TSg5GVbjEzhNKDXiQxkVwCh8RXYjkAU05jER-nCpu7es6YFXAUAecQW2&_nc_ohc=iIEmFshVdncQ7kNvgHjtCmL&_nc_ht=scontent.fdac11-1.fna&oh=00_AYCz1rdo-7s20OMwRSWcpwa7VHHhEQG5TGTMUPvl55i7kg&oe=666A7631`}
            alt="user avatar"
            height={400}
            width={400}
            className="rounded-full h-40 w-40"
          />
        </div>
        <div className="pt-4 px-5 border-t">
          <div className="grid grid-cols-10 gap-1">
            <div className="col-span-3">
              <h2>নাম: </h2>
            </div>
            <div className="col-span-7">
              <h2>মো: আনিছুর রহমান</h2>
            </div>
            <div className="col-span-3">
              <h2>পিতা: </h2>
            </div>
            <div className="col-span-7">
              <h2>মো: মতিউর রহমান</h2>
            </div>
            <div className="col-span-3">
              <h2>ক্লাস: </h2>
            </div>
            <div className="col-span-7">
              <h2>ছানাবিয়া ২য় বর্ষ</h2>
            </div>
            <div className="col-span-3">
              <h2>ঠিকানা: </h2>
            </div>
            <div className="col-span-7">
              <h2>রাজিবপুর, কুড়িগ্রাম</h2>
            </div>
            <div className="col-span-3">
              <h2>মোবাইল: </h2>
            </div>
            <div className="col-span-7">
              <h2>+880 1930517890</h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StudentsCard;
