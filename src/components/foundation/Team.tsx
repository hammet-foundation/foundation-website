import { FadeIn } from "./FadeIn";
import { Mail } from "lucide-react";

const team = [
  {
    name: "Prince Obinna",
    title: "Executive Director",
    bio: "Leads the Foundation's mission, funding strategy, and long-term direction.",
  },
  {
    name: "Angel Nwafor",
    title: "Head of Operations & Programs",
    bio: "Runs day-to-day operations and delivery of programs across partner schools.",
  },
  {
    name: "Oluebube Okafor",
    title: "Head of Engineering & AI Systems",
    bio: "Builds and maintains the technical platform powering the Foundation's learning tools.",
  },
  {
    name: "Ronald Ubanwa",
    title: "Head of Brand & Learning Design",
    bio: "Shapes how the Foundation looks, sounds, and teaches — from identity to classroom experience.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((s) => s[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-white/50">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--periwinkle)]">
            Leadership
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[color:var(--indigo)] max-w-3xl">
            Who's behind this.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-[color:var(--indigo)]/75">
            The Hammet Research Foundation is led by the founding team behind
            Hammet, an AI literacy platform already working directly with
            Nigerian secondary schools — combining classroom-tested product
            experience with a mission-first approach to funding access.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {team.map((m, i) => (
            <FadeIn key={m.name} delay={i * 80}>
              <article className="h-full rounded-2xl bg-white border border-[color:var(--indigo)]/10 p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(75,0,130,0.35)]">
                <div
                  aria-hidden
                  className="h-16 w-16 rounded-full grid place-items-center text-white font-bold text-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--periwinkle) 0%, var(--indigo) 100%)",
                  }}
                >
                  {initials(m.name)}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[color:var(--indigo)]">
                  {m.name}
                </h3>
                <p className="text-sm font-medium text-[color:var(--periwinkle)]">
                  {m.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--indigo)]/70">
                  {m.bio}
                </p>
              </article>
            </FadeIn>
          ))}
          <FadeIn delay={team.length * 80}>
            <article className="h-full rounded-2xl border-2 border-dashed border-[color:var(--periwinkle)]/50 bg-[color:var(--periwinkle)]/5 p-6 flex flex-col">
              <div className="h-16 w-16 rounded-full grid place-items-center text-[color:var(--indigo)] border-2 border-dashed border-[color:var(--periwinkle)]/60">
                <Mail size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[color:var(--indigo)]">
                Head of Partnerships
              </h3>
              <p className="text-sm font-medium text-[color:var(--periwinkle)]">
                Open role — join us
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--indigo)]/70">
                We're recruiting a partnerships lead to grow relationships with
                ministries, funders, and universities.
              </p>
              <a
                href="#contact"
                className="mt-auto pt-4 text-sm font-semibold text-[color:var(--indigo)] hover:text-[color:var(--periwinkle)]"
              >
                Get in touch →
              </a>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
