export default function Prompt({ command }: { command: string }) {
  return (
    <p className="mb-4 text-xs sm:text-sm" style={{ color: "var(--muted)" }}>
      suryanshi@macbook ~ %{" "}
      <span style={{ color: "var(--text)" }}>{command}</span>
    </p>
  );
}