import { createFileRoute } from "@tanstack/react-router";
import chairmanImg from "@/assets/chairman.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AMGC — A Diversified African Business Group" },
      { name: "description", content: "Learn about AMGC, our story, mission, values, leadership, and group structure." },
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
            Built in the Horn of Africa. Built for generations.
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-white/70 leading-relaxed">
            “Resources are limited, creativity is not.” — Abdoulwahab Mahamoud, Founder & Chairman
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-gold sticky top-32">— Our Story</div>
          </div>
          <div className="lg:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              AMGC was established in 2023, but its story begins earlier — in Jigjiga, in Ethiopia’s Somali region, where the founding family’s trading roots run generations deep. What started as cross-border commerce along the Ethiopia–Djibouti corridor has grown into a diversified holding group with companies in Ethiopia and Djibouti, and an expanding footprint toward the Gulf.
            </p>
            <p>
              Today the group stands on two active pillars: trade facilitation through AIMEX and two-way commodity trading through AMGC Trading — importing industrial polymers and edible oils from producers in the Gulf, Türkiye, and Asia, and building an export book in Ethiopian coffee, pulses, and produce — backed by the group’s own operations at the Port of Djibouti.
            </p>
            <p>
              Around this core, the next generation of the group is taking shape: bottled-water manufacturing in Jigjiga, commercial and mixed farming with livestock, and long-term positions in logistics, mining, and construction. We measure ourselves against the standards of the world’s great trading houses — and we are building to last.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— Mission</div>
            <h2 className="font-display text-2xl text-navy-deep">To connect African markets with global supply chains through disciplined trade, reliable logistics, and institutional-grade service.</h2>
          </div>
          <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— Vision</div>
            <h2 className="font-display text-2xl text-navy-deep">To become one of the Horn of Africa’s leading diversified business groups — a trusted bridge between Ethiopia, the Gulf, and global markets, built to endure for generations.</h2>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-8">— Our Values</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrity", body: "We do what we said we would do, even when it costs us." },
              { title: "Excellence", body: "Institutional quality in every process, at every scale." },
              { title: "Vision", body: "We build for the next generation, not the next quarter." },
              { title: "Partnership", body: "Our partners’ success is the measure of our own." },
            ].map((value) => (
              <div key={value.title} className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                <div className="font-display text-3xl text-navy-deep mb-3">{value.title}</div>
                <div className="h-px w-12 bg-gold mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container-x grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-white p-2 shadow-sm">
            <img src={chairmanImg} alt="Abdoulwahab Mahamoud" className="w-full rounded-[1.5rem] object-cover" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— Leadership</div>
            <h2 className="font-display text-4xl md:text-5xl text-navy-deep">Abdoulwahab Mahamoud — Founder & Chairman</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Founder and Chairman of AMGC, Abdoulwahab Mahamoud has built the group from its trading roots in Jigjiga into a multi-entity holding spanning Ethiopia and Djibouti — combining deep knowledge of Horn of Africa markets with direct relationships across the Gulf, Türkiye, and Asia. He leads the group’s strategy, partnerships, and expansion.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {["Leadership profile 2", "Leadership profile 3", "Leadership profile 4"].map((label) => (
                <div key={label} className="rounded-2xl border border-border bg-white p-5 text-sm text-muted-foreground">
                  <div className="font-display text-xl text-navy-deep">{label}</div>
                  <div className="mt-2">Coming soon</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-x max-w-5xl">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">— Group Structure</div>
          <div className="rounded-[2rem] border border-border bg-white p-8 md:p-10 shadow-sm">
            <div className="font-display text-3xl text-navy-deep">AMGC — Abdoulwahab Mahamoud Group of Companies</div>
            <pre className="mt-8 overflow-x-auto text-sm leading-8 text-muted-foreground">
{`├── AIMEX
├── AMGC Trading
├── AMGC Transport
├── AMGC Agriculture
├── AMGC Manufacturing
├── AMGC Mining
└── AMGC Construction`}
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}
