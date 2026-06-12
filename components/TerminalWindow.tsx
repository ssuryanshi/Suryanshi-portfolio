type Props = {
  title: string;
  children: React.ReactNode;
  id?: string;
};

export default function TerminalWindow({ title, children, id }: Props) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-3xl rounded-xl border overflow-hidden"
      style={{ background: "var(--panel)", borderColor: "var(--border)" }}
    >
      <div
        className="flex items-center gap-2 border-b px-4 py-2.5"
        style={{ borderColor: "var(--border)" }}
      >
        <span className="h-3 w-3 rounded-full" style={{ background: "var(--red)" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "var(--yellow)" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "var(--green)" }} />
        <span className="flex-1 text-center text-xs" style={{ color: "var(--muted)" }}>
          {title}
        </span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </section>
  );
}