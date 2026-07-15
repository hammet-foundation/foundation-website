import { FadeIn } from "./FadeIn";

const partners = [
  { name: "Federal Ministry of Education", short: "FMoE" },
  { name: "Nigerian Universities Commission", short: "NUC" },
  { name: "UNICEF Nigeria", short: "UNICEF" },
  { name: "UNESCO", short: "UNESCO" },
  { name: "Mastercard Foundation", short: "Mastercard Fdn." },
  { name: "African Union — Education", short: "AU Education" },
  { name: "Co-Creation Hub", short: "CcHUB" },
  { name: "Tony Elumelu Foundation", short: "TEF" },
  { name: "MTN Foundation", short: "MTN Fdn." },
  { name: "National Association of Proprietors of Private Schools", short: "NAPPS" },
  { name: "Universal Basic Education Commission", short: "UBEC" },
  { name: "British Council Nigeria", short: "British Council" },
];

function LogoPill({ name, short }: { name: string; short: string }) {
  return (
    <div
      className="shrink-0 mx-3 flex items-center gap-3 rounded-full border border-[color:var(--indigo)]/15 bg-white px-6 py-3 shadow-sm"
      title={name}
    >
      <span
        aria-hidden
        className="h-8 w-8 rounded-full bg-[color:var(--indigo)] text-[color:var(--cyan)] grid place-items-center text-xs font-bold"
      >
        {short.split(" ").map((w) => w[0]).join("").slice(0, 3)}
      </span>
      <span className="text-sm font-semibold text-[color:var(--indigo)] whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function Partners() {
  const loop = [...partners, ...partners];
  return (
    <section id="partners" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--periwinkle)]">
            Partners
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[color:var(--indigo)] max-w-3xl">
            Who we work with.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[color:var(--indigo)]/70">
            We partner with universities, secondary schools, ministries of
            education, and mission-aligned funders who share a belief that AI
            literacy shouldn't be a privilege reserved for the few.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={150} className="mt-14">
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {loop.map((p, i) => (
              <LogoPill key={`${p.short}-${i}`} {...p} />
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="mx-auto max-w-7xl px-5 md:px-8 mt-10 flex items-center justify-between flex-wrap gap-3">
        <p className="text-xs text-[color:var(--indigo)]/60">
          Aligned and prospective partners across ministries, universities, and
          civil society.
        </p>
        <a
          href="#contact"
          className="text-sm font-semibold text-[color:var(--indigo)] hover:text-[color:var(--periwinkle)] underline-offset-4 hover:underline"
        >
          Interested in becoming a partner? Reach out →
        </a>
      </div>
    </section>
  );
}
