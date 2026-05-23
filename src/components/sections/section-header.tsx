import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ title, subtitle, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12",
      align === "center" ? "text-center mx-auto max-w-3xl" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
