
import { Users, Building, CheckCircle } from "lucide-react";

const UseCasesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secgpt-blue/5">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tech-text-gradient mb-4">
            Use Cases
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            SECGPT provides powerful document analysis support for various users
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-secgpt-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Investors and Analysts</h3>
                <p className="text-muted-foreground mb-4">
                  Quickly analyze financial statements of listed companies, identify investment opportunities and risks, save research time, and make more informed investment decisions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secgpt-success" />
                    <span>Rapid financial health assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secgpt-success" />
                    <span>Key risk factor identification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secgpt-success" />
                    <span>Management discussion and analysis summary</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Building className="h-6 w-6 text-secgpt-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Corporate and Legal Professionals</h3>
                <p className="text-muted-foreground mb-4">
                  Assist companies in reviewing competitors' disclosure documents, understanding industry trends, while helping legal professionals conduct due diligence and compliance reviews.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secgpt-success" />
                    <span>Competitive intelligence gathering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secgpt-success" />
                    <span>Compliance review automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secgpt-success" />
                    <span>Industry standards and best practices comparison</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
