import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, ShieldCheck, TrendingUp, Users } from "lucide-react";

// Asset Imports
import chairmanImg from "@/assets/chairman.jpg";
import whoweareImg from "@/assets/whoweare.jpg";  
import strategicPartnerImg from "@/assets/strategicpartner.jpg";
import corporatePresenceImg from "@/assets/cooporatepresence.jpg";
import whyChooseImg from "@/assets/whychooseamgc.jpg";

// Component Imports
import { HeroCinematic } from "@/components/site/HeroCinematic";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Stat } from "@/components/site/Stat";
import { DivisionCard } from "@/components/site/DivisionCard";

// Data Imports
import { activeDivisions, developingDivisions, strategicDivisions, partners, markets, offices } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMGC — Building Africa's Future Through Trade, Industry & Innovation" },
      { name: "description", content: "AMGC is a diversified African business group with active operations in commercial trading and trade facilitation, alongside strategic growth across logistics, manufacturing, agriculture, mining, and construction." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroCinematic />

      {/* ABOUT */}
      <section className="py-32 bg-background">
        <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— Who We Are</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-navy-deep text-balance">
              A modern African group with a global posture.
            </h2>
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img src={whoweareImg} alt="Who we are" className="w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              AMGC operates at the intersection of trade, industry, and investment. From our headquarters in Addis Ababa
              to our port operations in Djibouti and expanding presence in Dubai, we bring institutional discipline to
              markets that reward it.
            </p>
            <p>
              We build long-term partnerships with the industrial leaders of Türkiye, the Gulf, and Asia — and translate
              that access into growth, quality, and reliability for the African markets we serve.
            </p>
            <div className="pt-6 grid grid-cols-2 gap-6 border-t border-border">
              <div>
                <div className="font-display text-4xl text-navy-deep">6+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Countries</div>
              </div>
              <div>
                <div className="font-display text-4xl text-navy-deep">7</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Business Verticals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="py-32 bg-secondary">
        <div className="container-x">
          <SectionHeader
            eyebrow="— Business Divisions"
            title="Where we operate today. Where we are going next."
            intro="Our active operations generate today's growth. Our strategic divisions define tomorrow's ambition."
          />

          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-gold">Active Operations</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {activeDivisions.map((d) => (
              <DivisionCard key={d.name} {...d} status="active" />
            ))}
          </div>

          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-gold">In Development</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {developingDivisions.map((d) => (
              <DivisionCard key={d.name} {...d} status="development" />
            ))}
          </div>

          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-gold">Strategic Divisions</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategicDivisions.map((d) => (
              <DivisionCard key={d.name} {...d} status="strategic" />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--gold) 0%, transparent 50%)" }} />
        <div className="container-x relative grid grid-cols-2 md:grid-cols-4 gap-12">
          <Stat value="2023" label="Established" />
          <Stat value="7" label="Business Divisions" />
          <Stat value="6" label="Country Trade Network" />
          <Stat value="1000+" label="Successful Shipments" />
        </div>
      </section>

      {/* CHAIRMAN */}
      <section className="py-32 bg-background">
        <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold" />
            <img src={chairmanImg} alt="Chairman" loading="lazy" className="relative w-full object-cover" />
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— Chairman's Message</div>
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy-deep leading-tight text-balance">
              "We are not building a company. We are building an institution that will shape the future of African enterprise for the next generation."
            </blockquote>
            <div className="mt-8 pt-8 border-t border-border">
              <div className="font-display text-xl text-navy-deep">Abdoulwahab Mahamoud</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Founder & Chairman</div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-32 bg-secondary">
        <div className="container-x">
          <SectionHeader eyebrow="— Strategic Partners" title="The companies we build with." center />
          
          <div className="mt-10 mb-12 flex justify-center w-full">
            <div className="relative aspect-[4/3] w-full max-w-[340px] p-[5px] overflow-hidden border border-slate-200 bg-white rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.15)] group/img">
              <img 
                src={strategicPartnerImg} 
                alt="Strategic partners" 
                className="w-full h-full object-cover brightness-125 saturate-150 contrast-100 transition-all duration-500 ease-out group-hover/img:brightness-100 group-hover/img:saturate-100" 
              />
              <div className="absolute inset-0 border border-gold/40 pointer-events-none m-[5px]" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="group bg-background p-10 border border-border hover:border-gold transition-all duration-500 hover:-translate-y-1" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">{p.country}</div>
                <h3 className="font-display text-2xl text-navy-deep mb-3">{p.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.focus}</p>
                <div className="mt-8 text-xs uppercase tracking-widest text-navy-deep group-hover:text-gold transition-colors flex items-center gap-2">
                  Visit Website <ArrowRight className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL NETWORK */}
      <section className="py-32 bg-navy-deep">
        <div className="container-x">
          <SectionHeader
            eyebrow="— Global Network"
            title="Connecting African markets with global opportunity."
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {markets.map((m) => (
              <div key={m.country} className="group border border-white/10 p-8 hover:border-gold transition-all">
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{m.status}</div>
                <div className="font-display text-2xl text-white">{m.country}</div>
                <div className="mt-4 h-px bg-white/10 group-hover:bg-gold transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="py-32 bg-background">
        <div className="container-x">
          <SectionHeader eyebrow="— Corporate Presence" title="Our offices around the region." />
          
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Current Locations</div>
                <div className="space-y-4">
                  {offices.current.map((o, i) => (
                    <div key={i} className="flex flex-col py-4 border-b border-border">
                      <div className="font-display text-2xl text-navy-deep">{o.city}</div>
                      <div className="mt-1">
                        <div className="text-sm text-navy-deep">{o.label}</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">{o.country}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Future Locations</div>
                <div className="space-y-4">
                  {offices.future.map((o, i) => (
                    <div key={i} className="flex flex-col py-4 border-b border-border opacity-80">
                      <div className="font-display text-2xl text-navy-deep">{o.city}</div>
                      <div className="mt-1">
                        <div className="text-sm text-navy-deep">{o.label}</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">{o.country}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img src={corporatePresenceImg} alt="Corporate presence" className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-32 bg-secondary">
        <div className="container-x">
          <SectionHeader eyebrow="— Why Choose AMGC" title="Institutional discipline. Entrepreneurial ambition." center />
          <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-6 mt-10">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Globe2, title: "Global Reach", body: "Direct relationships across six countries and three continents." },
                { icon: ShieldCheck, title: "Institutional Trust", body: "Long-term partners choose us because we deliver at scale, on time." },
                { icon: TrendingUp, title: "Diversified Growth", body: "Seven verticals, one aligned strategy for durable value creation." },
                { icon: Users, title: "Local Insight", body: "Deep African market knowledge with a globally trained operating team." },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-background p-10 border border-border hover:border-gold transition-colors">
                  <Icon className="w-8 h-8 text-gold mb-6" />
                  <h3 className="font-display text-xl text-navy-deep mb-3">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            
            <div className="flex h-full min-h-[400px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img 
                src={whyChooseImg} 
                alt="Why choose AMGC" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 50%, var(--gold) 0%, transparent 50%)" }} />
        <div className="container-x relative text-center max-w-4xl">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">— Partner With Us</div>
          <h2 className="font-display text-4xl md:text-6xl font-light text-white text-balance">
            Ready to build the future of African enterprise?
          </h2>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Talk to our team about trade, investment, or long-term partnership opportunities across the AMGC group.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 px-10 py-4 bg-gold text-navy-deep uppercase tracking-widest text-sm hover:bg-gold-soft transition-all">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}