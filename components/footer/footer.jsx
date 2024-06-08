import Link from "next/link";
import MadrashaLogo from "../headers/logo";

const Footer = ({ lang = "bn" }) => {
  return (
    <footer className="bg-[#22c55e] text-white py-1">
      <div className="mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Title */}
          <MadrashaLogo />

          {/* Navigation Links */}
          <div className="p-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.564571608182!2d90.51337447518671!3d23.72723867868624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b79802de7ed7%3A0x4d4391adb0703208!2zSmFtaWF0dWwgTGF0aWYgTWFkcmFzYS_gppzgpr7gpq7gpr_gpq_gprzgpr7gpqTgp4HgprIg4Kay4Kak4Ka_4KarIOCmruCmvuCmpuCmsOCmvuCmuOCmvg!5e0!3m2!1sen!2sbd!4v1717868237689!5m2!1sen!2sbd"
              width="600"
              height="450"
              style={{ height: "100px", margin: "10px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a
              href="https://www.facebook.com/jamiatullatifrupganj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6 fill-current text-white hover:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.334C0 23.403.597 24 1.325 24H12.82V14.708H9.692V11.333h3.128V8.579c0-3.104 1.895-4.794 4.661-4.794 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.31h3.587l-.467 3.375h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.333V1.333C24 .598 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 fill-current text-white hover:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.94 4.94 0 0 0 2.163-2.725 9.865 9.865 0 0 1-3.127 1.195 4.927 4.927 0 0 0-8.384 4.49A13.978 13.978 0 0 1 1.671 3.149a4.927 4.927 0 0 0 1.523 6.573 4.904 4.904 0 0 1-2.23-.615v.062a4.926 4.926 0 0 0 3.95 4.827 4.935 4.935 0 0 1-2.224.085 4.928 4.928 0 0 0 4.6 3.42A9.896 9.896 0 0 1 .96 19.548a13.935 13.935 0 0 0 7.548 2.211c9.055 0 14-7.498 14-13.986 0-.21-.005-.42-.015-.63A9.935 9.935 0 0 0 24 4.59a9.868 9.868 0 0 1-2.847.775 4.932 4.932 0 0 0 2.163-2.726z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6 fill-current text-white hover:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20.451 20.451h-3.923v-5.569c0-1.328-.027-3.039-1.855-3.039-1.856 0-2.14 1.45-2.14 2.947v5.661H8.61V9h3.763v1.561h.053c.522-.988 1.799-2.032 3.704-2.032 3.96 0 4.694 2.605 4.694 5.994v6.928zM4.516 7.433c-1.261 0-2.284-1.025-2.284-2.286s1.023-2.285 2.284-2.285 2.285 1.023 2.285 2.285-1.024 2.286-2.285 2.286zm2.023 13.018H2.493V9h4.046v11.451zM22.225 0H1.771C.79 0 0 .771 0 1.721v20.558C0 23.229.79 24 1.771 24h20.451C23.205 24 24 23.229 24 22.279V1.721C24 .771 23.205 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mx-10 mt-5 text-center md:text-left">
          <p className="text-sm text-gray-200 ">
            &copy; {new Date().getFullYear()} Jamiatul Latif. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
