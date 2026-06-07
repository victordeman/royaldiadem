"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { CachedImage } from "@/components/CachedImage";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProductSpec {
  label: string;
  value: string;
}

interface ProductCardProps {
  model: string;
  description: string;
  image: string;
  parameters?: ProductSpec[];
  specifications?: ProductSpec[];
  link?: string;
}

export function ProductCard({
  model,
  description,
  image,
  parameters = [],
  specifications = [],
  link
}: ProductCardProps) {
  const [activeTab, setActiveTab] = useState<"PARAMETER" | "SPECIFICATION">("PARAMETER");

  const currentData = activeTab === "PARAMETER" ? parameters : specifications;

  return (
    <Card className="h-full flex flex-col overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl group transition-all duration-300 hover:border-primary/30">
      <div className="relative aspect-[3/2] w-full bg-slate-100 dark:bg-white/5 overflow-hidden border-b border-slate-200 dark:border-white/5">
        <div className="absolute inset-0 bg-[#0A2540] animate-pulse opacity-20" />
        {image.startsWith('http') ? (
          <CachedImage
            src={image}
            alt={model}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Image
            src={image}
            alt={model}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <CardContent className="flex-1 flex flex-col p-6 space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{model}</h3>
        <p className="text-sm text-slate-600 dark:text-white/60 leading-relaxed">
          {description}
        </p>

        <div className="flex-1 flex flex-col min-h-[200px]">
          {/* Tabs Navigation */}
          <div className="flex border-b border-slate-200 dark:border-white/10 mt-4">
            <button
              onClick={() => setActiveTab("PARAMETER")}
              className={cn(
                "px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all relative",
                activeTab === "PARAMETER"
                  ? "text-primary"
                  : "text-slate-400 dark:text-white/40 hover:text-slate-600 dark:hover:text-white/60"
              )}
            >
              PARAMETER
              {activeTab === "PARAMETER" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("SPECIFICATION")}
              className={cn(
                "px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all relative",
                activeTab === "SPECIFICATION"
                  ? "text-primary"
                  : "text-slate-400 dark:text-white/40 hover:text-slate-600 dark:hover:text-white/60"
              )}
            >
              SPECIFICATION
              {activeTab === "SPECIFICATION" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 mt-4">
            {currentData.length > 0 ? (
              <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/5">
                <table className="w-full text-left text-xs">
                  <tbody className="divide-y divide-slate-200 dark:divide-white/5">
                    {currentData.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                        <td className="px-3 py-2 text-slate-900 dark:text-white/80 font-medium w-1/3 border-r border-slate-200 dark:border-white/5">{item.label}</td>
                        <td className="px-3 py-2 text-slate-600 dark:text-white/60">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center p-8 text-center">
                <p className="text-xs italic text-slate-400 dark:text-white/40">
                  Full {activeTab.toLowerCase()}s are available on request.
                </p>
              </div>
            )}
          </div>
        </div>

        {link && (
          <div className="pt-4 mt-auto">
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-primary hover:text-primary hover:bg-primary/10 gap-2 border border-primary/20"
              render={<Link href={link} target="_blank" rel="noopener noreferrer" />}
            >
              View on ORTEC <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
