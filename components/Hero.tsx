import TerminalWindow from "./TerminalWindow";
import Prompt from "./Prompt";
import { profile, links } from "@/lib/data";

const ASCII_FULL = `███████╗██╗   ██╗██████╗ ██╗   ██╗ █████╗ ███╗   ██╗███████╗██╗  ██╗██╗
██╔════╝██║   ██║██╔══██╗╚██╗ ██╔╝██╔══██╗████╗  ██║██╔════╝██║  ██║██║
███████╗██║   ██║██████╔╝ ╚████╔╝ ███████║██╔██╗ ██║███████╗███████║██║
╚════██║██║   ██║██╔══██╗  ╚██╔╝  ██╔══██║██║╚██╗██║╚════██║██╔══██║██║
███████║╚██████╔╝██║  ██║   ██║   ██║  ██║██║ ╚████║███████║██║  ██║██║
╚══════╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝`;

const infoRows: [string, string][] = [
  ["role", profile.role],
  ["focus", profile.focus],
  ["education", profile.education],
  ["stack", "Python · SQL · Power BI · Excel · AWS"],
["wins", "Top 100 AWS Hackathon · Rank 330 Amazon ML · Kagglethon Runner-Up"],];

const linkRow: [string, string][] = [
  ["github", links.github],
  ["linkedin", links.linkedin],
  ["x", links.x],
  ["medium", links.medium],
  ["email", links.email],
  ["resume.pdf", links.resume],
];

export default function Hero() {
  return (
    <TerminalWindow title="suryanshi@macbook — zsh — 80×24" id="home">
      <Prompt command="./whoami.sh" />

      <h1 className="sr-only">Suryanshi Singh</h1>

      <pre aria-hidden className="hidden sm:block text-[10px] md:text-[11px] leading-tight mb-5 overflow-x-auto" style={{ color: "var(--accent)" }}>
        {ASCII_FULL}
      </pre>
      <p aria-hidden className="sm:hidden mb-4 text-xl font-bold tracking-wide" style={{ color: "var(--accent)" }}>
        ❯ suryanshi singh
      </p>

      <div className="space-y-1.5 text-[13px] sm:text-sm">
        {infoRows.map(([key, value]) => (
          <p key={key} className="flex">
            <span className="w-24 shrink-0" style={{ color: "var(--accent)" }}>{key}</span>
            <span className="mr-2" style={{ color: "var(--muted)" }}>→</span>
            <span>{value}</span>
          </p>
        ))}
        <p className="flex">
          <span className="w-24 shrink-0" style={{ color: "var(--accent)" }}>status</span>
          <span className="mr-2" style={{ color: "var(--muted)" }}>→</span>
          <span style={{ color: "var(--green)" }}>● {profile.status}</span>
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {linkRow.map(([label, href]) => (
          <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} className="underline-offset-4 hover:underline" style={{ color: "var(--accent)" }}>
            [{label}]
          </a>
        ))}
      </div>

      <p className="mt-6 text-xs sm:text-sm" style={{ color: "var(--muted)" }}>
        suryanshi@macbook ~ % <span className="cursor" />
      </p>
    </TerminalWindow>
  );
}