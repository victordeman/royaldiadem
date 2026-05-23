import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CapabilityCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
  className?: string;
}

export function CapabilityCard({ title, description, icon, href, className }: CapabilityCardProps) {
  return (
    <Card className={cn("group h-full flex flex-col transition-all hover:shadow-md border-border/50", className)}>
      <CardHeader>
        {icon && <div className="mb-2 text-accent">{icon}</div>}
        <CardTitle className="group-hover:text-accent transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-medium text-accent hover:underline"
        >
          Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
