
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  t: (key: string) => string;
}

const ChatInput = ({ input, setInput, handleSubmit, loading, t }: ChatInputProps) => {
  return (
    <div className="p-4 border-t bg-background">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <Input
            placeholder={t("chat.placeholder")}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            className="w-full rounded-full py-6 pl-5 pr-16 bg-muted border-none focus-visible:ring-1 focus-visible:ring-primary/50 shadow-sm"
          />
          <Button type="submit" size="icon" disabled={loading} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full w-9 h-9">
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;
