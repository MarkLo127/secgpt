
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
        <SelectContent className="max-h-80">
          <SelectGroup>
            <SelectLabel>{t("analysis.document.category1")}</SelectLabel>
            {/* 定期報告（10 系列） */}
            <SelectItem value="10-K">
              {language === "zh" ? "10-K (年度報告)" : "10-K (Annual Report)"}
            </SelectItem>
            <SelectItem value="10-K/A">
              {language === "zh" ? "10-K/A (年度報告修正)" : "10-K/A (Annual Report Amendment)"}
            </SelectItem>
            <SelectItem value="10-Q">
              {language === "zh" ? "10-Q (季度報告)" : "10-Q (Quarterly Report)"}
            </SelectItem>
            <SelectItem value="10-Q/A">
              {language === "zh" ? "10-Q/A (季度報告修正)" : "10-Q/A (Quarterly Report Amendment)"}
            </SelectItem>
            
            {/* 異常事件公告（8 系列） */}
            <SelectItem value="8-K">
              {language === "zh" ? "8-K (重大事件公告)" : "8-K (Current Report)"}
            </SelectItem>
            <SelectItem value="8-K/A">
              {language === "zh" ? "8-K/A (重大事件公告修正)" : "8-K/A (Current Report Amendment)"}
            </SelectItem>
            
            {/* 內部人申報文件 */}
            <SelectItem value="Form-3">
              {language === "zh" ? "Form 3 (首次受益所有權申報)" : "Form 3 (Initial Statement of Beneficial Ownership)"}
            </SelectItem>
            <SelectItem value="Form-4">
              {language === "zh" ? "Form 4 (內部人持股變動報告)" : "Form 4 (Changes in Beneficial Ownership)"}
            </SelectItem>
            <SelectItem value="Form-5">
              {language === "zh" ? "Form 5 (年度內部持股報告)" : "Form 5 (Annual Statement of Beneficial Ownership)"}
            </SelectItem>
          </SelectGroup>
          
          <SelectGroup>
            <SelectLabel>{t("analysis.document.category2")}</SelectLabel>
            {/* 一般證券發行文件（S 系列） */}
            <SelectItem value="S-1">
              {language === "zh" ? "S-1 (IPO註冊聲明)" : "S-1 (IPO Registration)"}
            </SelectItem>
            <SelectItem value="S-1MEF">
              {language === "zh" ? "S-1MEF (IPO註冊修正)" : "S-1MEF (IPO Registration Amendment)"}
            </SelectItem>
            <SelectItem value="S-3">
              {language === "zh" ? "S-3 (簡化註冊聲明)" : "S-3 (Simplified Registration)"}
            </SelectItem>
            <SelectItem value="S-3ASR">
              {language === "zh" ? "S-3ASR (自動架棚註冊)" : "S-3ASR (Automatic Shelf Registration)"}
            </SelectItem>
            <SelectItem value="S-4">
              {language === "zh" ? "S-4 (合併/收購註冊)" : "S-4 (Merger/Acquisition Registration)"}
            </SelectItem>
            <SelectItem value="S-8">
              {language === "zh" ? "S-8 (員工福利計劃)" : "S-8 (Employee Benefit Plan)"}
            </SelectItem>
            
            {/* 收購與併購相關申報（SC 系列） */}
            <SelectItem value="SC-13D">
              {language === "zh" ? "SC 13D (大額股份收購聲明)" : "SC 13D (Beneficial Ownership Report)"}
            </SelectItem>
            <SelectItem value="SC-13G">
              {language === "zh" ? "SC 13G (簡化受益所有權申報)" : "SC 13G (Simplified Beneficial Ownership Report)"}
            </SelectItem>
          </SelectGroup>
          
          <SelectGroup>
            <SelectLabel>{t("analysis.document.category3")}</SelectLabel>
            {/* 撤市與退市文件 */}
            <SelectItem value="Form-25">
              {language === "zh" ? "Form 25 (證券撤市通知)" : "Form 25 (Notification of Delisting)"}
            </SelectItem>
            
            {/* Proxy（委託投票）及公司治理文件 */}
            <SelectItem value="DEF-14A">
              {language === "zh" ? "DEF 14A (代理聲明)" : "DEF 14A (Proxy Statement)"}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DocumentTypeSelect;
