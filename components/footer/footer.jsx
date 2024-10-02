import { getEngToBnNumber } from "@/utils/number-converter";

const Footer = () => {
  return (
    <footer className="py-20">
      <div className="flex justify-center items-center align-middle">
        <p className="text-sm text-gray-400">
          &copy; {getEngToBnNumber(new Date().getFullYear())} জমিয়াতুল লতিফ
          কতৃক স্বত্ত্ব সংরক্ষিত
        </p>
      </div>
    </footer>
  );
};

export default Footer;
