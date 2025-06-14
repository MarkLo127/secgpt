
import MessageItem from "./MessageItem";
import LoadingIndicator from "./LoadingIndicator";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

interface MessageListProps {
  messages: Message[];
  loading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  t: (key: string) => string;
}

const MessageList = ({ messages, loading, messagesEndRef, t }: MessageListProps) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 py-6 px-4 md:px-0">
          {messages.slice(1).map((message, index) => (
            <MessageItem key={index} message={message} t={t} />
          ))}
          {loading && <LoadingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
};

export default MessageList;
