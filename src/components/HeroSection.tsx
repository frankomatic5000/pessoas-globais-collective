import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Typography */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="px-3 py-1 rounded-md bg-primary/10 text-primary font-sans text-xs font-bold uppercase tracking-widest">
                Destaque
              </span>
              <span className="text-muted-foreground font-sans text-sm">Edição Fevereiro 2026</span>
            </span>

            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              A Ciência por Trás das{" "}
              <span className="text-gradient-red italic">Conexões Humanas</span>
            </h1>

            <p
              className="font-sans text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              Carolina Vasconcelos revela como a neurociência está redefinindo a forma como nos conectamos — e por que isso
              importa mais do que nunca.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <a
                href="#"
                className="inline-flex items-center px-7 py-3 rounded-xl bg-primary text-primary-foreground font-sans text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Ler Artigo Completo
              </a>
              <a
                href="#"
                className="inline-flex items-center px-7 py-3 rounded-xl border border-border text-foreground font-sans text-sm font-semibold hover:bg-muted transition-colors"
              >
                Ouvir Podcast
              </a>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="relative order-1 lg:order-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10 aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              <img
                src={heroPortrait}
                alt="Carolina Vasconcelos segurando seu livro"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/80 to-transparent p-6 pt-16">
                <p className="font-serif text-xl font-bold text-secondary-foreground">Carolina Vasconcelos</p>
                <p className="font-sans text-sm text-secondary-foreground/70">Neurocientista & Autora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
