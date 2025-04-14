
import { useLanguage } from "@/providers/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-border bg-card py-6">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <span className="text-lg font-semibold tech-text-gradient">SECGPT</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          © {year} SECGPT. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
