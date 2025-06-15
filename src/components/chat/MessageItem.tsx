
import { User, Cat } from "lucide-react";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

interface MessageItemProps {
  message: Message;
  t: (key: string) => string;
}

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
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-muted text-muted-foreground">
              <Cat className="w-6 h-6" />
            </div>
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
