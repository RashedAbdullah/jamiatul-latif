import { getEngToBnNumber } from "@/utils/number-converter";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 text-gray-400">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-10">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              আমাদের সম্পর্কে
            </h3>
            <p className="text-sm">
              জমিয়াতুল লতিফ রূপগঞ্জ মাদরাসা, ধর্মীয় শিক্ষার এক বিশ্বস্ত
              প্রতিষ্ঠান। এখানে আপনি পাবেন কুরআন, হাদিস ও অন্যান্য ইসলামী
              শিক্ষার পূর্ণাঙ্গ ব্যবস্থা।
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">নেভিগেশনস</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  হোম
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  যোগাযোগ
                </Link>
              </li>
              <li>
                <a href="/about-madrasha" className="hover:underline">
                  আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  প্রাইভেসি পলিসি
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">যোগাযোগ</h3>
            <p className="text-sm">
              জমিয়াতুল লতিফ রূপগঞ্জ মাদরাসা
              <br />
              রূপগঞ্জ, নারায়ণগঞ্জ, বাংলাদেশ
              <br />
              ফোন: +880 01810 445 445
              <br />
              ইমেইল: info@jamiatul-latif.com
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                target="_blank"
                href="https://www.facebook.com/jamiatullatifrupganj"
                className="text-white hover:text-blue-500"
              >
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@alqasimbd"
                className="text-white hover:text-red-500"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="pt-10 text-center text-sm">
          <p>
            &copy; {getEngToBnNumber(new Date().getFullYear())} জমিয়াতুল লতিফ
            কতৃক স্বত্ত্ব সংরক্ষিত
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
