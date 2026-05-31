"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  image?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function IndustryCard({ title, icon, className }: IndustryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className={cn(
        "overflow-hidden group cursor-pointer transition-all duration-500",
        "bg-white/5 backdrop-blur-md border-white/10 hover:border-primary/30 hover:bg-white/10",
        "shadow-xl hover:shadow-gold/5",
        className
      )}>
        <CardContent className="p-8 flex flex-col items-center text-center gap-6">
          {icon && (
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative text-primary group-hover:text-white transition-colors duration-300">
                {icon}
              </div>
            </div>
          )}
          <h3 className="text-lg font-bold uppercase tracking-widest text-white/80 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </CardContent>
      </Card>
    </motion.div>
  );
}
