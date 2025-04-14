
import React from "react";
import { FileText } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Upload } from "lucide-react";
import { FormData } from "../types";
import ApiInputForm from "./ApiInputForm";
import FileUploadForm from "./FileUploadForm";

interface AnalysisCardProps {
  formData: FormData;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDocTypeChange: (value: string) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const AnalysisCard = ({
  formData,
  activeTab,
  setActiveTab,
  handleChange,
  handleDocTypeChange,
  handleFileChange,
  handleSubmit,
}: AnalysisCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="glass-card shadow-lg border-opacity-50 animate-slide-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-secgpt-accent" />
          {t("analysis.title")}
        </CardTitle>
        <CardDescription>
          {t("analysis.subtitle")}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="api" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="api" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Fetch via API
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Document
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="api">
            <ApiInputForm 
              formData={formData} 
              handleChange={handleChange} 
              handleDocTypeChange={handleDocTypeChange} 
              handleSubmit={handleSubmit} 
            />
          </TabsContent>
          
          <TabsContent value="upload">
            <FileUploadForm 
              formData={formData} 
              handleChange={handleChange} 
              handleDocTypeChange={handleDocTypeChange} 
              handleFileChange={handleFileChange} 
              handleSubmit={handleSubmit} 
            />
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter className="flex justify-end pt-4">
        <Button 
          onClick={handleSubmit} 
          className="w-full md:w-auto transition-all hover:scale-105 bg-gradient-to-r from-secgpt-blue to-secgpt-accent hover:shadow-lg group"
        >
          {t("analysis.submit")}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AnalysisCard;
