import { Message } from "@/types/types";

export default function ChatWrite({
  messages,
  chatName,
}: {
  messages: Message[];
  chatName: string;
}) {
  return (
    <div className="flex-1 flex flex-col h-full">
      <section className="flex-1">
        {chatName && (
          <>
            <header className="bg-[#15ABFF] w-full py-2 px-3 flex items-center gap-3">
              <div className="flex items-center">
                <img src="/assets/person.png" alt="" />
              </div>
              <h4 className="text-white text-base">{chatName}</h4>
            </header>
            <article className="pt-9 pl-3 pr-4 w-full">
              <time className="inline-block text-center w-full pb-9">
                Jan 27, 12:53 PM
              </time>
            </article>
          </>
        )}
      </section>
    </div>
  );
}
