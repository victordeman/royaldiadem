"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/sections/section-wrapper";
import { SectionHeader } from "@/components/sections/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Tag, Shield } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesContent() {
  const cases = [
    {
      id: "aerospace-turbine",
      title: "Next-Gen Turbine Housing",
      industry: "Aerospace",
      description: "Reducing weight by 15% through advanced multi-axis machining and additive post-processing for a leading aerospace engine manufacturer.",
      outcome: "22% Efficiency Increase",
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "medical-instrumentation",
      title: "Precision Micro-Surgical Kit",
      industry: "Medical",
      description: "Developing sub-micron surgical instruments with specialized biocompatible coatings for robotic-assisted neurological procedures.",
      outcome: "FDA Approval Fast-Track",
      image: "https://images.unsplash.com/photo-1579154235602-3c2c2aa95460?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "defense-communication",
      title: "Ruggedized Signal Chassis",
      industry: "Defense",
      description: "Engineering high-thermal-dissipation enclosures for tactical communication systems operating in extreme desert environments.",
      outcome: "Zero Thermal Failures",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <main className="min-h-screen bg-mesh">
      <HeroSection
        title="Proven Precision"
        subtitle="Real-world examples of how our technical excellence solves complex industrial challenges."
      />

      <Section>
        <div className="grid gap-12 mt-8">
          {cases.map((cs, index) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 glass-premium rounded-[3rem] p-8 md:p-12 border border-white/10 group`}
            >
              <div className="flex-1 relative overflow-hidden rounded-2xl aspect-video lg:aspect-square">
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                 <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                 />
                 <div className="absolute top-6 left-6 z-20">
                    <Badge variant="gold" className="uppercase tracking-[0.2em]">{cs.industry}</Badge>
                 </div>
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-8">
                 <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-gold transition-colors">{cs.title}</h2>
                    <p className="text-lg text-white/60 leading-relaxed">
                       {cs.description}
                    </p>
                 </div>

                 <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                    <div>
                       <span className="text-xs uppercase tracking-widest text-white/40 block mb-1">Key Outcome</span>
                       <span className="text-xl font-bold text-gold">{cs.outcome}</span>
                    </div>
                    <Shield className="h-8 w-8 text-gold/20" />
                 </div>

                 <Button variant="ghost" className="text-white hover:text-gold p-0 flex items-center gap-2 group/btn w-fit h-auto">
                    <Link href={`/case-studies/${cs.id}`} className="flex items-center gap-2 py-2">
                       Detailed Analysis <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                 </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/5">
        <div className="text-center space-y-12 max-w-3xl mx-auto">
           <h2 className="text-4xl font-bold text-white">Have a similar project?</h2>
           <p className="text-lg text-white/60 leading-relaxed">
              Our technical team is ready to analyze your specific requirements and
              propose a high-precision manufacturing solution.
           </p>
           <Button variant="gold" size="lg" className="px-0">
              <Link href="/quote" className="w-full h-full px-8 flex items-center">Request Technical Consultation</Link>
           </Button>
        </div>
      </Section>
    </main>
  );
}
