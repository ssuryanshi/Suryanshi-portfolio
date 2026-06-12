import TerminalWindow from "./TerminalWindow";
import Prompt from "./Prompt";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <TerminalWindow title="~/projects" id="projects">
      <Prompt command="ls ~/projects --details" />
      <div className="space-y-6">
        {projects.map((p) => (
          <div key={p.slug} className="group relative rounded-lg border p-4 sm:p-5 transition-colors" style={{ borderColor: "var(--border)" }}>
            <span aria-hidden className="absolute -top-2 -left-1 text-xs opacity-0 transition-opacity group-hover:opacity-100" style={{ color: "var(--accent)" }}>┌</span>
            <span aria-hidden className="absolute -bottom-2 -right-1 text-xs opacity-0 transition-opacity group-hover:opacity-100" style={{ color: "var(--accent)" }}>┘</span>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base sm:text-lg" style={{ color: "var(--accent)" }}>{p.name}</h3>
              <span className="text-xs" style={{ color: "var(--green)" }}>{p.metric}</span>
            </div>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{p.tagline}</p>

            <div className="mt-3 space-y-2 text-[13px] sm:text-sm leading-relaxed">
              <p>
                <span style={{ color: "var(--accent)" }}>problem </span>
                <span style={{ color: "var(--muted)" }}>→ </span>
                {p.problem}
              </p>
              <p>
                <span style={{ color: "var(--accent)" }}>approach</span>
                <span style={{ color: "var(--muted)" }}> → </span>
                {p.approach}
              </p>
              <p>
                <span style={{ color: "var(--accent)" }}>outcome </span>
                <span style={{ color: "var(--muted)" }}>→ </span>
                {p.outcome}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded border px-2 py-0.5 text-[11px]" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>{s}</span>
              ))}
              <span className="flex-1" />
              {p.github && (
                <a href={p.github} target="_blank" className="text-xs underline-offset-4 hover:underline" style={{ color: "var(--accent)" }}>[github]</a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" className="text-xs underline-offset-4 hover:underline" style={{ color: "var(--accent)" }}>[live]</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </TerminalWindow>
  );
}