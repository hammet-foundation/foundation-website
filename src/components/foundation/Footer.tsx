import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="text-[color:var(--offwhite)]"
      style={{ background: "linear-gradient(180deg, #2d004e 0%, #1c0033 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="h-9 w-9 rounded-lg bg-[color:var(--cyan)] grid place-items-center text-[color:var(--indigo)] font-bold"
              >
                H
              </span>
              <span className="font-semibold">Hammet Research Foundation</span>
            </div>
            <p className="mt-4 text-sm text-[color:var(--offwhite)]/70 leading-relaxed max-w-sm">
              The Hammet Research Foundation is the nonprofit initiative
              affiliated with Hammet, an AI literacy platform for Nigerian
              secondary schools.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--cyan)]">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--offwhite)]/80">
              {[
                ["Mission", "#mission"],
                ["Programs", "#programs"],
                ["Impact", "#impact"],
                ["Partners", "#partners"],
                ["Team", "#team"],
                ["Get Involved", "#get-involved"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="hover:text-[color:var(--cyan)]">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--cyan)]">
              Contact
            </p>
            <a
              href="mailto:hammetfoundation@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm hover:text-[color:var(--cyan)]"
            >
              <Mail size={16} /> hammetfoundation@gmail.com
            </a>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Twitter, href: "https://x.com/", label: "X" },
                { Icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
                { Icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-10 w-10 rounded-full border border-[color:var(--offwhite)]/25 grid place-items-center hover:border-[color:var(--cyan)] hover:text-[color:var(--cyan)] transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[color:var(--offwhite)]/15 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-[color:var(--offwhite)]/60">
          <p>
            Registered in Nigeria as an Incorporated Trustee. © {new Date().getFullYear()}{" "}
            Hammet Research Foundation.
          </p>
          <p>Lagos · Abuja · Enugu</p>
        </div>
      </div>
    </footer>
  );
}
