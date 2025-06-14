
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/providers/LanguageProvider";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatHeader from "@/components/chat/ChatHeader";
import MessageList from "@/components/chat/MessageList";
import ChatInput from "@/components/chat/ChatInput";

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
        <ChatHeader
          ticker={formData?.ticker}
          documentType={formData?.documentType}
          onBack={handleBackToHome}
        />

        <MessageList
          messages={messages}
          loading={loading}
          messagesEndRef={messagesEndRef}
          t={t}
        />
        
        <ChatInput
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          loading={loading}
          t={t}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Chat;
