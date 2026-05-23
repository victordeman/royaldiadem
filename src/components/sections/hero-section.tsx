import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  image?: React.ReactNode;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  image,
  className,
}: HeroSectionProps) {
  return (
    <div className={cn("relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-32", className)}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              {primaryCtaText && primaryCtaHref && (
                <Button size="lg" variant="gold" render={<Link href={primaryCtaHref} />}>
                  {primaryCtaText}
                </Button>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10" render={<Link href={secondaryCtaHref} />}>
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </div>
          {image && (
            <div className="hidden lg:block relative">
              {image}
            </div>
          )}
        </div>
      </div>
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
