import TeachersSocialLinks from "./social-links";
import TeacherAvatar from "./teacher-avatar";
import TeacherInfo from "./teacher-info";
import AboutTeacher from "./about-teacher";

const TeacherCard = ({ teacher }) => {
  return (
    <div className="bg-white shadow lg:grid grid-cols-2 gap-4 p-6">
      <div className="lg:border-r lg:pr-2">
        <TeacherAvatar avatar={teacher.image} name={teacher.name} id={teacher.id} />
        <AboutTeacher aboutTeacher={teacher.about} />
      </div>
      <div className="p-6">
        <div>
          <TeacherInfo info={teacher} />
          <TeachersSocialLinks socialLinks={teacher.socials} />
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
