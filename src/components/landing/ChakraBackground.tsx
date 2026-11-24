function ring(n: number, r: number, petal: number, key: string) {
  return Array.from({ length: n }).map((_, i) => (
    <ellipse key={`${key}${i}`} cx="500" cy={500 - r} rx={petal * 0.4} ry={petal}
      transform={`rotate(${(360 / n) * i} 500 500)`} />
  ));
}
export function ChakraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="chakra-reveal">
        <svg viewBox="0 0 1000 1000" className="chakra-spin h-[130vmin] w-[130vmin] max-w-none md:h-[150vmax] md:w-[150vmax] lg:h-[120vmax] lg:w-[120vmax]"
          fill="none" stroke="var(--gold)" strokeWidth="0.8">
          {[490, 470, 400, 330, 260, 180, 110, 60].map((r) => <circle key={r} cx="500" cy="500" r={r} />)}
          <g className="hidden md:inline">{ring(72, 440, 22, "a")}</g>
          {ring(48, 365, 30, "b")}
          {ring(24, 295, 34, "c")}
          <g className="hidden md:inline">{ring(36, 220, 20, "d")}</g>
          {ring(16, 145, 28, "e")}
          {Array.from({ length: 24 }).map((_, i) => (
            <line key={i} x1="500" y1="440" x2="500" y2="30" transform={`rotate(${15 * i} 500 500)`} strokeWidth="0.5" />
          ))}
          {Array.from({ length: 96 }).map((_, i) => (
            <circle key={`p${i}`} cx="500" cy="15" r="2.5" transform={`rotate(${3.75 * i} 500 500)`} />
          ))}
        </svg>
      </div>
    </div>
  );
}
