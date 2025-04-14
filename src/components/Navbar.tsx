import { Link } from "react-router-dom";
import { useTheme } from "@/providers/ThemeProvider";
import { useLanguage } from "@/providers/LanguageProvider";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Moon, Sun, Laptop, Globe } from "lucide-react";
export default function Navbar() {
  const {
    theme,
    setTheme
  } = useTheme();
  const {
    language,
    setLanguage,
    t
  } = useLanguage();
  return <nav className="w-full backdrop-blur-sm bg-background/80 sticky top-0 z-50 border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold tech-text-gradient">SECGPT</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/">
            
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">{t("nav.language")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>
                {t("language.english")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("zh")}>
                {t("language.chinese")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                {theme === "light" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : theme === "dark" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Laptop className="h-[1.2rem] w-[1.2rem]" />}
                <span className="sr-only">{t("nav.theme")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="mr-2 h-4 w-4" />
                <span>{t("theme.light")}</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                <span>{t("theme.dark")}</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Laptop className="mr-2 h-4 w-4" />
                <span>{t("theme.system")}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>;
}