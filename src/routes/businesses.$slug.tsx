import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { allDivisions } from "@/lib/site-data";

export const Route = createFileRoute("/businesses/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} — AMGC` },
      { name: "description", content: "Learn more about this AMGC business division and its operating model." },
    ],
  }),
  component: DivisionDetailPage,
});

function DivisionDetailPage() {
  const { slug } = Route.useParams();
  const division = allDivisions.find((item) => item.slug === slug);

  if (!division) {
    return (
      <section className="min-h-screen bg-background py-32">
        <div className="container-x max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">— Division Not Found</div>
          <h1 className="font-display text-4xl md:text-5xl text-navy-deep">This business division is not available yet.</h1>
          <p className="mt-6 text-lg text-muted-foreground">Please return to the full business overview and choose another division.</p>
          <Link to="/businesses" className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-widest text-gold">
            <ArrowLeft className="w-4 h-4" /> Back to Businesses
          </Link>
        </div>
      </section>
    );
  }

  const statusLabel =
    slug === "aimex" || slug === "trading"
      ? "Active Operation"
      : slug === "manufacturing"
        ? "In Development"
        : "Strategic Division";

  const isActiveDivision = slug === "aimex" || slug === "trading";
  const overview = division.overview ?? division.summary ?? "";
  const offering = division.offering ?? division.operatingModel ?? "";
  const offerings = division.offerings ?? division.focusAreas ?? [];
  const ctaLabel = division.ctaLabel ?? "Get in Touch";

  return (
    <section className="min-h-screen bg-background pt-32 pb-24">
      <div className="container-x">
        <div className="rounded-[2rem] border border-border bg-navy-deep p-8 md:p-12 text-white shadow-sm">
          <div className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-gold">
            {statusLabel}
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-balance">{division.name}</h1>
          <div className="mt-4 text-lg uppercase tracking-[0.25em] text-gold">{division.tagline}</div>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/75">{division.description}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/businesses" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-white uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to all divisions
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-gold text-navy-deep uppercase tracking-widest text-sm hover:bg-gold-soft transition-all">
              {ctaLabel} <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="space-y-8">
            <section className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— Overview</div>
              <p className="text-lg leading-relaxed text-muted-foreground">{overview}</p>
            </section>

            <section className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— Offering</div>
              <p className="text-lg leading-relaxed text-muted-foreground">{offering}</p>
            </section>
          </div>

          {isActiveDivision ? (
            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">— Focus Areas</div>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {offerings.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="rounded-3xl border border-border bg-secondary p-8 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— Focus</div>
              <p className="text-lg leading-relaxed text-muted-foreground">{offerings[0] || "A focused platform for long-term growth."}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
