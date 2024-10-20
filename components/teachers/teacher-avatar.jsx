import Link from "next/link";
import { GrUserManager } from "react-icons/gr";

const TeacherAvatar = ({ avatar, id }) => {
  return (
    <div className="flex justify-center my-2">
      <Link href={`/teachers/${id}`}>
        {avatar ? (
          <div
            className={`h-[230px] w-[230px] bg-cover bg-no-repeat bg-center flex justify-center items-end`}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
        ) : (
          <GrUserManager className="h-44 w-44 hover:text-slate-800 transition-all duration-300" />
        )}
      </Link>
    </div>
  );
};

export default TeacherAvatar;
