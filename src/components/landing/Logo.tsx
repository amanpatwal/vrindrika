import logo from "@/assets/vrindikaa_logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Vrindikaa Agarbatti — Fragrance with Purpose"
      width={858}
      height={760}
      className={`h-auto w-[min(78vw,420px)] lg:w-[min(400px,44svh)] ${className}`}
      fetchPriority="high"
    />
  );
}
