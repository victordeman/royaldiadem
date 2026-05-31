import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/sections/section-wrapper";
import { getAllInsights } from "@/lib/mdx/insights";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Insights & Technical Research",
  description: "Technical articles, research breakthroughs, and industrial insights from the RoyalDiadem engineering team.",
};

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <main className="min-h-screen bg-background">
      <HeroSection
        title="Technical Insights"
        subtitle="Exploring the frontiers of manufacturing science and industrial innovation."
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {insights.map((post) => (
            <Link href={`/insights/${post.slug}`} key={post.slug} className="group">
              <Card className="h-full glass-premium border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="gold" className="bg-black/60 backdrop-blur-md">
                      {post.tags[0]}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-900 dark:text-white/40 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-900 dark:text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-widest">
                     Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
