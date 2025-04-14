
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-20 text-center">
      <div className="container px-4 md:px-6">
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tech-text-gradient mb-6">
            Experience SECGPT's Powerful Features Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start using AI to analyze SEC documents, save time, and gain key insights
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/analysis">
              <Button size="lg" className="bg-gradient-to-r from-secgpt-blue to-secgpt-accent hover:from-secgpt-accent hover:to-secgpt-blue transition-all duration-300">
                Start Document Analysis
              </Button>
            </Link>
            <Link to="/chat">
              <Button size="lg" variant="outline" className="border-secgpt-blue text-secgpt-blue hover:bg-secgpt-blue/10">
                Try Conversation Features
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
