
import React from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Key, Lock, Globe, BarChart3, FileText } from "lucide-react";
import { FormData } from "../types";
import DocumentTypeSelect from "./DocumentTypeSelect";

interface ApiInputFormProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDocTypeChange: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ApiInputForm = ({ 
  formData, 
  handleChange, 
  handleDocTypeChange, 
  handleSubmit 
}: ApiInputFormProps) => {
  const { t } = useLanguage();

  return (
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
            {t("analysis.secapi.hint")} <a href="https://sec-api.io" target="_blank" rel="noopener noreferrer" className="text-secgpt-accent hover:underline">https://sec-api.io</a>
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
          
          <DocumentTypeSelect 
            value={formData.documentType} 
            onChange={handleDocTypeChange} 
          />
        </div>
      </div>
    </form>
  );
};

export default ApiInputForm;
