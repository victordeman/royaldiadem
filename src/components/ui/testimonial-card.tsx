import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  className?: string;
}

export function TestimonialCard({ quote, author, role, company, className }: TestimonialCardProps) {
  return (
    <Card className={cn("h-full bg-background border-border/50", className)}>
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-gold/20 mb-4" />
        <p className="text-muted-foreground italic mb-6 leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}{company ? `, ${company}` : ""}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
