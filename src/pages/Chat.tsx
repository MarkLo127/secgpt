import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/providers/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, ArrowLeft, User, Seal } from "lucide-react";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

type FormData = {
  openaiKey: string;
  baseUrl: string;
  secApiKey: string;
  ticker: string;
  documentType: string;
};

const Chat = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      content: "I am SECGPT, an AI assistant specialized in analyzing SEC documents."
    }
  ]);
  const [formData, setFormData] = useState<FormData | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Check if we have the necessary data
  useEffect(() => {
    const storedData = sessionStorage.getItem("secgpt-analysis");
    if (!storedData) {
      toast({
        title: "Error",
        description: "Missing analysis configuration. Please complete the form.",
        variant: "destructive",
      });
      navigate("/analysis");
      return;
    }
    
    const parsedData = JSON.parse(storedData) as FormData;
    setFormData(parsedData);
    
    // Add initial assistant message
    setMessages(prev => [
      ...prev,
      {
        role: "assistant",
        content: `I'll help you analyze ${parsedData.documentType} documents for ${parsedData.ticker}. What would you like to know?`
      }
    ]);
  }, []);
  
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || loading || !formData) return;
    
    const userMessage: Message = {
      role: "user",
      content: input,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    
    try {
      // Simulate API call - in a real app, make actual API call to OpenAI and SEC API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate response
      const response: Message = {
        role: "assistant",
        content: `This is a simulated response for analyzing ${formData.documentType} documents for ${formData.ticker} based on your query: "${input}". In a real implementation, this would call the OpenAI API using your key and fetch SEC document data using the SEC API.`,
      };
      
      setMessages(prev => [...prev, response]);
    } catch (error) {
      console.error("Error processing request:", error);
      toast({
        title: t("chat.error"),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="max-w-4xl mx-auto flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBackToHome}
              className="mr-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold text-foreground">
              {formData ? `${formData.ticker} - ${formData.documentType}` : "SECGPT"}
            </h1>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 py-6 px-4 md:px-0">
              {messages.slice(1).map((message, index) => {
                const isUser = message.role === "user";
                return (
                  <div key={index} className={`w-full flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start gap-4 max-w-2xl ${isUser ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0`}>
                        {isUser ? (
                          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/20 text-primary">
                            <User className="h-6 w-6" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-secgpt-blue to-secgpt-accent">
                            <Seal className="h-6 w-6 text-white" />
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
              })}
              {loading && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-secgpt-blue to-secgpt-accent">
                    <Seal className="h-6 w-6 text-white" />
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
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
        
        {/* Input Form */}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Chat;
