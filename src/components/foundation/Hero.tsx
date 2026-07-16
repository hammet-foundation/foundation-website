import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32 text-[color:var(--offwhite)]"
      style={{
        background:
          "radial-gradient(1200px 600px at 20% 10%, rgba(127,128,255,0.55), transparent 60%), radial-gradient(900px 500px at 90% 80%, rgba(0,255,255,0.18), transparent 60%), linear-gradient(180deg, #3a0068 0%, #4b0082 60%, #2d004e 100%)",
      }}
    >
      {/* Floating decorative shapes */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-[8%] h-24 w-24 rounded-full border border-[color:var(--cyan)]/40 animate-float-slow" />
        <div className="absolute top-40 right-[12%] h-16 w-16 rotate-45 border border-[color:var(--periwinkle)]/50 animate-float-med" />
        <div className="absolute bottom-24 left-[20%] h-3 w-3 rounded-full bg-[color:var(--cyan)] animate-pulse-ring" />
        <div className="absolute bottom-32 right-[24%] h-32 w-32 rounded-full bg-[color:var(--periwinkle)]/10 blur-2xl animate-float-slow" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--cyan)]/40 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide uppercase text-[color:var(--cyan)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--cyan)]" />
            Hammet Research Foundation
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Every child deserves a future
            <span className="block text-[color:var(--cyan)]">they helped build.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[color:var(--offwhite)]/85 leading-relaxed max-w-2xl">
            We fund and scale access to AI literacy for Nigerian secondary school
            students — with a deliberate focus on the learners the digital economy
            is most likely to overlook: girls, students in rural and low-resource
            schools, learners with disabilities, and children from displaced and
            underserved communities.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--cyan)] px-6 py-3 text-sm font-semibold text-[color:var(--indigo)] hover:bg-white transition-colors"
            >
              Partner With Us <ArrowRight size={16} />
            </Link>
            <Link
              to="/"
              hash="impact"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--offwhite)]/40 px-6 py-3 text-sm font-semibold text-[color:var(--offwhite)] hover:bg-white/10 transition-colors"
            >
              See Our Impact
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/classroom"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--cyan)]/40 px-5 py-2 text-sm font-medium text-[color:var(--cyan)] hover:bg-[color:var(--cyan)] hover:text-[color:var(--indigo)] transition-colors"
            >
              AI Classroom
              <ArrowRight size={14} />
            </a>

            {/*
            <a
              href="/teacher"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--cyan)]/40 px-5 py-2 text-sm font-medium text-[color:var(--cyan)] hover:bg-[color:var(--cyan)] hover:text-[color:var(--indigo)] transition-colors"
            >
              Teacher Portal
              <ArrowRight size={14} />
            </a>
            */}
          </div>
        </div>

        <Link
          to="/"
          hash="mission"
          aria-label="Scroll to mission"
          className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center justify-center h-10 w-10 rounded-full border border-[color:var(--offwhite)]/30 text-[color:var(--offwhite)]/70 hover:text-[color:var(--cyan)] hover:border-[color:var(--cyan)] transition-colors"
        >
          <ChevronDown size={18} />
        </Link>
      </div>
    </section>
  );
}
