import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "text-center max-w-3xl mx-auto",
        align === "left" && "text-left",
        align === "right" && "text-right ml-auto",
        className
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-lg text-secondary leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
