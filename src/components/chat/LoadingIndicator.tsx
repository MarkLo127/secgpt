import { Bot } from "lucide-react";

const SEAL_ICON_URL = "https://images.unsplash.com/photo-1563897539352-870624131b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80";

const LoadingIndicator = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-muted text-muted-foreground">
                <Bot className="w-6 h-6" />
            </div>
            <div className="flex-1 pt-1.5">
                <p className="font-semibold text-foreground">SECGPT</p>
                <div className="mt-2 flex items-center gap-2 text-foreground/90">
                    <span className="h-2 w-2 bg-current rounded-full animate-pulse"></span>
                    <span className="h-2 w-2 bg-current rounded-full animate-pulse [animation-delay:200ms]"></span>
                    <span className="h-2 w-2 bg-current rounded-full animate-pulse [animation-delay:400ms]"></span>
                </div>
            </div>
        </div>
    );
};

export default LoadingIndicator;
