const TeacherInfo = () => {
  return (
    <>
      {" "}
      <div className="text-center py-6 border-b border-green-500">
        <h2 className="font-semibold text-xl">
          <span>নাম: </span> ‍<span>হাফেজ মুফতি আবুল কালাম হাফি.</span>
        </h2>
        <p>নাযেমে দারুল ইকামা</p>
      </div>
      <div className="py-6 grid grid-cols-10 gap-2 border-b border-green-500">
        <div className="col-span-3">
          <p>ঠিকানা: </p>
        </div>
        <div className="col-span-7">
          <p>তারাকান্দা, ময়মনসিংহ।</p>
        </div>
        <div className="col-span-3">
          <p>ফারেগ: </p>
        </div>
        <div className="col-span-7">
          <p>জামিয়া ইসলামিয়া পটিয়া, চট্টগ্রাম।</p>
        </div>
        <div className="col-span-3">
          <p>তাখাস্সুস: </p>
        </div>
        <div className="col-span-7">
          <p>ইসলামি আইন</p>
        </div>
        <div className="col-span-3">
          <p>ইমেইল: </p>
        </div>
        <div className="col-span-7">
          <p>maarashed40@gamil.com</p>
        </div>
        <div className="col-span-3">
          <p>মোবাইল: </p>
        </div>
        <div className="col-span-7">
          <p>+8801857685616</p>
        </div>
      </div>
    </>
  );
};

export default TeacherInfo;
