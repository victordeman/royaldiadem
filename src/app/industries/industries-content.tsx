"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/sections/section-wrapper";
import { SectionHeader } from "@/components/sections/section-header";
import { ShieldCheck, Activity, Factory, Landmark, Binary, Waves, Zap } from "lucide-react";
import { ProductCard } from "@/components/ui/product-card";

export default function IndustriesContent() {
  const industrialApps = [
    "Environmental Monitoring",
    "Nuclear Plant Effluents",
    "Radiopharmaceutical Isotopic Quality and Purity",
    "Naturally Occurring Radioactive Materials (NORM/TENORM)",
    "Personnel Internal Contamination Monitoring",
    "Food Contamination Monitoring",
    "Radioactive Waste Non-Destructive Assay"
  ];

  const solutionCategories = [
    {
      title: "Gamma Spectroscopy",
      description: "Identification and quantification of radionuclides by analyzing gamma-ray energy spectra.",
      icon: <Waves className="w-5 h-5" />
    },
    {
      title: "Alpha Spectroscopy",
      description: "Systems used to identify and quantify radionuclides based on emitted alpha particles.",
      icon: <Binary className="w-5 h-5" />
    },
    {
      title: "Alpha/Beta Counting",
      description: "Full suite of manual and automatic counters with gas-flow proportional or dual-phosphor technology.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Waste Assay Systems",
      description: "Mobile systems for radioactive waste assay utilizing high-resolution gamma spectrometers.",
      icon: <Factory className="w-5 h-5" />
    },
    {
      title: "Health Physics",
      description: "Direct personnel measurement systems for quick screening of gamma emitting materials.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "Food Monitoring",
      description: "Rapid screening of solids and liquids for radioactive isotope contamination.",
      icon: <Activity className="w-5 h-5" />
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <HeroSection
        title="Industrial Applications"
        subtitle="Across every industry, we deliver the engineering excellence that drives global innovation."
      />

      <Section>
        <SectionHeader
          title="Industry-Specific Solutions"
          subtitle="ORTEC offers an extensive lineup of radiation measurement instruments for diverse industrial sectors."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
          <div className="space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-slate-900 dark:text-slate-600 dark:text-slate-400 leading-relaxed">
                We provide full suite product solutions for counting labs, radioactive waste management,
                nuclear power plants, and food packaging. Our expertise extends to oil, gas, and mining
                operations, ensuring safety and compliance across the industrial spectrum.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-gold font-bold uppercase tracking-wider flex items-center gap-2">
                <Factory className="w-5 h-5" /> Key Applications
              </h4>
              <ul className="grid grid-cols-1 gap-3">
                {industrialApps.map(app => (
                  <li key={app} className="flex items-center gap-3 text-slate-900 dark:text-slate-600 dark:text-slate-400">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutionCategories.map(cat => (
                <div key={cat.title} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-white/5 hover:border-gold/20 transition-all group">
                  <div className="mb-3 p-2 rounded-lg bg-gold/10 w-fit text-gold group-hover:bg-gold/20 transition-colors">
                    {cat.icon}
                  </div>
                  <h5 className="text-slate-900 dark:text-white font-bold mb-1 text-sm">{cat.title}</h5>
                  <p className="text-slate-900 dark:text-white/50 text-[10px] leading-relaxed">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <ProductCard
              model="DSPEC-50 MCA"
              description="Advanced Digital Multi-Channel Analyzer designed for high-performance gamma spectroscopy with exceptional throughput and stability."
              image="https://www.ortec-online.com/-/media/ametekortec/images/d/dsp50.png"
              link="https://www.ortec-online.com/products/electronic-instruments/multi-channel-analyzers/workstation/dspec-50"
              specs={[
                { parameter: "Type", specification: "Digital Multi-Channel Analyzer" },
                { parameter: "Maximum Throughput", specification: ">100,000 cps" },
                { parameter: "Gain Stability", specification: "<50 ppm/°C" },
                { parameter: "Communication", specification: "USB 2.0 and Ethernet" },
                { parameter: "High Voltage Supply", specification: "Internal HV" }
              ]}
            />
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
         <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                  Global Compliance & <br/> <span className="text-gold">Regulatory Standards</span>
               </h2>
               <p className="text-lg text-slate-900 dark:text-slate-600 dark:text-slate-400 leading-relaxed">
                  We maintain rigorous adherence to international standards across all served sectors.
                  Our quality management systems are continuously audited to ensure we meet the
                  evolving needs of Industrial, Medical, and Environmental sectors.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  {['ISO 9001:2015', 'ISO 11929', 'ANSI N42.42', 'Certified Lab Operations'].map(cert => (
                    <div key={cert} className="flex items-center gap-3">
                       <div className="h-2 w-2 rounded-full bg-gold" />
                       <span className="text-slate-900 dark:text-white font-medium uppercase tracking-widest text-xs">{cert}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="flex-1 relative">
               <div className="absolute -inset-10 bg-gold/5 blur-[120px] rounded-full animate-pulse" />
               <div className="relative glass-premium p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center">
                  <Landmark className="h-20 w-20 text-gold/20 mb-8" />
                  <div className="text-5xl font-bold text-slate-900 dark:text-white mb-2">100%</div>
                  <p className="text-gold uppercase tracking-widest text-sm font-bold">Audit Compliance</p>
               </div>
            </div>
         </div>
      </Section>
    </main>
  );
}
