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
        "bg-white/5 backdrop-blur-md border border-gold/30 shadow-lg shadow-gold/10",
        className
      )}
    >
      <div className="relative">
        <div className="w-2 h-2 rounded-full bg-gold animate-ping absolute inset-0" />
        <div className="w-2 h-2 rounded-full bg-gold relative" />
      </div>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold/90">
        Official Authorized Agent & Representative of <span className="text-white">ORTEC/AMETEK, Inc.</span>
      </span>
    </motion.div>
  );
}
