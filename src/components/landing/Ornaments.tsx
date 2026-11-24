export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="gold-line w-16 sm:w-24" />
      <svg viewBox="0 0 24 24" className="h-3 w-3 text-gold"><path d="M12 2 L15 12 L12 22 L9 12 Z" fill="currentColor" /></svg>
      <span className="gold-line w-16 sm:w-24" />
    </div>
  );
}
const flecks = [
  [12, 30, 0, 14], [85, 22, 3, 18], [22, 72, 6, 16], [78, 68, 2, 20], [50, 12, 8, 17],
  [6, 52, 4, 22], [93, 46, 9, 15], [35, 88, 5, 19], [65, 85, 1, 21], [40, 25, 7, 18],
];
export function GoldParticles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {flecks.map(([l, t, d, dur], i) => (
        <span key={i} className="fleck" style={{ left: `${l}%`, top: `${t}%`, animationDelay: `${d}s`, animationDuration: `${dur}s` }} />
      ))}
    </div>
  );
}
export function IncenseSmoke() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-48 overflow-hidden">
      {[20, 48, 76].map((l, i) => (
        <span key={l} className="smoke" style={{ left: `${l}%`, animationDelay: `${i * 4}s` }} />
      ))}
    </div>
  );
}
