
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
          {/* I. Periodic Reports and Internal Disclosures */}
          <SelectGroup>
            <SelectLabel>{language === "zh" ? "一、定期報告及內部申報文件" : "I. Periodic Reports and Internal Disclosures"}</SelectLabel>
            
            {/* 1. U.S. Public Company Periodic Reports (Series 10) */}
            <SelectItem value="10-K">
              {language === "zh" ? "10-K (年度報告)" : "10-K (Annual Report)"}
            </SelectItem>
            <SelectItem value="10-K/A">
              {language === "zh" ? "10-K/A (年度報告修正)" : "10-K/A (Annual Report Amendment)"}
            </SelectItem>
            <SelectItem value="10-KSB">
              {language === "zh" ? "10-KSB (小型企業年度報告)" : "10-KSB (Small Business Annual Report)"}
            </SelectItem>
            <SelectItem value="10-Q">
              {language === "zh" ? "10-Q (季度報告)" : "10-Q (Quarterly Report)"}
            </SelectItem>
            <SelectItem value="10-Q/A">
              {language === "zh" ? "10-Q/A (季度報告修正)" : "10-Q/A (Quarterly Report Amendment)"}
            </SelectItem>
            
            {/* 2. Insider and Ownership Disclosures */}
            <SelectItem value="Form-3">
              {language === "zh" ? "Form 3 (首次受益所有權申報)" : "Form 3 (Initial Statement of Beneficial Ownership)"}
            </SelectItem>
            <SelectItem value="Form-4">
              {language === "zh" ? "Form 4 (內部人持股變動報告)" : "Form 4 (Changes in Beneficial Ownership)"}
            </SelectItem>
            <SelectItem value="Form-5">
              {language === "zh" ? "Form 5 (年度內部持股報告)" : "Form 5 (Annual Statement of Beneficial Ownership)"}
            </SelectItem>
            
            {/* 3. Employee Stock Ownership Plan Reports */}
            <SelectItem value="11-K">
              {language === "zh" ? "11-K (員工持股計劃報告)" : "11-K (Employee Stock Ownership Plan Report)"}
            </SelectItem>
          </SelectGroup>
          
          {/* II. Current Event Announcements and Prompt Reports */}
          <SelectGroup>
            <SelectLabel>{language === "zh" ? "二、重大事件公告及即時報告" : "II. Current Event Announcements and Prompt Reports"}</SelectLabel>
            <SelectItem value="8-K">
              {language === "zh" ? "8-K (重大事件公告)" : "8-K (Current Report)"}
            </SelectItem>
            <SelectItem value="8-K/A">
              {language === "zh" ? "8-K/A (重大事件公告修正)" : "8-K/A (Current Report Amendment)"}
            </SelectItem>
          </SelectGroup>
          
          {/* III. IPO and Securities Issuance Documents */}
          <SelectGroup>
            <SelectLabel>{language === "zh" ? "三、IPO及證券發行文件" : "III. IPO and Securities Issuance Documents"}</SelectLabel>
            
            {/* 1. U.S. Company Initial Public Offering */}
            <SelectItem value="S-1">
              {language === "zh" ? "S-1 (IPO註冊聲明)" : "S-1 (IPO Registration Statement)"}
            </SelectItem>
            <SelectItem value="S-3">
              {language === "zh" ? "S-3 (簡化註冊聲明)" : "S-3 (Simplified Registration Statement)"}
            </SelectItem>
            <SelectItem value="S-4">
              {language === "zh" ? "S-4 (合併/收購註冊)" : "S-4 (Business Combinations Registration)"}
            </SelectItem>
            <SelectItem value="S-8">
              {language === "zh" ? "S-8 (員工福利計劃)" : "S-8 (Employee Benefit Plan)"}
            </SelectItem>
            
            {/* 3. Acquisition and Merger-Related Documents */}
            <SelectItem value="SC-13D">
              {language === "zh" ? "SC 13D (大額股份收購聲明)" : "SC 13D (Beneficial Ownership Report)"}
            </SelectItem>
            <SelectItem value="SC-13G">
              {language === "zh" ? "SC 13G (簡化受益所有權申報)" : "SC 13G (Simplified Beneficial Ownership Report)"}
            </SelectItem>
            <SelectItem value="SC-14D9">
              {language === "zh" ? "SC 14D9 (收購相關溝通文件)" : "SC 14D9 (Tender Offer Communication)"}
            </SelectItem>
          </SelectGroup>
          
          {/* IV. Foreign Issuer Documents */}
          <SelectGroup>
            <SelectLabel>{language === "zh" ? "四、外國發行人文件" : "IV. Foreign Issuer Documents"}</SelectLabel>
            <SelectItem value="20-F">
              {language === "zh" ? "20-F (外國發行人年度報告)" : "20-F (Foreign Issuer Annual Report)"}
            </SelectItem>
            <SelectItem value="6-K">
              {language === "zh" ? "6-K (外國發行人臨時報告)" : "6-K (Foreign Issuer Current Report)"}
            </SelectItem>
          </SelectGroup>
          
          {/* V. Regulation A Series */}
          <SelectGroup>
            <SelectLabel>{language === "zh" ? "五、Regulation A系列" : "V. Regulation A Series"}</SelectLabel>
            <SelectItem value="Form-1-A">
              {language === "zh" ? "Form 1-A (小規模公開發行申請)" : "Form 1-A (Offering Statement)"}
            </SelectItem>
            <SelectItem value="Form-1-K">
              {language === "zh" ? "Form 1-K (Regulation A年度報告)" : "Form 1-K (Regulation A Annual Report)"}
            </SelectItem>
          </SelectGroup>
          
          {/* VI. Securities Sales and Withdrawal Applications */}
          <SelectGroup>
            <SelectLabel>{language === "zh" ? "六、證券銷售與退出申請" : "VI. Securities Sales and Withdrawal Applications"}</SelectLabel>
            <SelectItem value="Form-144">
              {language === "zh" ? "Form 144 (證券銷售通告)" : "Form 144 (Notice of Proposed Sale)"}
            </SelectItem>
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
