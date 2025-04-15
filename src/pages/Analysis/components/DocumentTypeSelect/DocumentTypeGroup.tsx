
import React from "react";
import { SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";

interface DocumentTypeOption {
  value: string;
  labelEn: string;
  labelZh: string;
}

interface DocumentTypeGroupProps {
  groupLabelEn: string;
  groupLabelZh: string;
  options: DocumentTypeOption[];
  language: string;
}

export const DocumentTypeGroup = ({
  groupLabelEn,
  groupLabelZh,
  options,
  language,
}: DocumentTypeGroupProps) => {
  return (
    <SelectGroup>
      <SelectLabel>
        {language === "zh" ? groupLabelZh : groupLabelEn}
      </SelectLabel>
      
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {language === "zh"
            ? `${option.value} (${option.labelZh})`
            : `${option.value} (${option.labelEn})`}
        </SelectItem>
      ))}
    </SelectGroup>
  );
};
