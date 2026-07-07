import { createFileRoute } from "@tanstack/react-router";
import { markets, offices } from "@/lib/site-data";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Global Network — AMGC" },
      { name: "description", content: "AMGC connects Ethiopia, Djibouti, the UAE, Türkiye, China, and Saudi Arabia through active trade, sourcing, and investment corridors." },
    ],
  }),
  component: NetworkPage,
});

function NetworkPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-navy-deep text-white">
        <div className="container-x max-w-4xl">
          <div className="text-xs uppercase tracking-[0.4em] text-gold mb-8">— Global Network</div>
          <h1 className="font-display font-light text-5xl md:text-7xl text-balance">
            Where we operate. Where we're going.
          </h1>
        </div>
      </section>

      <section className="py-24 bg-navy-deep">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {markets.map((m) => (
            <div key={m.country} className="group border border-white/10 p-10 hover:border-gold transition-all">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{m.status}</div>
              <div className="font-display text-3xl text-white">{m.country}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Current Offices</div>
            {offices.current.map((o, i) => (
              <div key={i} className="flex items-baseline gap-6 py-5 border-b border-border">
                <div className="font-display text-2xl text-navy-deep min-w-[160px]">{o.city}</div>
                <div>
                  <div className="text-sm">{o.label}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{o.country}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Future Offices</div>
            {offices.future.map((o, i) => (
              <div key={i} className="flex items-baseline gap-6 py-5 border-b border-border opacity-80">
                <div className="font-display text-2xl text-navy-deep min-w-[160px]">{o.city}</div>
                <div>
                  <div className="text-sm">{o.label}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{o.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
