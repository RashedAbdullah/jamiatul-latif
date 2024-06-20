const StudentInfo = ({ student }) => {
  return (
    <div className="grid grid-cols-10 gap-1">
      <div className="col-span-3">
        <h2>নাম: </h2>
      </div>
      <div className="col-span-7">
        <h2>{student.name}</h2>
      </div>
      <div className="col-span-3">
        <h2>পিতা: </h2>
      </div>
      <div className="col-span-7">
        <h2>{student.father}</h2>
      </div>
      <div className="col-span-3">
        <h2>ক্লাস: </h2>
      </div>
      <div className="col-span-7">
        <h2>{student.class}</h2>
      </div>
      <div className="col-span-3">
        <h2>ঠিকানা: </h2>
      </div>
      <div className="col-span-7">
        <h2>{student.address}</h2>
      </div>
      <div className="col-span-3">
        <h2>মোবাইল: </h2>
      </div>
      <div className="col-span-7">
        <h2>{student.phone}</h2>
      </div>
    </div>
  );
};

export default StudentInfo;
