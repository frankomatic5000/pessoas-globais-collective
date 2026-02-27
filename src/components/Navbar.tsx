import { Search, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useLanguage } from "@/contexts/LanguageContext";

const navKeys = ["nav.science", "nav.health", "nav.technology", "nav.people", "nav.podcast"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Pessoas Globais" className="h-9" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navKeys.map((key) => (
            <a
              key={key}
              href="#"
              className="font-sans text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <Menu size={20} />
          </button>
          <a
            href="#"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-lg bg-primary text-primary-foreground font-sans text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            {t("nav.subscribe")}
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-4 animate-fade-in">
          {navKeys.map((key) => (
            <a
              key={key}
              href="#"
              className="block py-2 font-sans text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
            >
              {t(key)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
