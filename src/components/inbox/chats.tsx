import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import ChatWrite from "./chat-write";
import { getAllChats, getMessagesById } from "@/lib/chats-api";
import { Chat } from "@/types/types";
import Spinner from "../general/spinner";
import { cn } from "@/lib/utils";
import DeleteModal from "./delete-modal";
import useMessagesStore from "@/stores/useMessagesStore";

export default function Chats({
  className,
  hideWriter = false,
}: {
  className?: string;
  hideWriter?: boolean;
}) {
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState<number>();
  const [chatName, setChatName] = useState<string>();
  const [chatLoading, setChatsLoading] = useState(false);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const { setMessages } = useMessagesStore();
  useEffect(() => {
    async function fetchChats() {
      setChatsLoading(true);
      const chatData = await getAllChats();
      setChats(chatData);
      setChatsLoading(false);
    }
    fetchChats();
  }, []);

  const handleChatClick = async (chatId: number) => {
    setMessagesLoading(true);
    setActiveChat(chatId);
    const chatMessages = await getMessagesById(chatId);
    setMessages(chatMessages);
    setMessagesLoading(false);
  };

  const handleDeleteChat = (chatId: number) => {
    setChats((prevChats) =>
      prevChats.filter((chat) => chat.chat_id !== chatId)
    );
    setMessages([]);
    setChatName("");
  };

  return (
    <>
      <div
        className={cn("w-[303px] lg:w-96 h-full hidden lg:block", className)}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between pr-2.5 pl-5 py-4 bg-[#15ABFF] rounded-md mb-1.5 cursor-pointer">
            <Button className="bg-[#15ABFF] hover:bg-[#15ABFF]">
              Conversations
            </Button>
            <span className="text-white h-6 w-6 inline-block">+</span>
          </div>

          <ol className="flex flex-col gap-1.5 lg:2.5 bg-white lg:bg-[#F8F9FA] shadow-header rounded-md border flex-1 overflow-y-auto">
            {chatLoading && <Spinner />}
            {!chatLoading && chats.length ? (
              chats.map((chat) => (
                <li
                  key={chat.chat_id}
                  className={cn(
                    "flex justify-between pr-2.5 pl-5 py-4 rounded-md max-w-full",
                    chat.chat_id === activeChat
                      ? "bg-[#6D31ED] text-white"
                      : "text-black bg-[#DEE1E6] lg:bg-[#DDF3FF]"
                  )}
                >
                  <Button
                    className="bg-transparent hover:bg-transparent text-current"
                    onClick={() => {
                      handleChatClick(chat.chat_id);
                      setChatName(chat.chat_name);
                    }}
                  >
                    {chat.chat_name}
                  </Button>
                  <DeleteModal
                    chatName={chat.chat_name}
                    onYes={() => handleDeleteChat(chat.chat_id)}
                    chatId={chat.chat_id}
                  />
                </li>
              ))
            ) : (
              <p>No Conversations!!</p>
            )}
          </ol>
        </div>
      </div>
      {!hideWriter && (
        <ChatWrite chatName={chatName as string} loading={messagesLoading} />
      )}
    </>
  );
}
