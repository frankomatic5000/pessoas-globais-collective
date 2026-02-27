import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  const options: Language[] = ["pt", "en"];

  return (
    <div className="flex items-center rounded-md border border-border overflow-hidden text-xs font-sans font-semibold">
      {options.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-2.5 py-1.5 uppercase transition-colors ${
            language === lang
              ? "bg-primary text-primary-foreground"
              : "bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
