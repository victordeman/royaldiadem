"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/sections/section-wrapper";
import { SectionHeader } from "@/components/sections/section-header";
import { IndustryCard } from "@/components/ui/industry-card";
import { ShieldCheck, Microscope, Cpu, Plane, Activity, Radio, Factory, Landmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function IndustriesContent() {
  const industries = [
    {
      title: "Aerospace",
      description: "Flight-critical components with absolute reliability, adhering to AS9100D standards and ITAR regulations.",
      icon: <Plane className="h-10 w-10" />,
      stats: "Zero-Failure Rate"
    },
    {
      title: "Medical Devices",
      description: "ISO 13485 compliant manufacturing for surgical instruments, implants, and high-precision diagnostic equipment.",
      icon: <Microscope className="h-10 w-10" />,
      stats: "Class 10k Cleanroom"
    },
    {
      title: "Defense",
      description: "Strategic manufacturing solutions for tactical systems, communications, and specialized ordnance components.",
      icon: <ShieldCheck className="h-10 w-10" />,
      stats: "Security Cleared"
    },
    {
      title: "High-End Electronics",
      description: "Complex enclosures, heat sinks, and chassis for next-generation telecommunications and server infrastructure.",
      icon: <Cpu className="h-10 w-10" />,
      stats: "Sub-Micron Precision"
    },
    {
      title: "Automotive (EV)",
      description: "Lightweighting solutions and battery thermal management components for the electric vehicle revolution.",
      icon: <Activity className="h-10 w-10" />,
      stats: "Rapid Scalability"
    },
    {
      title: "Industrial Automation",
      description: "Robust components for robotic systems and automated assembly lines in the smart factories of tomorrow.",
      icon: <Factory className="h-10 w-10" />,
      stats: "24/7 Operations"
    },
  ];

  return (
    <main className="min-h-screen bg-mesh">
      <HeroSection
        title="Precision Solutions for Every Frontier"
        subtitle="Across every industry, we deliver the engineering excellence that drives global innovation."
      />

      <Section>
        <SectionHeader
          title="Sector-Specific Expertise"
          subtitle="Tailored manufacturing and research processes designed to meet the unique challenges of your industry."
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-premium p-10 rounded-[2rem] border border-white/10 hover:border-gold/30 transition-all group"
            >
              <div className="mb-8 p-4 rounded-2xl bg-gold/10 w-fit group-hover:bg-gold/20 transition-colors text-gold">
                {ind.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{ind.title}</h3>
              <p className="text-white/60 leading-relaxed mb-8">
                {ind.description}
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                 <Badge variant="outline" className="border-gold/30 text-gold uppercase text-[10px] tracking-[0.2em]">
                    {ind.stats}
                 </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/5 overflow-hidden">
         <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
               <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Global Compliance & <br/> <span className="text-gold">Regulatory Standards</span>
               </h2>
               <p className="text-lg text-white/70 leading-relaxed">
                  We maintain rigorous adherence to international standards across all served sectors.
                  Our quality management systems are continuously audited to ensure we meet the
                  evolving needs of Aerospace, Medical, and Defense industries.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  {['AS9100D', 'ISO 13485', 'ISO 9001:2015', 'ITAR Registered'].map(cert => (
                    <div key={cert} className="flex items-center gap-3">
                       <div className="h-2 w-2 rounded-full bg-gold" />
                       <span className="text-white font-medium uppercase tracking-widest text-xs">{cert}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="flex-1 relative">
               <div className="absolute -inset-10 bg-gold/5 blur-[120px] rounded-full animate-pulse" />
               <div className="relative glass-premium p-12 rounded-[3rem] border border-white/10 flex flex-col items-center justify-center text-center">
                  <Landmark className="h-20 w-20 text-gold/20 mb-8" />
                  <div className="text-5xl font-bold text-white mb-2">100%</div>
                  <p className="text-gold uppercase tracking-widest text-sm font-bold">Audit Compliance</p>
               </div>
            </div>
         </div>
      </Section>
    </main>
  );
}
