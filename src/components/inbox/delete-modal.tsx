import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

export default function DeleteModal({ chatName }: { chatName: string }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Trash2 className="h-6 w-6 text-white" />
      </DialogTrigger>
      <DialogContent className="lg:w-[556px]">
        <DialogHeader className="flex justify-center items-center mb-9">
          <DialogTitle className="text-[22px] text-center max-w-[308px]">
            Are you absolutely sure you want to delete {chatName}
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-[150px]">
            <DialogClose>
              <Button className="bg-[#DDF3FF] hover:bg-[#DDF3FF] text-black w-[116px] rounded-2xl">
                No
              </Button>
            </DialogClose>
            <Button className="w-[116px] rounded-2xl bg-[#FF0000] hover:bg-[#FF0000]">
              Yes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
