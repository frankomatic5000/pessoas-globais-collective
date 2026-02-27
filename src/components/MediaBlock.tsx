import { Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const MediaBlock = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-md bg-primary/20 text-primary font-sans text-xs font-bold uppercase tracking-widest mb-6">
              {t("media.badge")}
            </span>
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-[1.15] mb-6 italic">
              {t("media.quote")}
            </blockquote>
            <p className="font-sans text-secondary-foreground/70 text-base">
              {t("media.quote_author")} <span className="italic">{t("media.quote_source")}</span>, 2026
            </p>
          </div>

          <div className="bg-navy-light/50 rounded-2xl p-6 lg:p-8 border border-secondary-foreground/10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-secondary-foreground/60">
                {t("media.live")}
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold text-secondary-foreground mb-1">
              {t("media.ep_title")}
            </h3>
            <p className="font-sans text-sm text-secondary-foreground/60 mb-6">
              {t("media.ep_meta")}
            </p>

            <div className="mb-4">
              <div className="w-full h-1 bg-secondary-foreground/20 rounded-full overflow-hidden">
                <div className="w-[35%] h-full bg-primary rounded-full transition-all" />
              </div>
              <div className="flex justify-between mt-1">
                <span className="font-sans text-xs text-secondary-foreground/40">16:48</span>
                <span className="font-sans text-xs text-secondary-foreground/40">48:12</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              <button className="text-secondary-foreground/50 hover:text-secondary-foreground transition-colors" aria-label="Previous">
                <SkipBack size={20} />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
              </button>
              <button className="text-secondary-foreground/50 hover:text-secondary-foreground transition-colors" aria-label="Next">
                <SkipForward size={20} />
              </button>
              <button className="text-secondary-foreground/50 hover:text-secondary-foreground transition-colors ml-4" aria-label="Volume">
                <Volume2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaBlock;
