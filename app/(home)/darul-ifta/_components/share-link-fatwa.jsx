"use client";

import { useState } from "react";
import { ClipboardCheckIcon, ClipboardIcon } from "lucide-react";

const CopyLinkButton = ({ fatwaId , categoryId}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    const fatwaLink = `${window.location.origin}/darul-ifta/${categoryId}/${fatwaId}`;
    navigator.clipboard.writeText(fatwaLink).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopyLink}
      className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
    >
      {isCopied ? (
        <>
          <ClipboardCheckIcon className="w-5 h-5 text-green-600" />
          লিঙ্ক কপি হয়েছে
        </>
      ) : (
        <>
          <ClipboardIcon className="w-5 h-5" />
          লিঙ্ক কপি করুন
        </>
      )}
    </button>
  );
};

export default CopyLinkButton;
