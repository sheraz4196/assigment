import { cn } from "@/lib/utils";
import { Message } from "@/types/types";

export default function MessagePill({ message, type }: Message) {
  return (
    <div className="flex">
      <div className={cn("", type === "outgoing" ? "ml-auto" : "")}>
        <div className="max-w-max flex items-center gap-5">
          <div className={cn("", type === "incoming" ? "order-1" : "order-2")}>
            <img src="/assets/person.png" alt="" />
          </div>
          <div
            className={cn(
              " px-5 py-2 text-sm rounded-[18px]",
              type === "incoming"
                ? " order-2 bg-[#F0F9FF] text-[#15ABFF]"
                : "order-1 bg-[#6D31ED] text-white"
            )}
          >
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}
