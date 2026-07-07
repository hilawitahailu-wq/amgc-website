export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="font-display text-5xl md:text-6xl text-gold font-light">{value}</div>
      <div className="mt-3 text-sm uppercase tracking-widest text-white/60">{label}</div>
    </div>
  );
}
