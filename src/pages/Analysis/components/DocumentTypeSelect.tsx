
import React from "react";
import { useLanguage } from "@/providers/LanguageProvider";
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
import { FileText } from "lucide-react";

interface DocumentTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
  id?: string;
}

const DocumentTypeSelect = ({ value, onChange, id = "documentType" }: DocumentTypeSelectProps) => {
  const { t, language } = useLanguage();
  
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-secgpt-accent" />
        {t("analysis.document.label")}
      </Label>
      <Select onValueChange={onChange}>
        <SelectTrigger className="transition-all focus:ring-2 focus:ring-secgpt-accent focus:border-transparent">
          <SelectValue placeholder={t("analysis.document.placeholder")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{t("analysis.document.category1")}</SelectLabel>
            <SelectItem value="10-K">
              {language === "zh" ? "10-K (年度報告)" : "10-K (Annual Report)"}
            </SelectItem>
            <SelectItem value="10-Q">
              {language === "zh" ? "10-Q (季度報告)" : "10-Q (Quarterly Report)"}
            </SelectItem>
            <SelectItem value="8-K">
              {language === "zh" ? "8-K (當前報告)" : "8-K (Current Report)"}
            </SelectItem>
            <SelectItem value="Form-3">
              {language === "zh" ? "表格3 (實益所有權初始聲明)" : "Form 3 (Initial Statement of Beneficial Ownership)"}
            </SelectItem>
            <SelectItem value="Form-4">
              {language === "zh" ? "表格4 (實益所有權變更)" : "Form 4 (Changes in Beneficial Ownership)"}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>{t("analysis.document.category2")}</SelectLabel>
            <SelectItem value="S-1">
              {language === "zh" ? "S-1 (IPO註冊)" : "S-1 (IPO Registration)"}
            </SelectItem>
            <SelectItem value="S-3">
              {language === "zh" ? "S-3 (簡化註冊)" : "S-3 (Simplified Registration)"}
            </SelectItem>
            <SelectItem value="S-4">
              {language === "zh" ? "S-4 (合併/收購註冊)" : "S-4 (Merger/Acquisition Registration)"}
            </SelectItem>
            <SelectItem value="SC-13D">
              {language === "zh" ? "SC 13D (實益所有權報告)" : "SC 13D (Beneficial Ownership Report)"}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>{t("analysis.document.category3")}</SelectLabel>
            <SelectItem value="DEF-14A">
              {language === "zh" ? "DEF 14A (代理聲明)" : "DEF 14A (Proxy Statement)"}
            </SelectItem>
            <SelectItem value="Form-25">
              {language === "zh" ? "表格25 (退市通知)" : "Form 25 (Notification of Delisting)"}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DocumentTypeSelect;
