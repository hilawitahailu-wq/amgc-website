import { createFileRoute } from "@tanstack/react-router";
import { DivisionCard } from "@/components/site/DivisionCard";
import { activeDivisions, developingDivisions, strategicDivisions } from "@/lib/site-data";

export const Route = createFileRoute("/businesses")({
  head: () => ({
    meta: [
      { title: "Our Businesses — AMGC Group Divisions" },
      { name: "description", content: "Explore AMGC's business divisions: AIMEX, AMGC Trading, logistics, manufacturing, agriculture, mining, and construction." },
    ],
  }),
  component: BusinessesPage,
});

function BusinessesPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-navy-deep text-white">
        <div className="container-x max-w-4xl">
          <div className="text-xs uppercase tracking-[0.4em] text-gold mb-8">— Business Divisions</div>
          <h1 className="font-display font-light text-5xl md:text-7xl text-balance">
            Seven verticals. One aligned strategy.
          </h1>
          <p className="mt-8 text-lg text-white/70 max-w-2xl">
            AMGC's business divisions combine today's operational strength with tomorrow's industrial ambition.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-gold">Active Operations</div>
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {activeDivisions.map((d) => <DivisionCard key={d.name} {...d} status="active" />)}
          </div>

          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-gold">In Development</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {developingDivisions.map((d) => <DivisionCard key={d.name} {...d} status="development" />)}
          </div>

          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-gold">Strategic Divisions</div>
          <div className="grid md:grid-cols-2 gap-6">
            {strategicDivisions.map((d) => <DivisionCard key={d.name} {...d} status="strategic" />)}
          </div>
        </div>
      </section>
    </>
  );
}
