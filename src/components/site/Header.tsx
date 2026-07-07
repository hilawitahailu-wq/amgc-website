import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";

const nav = [
  { to: "/about", label: "About" },
  { to: "/businesses", label: "Business" },
  { to: "/partners", label: "Partners" },
  { to: "/presence", label: "Presence" },
  { to: "/news", label: "News" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => setLang((lang === "en" ? "ar" : "en") as Lang);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy-deep/95 backdrop-blur-md py-3 shadow-elegant" : "bg-transparent py-6"
      }`}
      style={scrolled ? { boxShadow: "var(--shadow-elegant)" } : undefined}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="h-10 w-10 flex items-center justify-center rounded-sm" style={{ background: "var(--gradient-gold)" }}>
            <span className="font-display text-navy-deep text-lg font-semibold">A</span>
          </div>
          <div className="leading-tight">
            <div className="text-white font-display text-xl tracking-wide">AMGC</div>
            <div className="text-white/60 text-[10px] uppercase tracking-[0.2em]">Group of Companies</div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-white/80 hover:text-gold transition-colors whitespace-nowrap"
              activeProps={{ className: "text-gold" }}
              
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-gold transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            <span className={lang === "en" ? "text-gold" : ""}>EN</span>
            <span className="text-white/30">|</span>
            <span className={lang === "ar" ? "text-gold" : ""}>AR</span>
          </button>
          <Link
            to="/contact"
            className="text-xs px-5 py-2.5 border border-gold text-gold hover:bg-gold hover:text-navy-deep transition-all uppercase tracking-widest"
          >
            Get in Touch
          </Link>
        </div>

        <button className="xl:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden bg-navy-deep border-t border-white/10">
          <div className="container-x py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-white/80 hover:text-gold py-2 border-b border-white/5">
                {n.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4">
              <button onClick={toggleLang} className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70">
                <Globe className="w-4 h-4" />
                <span className={lang === "en" ? "text-gold" : ""}>EN</span>
                <span className="text-white/30">|</span>
                <span className={lang === "ar" ? "text-gold" : ""}>AR</span>
              </button>
              <Link to="/contact" onClick={() => setOpen(false)} className="text-xs px-5 py-2.5 border border-gold text-gold uppercase tracking-widest">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
