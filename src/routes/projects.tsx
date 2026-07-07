import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ArrowUpRight } from "lucide-react";

import logistics from "@/assets/div-logistics.jpg";
import manufacturing from "@/assets/div-manufacturing.jpg";
import mining from "@/assets/div-mining.jpg";
import construction from "@/assets/div-construction.jpg";
import agriculture from "@/assets/div-agriculture.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — AMGC" },
      { name: "description", content: "Flagship AMGC projects across trade corridors, logistics, manufacturing, mining, and construction in Africa and the Gulf." },
      { property: "og:title", content: "AMGC Projects" },
      { property: "og:description", content: "Landmark projects powering African industry and trade." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { title: "Djibouti Port Corridor", category: "Logistics", year: "2024", location: "Djibouti", image: heroImg, summary: "Multimodal freight corridor linking the Port of Djibouti with inland Ethiopian markets." },
  { title: "Addis Distribution Hub", category: "Logistics", year: "2024", location: "Addis Ababa, ET", image: logistics, summary: "50,000 sqm bonded warehousing and last-mile distribution center." },
  { title: "Polymer Manufacturing Plant", category: "Manufacturing", year: "2025", location: "Dire Dawa, ET", image: manufacturing, summary: "Turnkey polymer production facility in partnership with Tajchem." },
  { title: "Golden Africa Edible Oil Line", category: "Agro-Industry", year: "2024", location: "Djibouti", image: agriculture, summary: "Refining and packaging line for premium edible oils serving East Africa." },
  { title: "Somali Region Mining Concession", category: "Mining", year: "2026", location: "Jigjiga, ET", image: mining, summary: "Exploration and responsible extraction of industrial minerals." },
  { title: "Dubai Headquarters Tower", category: "Construction", year: "2027", location: "Dubai, UAE", image: construction, summary: "Future global HQ — a landmark corporate tower in Downtown Dubai." },
];

function ProjectsPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-navy-deep">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.4em] text-gold mb-6">— Projects</div>
          <h1 className="font-display text-5xl md:text-7xl font-light text-white text-balance max-w-4xl">
            Landmark projects shaping <em className="text-gold not-italic">African enterprise</em>.
          </h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-x">
          <SectionHeader eyebrow="— Portfolio" title="Selected work across our divisions." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="group bg-secondary border border-border hover:border-gold transition-all overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-navy-deep/90 text-gold text-[10px] uppercase tracking-widest px-3 py-1.5">{p.category}</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    <span>{p.location}</span><span>{p.year}</span>
                  </div>
                  <h3 className="font-display text-2xl text-navy-deep mb-3 flex items-start justify-between gap-3">
                    {p.title}
                    <ArrowUpRight className="w-5 h-5 text-gold shrink-0 mt-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
