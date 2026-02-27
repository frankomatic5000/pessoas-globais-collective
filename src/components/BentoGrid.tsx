const articles = [
  {
    category: "Ciência",
    title: "O Futuro da Inteligência Artificial na Medicina Brasileira",
    excerpt: "Como hospitais de referência estão usando IA para diagnósticos mais precisos.",
    size: "large",
  },
  {
    category: "Saúde",
    title: "Microbioma: O Universo Dentro de Nós",
    excerpt: "Novas descobertas sobre bactérias intestinais mudam o entendimento da saúde mental.",
    size: "small",
  },
  {
    category: "Tecnologia",
    title: "Cidades Inteligentes na América Latina",
    excerpt: "Projetos urbanísticos que estão transformando a vida de milhões.",
    size: "small",
  },
  {
    category: "Pessoas",
    title: "A Jornada de Líderes que Mudam o Mundo",
    excerpt: "Perfis inspiradores de visionários que conectam ciência e humanidade.",
    size: "medium",
  },
  {
    category: "Podcast",
    title: "Episódio 42: Empatia Digital",
    excerpt: "Como a tecnologia pode nos aproximar ao invés de nos afastar.",
    size: "medium",
  },
];

const categoryColors: Record<string, string> = {
  Ciência: "bg-primary/10 text-primary",
  Saúde: "bg-emerald-100 text-emerald-700",
  Tecnologia: "bg-blue-100 text-blue-700",
  Pessoas: "bg-amber-100 text-amber-700",
  Podcast: "bg-violet-100 text-violet-700",
};

const BentoGrid = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Artigos em Destaque
            </h2>
            <p className="font-sans text-muted-foreground mt-2">As matérias mais lidas desta edição</p>
          </div>
          <a href="#" className="hidden md:inline-flex font-sans text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            Ver Todos →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Large card */}
          <div className="md:col-span-2 lg:row-span-2 group">
            <div className="relative h-full min-h-[320px] bg-secondary rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.01]">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 ${categoryColors[articles[0].category]}`}>
                  {articles[0].category}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-secondary-foreground mb-2 group-hover:text-primary transition-colors">
                  {articles[0].title}
                </h3>
                <p className="font-sans text-sm text-secondary-foreground/70 max-w-md">
                  {articles[0].excerpt}
                </p>
              </div>
            </div>
          </div>

          {/* Remaining cards */}
          {articles.slice(1).map((article, i) => (
            <div key={i} className="group">
              <div className="h-full bg-card rounded-2xl border border-border p-6 cursor-pointer hover:shadow-lg hover:shadow-foreground/5 transition-all hover:-translate-y-1">
                <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4 ${categoryColors[article.category]}`}>
                  {article.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt}
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
