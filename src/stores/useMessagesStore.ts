import { create } from "zustand";
import { Message } from "@/types/types";

type ChatStore = {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
};

const useMessagesStore = create<ChatStore>((set) => ({
  messages: [],
  setMessages: (messages) => set({ messages }),
}));
export default useMessagesStore;
