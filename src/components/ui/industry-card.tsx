import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  image?: string; // Placeholder for future usage
  icon?: React.ReactNode;
  className?: string;
}

export function IndustryCard({ title, icon, className }: IndustryCardProps) {
  return (
    <Card className={cn("overflow-hidden group cursor-default border-border/50 hover:border-accent/50 transition-all", className)}>
      <CardContent className="p-6 flex flex-col items-center text-center">
        {icon && <div className="mb-4 text-accent transition-transform group-hover:scale-110">{icon}</div>}
        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{title}</h3>
      </CardContent>
    </Card>
  );
}
