"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  className,
}: HeroSectionProps) {
  const words = title.split(" ");

  return (
    <section className={cn("relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-background pt-20", className)}>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-6"
          >
            RoyalDiadem Research & Laboratory
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-slate-900 dark:text-white">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="inline-block mr-4 last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {primaryCtaText && primaryCtaHref && (
              <Button 
                size="lg" 
                className="h-14 px-10 text-lg rounded-full"
                render={<Link href={primaryCtaHref} />}
              >
                {primaryCtaText}
              </Button>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-10 text-lg rounded-full"
                render={<Link href={secondaryCtaHref} />}
              >
                {secondaryCtaText}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
