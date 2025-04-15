
export interface DocumentTypeOption {
  value: string;
  labelEn: string;
  labelZh: string;
}

export interface DocumentTypeCategory {
  groupLabelEn: string;
  groupLabelZh: string;
  options: DocumentTypeOption[];
}

export const documentTypeCategories: DocumentTypeCategory[] = [
  {
    groupLabelEn: "1. Registration and Issuance Filings",
    groupLabelZh: "1. 登記與發行文件",
    options: [
      // S-Series Filings
      { value: "S-1", labelEn: "Initial Registration Statement for IPO", labelZh: "首次公開發行登記聲明" },
      { value: "S-1/A", labelEn: "Amended Initial Registration", labelZh: "首次公開發行登記聲明修正" },
      { value: "S-2", labelEn: "Registration for Companies with Operating History", labelZh: "具運作歷史公司登記聲明" },
      { value: "S-3", labelEn: "Simplified Registration for Seasoned Companies", labelZh: "成熟公司簡化登記聲明" },
      { value: "S-3/A", labelEn: "Amended Simplified Registration", labelZh: "成熟公司簡化登記聲明修正" },
      { value: "S-4", labelEn: "Registration for Business Combinations", labelZh: "併購交易登記聲明" },
      { value: "S-4/A", labelEn: "Amended Business Combinations Registration", labelZh: "併購交易登記聲明修正" },
      { value: "S-6", labelEn: "Unit Investment Trust Registration", labelZh: "單位投資信託登記聲明" },
      { value: "S-8", labelEn: "Employee Benefit Plans Registration", labelZh: "員工福利計劃登記" },
      { value: "S-11", labelEn: "REIT Registration", labelZh: "房地產投資信託登記" },
      { value: "S-11/A", labelEn: "Amended REIT Registration", labelZh: "房地產投資信託登記修正" },
      
      // F-Series Filings
      { value: "F-1", labelEn: "Foreign Issuer Initial Registration", labelZh: "外國發行人初次登記聲明" },
      { value: "F-1/A", labelEn: "Amended Foreign Issuer Registration", labelZh: "外國發行人初次登記修正" },
      { value: "F-3", labelEn: "Foreign Issuer Simplified Registration", labelZh: "外國發行人簡化登記聲明" },
      { value: "F-3/A", labelEn: "Amended Foreign Simplified Registration", labelZh: "外國發行人簡化登記修正" },
      { value: "F-4", labelEn: "Foreign Issuer Business Combination", labelZh: "外國發行人併購登記" },
      { value: "F-4/A", labelEn: "Amended Foreign Business Combination", labelZh: "外國發行人併購登記修正" },
      { value: "F-6", labelEn: "American Depositary Receipts Registration", labelZh: "美國存托憑證登記" },
      { value: "F-6/A", labelEn: "Amended ADR Registration", labelZh: "美國存托憑證登記修正" },
      { value: "F-6EF", labelEn: "Auto-effective ADR Registration", labelZh: "自動生效ADR登記" },
      { value: "F-7", labelEn: "Canadian Issuer Cash Offering", labelZh: "加拿大發行人現金認購登記" },
      { value: "F-8", labelEn: "Canadian Issuer Exchange Offering", labelZh: "加拿大發行人交換登記" },
      { value: "F-9", labelEn: "Canadian Investment Grade Securities", labelZh: "加拿大投資級債券登記" },
      { value: "F-10", labelEn: "Additional Canadian Issuer Registration", labelZh: "加拿大發行人其他登記" },
      { value: "F-80", labelEn: "Canadian Issuer Exchange Transactions", labelZh: "加拿大發行人交換交易登記" },
      
      // Regulation A Filings
      { value: "1-A", labelEn: "Regulation A Offering Statement", labelZh: "Regulation A募集說明書" },
      { value: "1-A/A", labelEn: "Amended Regulation A Offering", labelZh: "Regulation A募集說明書修正" },
      { value: "1-A-POS", labelEn: "Post-effective Amendment", labelZh: "發生後修正文件" },
      { value: "1-A-W", labelEn: "Withdrawal of Regulation A Offering", labelZh: "撤回Regulation A募集" },
    ]
  },
  {
    groupLabelEn: "2. Periodic Report Filings",
    groupLabelZh: "2. 定期報告文件",
    options: [
      // Annual Reports
      { value: "10-K", labelEn: "Annual Report", labelZh: "年度報告" },
      { value: "10-K/A", labelEn: "Annual Report Amendment", labelZh: "年度報告修正" },
      { value: "20-F", labelEn: "Foreign Issuer Annual Report", labelZh: "外國發行人年度報告" },
      { value: "20-F/A", labelEn: "Foreign Annual Report Amendment", labelZh: "外國發行人年度報告修正" },
      { value: "40-F", labelEn: "Canadian Company Annual Report", labelZh: "加拿大公司年度報告" },
      { value: "40-F/A", labelEn: "Canadian Annual Report Amendment", labelZh: "加拿大公司年度報告修正" },
      { value: "NSAR-A", labelEn: "Investment Company Semiannual Report", labelZh: "投資公司半年度報告" },
      { value: "NSAR-B", labelEn: "Investment Company Annual Report", labelZh: "投資公司年度報告" },
      
      // Quarterly Reports
      { value: "10-Q", labelEn: "Quarterly Report", labelZh: "季度報告" },
      { value: "10-Q/A", labelEn: "Quarterly Report Amendment", labelZh: "季度報告修正" },
      { value: "10-QT", labelEn: "Transition Quarterly Report", labelZh: "過渡性季度報告" },
      { value: "10-KT", labelEn: "Transition Annual Report", labelZh: "過渡性年度報告" },
    ]
  },
  {
    groupLabelEn: "3. Current (Event) Reports",
    groupLabelZh: "3. 即時報告文件",
    options: [
      { value: "8-K", labelEn: "Current Report", labelZh: "重大事件即時報告" },
      { value: "8-K/A", labelEn: "Current Report Amendment", labelZh: "重大事件報告修正" },
      { value: "6-K", labelEn: "Foreign Issuer Current Report", labelZh: "外國發行人即時報告" },
      { value: "6-K/A", labelEn: "Foreign Current Report Amendment", labelZh: "外國發行人即時報告修正" },
    ]
  },
  {
    groupLabelEn: "4. Insider and Institutional Disclosures",
    groupLabelZh: "4. 內部人持股及機構披露文件",
    options: [
      // Insider Filings
      { value: "3", labelEn: "Initial Statement of Beneficial Ownership", labelZh: "首次披露內部人持股" },
      { value: "4", labelEn: "Changes in Beneficial Ownership", labelZh: "內部人持股變動報告" },
      { value: "4/A", labelEn: "Amended Ownership Change Report", labelZh: "內部人持股變動報告修正" },
      { value: "5", labelEn: "Annual Statement of Beneficial Ownership", labelZh: "年度內部人持股報告" },
      { value: "5/A", labelEn: "Amended Annual Ownership Report", labelZh: "年度內部人持股報告修正" },
      
      // Institutional Filings
      { value: "13F-HR", labelEn: "Institutional Investment Manager Holdings", labelZh: "機構投資者季度持股報告" },
      { value: "13F-HR/A", labelEn: "Amended Institutional Holdings", labelZh: "機構持股報告修正" },
      { value: "13F-NT", labelEn: "Notice Report of Institutional Holdings", labelZh: "機構持股通知報告" },
      { value: "13H", labelEn: "Initial Large Trader Report", labelZh: "大額投資者初始報告" },
      { value: "SC-13D", labelEn: "Beneficial Ownership Report >5%", labelZh: "5%以上股份收購聲明" },
      { value: "SC-13D/A", labelEn: "Amended Ownership Report >5%", labelZh: "5%以上股份收購修正" },
      { value: "SC-13G", labelEn: "Simplified Ownership Report for Passive Investors", labelZh: "被動投資者簡化披露" },
      { value: "SC-13G/A", labelEn: "Amended Passive Investor Report", labelZh: "被動投資者披露修正" },
    ]
  },
  {
    groupLabelEn: "5. Proxy and Corporate Governance Filings",
    groupLabelZh: "5. 股東投票及公司治理文件",
    options: [
      // Definitive Proxy Statements
      { value: "DEF-14A", labelEn: "Definitive Proxy Statement", labelZh: "正式股東委任書" },
      { value: "DEF-14C", labelEn: "Definitive Information Statement", labelZh: "正式資訊說明書" },
      { value: "DEFA14A", labelEn: "Additional Proxy Soliciting Materials", labelZh: "補充代理材料" },
      { value: "DEFC14A", labelEn: "Contested Solicitations Proxy", labelZh: "爭議性代理書" },
      { value: "DEFM14A", labelEn: "Merger Proxy Statement", labelZh: "併購相關代理書" },
      { value: "DEFN14A", labelEn: "Non-management Proxy Statement", labelZh: "非管理層代理書" },
      
      // Preliminary Proxy Materials
      { value: "PRE-14A", labelEn: "Preliminary Proxy Statement", labelZh: "初步代理書" },
      { value: "PRE-14C", labelEn: "Preliminary Information Statement", labelZh: "初步資訊說明書" },
      { value: "PREM14A", labelEn: "Preliminary Merger Proxy", labelZh: "併購初步代理書" },
      { value: "PREN14A", labelEn: "Preliminary Non-management Proxy", labelZh: "非管理層初步代理書" },
    ]
  },
  {
    groupLabelEn: "6. Tender Offer and M&A Filings",
    groupLabelZh: "6. 收購要約與併購相關文件",
    options: [
      { value: "SC-TO-T", labelEn: "Third-party Tender Offer", labelZh: "第三方收購要約" },
      { value: "SC-14D9", labelEn: "Tender Offer Solicitation", labelZh: "收購邀約徵求說明" },
      { value: "SC-14D9/A", labelEn: "Amended Tender Offer Solicitation", labelZh: "收購邀約說明修正" },
      { value: "SC-14F1", labelEn: "Change in Majority of Directors", labelZh: "董事變動說明" },
    ]
  },
  {
    groupLabelEn: "7. Investment Company Filings",
    groupLabelZh: "7. 投資公司專用文件",
    options: [
      // Investment Company Registration
      { value: "N-1A", labelEn: "Mutual Fund Registration", labelZh: "共同基金註冊聲明" },
      { value: "N-1A/A", labelEn: "Amended Mutual Fund Registration", labelZh: "共同基金註冊修正" },
      { value: "N-2", labelEn: "Closed-End Fund Registration", labelZh: "封閉式投資公司註冊" },
      { value: "N-2/A", labelEn: "Amended Closed-End Fund Registration", labelZh: "封閉式投資公司註冊修正" },
      { value: "N-3", labelEn: "Separate Accounts Registration", labelZh: "管理投資公司獨立賬戶註冊" },
      { value: "N-4", labelEn: "Unit Investment Trust Registration", labelZh: "單位投資信託註冊" },
      { value: "N-14", labelEn: "Investment Company Business Combination", labelZh: "投資公司併購登記" },
      
      // Investment Company Periodic Reports
      { value: "N-CSR", labelEn: "Certified Annual Shareholder Report", labelZh: "認證年度股東報告" },
      { value: "N-CSR/A", labelEn: "Amended Certified Shareholder Report", labelZh: "認證年度股東報告修正" },
      { value: "N-CSRS", labelEn: "Certified Semiannual Report", labelZh: "認證半年度報告" },
      { value: "N-PX", labelEn: "Annual Proxy Voting Record", labelZh: "代理投票記錄年度報告" },
      { value: "N-Q", labelEn: "Quarterly Portfolio Holdings Report", labelZh: "季度投資組合持股報告" },
    ]
  },
  {
    groupLabelEn: "8. Miscellaneous Filings",
    groupLabelZh: "8. 其他雜項文件",
    options: [
      // Termination and Withdrawal
      { value: "15-12B", labelEn: "Termination of Registration Notice", labelZh: "終止證券登記通知" },
      { value: "15-12G", labelEn: "Termination of Registration Notice", labelZh: "終止證券登記通知" },
      { value: "15-15D", labelEn: "Suspension of Filing Duty Notice", labelZh: "暫停提交報告義務通知" },
      
      // Rule 144 Sales
      { value: "144", labelEn: "Notice of Proposed Sale", labelZh: "限制性證券銷售通告" },
      { value: "144/A", labelEn: "Amended Sale Notice", labelZh: "限制性證券銷售通告修正" },
      
      // Post-Effective and Special Purpose
      { value: "POS-AM", labelEn: "Post-Effective Amendment", labelZh: "發生後修正文件" },
      { value: "POS-AMI", labelEn: "Post-Effective Amendment for 1940 Act", labelZh: "1940法案專用發生後修正" },
      { value: "POSASR", labelEn: "Post-Effective Amendment to Shelf Registration", labelZh: "自動架上登記發生後修正" },
      { value: "CORRESP", labelEn: "Correspondence with SEC", labelZh: "SEC溝通函件" },
      { value: "RW", labelEn: "Registration Withdrawal Request", labelZh: "登記撤回申請" },
      { value: "AW", labelEn: "Application for Withdrawal", labelZh: "申請撤回" },
    ]
  }
];
