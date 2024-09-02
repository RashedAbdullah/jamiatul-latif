import Image from "next/image";
import Link from "next/link";
import { GrUserManager } from "react-icons/gr";

const TeacherAvatar = ({ lang = "bn", avatar, name, id }) => {
  return (
    <div className="flex justify-center my-2">
      <Link href={`/${lang}/teachers/${id}`}>
        {avatar ? (
          <Image
            src={avatar}
            alt="user avatar"
            height={400}
            width={400}
            className="rounded-full h-52 w-52"
          />
        ) : (
          <GrUserManager className="h-44 w-44 hover:text-slate-800 transition-all duration-300" />
        )}
      </Link>
    </div>
  );
};

export default TeacherAvatar;
