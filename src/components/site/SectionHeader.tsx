export function SectionHeader({
  eyebrow,
  title,
  intro,
  center,
  light,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-16`}>
      {eyebrow && (
        <div className={`text-xs uppercase tracking-[0.3em] mb-4 ${light ? "text-gold" : "text-gold"}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-light text-balance ${light ? "text-white" : "text-navy-deep"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-6 text-lg leading-relaxed ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
