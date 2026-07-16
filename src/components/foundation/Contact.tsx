import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "./FadeIn";

const inquiryTypes = [
  "Funding",
  "School Partnership",
  "Institutional Partnership",
  "Other",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `[${f.get("type")}] Inquiry from ${f.get("name")}`,
    );
    const body = encodeURIComponent(
      `Name: ${f.get("name")}\nOrganization: ${f.get("organization")}\nEmail: ${f.get("email")}\nType: ${f.get("type")}\n\n${f.get("message")}`,
    );
    window.location.href = `mailto:hammetfoundation@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white/50">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--periwinkle)]">
            Contact
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[color:var(--indigo)]">
            Let's build this together.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[color:var(--indigo)]/70">
            Tell us who you are and what you'd like to explore. We reply to
            every serious inquiry.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          {sent ? (
            <div className="mt-10 rounded-2xl border border-[color:var(--periwinkle)]/40 bg-white p-8 flex items-start gap-4">
              <CheckCircle2 className="text-[color:var(--periwinkle)] shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-[color:var(--indigo)]">
                  Your email client is opening.
                </h3>
                <p className="mt-1 text-sm text-[color:var(--indigo)]/70">
                  If it didn't, write to us directly at{" "}
                  <a
                    className="underline"
                    href="mailto:hammetfoundation@gmail.com"
                  >
                    hammetfoundation@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-10 rounded-2xl bg-white border border-[color:var(--indigo)]/10 p-6 md:p-8 grid gap-5 sm:grid-cols-2"
            >
              <Field label="Full name" name="name" required />
              <Field label="Organization" name="organization" />
              <Field label="Email" name="email" type="email" required />
              <div>
                <label
                  htmlFor="inquiry-type"
                  className="block text-sm font-medium text-[color:var(--indigo)]"
                >
                  Inquiry type
                </label>
                <select
                  id="inquiry-type"
                  name="type"
                  required
                  defaultValue="Funding"
                  className="mt-1.5 w-full rounded-lg border border-[color:var(--indigo)]/20 bg-white px-3 py-2.5 text-sm text-[color:var(--indigo)] focus:outline-none focus:ring-2 focus:ring-[color:var(--periwinkle)]"
                >
                  {inquiryTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[color:var(--indigo)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1.5 w-full rounded-lg border border-[color:var(--indigo)]/20 bg-white px-3 py-2.5 text-sm text-[color:var(--indigo)] focus:outline-none focus:ring-2 focus:ring-[color:var(--periwinkle)]"
                />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between flex-wrap gap-3">
                <p className="text-xs text-[color:var(--indigo)]/60">
                  Or email{" "}
                  <a
                    className="underline"
                    href="mailto:hammetfoundation@gmail.com"
                  >
                    hammetfoundation@gmail.com
                  </a>{" "}
                  directly.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-[color:var(--indigo)] px-6 py-3 text-sm font-semibold text-[color:var(--offwhite)] hover:bg-[color:var(--indigo)]/90 transition-colors"
                >
                  Send message
                </button>
              </div>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[color:var(--indigo)]"
      >
        {label}
        {required && <span className="text-[color:var(--periwinkle)]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-[color:var(--indigo)]/20 bg-white px-3 py-2.5 text-sm text-[color:var(--indigo)] focus:outline-none focus:ring-2 focus:ring-[color:var(--periwinkle)]"
      />
    </div>
  );
}
