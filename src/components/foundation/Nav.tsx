import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#programs", label: "Programs" },
  { href: "#impact", label: "Impact" },
  { href: "#partners", label: "Partners" },
  { href: "#team", label: "Team" },
  { href: "#get-involved", label: "Get Involved" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color:var(--offwhite)]/85 backdrop-blur border-b border-[color:var(--indigo)]/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div>
            <img src="/favicon.ico" alt="Hero" />
          </div>
          <span className="font-semibold text-[color:var(--indigo)] tracking-tight">
            Hammet Research Foundation
          </span>
        </a>
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[color:var(--indigo)]/80 hover:text-[color:var(--indigo)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[color:var(--indigo)] px-4 py-2 text-sm font-medium text-[color:var(--offwhite)] hover:bg-[color:var(--indigo)]/90 transition-colors"
          >
            Partner With Us
          </a>
        </div>
        <button
          className="lg:hidden p-2 rounded-md text-[color:var(--indigo)]"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-[color:var(--offwhite)] border-t border-[color:var(--indigo)]/10">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[color:var(--indigo)] py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-[color:var(--indigo)] px-4 py-2 text-sm font-medium text-[color:var(--offwhite)]"
            >
              Partner With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
