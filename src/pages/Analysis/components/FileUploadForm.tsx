
import React, { useRef } from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Key, Globe, Upload } from "lucide-react";
import { FormData } from "../types";
import DocumentTypeSelect from "./DocumentTypeSelect";

interface FileUploadFormProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDocTypeChange: (value: string) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const FileUploadForm = ({
  formData,
  handleChange,
  handleDocTypeChange,
  handleFileChange,
  handleSubmit
}: FileUploadFormProps) => {
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {/* API Key Section for upload */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          
          <div className="space-y-2">
            <Label htmlFor="baseUrl_upload" className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-secgpt-accent" />
              {t("analysis.baseurl.label")} (可選)
            </Label>
            <Input
              id="baseUrl_upload"
              name="baseUrl"
              placeholder={t("analysis.baseurl.placeholder")}
              value={formData.baseUrl}
              onChange={handleChange}
              className="transition-all focus:ring-2 focus:ring-secgpt-accent focus:border-transparent"
            />
          </div>
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
        
        {/* Document Type Selection for upload */}
        <DocumentTypeSelect 
          value={formData.documentType} 
          onChange={handleDocTypeChange} 
          id="documentType_upload"
        />
      </div>
    </form>
  );
};

export default FileUploadForm;
