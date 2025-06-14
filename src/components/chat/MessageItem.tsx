
import { User } from "lucide-react";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

interface MessageItemProps {
  message: Message;
  t: (key: string) => string;
}

const SEAL_ICON_URL = "https://images.unsplash.com/photo-1563897539352-870624131b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80";

const MessageItem = ({ message, t }: MessageItemProps) => {
  const isUser = message.role === "user";

  return (
    <div className={`w-full flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex items-start gap-4 max-w-2xl ${isUser ? 'flex-row-reverse' : ''}`}>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0`}>
          {isUser ? (
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/20 text-primary">
              <User className="h-6 w-6" />
            </div>
          ) : (
            <img
              src={SEAL_ICON_URL}
              alt="SECGPT Seal Icon"
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
        </div>
        <div className={`flex-1 pt-1.5 ${isUser ? 'text-right' : 'text-left'}`}>
          <p className="font-semibold text-foreground">
            {isUser ? t("chat.you") : "SECGPT"}
          </p>
          <p className="mt-1 text-foreground/90 whitespace-pre-wrap">
            {message.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
