import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function HeroCinematic() {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep">
      {/* Background Video Element */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-fallback.svg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-cinematic.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#000000_0%,transparent_35%),linear-gradient(to_bottom,rgba(3,7,18,0.6),rgba(3,7,18,0.9))]" />
      
      {/* Hero Content */}
      <div className="relative container-x pt-32 pb-20">
        <div className="max-w-4xl animate-fade-up">
          <div className="text-xs uppercase tracking-[0.4em] text-gold mb-4">
            — Abdoulwahab Mahamoud Group of Companies
          </div>
          <h1 className="font-display font-light text-white text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-balance">
            Building Africa's future through <em className="text-gold not-italic">trade, industry</em> and vision.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/80 leading-relaxed">
            AMGC brings institutional discipline to trade, logistics, manufacturing, agriculture, and strategic growth across East Africa and the Gulf.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/businesses"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-navy-deep uppercase tracking-widest text-sm hover:bg-gold-soft transition-all"
            >
              Explore Our Businesses
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/40 text-white uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-all"
            >
              About AMGC
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}