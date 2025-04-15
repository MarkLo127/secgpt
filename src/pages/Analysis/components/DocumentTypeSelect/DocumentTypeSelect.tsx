
import React from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText } from "lucide-react";
import { DocumentTypeGroup } from "./DocumentTypeGroup";
import { documentTypeCategories } from "./documentTypeData";

interface DocumentTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
  id?: string;
}

export const DocumentTypeSelect = ({ 
  value, 
  onChange, 
  id = "documentType" 
}: DocumentTypeSelectProps) => {
  const { t, language } = useLanguage();
  
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-secgpt-accent" />
        {t("analysis.document.label")}
      </Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="transition-all focus:ring-2 focus:ring-secgpt-accent focus:border-transparent">
          <SelectValue placeholder={t("analysis.document.placeholder")} />
        </SelectTrigger>
        <SelectContent className="max-h-80">
          {documentTypeCategories.map((category, index) => (
            <DocumentTypeGroup
              key={index}
              groupLabelEn={category.groupLabelEn}
              groupLabelZh={category.groupLabelZh}
              options={category.options}
              language={language}
            />
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
