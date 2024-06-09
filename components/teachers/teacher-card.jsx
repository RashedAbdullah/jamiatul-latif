import TeachersSocialLinks from "./social-links";
import TeacherAvatar from "./teacher-avatar";
import TeacherInfo from "./teacher-info";
import AboutTeacher from "./about-teacher";

const TeacherCard = () => {
  return (
    <div className="bg-white shadow lg:grid grid-cols-2 gap-4 p-6">
      <div className="lg:border-r lg:pr-2">
        <TeacherAvatar />
        <AboutTeacher />
      </div>
      <div className="p-6">
        <div>
          <TeacherInfo />
          <TeachersSocialLinks />
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
