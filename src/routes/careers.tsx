import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Briefcase, GraduationCap, Heart, Globe2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — AMGC" },
      { name: "description", content: "Build your career at AMGC. Open roles across trade, logistics, manufacturing, and corporate functions." },
      { property: "og:title", content: "Careers at AMGC" },
      { property: "og:description", content: "Join a modern African group with a global posture." },
    ],
  }),
  component: CareersPage,
});

const openings = [
  { title: "Trade Operations Manager", division: "AIMEX", location: "Addis Ababa, ET", type: "Full-time" },
  { title: "Port & Logistics Coordinator", division: "Logistics", location: "Djibouti", type: "Full-time" },
  { title: "Senior Commodities Trader", division: "AMGC Trading", location: "Dubai, UAE", type: "Full-time" },
  { title: "Plant Manager — Polymers", division: "Manufacturing", location: "Dire Dawa, ET", type: "Full-time" },
  { title: "Head of Corporate Finance", division: "Group", location: "Addis Ababa, ET", type: "Full-time" },
  { title: "Graduate Programme 2026", division: "Group", location: "Multiple", type: "Programme" },
];

const values = [
  { icon: Briefcase, title: "Institutional Discipline", body: "We operate with the rigor of a global institution." },
  { icon: Globe2, title: "Global Exposure", body: "Work with partners across Türkiye, the Gulf, and Asia." },
  { icon: GraduationCap, title: "Continuous Growth", body: "Structured development and international rotations." },
  { icon: Heart, title: "African Impact", body: "Everything we build advances African enterprise." },
];

function CareersPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-navy-deep">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.4em] text-gold mb-6">— Careers</div>
          <h1 className="font-display text-5xl md:text-7xl font-light text-white text-balance max-w-4xl">
            Build the future of African enterprise — <em className="text-gold not-italic">with us</em>.
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl">
            We're hiring exceptional people across our trade, logistics, manufacturing, and corporate teams.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-x">
          <SectionHeader eyebrow="— Why AMGC" title="What working here really looks like." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-secondary p-10 border border-border hover:border-gold transition-colors">
                <Icon className="w-8 h-8 text-gold mb-6" />
                <h3 className="font-display text-xl text-navy-deep mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <SectionHeader eyebrow="— Open Roles" title="Current opportunities." />
          <div className="divide-y divide-border border-y border-border">
            {openings.map((o) => (
              <a key={o.title} href="/contact" className="group grid md:grid-cols-12 gap-4 py-8 items-center hover:bg-secondary/50 transition-colors px-2">
                <div className="md:col-span-5">
                  <div className="font-display text-2xl text-navy-deep group-hover:text-gold transition-colors">{o.title}</div>
                </div>
                <div className="md:col-span-2 text-xs uppercase tracking-widest text-gold">{o.division}</div>
                <div className="md:col-span-2 text-sm text-muted-foreground">{o.location}</div>
                <div className="md:col-span-2 text-xs uppercase tracking-widest text-muted-foreground">{o.type}</div>
                <div className="md:col-span-1 text-navy-deep group-hover:text-gold flex md:justify-end">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
