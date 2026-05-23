import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <Card className={cn("h-full border-none shadow-none bg-muted/30 hover:bg-muted/50 transition-colors", className)}>
      <CardHeader>
        {icon && <div className="mb-2 text-primary">{icon}</div>}
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
