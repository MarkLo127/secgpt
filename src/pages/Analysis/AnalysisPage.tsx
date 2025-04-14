
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/providers/LanguageProvider";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Globe, Upload } from "lucide-react";
import ApiInputForm from "./components/ApiInputForm";
import FileUploadForm from "./components/FileUploadForm";
import { FormData } from "./types";

const AnalysisPage = () => {
  const { t } = useLanguage();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeTab === "api") {
      // API validation
      if (!formData.openaiKey) {
        toast({
          title: "錯誤",
          description: "需要 OpenAI API 金鑰",
          variant: "destructive",
        });
        return;
      }
      
      if (!formData.secApiKey) {
        toast({
          title: "錯誤",
          description: "需要 SEC API 金鑰",
          variant: "destructive",
        });
        return;
      }
      
      if (!formData.ticker) {
        toast({
          title: "錯誤",
          description: "需要股票代號",
          variant: "destructive",
        });
        return;
      }
      
      if (!formData.documentType) {
        toast({
          title: "錯誤",
          description: "需要文件類型",
          variant: "destructive",
        });
        return;
      }
    } else {
      // File upload validation
      if (!formData.openaiKey) {
        toast({
          title: "錯誤",
          description: "需要 OpenAI API 金鑰",
          variant: "destructive",
        });
        return;
      }
      
      if (!formData.file) {
        toast({
          title: "錯誤",
          description: "請上傳一個文件",
          variant: "destructive",
        });
        return;
      }
      
      if (!formData.documentType) {
        toast({
          title: "錯誤",
          description: "需要文件類型",
          variant: "destructive",
        });
        return;
      }
    }
    
    // Store form data in session storage (never in local storage for API keys)
    sessionStorage.setItem("secgpt-analysis", JSON.stringify({
      ...formData,
      file: null, // Don't store the file in session storage
    }));
    
    // Handle file upload if needed
    if (activeTab === "upload" && formData.file) {
      // In a real application, you would upload the file to your server here
      console.log("Uploading file:", formData.file.name);
      
      // For demo purposes, just show a success message
      toast({
        title: "成功",
        description: `文件 ${formData.file.name} 已上傳`,
      });
    }
    
    // Navigate to chat page
    navigate("/chat");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container py-12 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tech-text-gradient animate-fade-in">
              {t("analysis.title")}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in">
              {t("analysis.subtitle")}
            </p>
          </div>
          
          <Card className="glass-card shadow-lg border-opacity-50 animate-slide-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-secgpt-accent" />
                {t("analysis.title")}
              </CardTitle>
              <CardDescription>
                {t("analysis.subtitle")}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="api" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="api" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    API 獲取文件
                  </TabsTrigger>
                  <TabsTrigger value="upload" className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    上傳文件
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="api">
                  <ApiInputForm 
                    formData={formData} 
                    handleChange={handleChange} 
                    handleDocTypeChange={handleDocTypeChange} 
                    handleSubmit={handleSubmit} 
                  />
                </TabsContent>
                
                <TabsContent value="upload">
                  <FileUploadForm 
                    formData={formData} 
                    handleChange={handleChange} 
                    handleDocTypeChange={handleDocTypeChange} 
                    handleFileChange={handleFileChange} 
                    handleSubmit={handleSubmit} 
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
            
            <CardFooter className="flex justify-end pt-4">
              <Button 
                onClick={handleSubmit} 
                className="w-full md:w-auto transition-all hover:scale-105 bg-gradient-to-r from-secgpt-blue to-secgpt-accent hover:shadow-lg group"
              >
                {t("analysis.submit")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
          
          <div className="mt-6 text-center text-sm text-muted-foreground animate-fade-in">
            <p>所有 API 密鑰都安全地存儲在您的瀏覽器的會話存儲中，永遠不會發送到我們的服務器。</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AnalysisPage;
