
import React from 'react';
import { useLanguage } from "@/providers/LanguageProvider";
import { Github } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-border bg-card py-6">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex items-center justify-center space-x-4">
          <span className="text-lg font-semibold tech-text-gradient">SECGPT</span>
          <a 
            href="https://github.com/MarkLo127/secgpt" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-75 transition-opacity"
          >
            <Github 
              className="text-muted-foreground hover:text-foreground" 
              size={24} 
            />
          </a>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          © {year} SECGPT. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
