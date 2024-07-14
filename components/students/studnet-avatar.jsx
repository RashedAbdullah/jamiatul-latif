import Image from "next/image";
import { PiStudent } from "react-icons/pi";

const StudentAvatar = ({ avatar }) => {
  return (
    <div className="flex justify-center my-4">
      {avatar ? (
        <Image
          src={avatar}
          alt="user avatar"
          height={400}
          width={400}
          className="rounded-full h-40 w-40"
        />
      ) : (
        <div className="rounded-full h-40 w-40 overflow-hidden">
          <PiStudent className="h-full w-full text-slate-800" />
        </div>
      )}
    </div>
  );
};

export default StudentAvatar;
