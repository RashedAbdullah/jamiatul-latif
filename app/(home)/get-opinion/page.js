import PageTitle from "@/components/page-title";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { opinionModel } from "@/models/opinion-model";

const GetOpinion = () => {
  const handleGetingOpinion = async (event) => {
    "use server";

    try {
      await opinionModel.create({
        name: event.get("name"),
        address: event.get("address"),
        phone: event.get("number"),
        opinion: event.get("opinion"),
      });

      toast("আপনার মতামত নেওয়া হয়েছে।", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="container flex justify-center items-center align-middle">
      <form action={handleGetingOpinion} className="w-96">
        <PageTitle>আপনার মতামত</PageTitle>
        <div className="flex flex-col gap-5">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">আপনার নাম:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="আপনার নাম . . ."
              required
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="address">আপনার ঠিকানা:</Label>
            <Input
              type="text"
              id="address"
              name="address"
              placeholder="আপনার ঠিকানা . . ."
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="number">মোবাইল নাম্বার:</Label>
            <Input
              type="text"
              id="number"
              name="number"
              placeholder="মোবাইল নাম্বার . . ."
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="question">আপনার মতামত:</Label>
            <Textarea
              placeholder="আপনার মতামত দিন . . ."
              id="opinion"
              name="opinion"
              required
            />
          </div>
          <div>
            <Button type="submit">জমা দিন</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GetOpinion;
