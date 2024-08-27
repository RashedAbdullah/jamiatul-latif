import Image from "next/image";
import Link from "next/link";
import NavTitle from "./nav-title";

const UserProfile = ({ lang = "bn", user }) => {
  return (
    <div>
      <div className="">
        <Link
          href={`/${lang}/dashboard`}
          className="flex items-center gap-2 ml-4 p-1"
        >
          <p className="py-2 lg:px-4 px-6 w-full relative flex items-center space-x-2 transition duration-300 cursor-pointer bg-primary text-white hover:bg-slate-900">
            ড্যাশবোর্ড
          </p>
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
