import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const sceneLabels = [
  "Addis Ababa skyline",
  "Djibouti Port",
  "Shipping containers",
  "International cargo movement",
  "Trucks on highways",
  "Industrial manufacturing",
  "Polymer raw materials",
  "Edible oil production",
  "Agriculture",
  "Construction",
  "Business meetings",
  "Dubai skyline",
];

export function HeroCinematic() {
  const [activeScene, setActiveScene] = useState(0);
  const sceneText = useMemo(() => sceneLabels[activeScene], [activeScene]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveScene((current) => (current + 1) % sceneLabels.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep">
      {/* Background Video Element */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        {/* Points directly to public/hero-cinematic.mp4 */}
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
            A cinematic view of AMGC’s global scale — from Addis Ababa and Djibouti ports to manufacturing, logistics and international trade.
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

      {/* Active Scene Label */}
      <div className="absolute left-6 top-24 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/90 shadow-xl shadow-black/40 z-30">
        {sceneText}
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-[10px] uppercase tracking-[0.3em] z-30">
        First 10 seconds matter
      </div>
    </section>
  );
}