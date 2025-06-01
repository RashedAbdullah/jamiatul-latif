"use client";

import { useState } from "react";
import { ClipboardCheck, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CopyLinkButton = ({ fatwaId, categoryId }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyLink = () => {
    const fatwaLink = `${window.location.origin}/darul-ifta/${categoryId}/${fatwaId}`;
    navigator.clipboard
      .writeText(fatwaLink)
      .then(() => {
        setIsCopied(true);
        toast({
          title: "লিঙ্ক কপি হয়েছে",
          description: "ফতোয়ার লিঙ্ক ক্লিপবোর্ডে কপি করা হয়েছে",
          duration: 2000,
        });
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(() => {
        toast({
          title: "ত্রুটি",
          description: "লিঙ্ক কপি করতে সমস্যা হয়েছে",
          variant: "destructive",
        });
      });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopyLink}
      className="gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
    >
      {isCopied ? (
        <>
          <ClipboardCheck className="h-4 w-4 text-green-600" />
          <span>কপি হয়েছে</span>
        </>
      ) : (
        <>
          <Clipboard className="h-4 w-4" />
          <span>লিঙ্ক কপি করুন</span>
        </>
      )}
    </Button>
  );
};

export default CopyLinkButton;
