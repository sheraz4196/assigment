export default function ChatWrite({ messages }: { messages: unknown }) {
  return (
    <div>
      <pre>{JSON.stringify(messages)}</pre>
    </div>
  );
}
