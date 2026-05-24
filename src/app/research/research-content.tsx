"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/sections/section-wrapper";
import { SectionHeader } from "@/components/sections/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Leaf, Beaker, ArrowRight, Microchip, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResearchContent() {
  const focusAreas = [
    {
      title: "AI-Integrated Manufacturing",
      description: "Developing proprietary neural networks for real-time toolpath optimization and predictive maintenance in multi-axis machining.",
      icon: <Brain className="h-10 w-10 text-gold" />,
      tags: ["Machine Learning", "Optimization", "Industry 4.0"]
    },
    {
      title: "Advanced Materials Science",
      description: "Researching high-strength-to-weight ratio composites and ceramic-matrix materials for hypersonic aerospace applications.",
      icon: <Beaker className="h-10 w-10 text-gold" />,
      tags: ["Materials", "Aerospace", "Hypersonics"]
    },
    {
      title: "Sustainable Nano-Coatings",
      description: "Engineering environmentally-compliant, ultra-low friction coatings that extend component life by up to 300% in harsh environments.",
      icon: <Leaf className="h-10 w-10 text-gold" />,
      tags: ["Sustainability", "Nanotech", "Tribology"]
    }
  ];

  return (
    <main className="min-h-screen bg-mesh">
      <HeroSection
        title="Scientific Rigor. Industrial Precision."
        subtitle="Bridging the gap between frontier research and manufacturing reality through dedicated laboratory excellence."
      />

      <Section>
        <SectionHeader
          title="Current Research Focus"
          subtitle="We focus on technologies that will define the next decade of industrial performance."
          align="center"
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full glass-premium border-white/5 hover:border-gold/30 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Microchip className="w-24 h-24 text-gold" />
                </div>
                <CardContent className="pt-12 p-8">
                  <div className="mb-8 p-4 rounded-2xl bg-gold/10 w-fit group-hover:bg-gold/20 transition-colors">
                    {area.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-8 text-lg">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {area.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-white/5 text-white/50 border-white/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-gold p-0 hover:bg-transparent hover:text-gold/80 flex items-center gap-2">
                    View Publication <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <Badge className="bg-gold/20 text-gold border-gold/30">Strategic Partnership</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Representative of <span className="text-gold">Altek, Inc.</span></h2>
          <p className="text-xl text-white/70 leading-relaxed">
            As the official technical representative for Altek, we provide frontline research
            and development support, ensuring that their industry-leading manufacturing
            capabilities are accessible and optimized for our global partners.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
             <div className="glass-premium px-8 py-4 rounded-2xl border border-white/10 flex items-center gap-3">
                <ShieldCheck className="text-gold h-6 w-6" />
                <span className="text-white/80 font-bold uppercase tracking-widest text-sm">Certified Lab Operations</span>
             </div>
             <div className="glass-premium px-8 py-4 rounded-2xl border border-white/10 flex items-center gap-3">
                <Cpu className="text-gold h-6 w-6" />
                <span className="text-white/80 font-bold uppercase tracking-widest text-sm">Advanced Silicon Research</span>
             </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="glass-premium p-12 md:p-20 rounded-[3rem] border border-white/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[100px] rounded-full" />
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white leading-tight">Collaborate with our <br/> <span className="text-gold">Research Team</span></h2>
              <p className="text-lg text-white/70 leading-relaxed">
                We partner with academic institutions and private sector R&D departments
                to solve the most complex engineering challenges of our time.
              </p>
              <Button variant="gold" size="lg" className="px-0">
                <Link href="/contact" className="w-full h-full px-8 flex items-center">Inquire about Partnership</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Beaker className="h-8 w-8 text-gold/20" />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
