import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export function Section({ children, className, id, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className={cn("container mx-auto px-4", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
