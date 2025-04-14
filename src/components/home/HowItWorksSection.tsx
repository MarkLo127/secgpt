
import { Upload, Cpu, Layers } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/70 to-background"></div>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tech-text-gradient mb-4">
            How SECGPT Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Three simple steps to quickly extract key information from SEC documents
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-secgpt-blue via-secgpt-accent to-secgpt-blue transform -translate-y-1/2 z-0"></div>
          
          {/* Step 1 */}
          <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 relative z-10 hover:scale-105 transition-transform duration-300">
            <div className="h-16 w-16 rounded-full bg-secgpt-blue/20 flex items-center justify-center mb-4 relative">
              <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-secgpt-blue text-white flex items-center justify-center text-sm font-bold">1</span>
              <Upload className="h-8 w-8 text-secgpt-blue" />
            </div>
            <h3 className="text-xl font-semibold">Upload Documents</h3>
            <p className="text-muted-foreground">Easily upload SEC documents from various sources and formats.</p>
            <p className="text-sm text-secgpt-blue">Supports PDF, DOC, HTML and more</p>
          </div>

          {/* Step 2 */}
          <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 relative z-10 hover:scale-105 transition-transform duration-300">
            <div className="h-16 w-16 rounded-full bg-secgpt-blue/20 flex items-center justify-center mb-4 relative">
              <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-secgpt-blue text-white flex items-center justify-center text-sm font-bold">2</span>
              <Cpu className="h-8 w-8 text-secgpt-blue" />
            </div>
            <h3 className="text-xl font-semibold">AI Processing</h3>
            <p className="text-muted-foreground">Our advanced AI agent processes and comprehends complex financial text.</p>
            <p className="text-sm text-secgpt-blue">Powered by state-of-the-art language models</p>
          </div>

          {/* Step 3 */}
          <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 relative z-10 hover:scale-105 transition-transform duration-300">
            <div className="h-16 w-16 rounded-full bg-secgpt-blue/20 flex items-center justify-center mb-4 relative">
              <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-secgpt-blue text-white flex items-center justify-center text-sm font-bold">3</span>
              <Layers className="h-8 w-8 text-secgpt-blue" />
            </div>
            <h3 className="text-xl font-semibold">Instant Insights</h3>
            <p className="text-muted-foreground">Receive clear, concise summaries and actionable intelligence.</p>
            <p className="text-sm text-secgpt-blue">Visualized data and natural language explanation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
