"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const SelectDropdown = ({ categories }) => {
  const router = useRouter();

  const handleCategoryChange = (categoryId) => {
    // Navigate to the dynamic route using the selected categoryId
    router.push(`/darul-ifta/${categoryId}`);
  };

  return (
    <div className="flex justify-center">
      <Select name="category" onValueChange={handleCategoryChange}>
        <SelectTrigger className="min-w-[200px]">
          <SelectValue placeholder="ফতোয়া ক্যাটাগরি সিলেক্ট করুন" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>ফতোয়া ক্যাটাগরি সিলেক্ট করুন</SelectLabel>
            {categories.map((category) => (
              <SelectItem key={category._id} value={category._id}>
                {category.category}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectDropdown;
