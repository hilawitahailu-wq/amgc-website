import { ArrowUpRight } from "lucide-react";

export function DivisionCard({
  image,
  name,
  tagline,
  description,
  status,
}: {
  image: string;
  name: string;
  tagline?: string;
  description: string;
  status?: "active" | "strategic";
}) {
  return (
    <article className="group relative overflow-hidden bg-navy-deep h-[440px] cursor-pointer">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-[1200ms] ease-out"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, rgb(0 0 0 / 0.85))" }} />
      <div className="relative h-full flex flex-col justify-end p-8 text-white">
        {status && (
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
            {status === "active" ? "Active Operation" : "Strategic Vision"}
          </div>
        )}
        <h3 className="font-display text-3xl mb-2">{name}</h3>
        {tagline && <div className="text-gold text-sm mb-3 uppercase tracking-widest">{tagline}</div>}
        <p className="text-white/70 text-sm leading-relaxed max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500">
          {description}
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm text-gold uppercase tracking-widest">
          Learn More
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </article>
  );
}
