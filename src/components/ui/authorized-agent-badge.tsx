"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AuthorizedAgentBadgeProps {
  className?: string;
}

export function AuthorizedAgentBadge({ className }: AuthorizedAgentBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        "inline-flex items-center gap-3 px-4 py-2 rounded-full",
        "bg-slate-50 dark:bg-slate-900 border border-primary/20 shadow-md",
        className
      )}
    >
      <div className="relative">
        <div className="w-2 h-2 rounded-full bg-primary animate-ping absolute inset-0" />
        <div className="w-2 h-2 rounded-full bg-primary relative" />
      </div>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/90">
        Official Authorized Agent & Representative of <span className="text-slate-900 dark:text-white">ORTEC/AMETEK, Inc.</span>
      </span>
    </motion.div>
  );
}
