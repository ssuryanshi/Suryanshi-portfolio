import TerminalWindow from "./TerminalWindow";
import Prompt from "./Prompt";
import { skills, achievements } from "@/lib/data";

export default function SkillsWins() {
  return (
    <TerminalWindow title="~/skills-and-wins" id="skills">
      <Prompt command="cat skills.cfg" />
      <div className="space-y-1.5 text-[13px] sm:text-sm">
        {Object.entries(skills).map(([category, items]) => (
          <p key={category}>
            <span style={{ color: "var(--accent)" }}>{category}</span>
            <span style={{ color: "var(--muted)" }}> = </span>
            <span>{items.join(", ")}</span>
          </p>
        ))}
      </div>

      <div className="my-6 border-t" style={{ borderColor: "var(--border)" }} />

      <Prompt command="cat achievements.log" />
      <ul className="space-y-2 text-[13px] sm:text-sm">
        {achievements.map((a) => (
          <li key={a.title} className="flex gap-2">
            <span style={{ color: a.highlight ? "var(--accent)" : "var(--green)" }}>
              {a.highlight ? "★" : "✓"}
            </span>
            <span>
              <span style={{ color: a.highlight ? "var(--accent)" : "var(--text)" }}>
                {a.title}
              </span>
              {a.detail && (
                <span style={{ color: "var(--muted)" }}> — {a.detail}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </TerminalWindow>
  );
}