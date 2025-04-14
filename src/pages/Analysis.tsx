
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/providers/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Key, Lock, Globe, BarChart3, FileText, Upload } from "lucide-react";

type FormData = {
  openaiKey: string;
  baseUrl: string;
  secApiKey: string;
  ticker: string;
  documentType: string;
  file: File | null;
};

const Analysis = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
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
  
  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      {/* API Key Section */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="openaiKey" className="flex items-center gap-2">
                            <Key className="h-4 w-4 text-secgpt-accent" />
                            {t("analysis.openai.label")}
                          </Label>
                          <Input
                            id="openaiKey"
                            name="openaiKey"
                            type="password"
                            placeholder={t("analysis.openai.placeholder")}
                            value={formData.openaiKey}
                            onChange={handleChange}
                            className="transition-all focus:ring-2 focus:ring-secgpt-accent focus:border-transparent"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="baseUrl" className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-secgpt-accent" />
                            {t("analysis.baseurl.label")}
                          </Label>
                          <Input
                            id="baseUrl"
                            name="baseUrl"
                            placeholder={t("analysis.baseurl.placeholder")}
                            value={formData.baseUrl}
                            onChange={handleChange}
                            className="transition-all focus:ring-2 focus:ring-secgpt-accent focus:border-transparent"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="secApiKey" className="flex items-center gap-2">
                          <Lock className="h-4 w-4 text-secgpt-accent" />
                          {t("analysis.secapi.label")}
                        </Label>
                        <Input
                          id="secApiKey"
                          name="secApiKey"
                          type="password"
                          placeholder={t("analysis.secapi.placeholder")}
                          value={formData.secApiKey}
                          onChange={handleChange}
                          className="transition-all focus:ring-2 focus:ring-secgpt-accent focus:border-transparent"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          {t("analysis.secapi.hint")}
                        </p>
                      </div>
                      
                      {/* Stock & Document Section */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div className="space-y-2">
                          <Label htmlFor="ticker" className="flex items-center gap-2">
                            <BarChart3 className="h-4 w-4 text-secgpt-accent" />
                            {t("analysis.ticker.label")}
                          </Label>
                          <Input
                            id="ticker"
                            name="ticker"
                            placeholder={t("analysis.ticker.placeholder")}
                            value={formData.ticker}
                            onChange={handleChange}
                            className="transition-all focus:ring-2 focus:ring-secgpt-accent focus:border-transparent"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="documentType" className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-secgpt-accent" />
                            {t("analysis.document.label")}
                          </Label>
                          <Select onValueChange={handleDocTypeChange}>
                            <SelectTrigger className="transition-all focus:ring-2 focus:ring-secgpt-accent focus:border-transparent">
                              <SelectValue placeholder={t("analysis.document.placeholder")} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>{t("analysis.document.category1")}</SelectLabel>
                                <SelectItem value="10-K">10-K (Annual Report)</SelectItem>
                                <SelectItem value="10-Q">10-Q (Quarterly Report)</SelectItem>
                                <SelectItem value="8-K">8-K (Current Report)</SelectItem>
                                <SelectItem value="Form-3">Form 3 (Initial Statement of Beneficial Ownership)</SelectItem>
                                <SelectItem value="Form-4">Form 4 (Changes in Beneficial Ownership)</SelectItem>
                              </SelectGroup>
                              <SelectGroup>
                                <SelectLabel>{t("analysis.document.category2")}</SelectLabel>
                                <SelectItem value="S-1">S-1 (IPO Registration)</SelectItem>
                                <SelectItem value="S-3">S-3 (Simplified Registration)</SelectItem>
                                <SelectItem value="S-4">S-4 (Merger/Acquisition Registration)</SelectItem>
                                <SelectItem value="SC-13D">SC 13D (Beneficial Ownership Report)</SelectItem>
                              </SelectGroup>
                              <SelectGroup>
                                <SelectLabel>{t("analysis.document.category3")}</SelectLabel>
                                <SelectItem value="DEF-14A">DEF 14A (Proxy Statement)</SelectItem>
                                <SelectItem value="Form-25">Form 25 (Notification of Delisting)</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="upload">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      {/* API Key Section for upload */}
                      <div className="space-y-2">
                        <Label htmlFor="openaiKey_upload" className="flex items-center gap-2">
                          <Key className="h-4 w-4 text-secgpt-accent" />
                          {t("analysis.openai.label")}
                        </Label>
                        <Input
                          id="openaiKey_upload"
                          name="openaiKey"
                          type="password"
                          placeholder={t("analysis.openai.placeholder")}
                          value={formData.openaiKey}
                          onChange={handleChange}
                          className="transition-all focus:ring-2 focus:ring-secgpt-accent focus:border-transparent"
                        />
                      </div>
                      
                      {/* File Upload Section */}
                      <div className="space-y-2">
                        <Label htmlFor="fileUpload" className="flex items-center gap-2">
                          <Upload className="h-4 w-4 text-secgpt-accent" />
                          上傳 SEC 文件
                        </Label>
                        <div className="flex flex-col items-center justify-center gap-4 p-8 border-2 border-dashed border-muted-foreground/30 rounded-lg bg-background/50">
                          <input
                            ref={fileInputRef}
                            type="file"
                            id="fileUpload"
                            className="hidden"
                            accept=".pdf,.doc,.docx,.txt,.html,.xbrl,.xml"
                            onChange={handleFileChange}
                          />
                          <div className="flex flex-col items-center gap-2 text-center">
                            <Upload className="h-10 w-10 text-muted-foreground" />
                            {formData.file ? (
                              <>
                                <p className="font-medium">已選擇文件：{formData.file.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="font-medium">拖放文件到此處或點擊上傳</p>
                                <p className="text-sm text-muted-foreground">
                                  支持 PDF、DOC、DOCX、TXT、HTML、XBRL 和 XML 文件
                                </p>
                              </>
                            )}
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            className="mt-2"
                            onClick={handleFileUploadClick}
                          >
                            選擇文件
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
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

export default Analysis;
