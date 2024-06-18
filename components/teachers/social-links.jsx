import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const TeachersSocialLinks = ({ socialLinks }) => {
  return (
    <div className="flex justify-center align-middle items-center gap-5 text-2xl mt-6 text-green-500">
      {socialLinks.map((link, ind) => (
        <div key={ind}>
          <a href={link.link} target="_blnk">
            {link.name === "facebook" ? (
              <FaFacebook />
            ) : link.name === "twitter" ? (
              <FaTwitter />
            ) : (
              <FaTelegram />
            )}
          </a>
        </div>
      ))}
    </div>
  );
};

export default TeachersSocialLinks;
