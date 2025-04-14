
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/providers/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FormData = {
  openaiKey: string;
  baseUrl: string;
  secApiKey: string;
  ticker: string;
  documentType: string;
};

const Analysis = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<FormData>({
    openaiKey: "",
    baseUrl: "",
    secApiKey: "",
    ticker: "",
    documentType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDocTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, documentType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.openaiKey) {
      toast({
        title: "Error",
        description: "OpenAI API Key is required",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.secApiKey) {
      toast({
        title: "Error",
        description: "SEC API Key is required",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.ticker) {
      toast({
        title: "Error",
        description: "Stock Ticker is required",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.documentType) {
      toast({
        title: "Error",
        description: "Document Type is required",
        variant: "destructive",
      });
      return;
    }
    
    // Store form data in session storage (never in local storage for API keys)
    sessionStorage.setItem("secgpt-analysis", JSON.stringify(formData));
    
    // Navigate to chat page
    navigate("/chat");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 tech-text-gradient">
            {t("analysis.title")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("analysis.subtitle")}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="openaiKey">{t("analysis.openai.label")}</Label>
                <Input
                  id="openaiKey"
                  name="openaiKey"
                  type="password"
                  placeholder={t("analysis.openai.placeholder")}
                  value={formData.openaiKey}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Label htmlFor="baseUrl">{t("analysis.baseurl.label")}</Label>
                <Input
                  id="baseUrl"
                  name="baseUrl"
                  placeholder={t("analysis.baseurl.placeholder")}
                  value={formData.baseUrl}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Label htmlFor="secApiKey">{t("analysis.secapi.label")}</Label>
                <Input
                  id="secApiKey"
                  name="secApiKey"
                  type="password"
                  placeholder={t("analysis.secapi.placeholder")}
                  value={formData.secApiKey}
                  onChange={handleChange}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {t("analysis.secapi.hint")}
                </p>
              </div>
              
              <div>
                <Label htmlFor="ticker">{t("analysis.ticker.label")}</Label>
                <Input
                  id="ticker"
                  name="ticker"
                  placeholder={t("analysis.ticker.placeholder")}
                  value={formData.ticker}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Label htmlFor="documentType">{t("analysis.document.label")}</Label>
                <Select onValueChange={handleDocTypeChange}>
                  <SelectTrigger>
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
            
            <Button type="submit" className="w-full">
              {t("analysis.submit")}
            </Button>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Analysis;
