"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/sections/section-wrapper";
import { SectionHeader } from "@/components/sections/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Zap, Factory, CheckCircle2, ShieldCheck, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CapabilitiesContent() {
  const capabilities = [
    {
      title: "Precision CNC Machining",
      subtitle: "Multi-Axis Excellence",
      description: "State-of-the-art 5-axis milling and precision turning for components that demand sub-micron tolerances. Our facility handles exotic alloys and aerospace-grade materials with extreme repeatability.",
      features: ["5-Axis Milling", "Swiss-Style Turning", "EDM Machining", "High-Speed Cutting"],
      icon: <Settings className="h-10 w-10 text-gold" />,
    },
    {
      title: "Injection Molding",
      subtitle: "High-Volume Precision",
      description: "From rapid prototyping to high-volume production, our injection molding services utilize advanced engineering thermoplastics and real-time process monitoring for consistent quality.",
      features: ["Overmolding", "Insert Molding", "Cleanroom Production", "Scientific Molding"],
      icon: <Zap className="h-10 w-10 text-gold" />,
    },
    {
      title: "Contract Assembly",
      subtitle: "Integrated Solutions",
      description: "Complete electromechanical and mechanical assembly services. We provide turnkey solutions including sourcing, testing, and kitting to streamline your supply chain.",
      features: ["Class 10k Cleanroom", "ESD-Safe Assembly", "Functional Testing", "Precision Bonding"],
      icon: <Factory className="h-10 w-10 text-gold" />,
    },
  ];

  return (
    <main className="min-h-screen bg-mesh">
      <HeroSection
        title="World-Class Engineering Capabilities"
        subtitle="Unmatched precision and technical depth for mission-critical manufacturing."
      />

      <Section>
        <div className="space-y-24">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
            >
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="border-gold/30 text-gold uppercase tracking-widest px-3 py-1">
                    {cap.subtitle}
                  </Badge>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-gold/10">
                      {cap.icon}
                    </div>
                    <h2 className="text-4xl font-bold text-white">{cap.title}</h2>
                  </div>
                </div>

                <p className="text-xl text-white/70 leading-relaxed">
                  {cap.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {cap.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-gold/60" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button variant="gold-outline" size="lg" className="px-0">
                    <Link href="/quote" className="w-full h-full px-8 flex items-center">Request Technical Spec</Link>
                  </Button>
                </div>
              </div>

              <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden glass-premium border border-white/10 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-1/2 h-1/2 border border-gold/10 rounded-full animate-pulse" />
                   <div className="absolute w-1/3 h-1/3 border border-gold/5 rounded-full animate-reverse-spin" />
                </div>
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-dark rounded-2xl border border-white/10">
                   <div className="flex items-center gap-4">
                      <ShieldCheck className="text-gold h-6 w-6" />
                      <span className="text-white/80 font-medium tracking-wide">ISO 9001:2015 & AS9100D Certified</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/5">
        <SectionHeader
          title="Advanced Material Research"
          subtitle="Pushing the boundaries of what's possible with advanced metallurgy and polymer science."
          align="center"
        />
        <div className="mt-16 grid md:grid-cols-2 gap-8">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="p-12 rounded-3xl glass-premium border border-white/10 space-y-6"
           >
              <Microscope className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-2xl font-bold text-white">Metallurgical Analysis</h3>
              <p className="text-white/60 leading-relaxed text-lg">
                Our in-house laboratory provides comprehensive material verification, stress testing, and grain analysis to ensure absolute reliability in high-stress aerospace applications.
              </p>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="p-12 rounded-3xl glass-premium border border-white/10 space-y-6"
           >
              <ShieldCheck className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-2xl font-bold text-white">Metrology & Inspection</h3>
              <p className="text-white/60 leading-relaxed text-lg">
                Equipped with Zeiss CMMs and laser scanning technology, we guarantee dimensional accuracy within microns, providing full traceability for every component produced.
              </p>
           </motion.div>
        </div>
      </Section>
    </main>
  );
}
