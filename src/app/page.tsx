import { HeroSection } from "@/components/sections/hero-section";
import { Section as SectionWrapper } from "@/components/sections/section-wrapper";
import { SectionHeader } from "@/components/sections/section-header";
import { CapabilityCard } from "@/components/ui/capability-card";
import { IndustryCard } from "@/components/ui/industry-card";
import { AuthorizedAgentBadge } from "@/components/ui/authorized-agent-badge";
import { Cpu, Microscope, Settings, ShieldCheck, Zap, Factory } from "lucide-react";

export default function Home() {
  const capabilities = [
    {
      title: "Precision CNC Machining",
      description: "Advanced multi-axis milling and turning for the most demanding aerospace and medical specifications.",
      icon: <Settings className="h-8 w-8" />,
      href: "/capabilities/cnc-machining"
    },
    {
      title: "Injection Molding",
      description: "High-volume production with precision tolerances and a wide range of engineering-grade materials.",
      icon: <Zap className="h-8 w-8" />,
      href: "/capabilities/injection-molding"
    },
    {
      title: "Contract Assembly",
      description: "Turnkey manufacturing solutions including electromechanical assembly and full system integration.",
      icon: <Factory className="h-8 w-8" />,
      href: "/capabilities/assembly"
    }
  ];

  const industries = [
    { title: "Aerospace", icon: <ShieldCheck className="h-10 w-10" /> },
    { title: "Medical", icon: <Microscope className="h-10 w-10" /> },
    { title: "Electronics", icon: <Cpu className="h-10 w-10" /> }
  ];

  return (
    <main className="min-h-screen bg-mesh">
      <HeroSection 
        title="Elevating the Standards of Global Manufacturing"
        subtitle="RoyalDiadem delivers precision engineering and strategic manufacturing solutions as the authorized representative of ORTEC/AMETEK, Inc."
        primaryCtaText="Get a Quote"
        primaryCtaHref="/quote"
        secondaryCtaText="Explore Capabilities"
        secondaryCtaHref="/capabilities"
      />

      <SectionWrapper className="bg-transparent">
        <div className="flex justify-center mb-16">
          <AuthorizedAgentBadge />
        </div>
        
        <SectionHeader 
          title="Our Manufacturing Capabilities"
          subtitle="World-class precision engineering tailored for your most critical projects."
          align="center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.title} {...cap} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white/5 backdrop-blur-sm">
        <SectionHeader 
          title="Industries We Serve"
          subtitle="Providing specialized solutions across mission-critical sectors."
          align="center"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} {...industry} />
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
