const AboutTeacher = ({ aboutTeacher }) => {
  return (
    <div className="lg:block hidden">
      <h2 className="text-center text-2xl font-bold mt-6">শিক্ষক সম্পর্কে</h2>
      <div>
        <p>{aboutTeacher}</p>
      </div>
    </div>
  );
};

export default AboutTeacher;
