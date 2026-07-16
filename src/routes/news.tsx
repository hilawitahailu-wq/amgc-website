import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Insights — AMGC" },
      { name: "description", content: "Latest news, press releases, and market insights from the AMGC group of companies." },
      { property: "og:title", content: "AMGC News & Insights" },
      { property: "og:description", content: "Corporate news and analysis on African trade and industry." },
    ],
  }),
  component: NewsPage,
});

const articles = [
  { date: "Jun 24, 2026", category: "Announcement", title: "AMGC signs strategic partnership with Kadooğlu Group in Türkiye", excerpt: "The multi-year agreement expands AMGC's premium edible oil distribution across East Africa and the Horn." },
  { date: "May 12, 2026", category: "Market Insight", title: "Djibouti–Addis corridor: five trends reshaping East African logistics", excerpt: "Our logistics team unpacks how new port capacity and rail integration will define freight economics in 2026." },
  { date: "Apr 03, 2026", category: "Press Release", title: "AMGC breaks ground on Dire Dawa polymer manufacturing plant", excerpt: "The facility marks a milestone in AMGC's downstream industrialization strategy with Tajchem." },
  { date: "Feb 18, 2026", category: "Leadership", title: "Chairman's letter: building an institution for the next generation", excerpt: "Abdoulwahab Mahamoud on discipline, patience, and the long horizon of African enterprise." },
  { date: "Jan 09, 2026", category: "Announcement", title: "AMGC opens representative office in Dubai", excerpt: "The new office anchors AMGC's Gulf presence ahead of its international trading office in the UAE." },
  { date: "Dec 02, 2025", category: "Market Insight", title: "Why Ethiopia's agro-processing sector is entering a new decade", excerpt: "Regulatory reform, FX access, and industrial parks are converging into a genuine investment thesis." },
];

function NewsPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-navy-deep">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.4em] text-gold mb-6">— News & Insights</div>
          <h1 className="font-display text-5xl md:text-7xl font-light text-white text-balance max-w-4xl">
            Perspectives from the <em className="text-gold not-italic">frontier</em> of African enterprise.
          </h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-x">
          <SectionHeader eyebrow="— Latest" title="News, press releases, and market analysis." />
          <div className="divide-y divide-border border-y border-border">
            {articles.map((a) => (
              <a key={a.title} href="#" className="group grid md:grid-cols-12 gap-6 py-10 hover:bg-secondary/50 transition-colors px-2">
                <div className="md:col-span-3">
                  <div className="text-xs uppercase tracking-[0.3em] text-gold">{a.category}</div>
                  <div className="text-sm text-muted-foreground mt-2">{a.date}</div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl md:text-3xl text-navy-deep group-hover:text-gold transition-colors text-balance">{a.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{a.excerpt}</p>
                  <div className="mt-4 text-xs uppercase tracking-widest text-navy-deep group-hover:text-gold flex items-center gap-2">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
