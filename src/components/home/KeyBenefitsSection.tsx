
import { Clock, Shield, Award } from "lucide-react";

const KeyBenefitsSection = () => {
  return (
    <section className="py-16 bg-background/80">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tech-text-gradient mb-4">
            Why Choose SECGPT?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            SECGPT provides advanced AI tools for investors and financial professionals, transforming complex SEC documents into actionable insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Time Efficiency</h3>
            <p className="text-muted-foreground">Our AI analyzes hundreds of pages of financial documents in minutes, saving you hours of manual reading.</p>
          </div>

          <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Risk Reduction</h3>
            <p className="text-muted-foreground">Comprehensive analysis of company disclosures helps identify potential risk factors and warning signals for informed investment decisions.</p>
          </div>

          <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Competitive Intelligence</h3>
            <p className="text-muted-foreground">Gain professional-level financial insights, quickly understanding company financial health and development trends.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;
