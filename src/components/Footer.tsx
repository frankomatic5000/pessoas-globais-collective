import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Pessoas Globais" className="h-8 brightness-0 invert" />
          <div className="flex items-center gap-6">
            {["Sobre", "Contato", "Termos", "Privacidade"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-sans text-sm text-secondary-foreground/50 hover:text-secondary-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="font-sans text-xs text-secondary-foreground/40">
            © 2026 Pessoas Globais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
