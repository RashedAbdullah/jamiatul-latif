import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const NavSearch = () => {
  return (
    <div className="lg:block flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="px-2 flex gap-20">
            <span className="text-gray-500">সার্চ করুন</span>
            <Search size={15} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">সার্চ করুন</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div>
              <Input placeholder="খুঁজুন" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NavSearch;
