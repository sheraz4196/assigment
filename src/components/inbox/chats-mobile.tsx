import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Chats from "./chats";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export default function ChatsMobile() {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <Button className="bg-transparent block lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="absolute -top-24 h-screen left-0 max-w-max">
        <Chats className="!block" hideWriter />
      </DrawerContent>
    </Drawer>
  );
}
