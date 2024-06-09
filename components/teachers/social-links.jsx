import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const TeachersSocialLinks = () => {
  return (
    <div className="flex justify-center align-middle items-center gap-5 text-2xl mt-6 text-green-500">
      <div>
        <a href="" target="_blnk">
          <FaFacebook />
        </a>
      </div>
      <div>
        <a href="">
          <FaTwitter />
        </a>
      </div>
      <div>
        <a href="">
          <FaTelegram />
        </a>
      </div>
    </div>
  );
};

export default TeachersSocialLinks;
