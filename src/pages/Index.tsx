
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
        {/* Hero Section - Enhanced with background gradient */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secgpt-accent/20 via-background to-background"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="inline-block p-2 px-3 bg-secgpt-blue/10 rounded-full mb-4 animate-fade-in">
                <span className="text-secgpt-blue font-medium text-sm">AI 驅動的證券分析平台</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tech-text-gradient animate-fade-in">
                {t("home.title")}
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl max-w-[800px] animate-fade-in">
                {t("home.subtitle")}
              </p>
              <p className="text-lg text-muted-foreground max-w-[700px] animate-fade-in">
                {t("home.description")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-slide-in">
                <Link to="/analysis">
                  <Button size="lg" className="bg-gradient-to-r from-secgpt-blue to-secgpt-accent hover:from-secgpt-accent hover:to-secgpt-blue transition-all duration-300">
                    {t("home.cta")}
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button size="lg" variant="outline" className="border-secgpt-blue text-secgpt-blue hover:bg-secgpt-blue/10">
                    探索對話功能
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
                為什麼選擇 SECGPT？
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                SECGPT 為投資者和金融專業人士提供先進的 AI 工具，將複雜的 SEC 文件轉化為可操作的洞察
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform duration-300">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">節省時間</h3>
                <p className="text-muted-foreground">我們的 AI 可以在幾分鐘內分析長達數百頁的財務文件，為您節省數小時的閱讀時間。</p>
              </div>

              <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform duration-300">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">降低投資風險</h3>
                <p className="text-muted-foreground">通過全面分析公司披露信息，識別潛在風險因素和警示信號，幫助您做出明智的投資決策。</p>
              </div>

              <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform duration-300">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">競爭優勢</h3>
                <p className="text-muted-foreground">獲得專業金融分析師級別的洞察，快速了解公司財務健康狀況和發展趨勢。</p>
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
                {t("home.how_it_works.title")}
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                三個簡單步驟，讓您快速獲取 SEC 文件中的關鍵信息
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
                <h3 className="text-xl font-semibold">{t("home.how_it_works.step1.title")}</h3>
                <p className="text-muted-foreground">{t("home.how_it_works.step1.description")}</p>
                <p className="text-sm text-secgpt-blue">支持 PDF、DOC、HTML 等多種格式</p>
              </div>

              {/* Step 2 */}
              <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 relative z-10 hover:scale-105 transition-transform duration-300">
                <div className="h-16 w-16 rounded-full bg-secgpt-blue/20 flex items-center justify-center mb-4 relative">
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-secgpt-blue text-white flex items-center justify-center text-sm font-bold">2</span>
                  <Cpu className="h-8 w-8 text-secgpt-blue" />
                </div>
                <h3 className="text-xl font-semibold">{t("home.how_it_works.step2.title")}</h3>
                <p className="text-muted-foreground">{t("home.how_it_works.step2.description")}</p>
                <p className="text-sm text-secgpt-blue">採用最先進的大語言模型解析</p>
              </div>

              {/* Step 3 */}
              <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 relative z-10 hover:scale-105 transition-transform duration-300">
                <div className="h-16 w-16 rounded-full bg-secgpt-blue/20 flex items-center justify-center mb-4 relative">
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-secgpt-blue text-white flex items-center justify-center text-sm font-bold">3</span>
                  <Layers className="h-8 w-8 text-secgpt-blue" />
                </div>
                <h3 className="text-xl font-semibold">{t("home.how_it_works.step3.title")}</h3>
                <p className="text-muted-foreground">{t("home.how_it_works.step3.description")}</p>
                <p className="text-sm text-secgpt-blue">可視化數據展示與自然語言解釋</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-16 md:py-24 bg-background/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tech-text-gradient mb-4">
                {t("home.features")}
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                我們的先進功能使 SEC 文件分析變得簡單而強大
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
                  <p className="text-sm text-secgpt-blue">支持 10-K、10-Q、8-K 等多種 SEC 文件格式</p>
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
                  <p className="text-sm text-secgpt-blue">以自然語言提問，獲取專業金融分析</p>
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
                  <p className="text-sm text-secgpt-blue">準確提取關鍵財務數據和趨勢</p>
                </CardFooter>
              </Card>

              {/* Feature 4 */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border-secgpt-blue/20">
                <CardHeader className="space-y-1">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <AreaChart className="h-6 w-6 text-secgpt-blue" />
                  </div>
                  <CardTitle className="text-xl">趨勢分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    識別和可視化關鍵財務指標的歷史趨勢，幫助您了解公司業績的長期發展方向。
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-secgpt-blue">多年度財務數據比較與圖表展示</p>
                </CardFooter>
              </Card>

              {/* Feature 5 */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border-secgpt-blue/20">
                <CardHeader className="space-y-1">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Building className="h-6 w-6 text-secgpt-blue" />
                  </div>
                  <CardTitle className="text-xl">競爭對手比較</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    將目標公司與同行業競爭對手進行並排比較，深入了解其相對優勢和潛在風險。
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-secgpt-blue">行業對標分析與競爭格局評估</p>
                </CardFooter>
              </Card>

              {/* Feature 6 */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border-secgpt-blue/20">
                <CardHeader className="space-y-1">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <CheckCircle className="h-6 w-6 text-secgpt-blue" />
                  </div>
                  <CardTitle className="text-xl">合規審查</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    自動識別和標記公司報告中的合規問題和信息披露異常，減少法律和監管風險。
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-secgpt-blue">監管合規風險提前預警</p>
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
                適用場景
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                SECGPT 為各類用戶提供強大的文檔分析支持
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="glass-card p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-secgpt-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">投資者和分析師</h3>
                    <p className="text-muted-foreground mb-4">
                      快速分析上市公司財務報表，識別投資機會和風險，節省研究時間，做出更明智的投資決策。
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-secgpt-success" />
                        <span>財務健康狀況快速評估</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-secgpt-success" />
                        <span>主要風險因素識別</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-secgpt-success" />
                        <span>管理層討論與分析摘要</span>
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
                    <h3 className="text-xl font-semibold mb-3">企業與法律專業人士</h3>
                    <p className="text-muted-foreground mb-4">
                      協助企業審查競爭對手的披露文件，了解行業趨勢，同時幫助法律專業人士進行盡職調查和合規審查。
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-secgpt-success" />
                        <span>競爭情報收集</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-secgpt-success" />
                        <span>合規審查自動化</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-secgpt-success" />
                        <span>行業標準與最佳實踐對比</span>
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
                立即體驗 SECGPT 強大功能
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                從今天開始，讓 AI 幫助您分析 SEC 文件，節省時間並獲取關鍵洞察
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/analysis">
                  <Button size="lg" className="bg-gradient-to-r from-secgpt-blue to-secgpt-accent hover:from-secgpt-accent hover:to-secgpt-blue transition-all duration-300">
                    開始分析文件
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button size="lg" variant="outline" className="border-secgpt-blue text-secgpt-blue hover:bg-secgpt-blue/10">
                    試用對話功能
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
