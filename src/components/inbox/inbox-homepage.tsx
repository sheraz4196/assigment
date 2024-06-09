import Chats from "./chats";

export default function InboxHomepage() {
  return (
    <section className="pt-9 pl-6 pr-2 pb-6 flex items-center h-[90vh] overflow-hidden gap-8">
      <Chats />
    </section>
  );
}
