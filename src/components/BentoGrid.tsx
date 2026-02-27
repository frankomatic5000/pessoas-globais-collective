import { useLanguage } from "@/contexts/LanguageContext";

const categoryColors: Record<string, string> = {
  "nav.science": "bg-primary/10 text-primary",
  "nav.health": "bg-emerald-100 text-emerald-700",
  "nav.technology": "bg-blue-100 text-blue-700",
  "nav.people": "bg-amber-100 text-amber-700",
  "nav.podcast": "bg-violet-100 text-violet-700",
};

const articles = [
  { categoryKey: "nav.science", titleKey: "bento.art1_title", excerptKey: "bento.art1_excerpt" },
  { categoryKey: "nav.health", titleKey: "bento.art2_title", excerptKey: "bento.art2_excerpt" },
  { categoryKey: "nav.technology", titleKey: "bento.art3_title", excerptKey: "bento.art3_excerpt" },
  { categoryKey: "nav.people", titleKey: "bento.art4_title", excerptKey: "bento.art4_excerpt" },
  { categoryKey: "nav.podcast", titleKey: "bento.art5_title", excerptKey: "bento.art5_excerpt" },
];

const BentoGrid = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              {t("bento.title")}
            </h2>
            <p className="font-sans text-muted-foreground mt-2">{t("bento.subtitle")}</p>
          </div>
          <a href="#" className="hidden md:inline-flex font-sans text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            {t("bento.see_all")}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Large card */}
          <div className="md:col-span-2 lg:row-span-2 group">
            <div className="relative h-full min-h-[320px] bg-secondary rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.01]">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 ${categoryColors[articles[0].categoryKey]}`}>
                  {t(articles[0].categoryKey)}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-secondary-foreground mb-2 group-hover:text-primary transition-colors">
                  {t(articles[0].titleKey)}
                </h3>
                <p className="font-sans text-sm text-secondary-foreground/70 max-w-md">
                  {t(articles[0].excerptKey)}
                </p>
              </div>
            </div>
          </div>

          {/* Remaining cards */}
          {articles.slice(1).map((article, i) => (
            <div key={i} className="group">
              <div className="h-full bg-card rounded-2xl border border-border p-6 cursor-pointer hover:shadow-lg hover:shadow-foreground/5 transition-all hover:-translate-y-1">
                <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4 ${categoryColors[article.categoryKey]}`}>
                  {t(article.categoryKey)}
                </span>
                <h3 className="font-serif text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {t(article.titleKey)}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {t(article.excerptKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
