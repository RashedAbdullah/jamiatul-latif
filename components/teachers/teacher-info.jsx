const TeacherInfo = ({ info }) => {
  return (
    <>
      <div className="text-center py-6 border-b border-slate-800">
        <h2 className="font-semibold text-xl">{info.name}</h2>
        <p>{info.post}</p>
      </div>
      <div className="py-6 grid grid-cols-10 gap-2 border-b border-slate-800">
        <div className="col-span-3">
          <p>ঠিকানা: </p>
        </div>
        <div className="col-span-7">
          <p>{info.address}</p>
        </div>
        <div className="col-span-3">
          <p>ফারেগ: </p>
        </div>
        <div className="col-span-7">
          <p>{info.masters}</p>
        </div>
        <div className="col-span-3">
          <p>তাখাস্সুস: </p>
        </div>
        <div className="col-span-7">
          <p>{info.degree}</p>
        </div>
        <div className="col-span-3">
          <p>ইমেইল: </p>
        </div>
        <div className="col-span-7">
          <p>{info.email}</p>
        </div>
        <div className="col-span-3">
          <p>মোবাইল: </p>
        </div>
        <div className="col-span-7">
          <p>{info.number}</p>
        </div>
      </div>
    </>
  );
};

export default TeacherInfo;
