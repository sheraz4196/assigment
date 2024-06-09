export type Chat = {
  chat_name: string;
  chat_id: number;
};

export type Message = {
  message: string;
  type: "incoming" | "outgoing";
};
