export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted font-medium">
      <span className="h-px w-8 bg-foreground/30" />
      <span>{children}</span>
    </div>
  );
}
