"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
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
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full"
    >
      <Card className={cn(
        "group h-full flex flex-col transition-all duration-500",
        "bg-white/5 backdrop-blur-md border-white/10 hover:border-primary/50 hover:bg-white/10",
        "shadow-2xl hover:shadow-gold/10",
        className
      )}>
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            {icon && (
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                {icon}
              </div>
            )}
            <div className="w-8 h-[1px] bg-primary/30 group-hover:w-12 transition-all duration-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-white/60 group-hover:text-white/80 leading-relaxed transition-colors duration-300">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Link 
            href={href} 
            className="inline-flex items-center text-sm font-semibold text-primary tracking-wide uppercase group/link"
          >
            Explore Services 
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
