import TerminalWindow from "./TerminalWindow";
import Prompt from "./Prompt";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <TerminalWindow title="~/experience" id="experience">
      <Prompt command="git log --oneline experience/" />
      <div className="space-y-6">
        {experience.map((e) => (
          <div key={e.org} className="ascii-hover">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm sm:text-base">
                <span style={{ color: "var(--accent)" }}>{e.role}</span>
                <span style={{ color: "var(--muted)" }}> · {e.org}</span>
              </h3>
              <span className="text-xs" style={{ color: "var(--muted)" }}>
                {e.period}
              </span>
            </div>
            <ul className="mt-2 space-y-1.5 text-[13px] sm:text-sm leading-relaxed">
              {e.points.map((pt, i) => (
                <li key={i} className="flex gap-2">
                  <span style={{ color: "var(--green)" }}>+</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </TerminalWindow>
  );
}