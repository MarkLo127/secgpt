
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
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="transition-all focus:ring-2 focus:ring-secgpt-accent focus:border-transparent">
          <SelectValue placeholder={t("analysis.document.placeholder")} />
        </SelectTrigger>
        <SelectContent className="max-h-80">
          {/* 1. Registration and Issuance Filings */}
          <SelectGroup>
            <SelectLabel>
              {language === "zh" 
                ? "1. 登記與發行文件" 
                : "1. Registration and Issuance Filings"}
            </SelectLabel>
            <SelectItem value="S-1">
              {language === "zh" 
                ? "Form S-1 (首次公開發行登記聲明)" 
                : "Form S-1 (Initial Registration Statement for IPO)"}
            </SelectItem>
            <SelectItem value="S-3">
              {language === "zh" 
                ? "Form S-3 (成熟公司簡化登記聲明)" 
                : "Form S-3 (Simplified Registration for Seasoned Companies)"}
            </SelectItem>
            <SelectItem value="S-4">
              {language === "zh" 
                ? "Form S-4 (併購交易登記聲明)" 
                : "Form S-4 (Registration for Business Combinations)"}
            </SelectItem>
            <SelectItem value="S-8">
              {language === "zh" 
                ? "Form S-8 (員工福利計劃登記)" 
                : "Form S-8 (Employee Benefit Plans Registration)"}
            </SelectItem>
            <SelectItem value="F-1">
              {language === "zh" 
                ? "Form F-1 (外國發行人初次登記聲明)" 
                : "Form F-1 (Foreign Issuer Initial Registration)"}
            </SelectItem>
            <SelectItem value="F-3">
              {language === "zh" 
                ? "Form F-3 (外國發行人簡化登記聲明)" 
                : "Form F-3 (Foreign Issuer Simplified Registration)"}
            </SelectItem>
            <SelectItem value="Form-1-A">
              {language === "zh" 
                ? "Form 1-A (Regulation A募集說明書)" 
                : "Form 1-A (Regulation A Offering Statement)"}
            </SelectItem>
          </SelectGroup>
          
          {/* 2. Periodic Report Filings */}
          <SelectGroup>
            <SelectLabel>
              {language === "zh" 
                ? "2. 定期報告文件" 
                : "2. Periodic Report Filings"}
            </SelectLabel>
            <SelectItem value="10-K">
              {language === "zh" 
                ? "Form 10-K (年度報告)" 
                : "Form 10-K (Annual Report)"}
            </SelectItem>
            <SelectItem value="10-K/A">
              {language === "zh" 
                ? "Form 10-K/A (年度報告修正)" 
                : "Form 10-K/A (Annual Report Amendment)"}
            </SelectItem>
            <SelectItem value="10-Q">
              {language === "zh" 
                ? "Form 10-Q (季度報告)" 
                : "Form 10-Q (Quarterly Report)"}
            </SelectItem>
            <SelectItem value="10-Q/A">
              {language === "zh" 
                ? "Form 10-Q/A (季度報告修正)" 
                : "Form 10-Q/A (Quarterly Report Amendment)"}
            </SelectItem>
            <SelectItem value="20-F">
              {language === "zh" 
                ? "Form 20-F (外國發行人年度報告)" 
                : "Form 20-F (Foreign Issuer Annual Report)"}
            </SelectItem>
            <SelectItem value="40-F">
              {language === "zh" 
                ? "Form 40-F (加拿大公司年度報告)" 
                : "Form 40-F (Canadian Company Annual Report)"}
            </SelectItem>
          </SelectGroup>
          
          {/* 3. Current (Event) Reports */}
          <SelectGroup>
            <SelectLabel>
              {language === "zh" 
                ? "3. 即時報告文件" 
                : "3. Current (Event) Reports"}
            </SelectLabel>
            <SelectItem value="8-K">
              {language === "zh" 
                ? "Form 8-K (重大事件即時報告)" 
                : "Form 8-K (Current Report)"}
            </SelectItem>
            <SelectItem value="8-K/A">
              {language === "zh" 
                ? "Form 8-K/A (重大事件報告修正)" 
                : "Form 8-K/A (Current Report Amendment)"}
            </SelectItem>
            <SelectItem value="6-K">
              {language === "zh" 
                ? "Form 6-K (外國發行人即時報告)" 
                : "Form 6-K (Foreign Issuer Current Report)"}
            </SelectItem>
          </SelectGroup>
          
          {/* 4. Insider Holdings and Trading Filings */}
          <SelectGroup>
            <SelectLabel>
              {language === "zh" 
                ? "4. 內部人持股及交易文件" 
                : "4. Insider Holdings and Trading Filings"}
            </SelectLabel>
            <SelectItem value="Form-3">
              {language === "zh" 
                ? "Form 3 (首次披露內部人持股)" 
                : "Form 3 (Initial Statement of Beneficial Ownership)"}
            </SelectItem>
            <SelectItem value="Form-4">
              {language === "zh" 
                ? "Form 4 (內部人持股變動報告)" 
                : "Form 4 (Changes in Beneficial Ownership)"}
            </SelectItem>
            <SelectItem value="Form-5">
              {language === "zh" 
                ? "Form 5 (年度內部人持股報告)" 
                : "Form 5 (Annual Statement of Beneficial Ownership)"}
            </SelectItem>
            <SelectItem value="SC-13D">
              {language === "zh" 
                ? "Schedule 13D (5%以上股份收購聲明)" 
                : "Schedule 13D (Beneficial Ownership Report >5%)"}
            </SelectItem>
            <SelectItem value="SC-13G">
              {language === "zh" 
                ? "Schedule 13G (被動投資者簡化披露)" 
                : "Schedule 13G (Simplified Ownership Report for Passive Investors)"}
            </SelectItem>
            <SelectItem value="13F-HR">
              {language === "zh" 
                ? "Form 13F-HR (機構投資者季度持股報告)" 
                : "Form 13F-HR (Institutional Investment Manager Holdings)"}
            </SelectItem>
          </SelectGroup>
          
          {/* 5. Proxy and Corporate Governance Filings */}
          <SelectGroup>
            <SelectLabel>
              {language === "zh" 
                ? "5. 股東投票及公司治理文件" 
                : "5. Proxy and Corporate Governance Filings"}
            </SelectLabel>
            <SelectItem value="DEF-14A">
              {language === "zh" 
                ? "DEF 14A (正式股東委任書)" 
                : "DEF 14A (Definitive Proxy Statement)"}
            </SelectItem>
            <SelectItem value="DEF-14C">
              {language === "zh" 
                ? "DEF 14C (正式資訊說明書)" 
                : "DEF 14C (Definitive Information Statement)"}
            </SelectItem>
            <SelectItem value="DEFA14A">
              {language === "zh" 
                ? "DEFA14A (補充披露材料)" 
                : "DEFA14A (Additional Proxy Soliciting Materials)"}
            </SelectItem>
            <SelectItem value="DEFM14A">
              {language === "zh" 
                ? "DEFM14A (併購相關委任書)" 
                : "DEFM14A (Merger Proxy Statement)"}
            </SelectItem>
          </SelectGroup>
          
          {/* 6. Investment Company Filings */}
          <SelectGroup>
            <SelectLabel>
              {language === "zh" 
                ? "6. 投資公司專用文件" 
                : "6. Investment Company Filings"}
            </SelectLabel>
            <SelectItem value="N-1A">
              {language === "zh" 
                ? "Form N-1A (共同基金註冊聲明)" 
                : "Form N-1A (Mutual Fund Registration)"}
            </SelectItem>
            <SelectItem value="N-2">
              {language === "zh" 
                ? "Form N-2 (封閉式投資公司註冊)" 
                : "Form N-2 (Closed-End Fund Registration)"}
            </SelectItem>
            <SelectItem value="N-CSR">
              {language === "zh" 
                ? "Form N-CSR (認證年度股東報告)" 
                : "Form N-CSR (Certified Annual Shareholder Report)"}
            </SelectItem>
            <SelectItem value="N-Q">
              {language === "zh" 
                ? "Form N-Q (季度投資組合持股報告)" 
                : "Form N-Q (Quarterly Portfolio Holdings Report)"}
            </SelectItem>
          </SelectGroup>
          
          {/* 7. Miscellaneous Filings */}
          <SelectGroup>
            <SelectLabel>
              {language === "zh" 
                ? "7. 其他雜項文件" 
                : "7. Miscellaneous Filings"}
            </SelectLabel>
            <SelectItem value="Form-144">
              {language === "zh" 
                ? "Form 144 (限制性證券銷售通告)" 
                : "Form 144 (Notice of Proposed Sale)"}
            </SelectItem>
            <SelectItem value="CORRESP">
              {language === "zh" 
                ? "CORRESP (SEC溝通函件)" 
                : "CORRESP (Correspondence with SEC)"}
            </SelectItem>
            <SelectItem value="POS-AM">
              {language === "zh" 
                ? "POS AM (發生後修正文件)" 
                : "POS AM (Post-Effective Amendment)"}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DocumentTypeSelect;
