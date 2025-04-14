import { FileText, Search, BarChart, AreaChart, Building, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/providers/LanguageProvider";

const KeyFeaturesSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-background/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tech-text-gradient mb-4">
            {t("home.features")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t("home.description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-secgpt-blue/20">
            <CardHeader className="space-y-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <FileText className="h-6 w-6 text-secgpt-blue" />
              </div>
              <CardTitle className="text-xl">{t("home.feature1.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t("home.feature1.description")}
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-secgpt-blue">{t("analysis.document.category1")}</p>
            </CardFooter>
          </Card>

          {/* Feature 2 */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-secgpt-blue/20">
            <CardHeader className="space-y-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Search className="h-6 w-6 text-secgpt-blue" />
              </div>
              <CardTitle className="text-xl">{t("home.feature2.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t("home.feature2.description")}
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-secgpt-blue">{t("chat.placeholder")}</p>
            </CardFooter>
          </Card>

          {/* Feature 3 */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-secgpt-blue/20">
            <CardHeader className="space-y-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <BarChart className="h-6 w-6 text-secgpt-blue" />
              </div>
              <CardTitle className="text-xl">{t("home.feature3.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t("home.feature3.description")}
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-secgpt-blue">{t("analysis.document.category3")}</p>
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
  );
};

export default KeyFeaturesSection;
