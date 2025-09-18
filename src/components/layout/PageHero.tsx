import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  align = "left",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-24",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-[0.04]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <Container>
        <div
          className={cn(
            "space-y-6",
            align === "center" && "mx-auto max-w-3xl text-center"
          )}
        >
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">{title}</h1>
          {description ? (
            <p className="text-lg text-secondary leading-relaxed">{description}</p>
          ) : null}
          {actions ? <div className="pt-4">{actions}</div> : null}
        </div>
      </Container>
    </section>
  );
}
