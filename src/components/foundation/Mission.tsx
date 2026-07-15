import { FadeIn } from "./FadeIn";

const sdgs = [
  { n: 4, label: "Quality Education", color: "#C5192D" },
  { n: 5, label: "Gender Equality", color: "#FF3A21" },
  { n: 9, label: "Industry, Innovation & Infrastructure", color: "#FD6925" },
  { n: 10, label: "Reduced Inequalities", color: "#DD1367" },
];

export function Mission() {
  return (
    <section id="mission" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--periwinkle)]">
            Our mission
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[color:var(--indigo)] max-w-3xl">
            The gap we're closing.
          </h2>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-10 grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3 text-lg leading-relaxed text-[color:var(--indigo)]/85 space-y-5">
              <p>
                Nigeria has one of the youngest populations on earth, and one of
                the widest gaps in access to the skills that will define the
                next economy. Most secondary school students will graduate
                having never written a line of code, trained a model, or been
                taught how artificial intelligence actually works — not because
                they lack ability, but because the opportunity has never
                reached their classroom.
              </p>
              <p>
                The Hammet Research Foundation exists to close that gap:
                funding AI literacy education for students in under-resourced
                schools, with a deliberate focus on the learners the digital
                economy is most likely to leave out — girls, students in rural
                and low-resource communities, learners with disabilities, and
                children displaced by conflict or hardship.
              </p>
            </div>
            <aside className="md:col-span-2 rounded-2xl bg-white/60 border border-[color:var(--indigo)]/10 p-6">
              <p className="text-sm font-semibold text-[color:var(--indigo)]">
                Aligned with UN Sustainable Development Goals
              </p>
              <p className="mt-2 text-sm text-[color:var(--indigo)]/70">
                Quality Education, Gender Equality, Industry &amp; Innovation,
                and Reduced Inequalities.
              </p>
              <div className="mt-5 grid grid-cols-4 gap-3">
                {sdgs.map((s) => (
                  <div
                    key={s.n}
                    className="aspect-square rounded-xl grid place-items-center text-white font-bold text-lg shadow-sm transition-transform hover:scale-105"
                    style={{ backgroundColor: s.color }}
                    title={`SDG ${s.n}: ${s.label}`}
                    aria-label={`SDG ${s.n}: ${s.label}`}
                  >
                    {s.n}
                  </div>
                ))}
              </div>
              <ul className="mt-4 space-y-1 text-xs text-[color:var(--indigo)]/70">
                {sdgs.map((s) => (
                  <li key={s.n}>
                    <span className="font-semibold text-[color:var(--indigo)]">
                      SDG {s.n}
                    </span>{" "}
                    — {s.label}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
