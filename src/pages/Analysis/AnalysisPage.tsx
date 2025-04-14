
import { useLanguage } from "@/providers/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnalysisHeader from "./components/AnalysisHeader";
import AnalysisCard from "./components/AnalysisCard";
import AnalysisFooterNote from "./components/AnalysisFooterNote";
import { useAnalysisForm } from "./hooks/useAnalysisForm";

const AnalysisPage = () => {
  const { t } = useLanguage();
  
  const {
    formData,
    activeTab,
    setActiveTab,
    handleChange,
    handleDocTypeChange,
    handleFileChange,
    handleSubmit,
  } = useAnalysisForm();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container py-12 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <AnalysisHeader />
          
          <AnalysisCard 
            formData={formData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            handleChange={handleChange}
            handleDocTypeChange={handleDocTypeChange}
            handleFileChange={handleFileChange}
            handleSubmit={handleSubmit}
          />
          
          <AnalysisFooterNote />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AnalysisPage;
