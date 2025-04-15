
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
            
            {/* 1.1 S-Series Filings */}
            <SelectItem value="S-1">
              {language === "zh" 
                ? "Form S-1 (首次公開發行登記聲明)" 
                : "Form S-1 (Initial Registration Statement for IPO)"}
            </SelectItem>
            <SelectItem value="S-1/A">
              {language === "zh" 
                ? "Form S-1/A (首次公開發行登記聲明修正)" 
                : "Form S-1/A (Amended Initial Registration)"}
            </SelectItem>
            <SelectItem value="S-2">
              {language === "zh" 
                ? "Form S-2 (具運作歷史公司登記聲明)" 
                : "Form S-2 (Registration for Companies with Operating History)"}
            </SelectItem>
            <SelectItem value="S-3">
              {language === "zh" 
                ? "Form S-3 (成熟公司簡化登記聲明)" 
                : "Form S-3 (Simplified Registration for Seasoned Companies)"}
            </SelectItem>
            <SelectItem value="S-3/A">
              {language === "zh" 
                ? "Form S-3/A (成熟公司簡化登記聲明修正)" 
                : "Form S-3/A (Amended Simplified Registration)"}
            </SelectItem>
            <SelectItem value="S-4">
              {language === "zh" 
                ? "Form S-4 (併購交易登記聲明)" 
                : "Form S-4 (Registration for Business Combinations)"}
            </SelectItem>
            <SelectItem value="S-4/A">
              {language === "zh" 
                ? "Form S-4/A (併購交易登記聲明修正)" 
                : "Form S-4/A (Amended Business Combinations Registration)"}
            </SelectItem>
            <SelectItem value="S-6">
              {language === "zh" 
                ? "Form S-6 (單位投資信託登記聲明)" 
                : "Form S-6 (Unit Investment Trust Registration)"}
            </SelectItem>
            <SelectItem value="S-8">
              {language === "zh" 
                ? "Form S-8 (員工福利計劃登記)" 
                : "Form S-8 (Employee Benefit Plans Registration)"}
            </SelectItem>
            <SelectItem value="S-11">
              {language === "zh" 
                ? "Form S-11 (房地產投資信託登記)" 
                : "Form S-11 (REIT Registration)"}
            </SelectItem>
            <SelectItem value="S-11/A">
              {language === "zh" 
                ? "Form S-11/A (房地產投資信託登記修正)" 
                : "Form S-11/A (Amended REIT Registration)"}
            </SelectItem>
            
            {/* 1.2 F-Series Filings */}
            <SelectItem value="F-1">
              {language === "zh" 
                ? "Form F-1 (外國發行人初次登記聲明)" 
                : "Form F-1 (Foreign Issuer Initial Registration)"}
            </SelectItem>
            <SelectItem value="F-1/A">
              {language === "zh" 
                ? "Form F-1/A (外國發行人初次登記修正)" 
                : "Form F-1/A (Amended Foreign Issuer Registration)"}
            </SelectItem>
            <SelectItem value="F-3">
              {language === "zh" 
                ? "Form F-3 (外國發行人簡化登記聲明)" 
                : "Form F-3 (Foreign Issuer Simplified Registration)"}
            </SelectItem>
            <SelectItem value="F-3/A">
              {language === "zh" 
                ? "Form F-3/A (外國發行人簡化登記修正)" 
                : "Form F-3/A (Amended Foreign Simplified Registration)"}
            </SelectItem>
            <SelectItem value="F-4">
              {language === "zh" 
                ? "Form F-4 (外國發行人併購登記)" 
                : "Form F-4 (Foreign Issuer Business Combination)"}
            </SelectItem>
            <SelectItem value="F-4/A">
              {language === "zh" 
                ? "Form F-4/A (外國發行人併購登記修正)" 
                : "Form F-4/A (Amended Foreign Business Combination)"}
            </SelectItem>
            <SelectItem value="F-6">
              {language === "zh" 
                ? "Form F-6 (美國存托憑證登記)" 
                : "Form F-6 (American Depositary Receipts Registration)"}
            </SelectItem>
            <SelectItem value="F-6/A">
              {language === "zh" 
                ? "Form F-6/A (美國存托憑證登記修正)" 
                : "Form F-6/A (Amended ADR Registration)"}
            </SelectItem>
            <SelectItem value="F-6EF">
              {language === "zh" 
                ? "Form F-6EF (自動生效ADR登記)" 
                : "Form F-6EF (Auto-effective ADR Registration)"}
            </SelectItem>
            <SelectItem value="F-7">
              {language === "zh" 
                ? "Form F-7 (加拿大發行人現金認購登記)" 
                : "Form F-7 (Canadian Issuer Cash Offering)"}
            </SelectItem>
            <SelectItem value="F-8">
              {language === "zh" 
                ? "Form F-8 (加拿大發行人交換登記)" 
                : "Form F-8 (Canadian Issuer Exchange Offering)"}
            </SelectItem>
            <SelectItem value="F-9">
              {language === "zh" 
                ? "Form F-9 (加拿大投資級債券登記)" 
                : "Form F-9 (Canadian Investment Grade Securities)"}
            </SelectItem>
            <SelectItem value="F-10">
              {language === "zh" 
                ? "Form F-10 (加拿大發行人其他登記)" 
                : "Form F-10 (Additional Canadian Issuer Registration)"}
            </SelectItem>
            <SelectItem value="F-80">
              {language === "zh" 
                ? "Form F-80 (加拿大發行人交換交易登記)" 
                : "Form F-80 (Canadian Issuer Exchange Transactions)"}
            </SelectItem>
            
            {/* 1.3 Regulation A Filings */}
            <SelectItem value="1-A">
              {language === "zh" 
                ? "Form 1-A (Regulation A募集說明書)" 
                : "Form 1-A (Regulation A Offering Statement)"}
            </SelectItem>
            <SelectItem value="1-A/A">
              {language === "zh" 
                ? "Form 1-A/A (Regulation A募集說明書修正)" 
                : "Form 1-A/A (Amended Regulation A Offering)"}
            </SelectItem>
            <SelectItem value="1-A-POS">
              {language === "zh" 
                ? "Form 1-A POS (發生後修正文件)" 
                : "Form 1-A POS (Post-effective Amendment)"}
            </SelectItem>
            <SelectItem value="1-A-W">
              {language === "zh" 
                ? "Form 1-A-W (撤回Regulation A募集)" 
                : "Form 1-A-W (Withdrawal of Regulation A Offering)"}
            </SelectItem>
          </SelectGroup>
          
          {/* 2. Periodic Report Filings */}
          <SelectGroup>
            <SelectLabel>
              {language === "zh" 
                ? "2. 定期報告文件" 
                : "2. Periodic Report Filings"}
            </SelectLabel>
            
            {/* 2.1 Annual Reports */}
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
            <SelectItem value="20-F">
              {language === "zh" 
                ? "Form 20-F (外國發行人年度報告)" 
                : "Form 20-F (Foreign Issuer Annual Report)"}
            </SelectItem>
            <SelectItem value="20-F/A">
              {language === "zh" 
                ? "Form 20-F/A (外國發行人年度報告修正)" 
                : "Form 20-F/A (Foreign Annual Report Amendment)"}
            </SelectItem>
            <SelectItem value="40-F">
              {language === "zh" 
                ? "Form 40-F (加拿大公司年度報告)" 
                : "Form 40-F (Canadian Company Annual Report)"}
            </SelectItem>
            <SelectItem value="40-F/A">
              {language === "zh" 
                ? "Form 40-F/A (加拿大公司年度報告修正)" 
                : "Form 40-F/A (Canadian Annual Report Amendment)"}
            </SelectItem>
            <SelectItem value="NSAR-A">
              {language === "zh" 
                ? "NSAR-A (投資公司半年度報告)" 
                : "NSAR-A (Investment Company Semiannual Report)"}
            </SelectItem>
            <SelectItem value="NSAR-B">
              {language === "zh" 
                ? "NSAR-B (投資公司年度報告)" 
                : "NSAR-B (Investment Company Annual Report)"}
            </SelectItem>
            
            {/* 2.2 Quarterly Reports */}
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
            <SelectItem value="10-QT">
              {language === "zh" 
                ? "Form 10-QT (過渡性季度報告)" 
                : "Form 10-QT (Transition Quarterly Report)"}
            </SelectItem>
            <SelectItem value="10-KT">
              {language === "zh" 
                ? "Form 10-KT (過渡性年度報告)" 
                : "Form 10-KT (Transition Annual Report)"}
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
            <SelectItem value="6-K/A">
              {language === "zh" 
                ? "Form 6-K/A (外國發行人即時報告修正)" 
                : "Form 6-K/A (Foreign Current Report Amendment)"}
            </SelectItem>
          </SelectGroup>
          
          {/* 4. Insider and Institutional Disclosures */}
          <SelectGroup>
            <SelectLabel>
              {language === "zh" 
                ? "4. 內部人持股及機構披露文件" 
                : "4. Insider and Institutional Disclosures"}
            </SelectLabel>
            
            {/* 4.1 Insider Filings */}
            <SelectItem value="3">
              {language === "zh" 
                ? "Form 3 (首次披露內部人持股)" 
                : "Form 3 (Initial Statement of Beneficial Ownership)"}
            </SelectItem>
            <SelectItem value="4">
              {language === "zh" 
                ? "Form 4 (內部人持股變動報告)" 
                : "Form 4 (Changes in Beneficial Ownership)"}
            </SelectItem>
            <SelectItem value="4/A">
              {language === "zh" 
                ? "Form 4/A (內部人持股變動報告修正)" 
                : "Form 4/A (Amended Ownership Change Report)"}
            </SelectItem>
            <SelectItem value="5">
              {language === "zh" 
                ? "Form 5 (年度內部人持股報告)" 
                : "Form 5 (Annual Statement of Beneficial Ownership)"}
            </SelectItem>
            <SelectItem value="5/A">
              {language === "zh" 
                ? "Form 5/A (年度內部人持股報告修正)" 
                : "Form 5/A (Amended Annual Ownership Report)"}
            </SelectItem>
            
            {/* 4.2 Institutional Filings */}
            <SelectItem value="13F-HR">
              {language === "zh" 
                ? "Form 13F-HR (機構投資者季度持股報告)" 
                : "Form 13F-HR (Institutional Investment Manager Holdings)"}
            </SelectItem>
            <SelectItem value="13F-HR/A">
              {language === "zh" 
                ? "Form 13F-HR/A (機構持股報告修正)" 
                : "Form 13F-HR/A (Amended Institutional Holdings)"}
            </SelectItem>
            <SelectItem value="13F-NT">
              {language === "zh" 
                ? "Form 13F-NT (機構持股通知報告)" 
                : "Form 13F-NT (Notice Report of Institutional Holdings)"}
            </SelectItem>
            <SelectItem value="13H">
              {language === "zh" 
                ? "Form 13H (大額投資者初始報告)" 
                : "Form 13H (Initial Large Trader Report)"}
            </SelectItem>
            <SelectItem value="SC-13D">
              {language === "zh" 
                ? "Schedule 13D (5%以上股份收購聲明)" 
                : "Schedule 13D (Beneficial Ownership Report >5%)"}
            </SelectItem>
            <SelectItem value="SC-13D/A">
              {language === "zh" 
                ? "Schedule 13D/A (5%以上股份收購修正)" 
                : "Schedule 13D/A (Amended Ownership Report >5%)"}
            </SelectItem>
            <SelectItem value="SC-13G">
              {language === "zh" 
                ? "Schedule 13G (被動投資者簡化披露)" 
                : "Schedule 13G (Simplified Ownership Report for Passive Investors)"}
            </SelectItem>
            <SelectItem value="SC-13G/A">
              {language === "zh" 
                ? "Schedule 13G/A (被動投資者披露修正)" 
                : "Schedule 13G/A (Amended Passive Investor Report)"}
            </SelectItem>
          </SelectGroup>
          
          {/* 5. Proxy and Corporate Governance Filings */}
          <SelectGroup>
            <SelectLabel>
              {language === "zh" 
                ? "5. 股東投票及公司治理文件" 
                : "5. Proxy and Corporate Governance Filings"}
            </SelectLabel>
            
            {/* 5.1 Definitive Proxy Statements */}
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
                ? "DEFA14A (補充代理材料)" 
                : "DEFA14A (Additional Proxy Soliciting Materials)"}
            </SelectItem>
            <SelectItem value="DEFC14A">
              {language === "zh" 
                ? "DEFC14A (爭議性代理書)" 
                : "DEFC14A (Contested Solicitations Proxy)"}
            </SelectItem>
            <SelectItem value="DEFM14A">
              {language === "zh" 
                ? "DEFM14A (併購相關代理書)" 
                : "DEFM14A (Merger Proxy Statement)"}
            </SelectItem>
            <SelectItem value="DEFN14A">
              {language === "zh" 
                ? "DEFN14A (非管理層代理書)" 
                : "DEFN14A (Non-management Proxy Statement)"}
            </SelectItem>
            
            {/* 5.2 Preliminary Proxy Materials */}
            <SelectItem value="PRE-14A">
              {language === "zh" 
                ? "PRE 14A (初步代理書)" 
                : "PRE 14A (Preliminary Proxy Statement)"}
            </SelectItem>
            <SelectItem value="PRE-14C">
              {language === "zh" 
                ? "PRE 14C (初步資訊說明書)" 
                : "PRE 14C (Preliminary Information Statement)"}
            </SelectItem>
            <SelectItem value="PREM14A">
              {language === "zh" 
                ? "PREM14A (併購初步代理書)" 
                : "PREM14A (Preliminary Merger Proxy)"}
            </SelectItem>
            <SelectItem value="PREN14A">
              {language === "zh" 
                ? "PREN14A (非管理層初步代理書)" 
                : "PREN14A (Preliminary Non-management Proxy)"}
            </SelectItem>
          </SelectGroup>
          
          {/* 6. Tender Offer and M&A Filings */}
          <SelectGroup>
            <SelectLabel>
              {language === "zh" 
                ? "6. 收購要約與併購相關文件" 
                : "6. Tender Offer and M&A Filings"}
            </SelectLabel>
            <SelectItem value="SC-TO-T">
              {language === "zh" 
                ? "Schedule TO-T (第三方收購要約)" 
                : "Schedule TO-T (Third-party Tender Offer)"}
            </SelectItem>
            <SelectItem value="SC-14D9">
              {language === "zh" 
                ? "Form SC 14D9 (收購邀約徵求說明)" 
                : "Form SC 14D9 (Tender Offer Solicitation)"}
            </SelectItem>
            <SelectItem value="SC-14D9/A">
              {language === "zh" 
                ? "Form SC 14D9/A (收購邀約說明修正)" 
                : "Form SC 14D9/A (Amended Tender Offer Solicitation)"}
            </SelectItem>
            <SelectItem value="SC-14F1">
              {language === "zh" 
                ? "Form SC 14F1 (董事變動說明)" 
                : "Form SC 14F1 (Change in Majority of Directors)"}
            </SelectItem>
          </SelectGroup>
          
          {/* 7. Investment Company Filings */}
          <SelectGroup>
            <SelectLabel>
              {language === "zh" 
                ? "7. 投資公司專用文件" 
                : "7. Investment Company Filings"}
            </SelectLabel>
            
            {/* 7.1 Investment Company Registration */}
            <SelectItem value="N-1A">
              {language === "zh" 
                ? "Form N-1A (共同基金註冊聲明)" 
                : "Form N-1A (Mutual Fund Registration)"}
            </SelectItem>
            <SelectItem value="N-1A/A">
              {language === "zh" 
                ? "Form N-1A/A (共同基金註冊修正)" 
                : "Form N-1A/A (Amended Mutual Fund Registration)"}
            </SelectItem>
            <SelectItem value="N-2">
              {language === "zh" 
                ? "Form N-2 (封閉式投資公司註冊)" 
                : "Form N-2 (Closed-End Fund Registration)"}
            </SelectItem>
            <SelectItem value="N-2/A">
              {language === "zh" 
                ? "Form N-2/A (封閉式投資公司註冊修正)" 
                : "Form N-2/A (Amended Closed-End Fund Registration)"}
            </SelectItem>
            <SelectItem value="N-3">
              {language === "zh" 
                ? "Form N-3 (管理投資公司獨立賬戶註冊)" 
                : "Form N-3 (Separate Accounts Registration)"}
            </SelectItem>
            <SelectItem value="N-4">
              {language === "zh" 
                ? "Form N-4 (單位投資信託註冊)" 
                : "Form N-4 (Unit Investment Trust Registration)"}
            </SelectItem>
            <SelectItem value="N-14">
              {language === "zh" 
                ? "Form N-14 (投資公司併購登記)" 
                : "Form N-14 (Investment Company Business Combination)"}
            </SelectItem>
            
            {/* 7.2 Investment Company Periodic Reports */}
            <SelectItem value="N-CSR">
              {language === "zh" 
                ? "Form N-CSR (認證年度股東報告)" 
                : "Form N-CSR (Certified Annual Shareholder Report)"}
            </SelectItem>
            <SelectItem value="N-CSR/A">
              {language === "zh" 
                ? "Form N-CSR/A (認證年度股東報告修正)" 
                : "Form N-CSR/A (Amended Certified Shareholder Report)"}
            </SelectItem>
            <SelectItem value="N-CSRS">
              {language === "zh" 
                ? "Form N-CSRS (認證半年度報告)" 
                : "Form N-CSRS (Certified Semiannual Report)"}
            </SelectItem>
            <SelectItem value="N-PX">
              {language === "zh" 
                ? "Form N-PX (代理投票記錄年度報告)" 
                : "Form N-PX (Annual Proxy Voting Record)"}
            </SelectItem>
            <SelectItem value="N-Q">
              {language === "zh" 
                ? "Form N-Q (季度投資組合持股報告)" 
                : "Form N-Q (Quarterly Portfolio Holdings Report)"}
            </SelectItem>
          </SelectGroup>
          
          {/* 8. Miscellaneous Filings */}
          <SelectGroup>
            <SelectLabel>
              {language === "zh" 
                ? "8. 其他雜項文件" 
                : "8. Miscellaneous Filings"}
            </SelectLabel>
            
            {/* 8.1 Termination and Withdrawal */}
            <SelectItem value="15-12B">
              {language === "zh" 
                ? "Form 15-12B (終止證券登記通知)" 
                : "Form 15-12B (Termination of Registration Notice)"}
            </SelectItem>
            <SelectItem value="15-12G">
              {language === "zh" 
                ? "Form 15-12G (終止證券登記通知)" 
                : "Form 15-12G (Termination of Registration Notice)"}
            </SelectItem>
            <SelectItem value="15-15D">
              {language === "zh" 
                ? "Form 15-15D (暫停提交報告義務通知)" 
                : "Form 15-15D (Suspension of Filing Duty Notice)"}
            </SelectItem>
            
            {/* 8.2 Rule 144 Sales */}
            <SelectItem value="144">
              {language === "zh" 
                ? "Form 144 (限制性證券銷售通告)" 
                : "Form 144 (Notice of Proposed Sale)"}
            </SelectItem>
            <SelectItem value="144/A">
              {language === "zh" 
                ? "Form 144/A (限制性證券銷售通告修正)" 
                : "Form 144/A (Amended Sale Notice)"}
            </SelectItem>
            
            {/* 8.3 Post-Effective and Special Purpose */}
            <SelectItem value="POS-AM">
              {language === "zh" 
                ? "POS AM (發生後修正文件)" 
                : "POS AM (Post-Effective Amendment)"}
            </SelectItem>
            <SelectItem value="POS-AMI">
              {language === "zh" 
                ? "POS AMI (1940法案專用發生後修正)" 
                : "POS AMI (Post-Effective Amendment for 1940 Act)"}
            </SelectItem>
            <SelectItem value="POSASR">
              {language === "zh" 
                ? "POSASR (自動架上登記發生後修正)" 
                : "POSASR (Post-Effective Amendment to Shelf Registration)"}
            </SelectItem>
            <SelectItem value="CORRESP">
              {language === "zh" 
                ? "CORRESP (SEC溝通函件)" 
                : "CORRESP (Correspondence with SEC)"}
            </SelectItem>
            <SelectItem value="RW">
              {language === "zh" 
                ? "Form RW (登記撤回申請)" 
                : "Form RW (Registration Withdrawal Request)"}
            </SelectItem>
            <SelectItem value="AW">
              {language === "zh" 
                ? "Form AW (申請撤回)" 
                : "Form AW (Application for Withdrawal)"}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DocumentTypeSelect;
