"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/sections/section-wrapper";
import { SectionHeader } from "@/components/sections/section-header";
import { Badge } from "@/components/ui/badge";
import { Beaker, Cpu, ShieldCheck, GraduationCap, Shield, Microscope, Binary, Waves, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProductCard } from "@/components/ui/product-card";

export default function ResearchContent() {
  const researchApps = [
    "Radiological Measurement Principles",
    "Nuclear Physics Experiments",
    "Positron Lifetime Measurements",
    "Fast Timing Systems",
    "Multichannel Scaling"
  ];

  const homelandApps = [
    "Radiological Threat Assessment",
    "Nuclear Forensics",
    "Chemical Weapons Non-Destructive Assay",
    "Explosives Non-Destructive Assay"
  ];

  const researchCategories = [
    {
      title: "Radiation Detectors",
      description: "Solid-state, high-resolution, semiconductor radiation detectors for precise measurement.",
      icon: <Microscope className="w-5 h-5" />
    },
    {
      title: "Electronic Instruments",
      description: "Wide range of electronics including preamplifiers, counters/timers, and multi-channel analyzers.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Application Software",
      description: "Advanced spectroscopy software for automated measurement and data analysis.",
      icon: <Binary className="w-5 h-5" />
    },
    {
      title: "Education Experiments",
      description: "Packaged experiments with tutorial info, setup instructions, and student exercises.",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  const homelandCategories = [
    {
      title: "Handheld RIIDs",
      description: "Radioisotope identification devices for rapid interdiction of illicit nuclear materials trafficking.",
      icon: <Waves className="w-5 h-5" />
    },
    {
      title: "Weapons Assay",
      description: "Non-destructive identification of chemical agents and explosives in containers.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Nuclear Safeguards",
      description: "Systems designed for precise measurement of isotopic ratios in demanding environments.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "Spectroscopy Systems",
      description: "Industry-leading alpha and gamma spectroscopy systems for radionuclide quantification.",
      icon: <Binary className="w-5 h-5" />
    }
  ];

  return (
    <main className="min-h-screen bg-mesh">
      <HeroSection
        title="Scientific Rigor. Industrial Precision."
        subtitle="Bridging the gap between frontier research and manufacturing reality through dedicated laboratory excellence."
      />

      {/* Research and Education Section */}
      <Section>
        <SectionHeader
          title="Research and Education"
          subtitle="Empowering the next generation of scientists and researchers with industry-leading nuclear measurement tools."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
          <div className="space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-white/70 leading-relaxed">
                ORTEC has been an industry leader in nuclear measurement detectors and instrumentation for over 60 years.
                Whether it is cutting-edge research or educating the next generation of scientists and engineers,
                we provide an extensive suite of products to meet the most demanding requirements.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-gold font-bold uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-5 h-5" /> Key Applications
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {researchApps.map(app => (
                  <li key={app} className="flex items-center gap-3 text-white/60">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {researchCategories.map(cat => (
                <div key={cat.title} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/20 transition-all group">
                  <div className="mb-3 p-2 rounded-lg bg-gold/10 w-fit text-gold group-hover:bg-gold/20 transition-colors">
                    {cat.icon}
                  </div>
                  <h5 className="text-white font-bold mb-1">{cat.title}</h5>
                  <p className="text-white/50 text-xs leading-relaxed">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <ProductCard
              model="GEM-C30 HPGe Detector"
              description="Extended range P-type coaxial High Purity Germanium radiation detector, optimized for high resolution and efficiency across a broad energy spectrum."
              image="https://placehold.co/600x400/0A2540/D4AF77?text=GEM-C30+HPGe+Detector"
              link="https://www.ortec-online.com/products/radiation-detectors/high-purity-germanium-hpge-radiation-detectors/hpge-radiation-detector-types-how-choose/gem-p-type-coaxial-hpge-radiation-detectors"
              specs={[
                { parameter: "Detector Type", specification: "Extended Range P-type Coaxial HPGe" },
                { parameter: "Relative Efficiency", specification: "~30%" },
                { parameter: "Energy Resolution (FWHM)", specification: "≤ 1.80 keV @ 1.33 MeV" },
                { parameter: "Energy Resolution", specification: "≤ 0.85 keV @ 122 keV" },
                { parameter: "Peak-to-Compton Ratio", specification: "≥ 60:1" },
                { parameter: "Energy Range", specification: "~40 keV – 10 MeV" }
              ]}
            />
            <ProductCard
              model="GammaVision Software (A66-BW)"
              description="Premier gamma spectroscopy analysis software designed for the identification and quantification of radionuclides in both high and low resolution systems."
              image="https://placehold.co/600x400/0A2540/D4AF77?text=GammaVision+Software"
              link="https://www.ortec-online.com/products/software/gammavision"
              specs={[
                { parameter: "Software Type", specification: "Gamma Spectroscopy Analysis Software" },
                { parameter: "Compatibility", specification: "High & Low Resolution Systems" },
                { parameter: "Operating System", specification: "Windows 10 / 11 (64-bit)" },
                { parameter: "Key Features", specification: "Advanced peak search, nuclide ID, True Coincidence Summing Correction, QA/QC, Automation" },
                { parameter: "Standards Compliance", specification: "ISO 11929, ANSI N42.42" }
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Homeland Security Section */}
      <Section className="bg-white/5">
        <SectionHeader
          title="Homeland Security"
          subtitle="Advanced technologies for safeguarding nuclear materials and securing global borders."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
          <div className="grid grid-cols-1 gap-6 order-2 lg:order-1">
            <ProductCard
              model="MOBIUS-ST-DET"
              description="Liquid Nitrogen Recycler / Condensing Cooling System that enables HPGe detectors to operate with liquid nitrogen cooling but without the need for frequent refills."
              image="https://placehold.co/600x400/0A2540/D4AF77?text=MOBIUS-ST-DET"
              link="https://www.ortec-online.com/products/radiation-detectors/high-purity-germanium-hpge-radiation-detectors/detector-cooling/mobius"
              specs={[
                { parameter: "Type", specification: "LN₂ Recycler / Condensing Cooling System" },
                { parameter: "Dewar Capacity", specification: "25–28 Liters (excluding detector dipstick)" },
                { parameter: "Refill Frequency", specification: "Approximately once every 2 years (normal operation)" },
                { parameter: "Cooler", specification: "AMETEK Sunpower cryocooler with vibration dampening" },
                { parameter: "Power Consumption", specification: "125 W typical, 350 W maximum" },
                { parameter: "Audible Noise", specification: "< 60 dB(A) at 1 meter" },
                { parameter: "Electrical Supply", specification: "100–240 V AC, 50/60 Hz" },
                { parameter: "Weight (empty)", specification: "~63 lb (28.6 kg)" },
                { parameter: "Weight (full)", specification: "~113 lb (51.3 kg)" }
              ]}
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-white/70 leading-relaxed">
                ORTEC plays a crucial role in supporting government agencies and industries around the globe in securing and safeguarding nuclear and radioactive materials.
                Whether potential acts of terrorism, nuclear accidents, or materials control and accountancy, ORTEC has the technologies and solutions to meet the evolving challenges.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-gold font-bold uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-5 h-5" /> Security Applications
              </h4>
              <ul className="grid grid-cols-1 gap-3">
                {homelandApps.map(app => (
                  <li key={app} className="flex items-center gap-3 text-white/60">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {homelandCategories.map(cat => (
                <div key={cat.title} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/20 transition-all group">
                  <div className="mb-3 p-2 rounded-lg bg-gold/10 w-fit text-gold group-hover:bg-gold/20 transition-colors">
                    {cat.icon}
                  </div>
                  <h5 className="text-white font-bold mb-1">{cat.title}</h5>
                  <p className="text-white/50 text-xs leading-relaxed">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <Badge className="bg-gold/20 text-gold border-gold/30">Strategic Partnership</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Representative of <span className="text-gold">ORTEC/AMETEK, Inc.</span></h2>
          <p className="text-xl text-white/70 leading-relaxed">
            As the official technical representative for ORTEC/AMETEK, we provide frontline research
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
              <Button variant="gold" size="lg" className="p-0">
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
