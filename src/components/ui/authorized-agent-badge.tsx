import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AuthorizedAgentBadgeProps {
  className?: string;
}

export function AuthorizedAgentBadge({ className }: AuthorizedAgentBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "bg-gold/10 text-gold border-gold/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        className
      )}
    >
      Authorized Agent of Altek, Inc.
    </Badge>
  );
}
