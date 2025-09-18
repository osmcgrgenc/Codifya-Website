import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.4)] backdrop-blur",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-30px_rgba(15,23,42,0.5)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
