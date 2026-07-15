import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100000, suffix: "+", label: "Students to reach", format: "compact" },
  { value: 500, suffix: "+", label: "Partner schools", format: "plain" },
  { value: 36, suffix: "+1", label: "States + FCT covered", format: "plain" },
  { value: 60, suffix: "%", label: "Girls & underserved learners", format: "plain" },
] as const;

function formatValue(v: number, fmt: string) {
  if (fmt === "compact" && v >= 1000) {
    if (v >= 1_000_000) return (v / 1_000_000).toFixed(v % 1_000_000 ? 1 : 0) + "M";
    return (v / 1000).toFixed(0) + "K";
  }
  return v.toLocaleString();
}

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

function Stat({ value, suffix, label, format }: (typeof stats)[number]) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setStart(true), io.disconnect())),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const n = useCountUp(value, start);
  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[color:var(--cyan)] tabular-nums leading-none">
        {formatValue(n, format)}
        <span className="text-[color:var(--cyan)]/80">{suffix}</span>
      </div>
      <div className="mt-3 text-sm md:text-base text-[color:var(--offwhite)]/85">
        {label}
      </div>
    </div>
  );
}

export function Impact() {
  return (
    <section
      id="impact"
      className="relative py-24 md:py-32 text-[color:var(--offwhite)] overflow-hidden"
      style={{
        background:
          "radial-gradient(700px 400px at 80% 20%, rgba(127,128,255,0.35), transparent 60%), linear-gradient(180deg, #2d004e 0%, #4b0082 100%)",
      }}
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <svg className="h-full w-full">
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--cyan)]">
          Impact
        </p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold max-w-3xl">
          What we're building toward.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[color:var(--offwhite)]/75">
          Concrete targets for our current build phase — updated as cohorts
          complete and programs scale across Nigeria.
        </p>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
        <p className="mt-10 text-xs text-[color:var(--offwhite)]/60">
          Numbers reflect active program targets. The Foundation is in build
          phase — figures are refreshed each term as cohorts and partner
          schools come online.
        </p>
      </div>
    </section>
  );
}
