import { links } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-1 pb-6 text-xs" style={{ color: "var(--muted)" }}>
      <p>
        suryanshi@macbook ~ %{" "}
        <span style={{ color: "var(--text)" }}>exit</span>
      </p>
      <p className="mt-2">
        © {new Date().getFullYear()} Suryanshi Singh ·{" "}
        <a href={links.email} className="hover:underline" style={{ color: "var(--accent)" }}>email</a>
        {" "}·{" "}
        <a href={links.linkedin} target="_blank" className="hover:underline" style={{ color: "var(--accent)" }}>linkedin</a>
      </p>
      <p className="mt-4 italic">
        <span style={{ color: "var(--accent)" }}>{"// "}</span>
        aspiring to be trusted with problems that matter
      </p>
    
    </footer>
  );
}