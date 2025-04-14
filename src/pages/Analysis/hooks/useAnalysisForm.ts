
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { FormData } from "../types";

export const useAnalysisForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<FormData>({
    openaiKey: "",
    baseUrl: "",
    secApiKey: "",
    ticker: "",
    documentType: "",
    file: null,
  });
  
  const [activeTab, setActiveTab] = useState<string>("api");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDocTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, documentType: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const validateFormData = (): boolean => {
    // Common validation for both tabs
    if (!formData.openaiKey) {
      toast({
        title: "Error",
        description: "OpenAI API key is required",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.documentType) {
      toast({
        title: "Error",
        description: "Document type is required",
        variant: "destructive",
      });
      return false;
    }
    
    // Tab-specific validation
    if (activeTab === "api") {
      if (!formData.secApiKey) {
        toast({
          title: "Error",
          description: "SEC API key is required",
          variant: "destructive",
        });
        return false;
      }
      
      if (!formData.ticker) {
        toast({
          title: "Error",
          description: "Stock ticker is required",
          variant: "destructive",
        });
        return false;
      }
    } else {
      if (!formData.file) {
        toast({
          title: "Error",
          description: "Please upload a file",
          variant: "destructive",
        });
        return false;
      }
    }
    
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateFormData()) {
      return;
    }
    
    // Store form data in session storage (never in local storage for API keys)
    sessionStorage.setItem("secgpt-analysis", JSON.stringify({
      ...formData,
      file: null, // Don't store the file in session storage
    }));
    
    // Handle file upload if needed
    if (activeTab === "upload" && formData.file) {
      console.log("Uploading file:", formData.file.name);
      
      toast({
        title: "Success",
        description: `File ${formData.file.name} uploaded`,
      });
    }
    
    // Navigate to chat page
    navigate("/chat");
  };

  return {
    formData,
    activeTab,
    setActiveTab,
    handleChange,
    handleDocTypeChange,
    handleFileChange,
    handleSubmit,
  };
};
