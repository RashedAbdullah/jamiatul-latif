import Image from "next/image";
import Link from "next/link";
import NavTitle from "./nav-title";

const UserProfile = ({ lang = "bn", user }) => {
  return (
    <div>
      <div className="">
        {user ? (
          <Link
            href={`/${lang}/user/${user?.name?.replaceAll(" ", "_")}`}
            className="flex items-center gap-2 ml-4 p-1"
          >
            {user?.iamge ? (
              <div>
                <Image
                  src={user?.iamge}
                  alt="user avatar"
                  height={400}
                  width={400}
                  className="rounded-full h-10 w-10"
                />
              </div>
            ) : (
              <p className="py-2 lg:px-4 px-6 w-full relative flex items-center space-x-2 text-green-500 border-b transition duration-300 cursor-pointer bg-white hover:bg-green-500 hover:text-white">
                {user.name}
              </p>
            )}
          </Link>
        ) : (
          <NavTitle
            router={`/${lang}/signin`}
            className="flex items-center gap-2 ml-4 p-1 h-full w-full"
          >
            লগইন
          </NavTitle>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
