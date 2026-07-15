import { GraduationCap, BadgeCheck, Sparkles, Building2 } from "lucide-react";
import { FadeIn } from "./FadeIn";

const programs = [
  {
    icon: GraduationCap,
    title: "Regional AI Camps",
    body: "After-term intensive camps hosted at partner universities, bringing hands-on AI training to students who would otherwise never access it.",
  },
  {
    icon: BadgeCheck,
    title: "Digital Passport Credentialing",
    body: "A portable, verifiable record of every skill a student masters — recognition that travels with them beyond the classroom.",
  },
  {
    icon: Sparkles,
    title: "Inclusion in AI Initiative",
    body: "Targeted funding and mentorship pathways for girls, learners with disabilities, and students in rural and displaced communities — getting them into AI and technology from secondary school, before the gap forms.",
  },
  {
    icon: Building2,
    title: "School & Ministry Partnerships",
    body: "Working directly with schools and education ministries to embed AI literacy into the systems students already move through.",
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 md:py-32 bg-white/50">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--periwinkle)]">
            Our programs
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[color:var(--indigo)] max-w-3xl">
            How we work.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[color:var(--indigo)]/70">
            Four programs, one goal: put every Nigerian secondary school
            student within reach of the skills that will define the next
            economy.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <FadeIn key={p.title} delay={i * 100}>
              <article className="group h-full rounded-2xl bg-white border border-[color:var(--indigo)]/10 p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(75,0,130,0.35)] hover:border-[color:var(--periwinkle)]/60">
                <div className="h-12 w-12 rounded-xl bg-[color:var(--periwinkle)]/15 grid place-items-center text-[color:var(--indigo)] group-hover:bg-[color:var(--periwinkle)] group-hover:text-white transition-colors">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[color:var(--indigo)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--indigo)]/70">
                  {p.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
