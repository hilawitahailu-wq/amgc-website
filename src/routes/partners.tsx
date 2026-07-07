import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { partners } from "@/lib/site-data";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Strategic Partners — AMGC" },
      { name: "description", content: "AMGC's strategic partners across polymers, edible oils, and industrial supply — Tajchem, Golden Africa Djibouti, and Kadoğlu." },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-navy-deep text-white">
        {/* Switched back to a two-column grid layout to beautifully house the 340px image */}
        <div className="container-x max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.4em] text-gold mb-8">— Strategic Partners</div>
            <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl text-balance leading-tight">
              The companies we build with.
            </h1>
            <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed">
              We collaborate with market leaders globally to deliver premium logistics, manufacturing solutions, and commodities trading infrastructure.
            </p>
          </div>

          {/* Right Side: Re-introduced Image Container at exactly 340px */}
          <div className="flex justify-center md:justify-end w-full">
            <div className="relative aspect-[4/3] w-full max-w-[340px] p-[5px] overflow-hidden border border-white/40 bg-white rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.2)] group/img">
              <img 
                src="/strategicpartner.jpg" 
                alt="AMGC Strategic Partnership" 
                className="w-full h-full object-cover brightness-125 saturate-150 contrast-100 transition-all duration-500 ease-out group-hover/img:brightness-100 group-hover/img:saturate-100"
              />
              {/* Elegant gold frame details */}
              <div className="absolute inset-0 border border-gold/40 pointer-events-none m-[5px]" />
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS GRID */}
      <section className="py-24 bg-background">
        <div className="container-x max-w-6xl grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {partners.map((p) => (
            <a 
              key={p.name} 
              href={p.url} 
              target="_blank" 
              rel="noreferrer" 
              className="group mx-auto w-full max-w-sm bg-secondary p-6 md:p-8 border border-border hover:border-gold transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">{p.country}</div>
                <h3 className="font-display text-2xl text-navy-deep mb-3 break-words">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{p.focus}</p>
              </div>
              
              <div className="mt-8 text-xs uppercase tracking-widest text-navy-deep group-hover:text-gold flex items-center gap-2">
                Visit Website <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}