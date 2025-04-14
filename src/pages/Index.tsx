import { useLanguage } from "@/providers/LanguageProvider";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  BarChart, 
  Search, 
  FileText, 
  Zap, 
  Layers, 
  Cpu, 
  Upload,
  AreaChart,
  LineChart,
  PieChart,
  Building,
  Clock,
  Users,
  CheckCircle,
  Award,
  Shield
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secgpt-accent/20 via-background to-background"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="inline-block p-2 px-3 bg-secgpt-blue/10 rounded-full mb-4 animate-fade-in">
                <span className="text-secgpt-blue font-medium text-sm">AI-Powered SEC Document Analysis</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tech-text-gradient animate-fade-in">
                SECGPT - Intelligent Financial Document Processing
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl max-w-[800px] animate-fade-in">
                Transform Complex Financial Documents into Actionable Insights
              </p>
              <p className="text-lg text-muted-foreground max-w-[700px] animate-fade-in">
                Leverage cutting-edge AI technology to instantly analyze and extract critical information from SEC filings, saving you time and providing deep financial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-slide-in">
                <Link to="/analysis">
                  <Button size="lg" className="bg-gradient-to-r from-secgpt-blue to-secgpt-accent hover:from-secgpt-accent hover:to-secgpt-blue transition-all duration-300">
                    Start Analyzing
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button size="lg" variant="outline" className="border-secgpt-blue text-secgpt-blue hover:bg-secgpt-blue/10">
                    Explore Conversational AI
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
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

        {/* How It Works Section - Reimagined with visual flow */}
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

        {/* Core Features Section */}
        <section className="py-16 md:py-24 bg-background/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tech-text-gradient mb-4">
                Key Features
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our advanced features make SEC document analysis simple yet powerful
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border-secgpt-blue/20">
                <CardHeader className="space-y-1">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <FileText className="h-6 w-6 text-secgpt-blue" />
                  </div>
                  <CardTitle className="text-xl">Comprehensive Document Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Analyze various SEC documents including 10-K, 10-Q, 8-K, and more with precision.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-secgpt-blue">Supports multiple SEC document formats</p>
                </CardFooter>
              </Card>

              {/* Feature 2 */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border-secgpt-blue/20">
                <CardHeader className="space-y-1">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Search className="h-6 w-6 text-secgpt-blue" />
                  </div>
                  <CardTitle className="text-xl">Natural Language Queries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ask complex questions about financial filings and get accurate, contextual responses.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-secgpt-blue">Ask questions in natural language, get professional financial analysis</p>
                </CardFooter>
              </Card>

              {/* Feature 3 */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border-secgpt-blue/20">
                <CardHeader className="space-y-1">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <BarChart className="h-6 w-6 text-secgpt-blue" />
                  </div>
                  <CardTitle className="text-xl">Advanced Data Extraction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Extract specific financial data points and insights from complex documents quickly.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-secgpt-blue">Accurately extract key financial data and trends</p>
                </CardFooter>
              </Card>

              {/* Feature 4 */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border-secgpt-blue/20">
                <CardHeader className="space-y-1">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <AreaChart className="h-6 w-6 text-secgpt-blue" />
                  </div>
                  <CardTitle className="text-xl">Trend Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Identify and visualize historical trends in key financial metrics to understand the long-term direction of company performance.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-secgpt-blue">Multi-year financial data comparison and chart visualization</p>
                </CardFooter>
              </Card>

              {/* Feature 5 */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border-secgpt-blue/20">
                <CardHeader className="space-y-1">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Building className="h-6 w-6 text-secgpt-blue" />
                  </div>
                  <CardTitle className="text-xl">Competitor Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Compare target companies with industry competitors side-by-side to understand relative strengths and potential risks.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-secgpt-blue">Industry benchmarking and competitive landscape assessment</p>
                </CardFooter>
              </Card>

              {/* Feature 6 */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border-secgpt-blue/20">
                <CardHeader className="space-y-1">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <CheckCircle className="h-6 w-6 text-secgpt-blue" />
                  </div>
                  <CardTitle className="text-xl">Compliance Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automatically identify and flag compliance issues and disclosure anomalies in company reports to reduce legal and regulatory risks.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-secgpt-blue">Regulatory compliance risk early warning</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
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

        {/* Call to Action */}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
