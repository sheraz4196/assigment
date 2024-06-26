import MessagePill from "./message";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Spinner from "../general/spinner";
import ChatsMobile from "./chats-mobile";
import useMessagesStore from "@/stores/useMessagesStore";

export default function ChatWrite({
  chatName,
  loading,
}: {
  chatName: string;
  loading: boolean;
}) {
  const [newMessage, setNewMessage] = useState("");
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const { messages, setMessages } = useMessagesStore();
  useEffect(() => {
    // Scroll to the bottom of the message container when messages change
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages([...messages, { message: newMessage, type: "outgoing" }]);
    setNewMessage("");
  };

  return (
    <div className="flex-1 flex flex-col h-full gap-2.5">
      <section className="flex-1 shadow-md flex flex-col">
        <header className="bg-[#15ABFF] w-full py-2 px-3  flex items-center justify-between h-[58px] rounded-[4px]">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <img src="/assets/person.png" alt="" />
            </div>
            <h4 className="text-white text-base">
              {chatName || "Click on chats to show messages"}
            </h4>
          </div>
          <ChatsMobile />
        </header>
        <article
          ref={messageContainerRef}
          className="pt-9 pl-3 pr-4 w-full overflow-y-auto h-[65vh]"
        >
          <ol className="flex flex-col gap-5 h-full">
            {loading && <Spinner />}
            {!loading && messages?.length ? (
              <time className="inline-block text-center w-full pb-9">
                Jan 27, 12:53 PM
              </time>
            ) : (
              <p></p>
            )}
            {!loading &&
              messages?.map((message, index) => (
                <MessagePill
                  key={index}
                  message={message.message}
                  type={message.type}
                />
              ))}
          </ol>
        </article>
      </section>
      <form className="relative h-[73px]" onSubmit={handleSubmit}>
        <Input
          className="w-full h-full shadow-sm rounded-[37px] pl-9"
          required
          value={newMessage}
          placeholder={`Reply to ${chatName || ""}`}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-[#6D31ED] rounded-full h-[43px] w-[43px]"
          type="submit"
        >
          <Send className="h-6 w-6 text-white" />
        </Button>
      </form>
    </div>
  );
}
