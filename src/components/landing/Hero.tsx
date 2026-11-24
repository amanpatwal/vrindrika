import { ChakraBackground } from "./ChakraBackground";
import { Logo } from "./Logo";
import { GoldDivider, GoldParticles, IncenseSmoke } from "./Ornaments";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 py-16">
      <ChakraBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--background)_0%,transparent_45%)] opacity-90" aria-hidden="true" />
      <GoldParticles />
      <IncenseSmoke />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="reveal text-[0.68rem] font-medium uppercase tracking-[0.45em] text-gold-muted sm:text-xs" style={{ animationDelay: "0.2s" }}>
          <span className="font-hindi block text-sm normal-case tracking-normal" lang="hi">सुगंध जो उद्देश्य से जुड़ी है।</span>
        </p>
        <h2 className="sr-only">Vrindikaa Agarbatti</h2>
        <Logo className="logo-enter mt-6" />
        <GoldDivider className="reveal mt-6" />
        <h1 className="reveal font-display mt-8 text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl" style={{ animationDelay: "1.4s" }}>
          Something Beautiful <em className="whitespace-nowrap text-gold-muted">Is Coming.</em>
        </h1>
        <p className="reveal mt-4 max-w-md text-base text-muted-foreground sm:text-lg" style={{ animationDelay: "1.7s" }}>
          A new journey of fragrance, tradition and purpose begins soon.
        </p>
        <div className="reveal font-hindi mt-6" style={{ animationDelay: "2s" }} lang="hi">
          <p className="text-2xl font-medium text-foreground sm:text-3xl">एक खूबसूरत सुगंध का आगमन जल्द।</p>
          <p className="mx-auto mt-2 max-w-md text-base text-muted-foreground sm:text-lg">सुगंध, परंपरा और उद्देश्य का एक नया सफ़र जल्द शुरू होगा।</p>
        </div>
        <div className="reveal mt-8 rounded-full border border-gold/50 px-7 py-3" style={{ animationDelay: "2.3s" }}>
          <p className="text-sm font-semibold uppercase tracking-[0.5em] text-peacock">Coming Soon</p>
          <p className="font-hindi text-sm text-gold-muted" lang="hi">जल्द आ रहा है</p>
        </div>
      </div>
    </section>
  );
}
