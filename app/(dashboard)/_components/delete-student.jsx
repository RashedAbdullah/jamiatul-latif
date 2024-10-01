"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function DeleteStudent({ name, onDelete }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="text-center col-span-2 my-5">
          <Button
            variant="destructive"
            type="submit"
            className="w-full py-3 text-white rounded-lg hover:bg-slate-700 transition-all"
          >
            তথ্য ডিলিট করুন
          </Button>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>আপনি কি শিওর?</AlertDialogTitle>
          <AlertDialogDescription>
            আপনি কি শিওর যে, <span className="text-red-500">{name}</span> এর সকল
            তথ্য ডিলিট করতে চান?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onDelete()} className="bg-red-500">
            ডিলেট
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
