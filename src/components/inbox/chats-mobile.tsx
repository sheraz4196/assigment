import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Chats from "./chats";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export default function ChatsMobile() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button className="bg-transparent block lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <Chats className="!block" />
      </DrawerContent>
    </Drawer>
  );
}
