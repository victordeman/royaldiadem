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
    <section className={cn("relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-mesh pt-20", className)}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-gold/10 blur-[100px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-20" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={cn(
                  "inline-block mr-4 last:mr-0",
                  i === words.length - 1 ? "text-gradient-gold" : "text-white"
                )}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
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
                variant="gold"
                className="h-14 px-10 text-lg rounded-full shadow-2xl shadow-gold/20 hover:shadow-gold/40 transition-all duration-300"
                render={<Link href={primaryCtaHref} />}
              >
                {primaryCtaText}
              </Button>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-lg rounded-full border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white transition-all duration-300"
                render={<Link href={secondaryCtaHref} />}
              >
                {secondaryCtaText}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[15%] left-[10%] hidden lg:block"
      >
        <div className="w-24 h-24 rounded-2xl glass-dark border-white/10 flex items-center justify-center transform rotate-12">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gold to-amber-200 opacity-20" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[25%] right-[10%] hidden lg:block"
      >
        <div className="w-32 h-32 rounded-full glass-dark border-white/10 flex items-center justify-center transform -rotate-12">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-blue-400 opacity-20" />
        </div>
      </motion.div>
    </section>
  );
}
