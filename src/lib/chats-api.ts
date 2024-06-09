import { Chat, Message } from "@/types/types";

const CHATS_FAKE_DATA: Chat[] = [
  { chat_name: "Conversation 1", chat_id: 1 },
  { chat_name: "Conversation 2", chat_id: 2 },
  { chat_name: "Conversation 3", chat_id: 3 },
];

const MESSAGES: { chat_id: number; messages: Message[] }[] = [
  {
    chat_id: 1,
    messages: [
      { message: "Hello! Whats Up?", type: "incoming" },
      { message: "Please do reply me", type: "incoming" },
      { message: "Busy! Will reply later!", type: "outgoing" },
    ],
  },
  {
    chat_id: 2,
    messages: [
      { message: "Are you coming to the meeting?", type: "incoming" },
      { message: "Yes, I'll be there in 10 minutes.", type: "outgoing" },
      { message: "Great! See you soon.", type: "incoming" },
    ],
  },
  {
    chat_id: 3,
    messages: [
      { message: "Happy Birthday!", type: "incoming" },
      { message: "Thank you so much!", type: "outgoing" },
      { message: "How are you celebrating?", type: "incoming" },
      {
        message: "Just a small party with friends and family.",
        type: "outgoing",
      },
    ],
  },
];

export async function getAllChats(): Promise<Chat[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CHATS_FAKE_DATA);
    }, 4000);
  });
}

export async function getMessagesById(chat_id: number): Promise<Message[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const chat = MESSAGES.find((chat) => chat.chat_id === chat_id);
      resolve(chat ? chat.messages : []);
    }, 4000);
  });
}
