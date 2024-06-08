import { getAllChats } from "@/lib/chats-api";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function Chats() {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    async function fetchChats() {
      const chatData = await getAllChats();
      setChats(chatData as []);
    }

    fetchChats();
  }, []);

  return (
    <div className="w-96 h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between pr-2.5 pl-5 py-4 bg-[#15ABFF] rounded-md mb-1.5 cursor-pointer">
          <Button className="bg-[#15ABFF] hover:bg-[#15ABFF]">
            Conversations
          </Button>
          <span className="text-white h-6 w-6 inline-block">+</span>
        </div>
        <ol className="flex flex-col gap-1.5 lg:2.5 bg-[#F8F9FA] shadow-header rounded-md border flex-1">
          {chats?.length &&
            chats.map((chat, index) => (
              <li
                key={index}
                className="flex justify-between pr-2.5 pl-5 py-4 bg-[#6D31ED] rounded-md"
              >
                <Button className="bg-[#6D31ED] hover:bg-[#6D31ED]">
                  {chat.chat_name}
                </Button>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}
