
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/providers/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, ArrowLeft, FileText, User } from "lucide-react";

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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container py-6 flex flex-col">
        <div className="mb-4 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBackToHome}
            className="mr-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-semibold tech-text-gradient">
            {formData ? `${formData.ticker} - ${formData.documentType}` : "SECGPT"}
          </h1>
        </div>
        
        <div className="flex-1 glass-card overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.slice(1).map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[80%] ${
                      message.role === "user"
                        ? "flex-row-reverse"
                        : "flex-row"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.role === "user"
                          ? "bg-primary"
                          : "bg-secondary"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User className="h-5 w-5 text-primary-foreground" />
                      ) : (
                        <FileText className="h-5 w-5 text-secondary-foreground" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <FileText className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div className="p-3 rounded-lg bg-secondary text-secondary-foreground">
                      <div className="flex items-center gap-1">
                        <span className="animate-pulse">●</span>
                        <span className="animate-pulse delay-100">●</span>
                        <span className="animate-pulse delay-200">●</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <div className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                placeholder={t("chat.placeholder")}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={loading}>
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
