import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AMGC — A Diversified African Business Group" },
      { name: "description", content: "Learn about AMGC: our mission, our leadership, and our vision to become one of Africa's leading diversified business groups." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-navy-deep text-white">
        <div className="container-x max-w-4xl">
          <div className="text-xs uppercase tracking-[0.4em] text-gold mb-8">— About AMGC</div>
          <h1 className="font-display font-light text-5xl md:text-7xl text-balance">
            The digital face of an institution being built for generations.
          </h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-gold sticky top-32">— Our Story</div>
          </div>
          <div className="lg:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Abdoulwahab Mahamoud Group of Companies was founded on a simple conviction: that African
              enterprise deserves institutional-grade infrastructure — in trade, in logistics, in industry,
              and in the way it presents itself to the world.
            </p>
            <p>
              From a foundation in cross-border trade between Ethiopia, Djibouti, and the Gulf, AMGC has
              evolved into a diversified holding structure with active operations and long-term strategic
              divisions across seven verticals.
            </p>
            <p>
              We measure ourselves against the standards of multinational corporate groups. Every process,
              every partner, and every hire reflects that ambition.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container-x">
          <SectionHeader eyebrow="— Our Values" title="What guides every decision we make." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Integrity", d: "We do what we said we would do — even when it costs us." },
              { t: "Excellence", d: "Institutional quality in every process, at every scale." },
              { t: "Vision", d: "We build for the next generation, not the next quarter." },
              { t: "Partnership", d: "Our partners' success is the measure of our own." },
            ].map((v) => (
              <div key={v.t}>
                <div className="font-display text-3xl text-navy-deep mb-3">{v.t}</div>
                <div className="h-px w-12 bg-gold mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
