
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface ChatHeaderProps {
  ticker?: string;
  documentType?: string;
  onBack: () => void;
}

const ChatHeader = ({ ticker, documentType, onBack }: ChatHeaderProps) => {
  return (
    <div className="p-4 border-b">
      <div className="max-w-4xl mx-auto flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-foreground">
          {ticker && documentType ? `${ticker} - ${documentType}` : "SECGPT"}
        </h1>
      </div>
    </div>
  );
};

export default ChatHeader;
