import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "pt" | "en";

type Translations = Record<string, Record<Language, string>>;

const translations: Translations = {
  // Navbar
  "nav.science": { pt: "Ci\u00EAncia", en: "Science" },
  "nav.health": { pt: "Sa\u00FAde", en: "Health" },
  "nav.technology": { pt: "Tecnologia", en: "Technology" },
  "nav.people": { pt: "Pessoas", en: "People" },
  "nav.podcast": { pt: "Podcast", en: "Podcast" },
  "nav.subscribe": { pt: "Assine", en: "Subscribe" },

  // Hero
  "hero.badge": { pt: "Destaque", en: "Featured" },
  "hero.edition": { pt: "Edi\u00E7\u00E3o Fevereiro 2026", en: "February 2026 Edition" },
  "hero.title_start": { pt: "A Ci\u00EAncia por Tr\u00E1s das", en: "The Science Behind" },
  "hero.title_highlight": { pt: "Conex\u00F5es Humanas", en: "Human Connections" },
  "hero.description": {
    pt: "Carolina Vasconcelos revela como a neuroci\u00EAncia est\u00E1 redefinindo a forma como nos conectamos \u2014 e por que isso importa mais do que nunca.",
    en: "Carolina Vasconcelos reveals how neuroscience is redefining the way we connect \u2014 and why it matters more than ever.",
  },
  "hero.cta_read": { pt: "Ler Artigo Completo", en: "Read Full Article" },
  "hero.cta_podcast": { pt: "Ouvir Podcast", en: "Listen to Podcast" },
  "hero.expert_name": { pt: "Carolina Vasconcelos", en: "Carolina Vasconcelos" },
  "hero.expert_role": { pt: "Neurocientista & Autora", en: "Neuroscientist & Author" },

  // Bento Grid
  "bento.title": { pt: "Artigos em Destaque", en: "Featured Articles" },
  "bento.subtitle": { pt: "As mat\u00E9rias mais lidas desta edi\u00E7\u00E3o", en: "The most-read stories of this edition" },
  "bento.see_all": { pt: "Ver Todos \u2192", en: "See All \u2192" },
  "bento.art1_title": { pt: "O Futuro da Intelig\u00EAncia Artificial na Medicina Brasileira", en: "The Future of AI in Brazilian Medicine" },
  "bento.art1_excerpt": { pt: "Como hospitais de refer\u00EAncia est\u00E3o usando IA para diagn\u00F3sticos mais precisos.", en: "How leading hospitals are using AI for more accurate diagnoses." },
  "bento.art2_title": { pt: "Microbioma: O Universo Dentro de N\u00F3s", en: "Microbiome: The Universe Within Us" },
  "bento.art2_excerpt": { pt: "Novas descobertas sobre bact\u00E9rias intestinais mudam o entendimento da sa\u00FAde mental.", en: "New discoveries about gut bacteria change our understanding of mental health." },
  "bento.art3_title": { pt: "Cidades Inteligentes na Am\u00E9rica Latina", en: "Smart Cities in Latin America" },
  "bento.art3_excerpt": { pt: "Projetos urban\u00EDsticos que est\u00E3o transformando a vida de milh\u00F5es.", en: "Urban projects that are transforming millions of lives." },
  "bento.art4_title": { pt: "A Jornada de L\u00EDderes que Mudam o Mundo", en: "The Journey of Leaders Changing the World" },
  "bento.art4_excerpt": { pt: "Perfis inspiradores de vision\u00E1rios que conectam ci\u00EAncia e humanidade.", en: "Inspiring profiles of visionaries connecting science and humanity." },
  "bento.art5_title": { pt: "Epis\u00F3dio 42: Empatia Digital", en: "Episode 42: Digital Empathy" },
  "bento.art5_excerpt": { pt: "Como a tecnologia pode nos aproximar ao inv\u00E9s de nos afastar.", en: "How technology can bring us closer instead of pushing us apart." },

  // Media Block
  "media.badge": { pt: "Cita\u00E7\u00E3o da Edi\u00E7\u00E3o", en: "Quote of the Edition" },
  "media.quote": { pt: "\u201CA verdadeira revolu\u00E7\u00E3o n\u00E3o \u00E9 tecnol\u00F3gica \u2014 \u00E9 humana.\u201D", en: "\u201CThe real revolution isn\u2019t technological \u2014 it\u2019s human.\u201D" },
  "media.quote_author": { pt: "\u2014 Carolina Vasconcelos,", en: "\u2014 Carolina Vasconcelos," },
  "media.quote_source": { pt: "Conex\u00F5es Invis\u00EDveis", en: "Invisible Connections" },
  "media.live": { pt: "Podcast Ao Vivo", en: "Live Podcast" },
  "media.ep_title": { pt: "Ep. 42 \u2014 Empatia Digital", en: "Ep. 42 \u2014 Digital Empathy" },
  "media.ep_meta": { pt: "com Carolina Vasconcelos \u00B7 48 min", en: "with Carolina Vasconcelos \u00B7 48 min" },

  // Footer
  "footer.about": { pt: "Sobre", en: "About" },
  "footer.contact": { pt: "Contato", en: "Contact" },
  "footer.terms": { pt: "Termos", en: "Terms" },
  "footer.privacy": { pt: "Privacidade", en: "Privacy" },
  "footer.rights": { pt: "\u00A9 2026 Pessoas Globais. Todos os direitos reservados.", en: "\u00A9 2026 Pessoas Globais. All rights reserved." },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return translations[key]?.[language] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
