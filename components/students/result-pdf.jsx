"use client";

import { IoIosPrint } from "react-icons/io";
import axios from "axios";
const GetResultPdf = ({ studentData }) => {
  const handleDownload = async () => {

    try {
      const response = await axios.post("/api/generate-pdf", studentData, {
        responseType: "blob", // Important
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "result.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="flex justify-end ">
      <button
        onClick={handleDownload}
        className="flex justify-center items-center align-middle gap-2 bg-slate-800 text-white py-1 px-3 shadow-md"
      >
        <IoIosPrint />
        প্রিন্ট করুন
      </button>
    </div>
  );
};

export default GetResultPdf;
