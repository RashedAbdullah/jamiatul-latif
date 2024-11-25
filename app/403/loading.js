import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-4 md:p-8 lg:p-12 min-h-screen">
      {/* Main Skeleton Element */}
      <Skeleton className="h-[150px] w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] rounded-xl" />

      {/* Text Skeleton Elements */}
      <div className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] space-y-3">
        <Skeleton className="h-4 w-5/6 rounded-md" />
        <Skeleton className="h-4 w-2/3 rounded-md" />
      </div>
    </div>
  );
};

export default LoadingPage;
