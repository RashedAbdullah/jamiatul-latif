import PageTitle from "@/components/page-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const AskFatwa = () => {
  return (
    <div className="container flex justify-center items-center align-middle">
      <form action="" className="w-96">
        <PageTitle>আপনার প্রশ্ন করুন</PageTitle>
        <div className="flex flex-col gap-5">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">আপনার নাম:</Label>
            <Input type="text" id="name" placeholder="আপনার নাম . . ." />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="address">আপনার ঠিকানা:</Label>
            <Input type="text" id="address" placeholder="আপনার ঠিকানা . . ." />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="number">মোবাইল নাম্বার:</Label>
            <Input type="text" id="number" placeholder="মোবাইল নাম্বার . . ." />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="question">আপনার প্রশ্ন:</Label>
            <Textarea placeholder="আপনার প্রশ্ন লিখুন . . ." id="question" />
          </div>
          <div>
            <Button type="submit">জমা দিন</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AskFatwa;
