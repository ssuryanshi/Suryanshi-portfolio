import { links } from "@/lib/data";

const navLinks: [string, string][] = [
  ["~/projects", "#projects"],
  ["~/experience", "#experience"],
  ["~/skills", "#skills"],
];

const socials = [
  { label: "github", href: links.github, icon: "ti-brand-github" },
  { label: "linkedin", href: links.linkedin, icon: "ti-brand-linkedin" },
  { label: "x", href: links.x, icon: "ti-brand-x" },
  { label: "email", href: links.email, icon: "ti-mail" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-sm" style={{ background: "rgba(13,17,23,0.85)", borderColor: "var(--border)" }}>
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 text-sm">
        <a href="#home" aria-label="Home" className="font-bold tracking-widest" style={{ color: "var(--accent)" }}>[S]</a>

        <nav className="hidden sm:flex gap-6 text-xs">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} className="hover:underline underline-offset-4" style={{ color: "var(--text)" }}>{label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} aria-label={s.label} style={{ color: "var(--text)" }}>
              <i className={`ti ${s.icon} text-base`} aria-hidden="true" />
            </a>
          ))}
          <span aria-hidden className="h-2 w-2 rounded-full" style={{ background: "var(--green)" }} />
        </div>
      </div>
    </header>
  );
}