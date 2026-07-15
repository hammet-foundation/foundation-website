import { Landmark, School, Handshake, ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const paths = [
  {
    icon: Landmark,
    tag: "For Funders & Grant Partners",
    body: "Support programs that are already running and ready to scale.",
    cta: "Fund a program",
    inquiry: "Funding",
  },
  {
    icon: School,
    tag: "For Schools",
    body: "Bring AI literacy programming directly to your students.",
    cta: "Bring us to your school",
    inquiry: "School Partnership",
  },
  {
    icon: Handshake,
    tag: "For Institutional Partners",
    body: "Universities, ministries, and NGOs working toward the same goals.",
    cta: "Partner with us",
    inquiry: "Institutional Partnership",
  },
];

export function GetInvolved() {
  return (
    <section id="get-involved" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--periwinkle)]">
            Get involved
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[color:var(--indigo)] max-w-3xl">
            Work with us.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[color:var(--indigo)]/70">
            There are a few ways to be part of this.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {paths.map((p, i) => (
            <FadeIn key={p.tag} delay={i * 100}>
              <article className="group h-full rounded-2xl bg-[color:var(--indigo)] text-[color:var(--offwhite)] p-8 flex flex-col transition-all hover:-translate-y-1 hover:shadow-[0_25px_60px_-20px_rgba(75,0,130,0.6)]">
                <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center text-[color:var(--cyan)] group-hover:bg-[color:var(--cyan)] group-hover:text-[color:var(--indigo)] transition-colors">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{p.tag}</h3>
                <p className="mt-3 text-[color:var(--offwhite)]/80 leading-relaxed">
                  {p.body}
                </p>
                <a
                  href={`#contact?type=${encodeURIComponent(p.inquiry)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                    setTimeout(() => {
                      const sel = document.getElementById(
                        "inquiry-type",
                      ) as HTMLSelectElement | null;
                      if (sel) sel.value = p.inquiry;
                    }, 500);
                  }}
                  className="mt-auto pt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--cyan)] group-hover:gap-3 transition-all"
                >
                  {p.cta} <ArrowRight size={16} />
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
