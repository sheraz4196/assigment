import { Chat, Message, MessagesType } from "@/types/types";

const CHATS_FAKE_DATA: Chat[] = [
  { chat_name: "Conversation 1", chat_id: 1 },
  { chat_name: "Conversation 2", chat_id: 2 },
  { chat_name: "Conversation 3", chat_id: 3 },
  { chat_name: "Conversation 4", chat_id: 4 },
  { chat_name: "Conversation 5", chat_id: 5 },
  { chat_name: "Conversation 6", chat_id: 6 },
  { chat_name: "Conversation 7", chat_id: 7 },
  { chat_name: "Conversation 8", chat_id: 8 },
  { chat_name: "Conversation 9", chat_id: 9 },
  { chat_name: "Conversation 10", chat_id: 10 },
  { chat_name: "Conversation 11", chat_id: 11 },
  { chat_name: "Conversation 12", chat_id: 12 },
  { chat_name: "Conversation 13", chat_id: 13 },
  { chat_name: "Conversation 14", chat_id: 14 },
];

const MESSAGES: MessagesType[] = [
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
  {
    chat_id: 4,
    messages: [
      { message: "Hey, what's your plan for the weekend?", type: "incoming" },
      { message: "I'm thinking of going hiking.", type: "outgoing" },
      { message: "Sounds fun! Can I join?", type: "incoming" },
    ],
  },
  {
    chat_id: 5,
    messages: [
      { message: "Did you finish the report?", type: "incoming" },
      { message: "Not yet, I'm still working on it.", type: "outgoing" },
      {
        message: "Alright, let me know if you need any help.",
        type: "incoming",
      },
    ],
  },
  {
    chat_id: 6,
    messages: [
      { message: "Can we reschedule our meeting?", type: "incoming" },
      { message: "Sure, what time works for you?", type: "outgoing" },
      { message: "How about 3 PM?", type: "incoming" },
    ],
  },
  {
    chat_id: 7,
    messages: [
      { message: "Where are you?", type: "incoming" },
      { message: "I'm on my way.", type: "outgoing" },
      { message: "Okay, see you soon.", type: "incoming" },
    ],
  },
  {
    chat_id: 8,
    messages: [
      { message: "Do you have the project files?", type: "incoming" },
      { message: "Yes, I'll send them over.", type: "outgoing" },
      { message: "Thanks!", type: "incoming" },
    ],
  },
  {
    chat_id: 9,
    messages: [
      { message: "Happy Anniversary!", type: "incoming" },
      { message: "Thank you!", type: "outgoing" },
      { message: "How are you celebrating?", type: "incoming" },
    ],
  },
  {
    chat_id: 10,
    messages: [
      { message: "Let's catch up soon.", type: "incoming" },
      { message: "Definitely, how about this weekend?", type: "outgoing" },
      { message: "Perfect!", type: "incoming" },
    ],
  },
  {
    chat_id: 11,
    messages: [
      { message: "Did you watch the game last night?", type: "incoming" },
      { message: "Yes, it was amazing!", type: "outgoing" },
      { message: "I know, right?", type: "incoming" },
    ],
  },
  {
    chat_id: 12,
    messages: [
      { message: "What time is the meeting?", type: "incoming" },
      { message: "It's at 2 PM.", type: "outgoing" },
      { message: "Thanks!", type: "incoming" },
    ],
  },
  {
    chat_id: 13,
    messages: [
      { message: "Can you send me the files?", type: "incoming" },
      { message: "Sure, give me a minute.", type: "outgoing" },
      { message: "Thanks!", type: "incoming" },
    ],
  },
  {
    chat_id: 14,
    messages: [
      { message: "Do you want to grab lunch?", type: "incoming" },
      { message: "Sure, where?", type: "outgoing" },
      { message: "How about the new place downtown?", type: "incoming" },
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
