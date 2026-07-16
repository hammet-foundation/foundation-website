import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BrainCircuit, Users, GraduationCap } from "lucide-react";
import { Nav } from "@/components/foundation/Nav";
import { Footer } from "@/components/foundation/Footer";

export const Route = createFileRoute("/ai-literacy")({
  component: AILiteracyPage,
});

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">
      <h3 className="text-5xl font-bold text-[color:var(--cyan)]">
        {number}
      </h3>
      <p className="mt-3 text-white/80">{label}</p>
    </div>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm hover:-translate-y-1 transition-all">
      <div className="mb-5 text-[color:var(--cyan)]">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-[color:var(--indigo)]">
        {title}
      </h3>

      <p className="mt-4 text-neutral-600 leading-7">
        {children}
      </p>
    </div>
  );
}

function AILiteracyPage() {
  return (
    <div className="min-h-screen bg-[color:var(--offwhite)] text-[color:var(--indigo)]">
      <Nav />
        
      <section
        className="relative overflow-hidden pt-32 pb-48 text-white"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 10%, rgba(127,128,255,.55), transparent 60%), radial-gradient(900px 500px at 90% 80%, rgba(0,255,255,.18), transparent 60%), linear-gradient(180deg,#3a0068 0%,#4b0082 60%,#2d004e 100%)",
        }}
      >
        {/* HERO */}
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-32">

          <span className="rounded-full border border-cyan-300/30 bg-white/5 px-4 py-2 text-sm uppercase tracking-wider">
            AI Literacy Initiative
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight lg:text-7xl">
            90% of Africa's youth leave school
            <span className="block text-cyan-300">
              without basic AI skills.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-white/85">
            Africa has more than <strong>420 million young people</strong>.
            Hundreds of millions are entering the future without the skills to
            understand, use, or benefit from Artificial Intelligence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://tally.so/r/OD9AE7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-8 py-4 font-semibold text-[color:var(--indigo)] transition hover:bg-white"
            >
              Join Weekly Sessions
              <ArrowRight size={18} />
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/30 px-8 py-4 hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* STATS */}
        <div className="mx-auto max-w-7xl px-6 translate-y-16">
          <div className="grid gap-6 md:grid-cols-3">

            <Stat
              number="90%"
              label="Youth leave school without practical AI literacy."
            />

            <Stat
              number="420M+"
              label="Africans between ages 15 and 35."
            />

            <Stat
              number="Weekly"
              label="Free AI literacy sessions for Africans."
            />

          </div>
        </div>
      </section>


      {/* ABOUT */}

      <section
        id="about"
        className="mx-auto max-w-7xl px-6 pt-32 py-24"
      >
        <div className="max-w-4xl">

          <h2 className="text-5xl font-bold">
            Africa cannot afford to miss the AI revolution.
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            Artificial Intelligence is transforming education, business,
            healthcare, research and the future of work.
            Yet millions of Africans still see AI as something mysterious,
            inaccessible, or meant for someone else.

            Our mission is to change that.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Every week, one of our Board of Trustees members takes Africans
            down the rabbit hole of AI literacy—breaking complex ideas into
            practical knowledge anyone can use.
          </p>

        </div>
      </section>

      {/* CARDS */}

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">

          <Card
            icon={<BrainCircuit size={40} />}
            title="Learn AI"
          >
            Understand how modern AI works and where it fits into everyday life.
          </Card>

          <Card
            icon={<GraduationCap size={40} />}
            title="Build Practical Skills"
          >
            Discover tools that improve productivity, learning, creativity and work.
          </Card>

          <Card
            icon={<Users size={40} />}
            title="Grow Together"
          >
            Join a community of Africans preparing for an AI-first future.
          </Card>

        </div>
      </section>

      {/* CTA */}

      <section className="py-28 bg-[color:var(--indigo)] text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-5xl font-bold">
            Join Africans Learning AI Every Week
          </h2>

          <p className="mt-8 text-xl text-white/80">
            Whether you're a student, entrepreneur, professional or simply
            curious about AI, these sessions are designed to equip you with
            practical knowledge for the future.
          </p>

          <a
            href="https://tally.so/r/OD9AE7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-cyan-300 px-10 py-5 text-lg font-semibold text-[color:var(--indigo)] hover:bg-white transition"
          >
            Sign Up Free
            <ArrowRight size={20} />
          </a>

          <p className="mt-6 text-white/60">
            Free to join • Practical • Community-driven
          </p>

        </div>
      </section>

      <Footer />
    </div>
  );
}