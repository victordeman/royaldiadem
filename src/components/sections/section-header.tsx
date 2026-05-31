"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ title, subtitle, align = "center", className }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn(
        "mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left",
        className
      )}
    >
      <div className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center" : "items-start"
      )}>
        <p className="text-primary font-bold uppercase tracking-widest text-sm">Our Excellence</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}
