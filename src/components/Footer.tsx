import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const footerLinks = ["footer.about", "footer.contact", "footer.terms", "footer.privacy"];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary py-12 border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Pessoas Globais" className="h-8 brightness-0 invert" />
          <div className="flex items-center gap-6">
            {footerLinks.map((key) => (
              <a
                key={key}
                href="#"
                className="font-sans text-sm text-secondary-foreground/50 hover:text-secondary-foreground transition-colors"
              >
                {t(key)}
              </a>
            ))}
          </div>
          <p className="font-sans text-xs text-secondary-foreground/40">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
