"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/sections/section-wrapper";
import { SectionHeader } from "@/components/sections/section-header";
import { ProductCard } from "@/components/ui/product-card";

export default function ProductsContent() {
  const primaryOffer = [
    {
      model: "GEM-C30",
      description: "Extended range P-type HPGe detector in a streamline configuration, optimized for maximum absolute efficiency in various counting geometries.",
      image: "https://www.ortec-online.com/-/media/ametekortec/images/detector/detectors-types.png",
      link: "https://www.ortec-online.com/products/radiation-detectors/high-purity-germanium-hpge-radiation-detectors/hpge-radiation-detector-types-how-choose/profile-gem-p-type-coaxial-and-semi-planar-hpge-radiation-detectors",
      specs: [
        { parameter: "Detector Type", specification: "P-type Coaxial HPGe" },
        { parameter: "Efficiency", specification: "Up to 150%" },
        { parameter: "Energy Range", specification: "5 keV to >3 MeV" },
        { parameter: "Entrance Window", specification: "Stable, thin front contact" },
        { parameter: "Configuration", specification: "Streamline" }
      ]
    },
    {
      model: "CFG-SV-76",
      description: "Vertical streamline cryostat designed for optimal cooling performance and detector stability in laboratory environments.",
      image: "https://www.ortec-online.com/-/media/ametekortec/images/logos/ortec_ls.png",
      specs: [
        { parameter: "Type", specification: "Vertical Streamline" },
        { parameter: "Application", specification: "HPGe Cooling" },
        { parameter: "Orientation", specification: "Vertical" }
      ]
    },
    {
      model: "MOBIUS-ST-DET",
      description: "Liquid nitrogen recycler providing tried and tested cooling with refilling required only every two years under normal operation.",
      image: "https://www.ortec-online.com/-/media/ametekortec/images/m/mobius.png",
      link: "https://www.ortec-online.com/products/radiation-detectors/high-purity-germanium-hpge-radiation-detectors/detector-cooling/mobius",
      specs: [
        { parameter: "Dewar Capacity", specification: "25 Liters" },
        { parameter: "Refill Period", specification: "Approx. 2 years" },
        { parameter: "Weight (Full)", specification: "113 lb (51.26 kg)" },
        { parameter: "Power (Normal)", specification: "125 W typical" },
        { parameter: "Noise Level", specification: "< 60 dB (A) at 1m" }
      ]
    },
    {
      model: "DSPEC-50 MCA",
      description: "Advanced digital signal processing gamma spectrometer featuring high stability against variations in count rate and temperature.",
      image: "https://www.ortec-online.com/-/media/ametekortec/images/d/dsp50.png",
      link: "https://www.ortec-online.com/products/electronic-instruments/multi-channel-analyzers/workstation/dspec-50",
      specs: [
        { parameter: "Conversion Gain", specification: "Up to 64k channels" },
        { parameter: "Connectivity", specification: "USB 2.0, Ethernet" },
        { parameter: "Throughput", specification: ">100,000 cps" },
        { parameter: "Display", specification: "7\" Backlit Color LCD" },
        { parameter: "Filter Type", specification: "Trapezoidal Digital" }
      ]
    },
    {
      model: "A66-BW GammaVision",
      description: "Comprehensive gamma spectroscopy software suite for high and low resolution systems, featuring advanced spectrum analysis and automation.",
      image: "https://www.ortec-online.com/-/media/ametekortec/images/gammavision-collage.jpg",
      link: "https://www.ortec-online.com/products/software/gammavision",
      specs: [
        { parameter: "OS Support", specification: "Windows 10, 8.1, 7" },
        { parameter: "Analysis Engines", specification: "WAN32, GAM32, ENV32, etc." },
        { parameter: "Standards", specification: "ISO/DIS 11929, ANSI N42.14" },
        { parameter: "MDA Methods", specification: "19 different methods" }
      ]
    },
    {
      model: "Desktop Computer",
      description: "High-performance workstation pre-configured for gamma spectroscopy applications and ORTEC software integration.",
      image: "https://www.ortec-online.com/-/media/ametekortec/images/logos/ortec_ls.png"
    },
    {
      model: "Calibration Point Source Set",
      description: "Comprehensive set of radioactive sources for energy calibration and quality assurance protocols.",
      image: "https://www.ortec-online.com/-/media/ametekortec/images/logos/ortec_ls.png"
    }
  ];

  const alternativeOffer = [
    {
      model: "GEM-C30P4",
      description: "Extended range P-type HPGe detector in a Pop-Top configuration, offering maximum flexibility for detector exchanges.",
      image: "https://www.ortec-online.com/-/media/ametekortec/images/detector/detectors-types.png",
      link: "https://www.ortec-online.com/products/radiation-detectors/high-purity-germanium-hpge-radiation-detectors/hpge-radiation-detector-types-how-choose/profile-gem-p-type-coaxial-and-semi-planar-hpge-radiation-detectors",
      specs: [
        { parameter: "Configuration", specification: "Pop-Top Capsule" },
        { parameter: "Efficiency", specification: "Up to 150%" },
        { parameter: "Window Type", specification: "Stable Carbon Fiber Option" },
        { parameter: "Energy Range", specification: "5 keV to >3 MeV" }
      ]
    },
    {
      model: "CFG-PV4",
      description: "Vertical Pop-Top cryostat designed for quick-exchange detector capsules and superior vacuum longevity.",
      image: "https://www.ortec-online.com/-/media/ametekortec/images/logos/ortec_ls.png",
      specs: [
        { parameter: "Type", specification: "Vertical Pop-Top" },
        { parameter: "Compatibility", specification: "Pop-Top Capsules" },
        { parameter: "Installation", specification: "Tool-free exchange" }
      ]
    },
    {
      model: "CFG-ICS-P4",
      description: "Integrated Cooling System (ICS) for Pop-Top detectors, exploiting Stirling cooler technology for LN2-free operation.",
      image: "https://www.ortec-online.com/-/media/ametekortec/images/i/ics.png",
      link: "https://www.ortec-online.com/products/radiation-detectors/high-purity-germanium-hpge-radiation-detectors/detector-cooling/ics",
      specs: [
        { parameter: "Cooler Life", specification: ">200,000 hours" },
        { parameter: "Audible Noise", specification: "< 55 dBA at 1m" },
        { parameter: "Power (Room Temp)", specification: "80 W typical" },
        { parameter: "Technology", specification: "Active Vibration Cancellation" }
      ]
    },
    {
      model: "DSPEC-50 MCA",
      description: "Advanced digital signal processing gamma spectrometer featuring high stability against variations in count rate and temperature.",
      image: "https://www.ortec-online.com/-/media/ametekortec/images/d/dsp50.png",
      link: "https://www.ortec-online.com/products/electronic-instruments/multi-channel-analyzers/workstation/dspec-50",
      specs: [
        { parameter: "Conversion Gain", specification: "Up to 64k channels" },
        { parameter: "Connectivity", specification: "USB 2.0, Ethernet" },
        { parameter: "Throughput", specification: ">100,000 cps" }
      ]
    },
    {
      model: "A66-BW GammaVision",
      description: "Comprehensive gamma spectroscopy software suite for high and low resolution systems, featuring advanced spectrum analysis and automation.",
      image: "https://www.ortec-online.com/-/media/ametekortec/images/gammavision-collage.jpg",
      link: "https://www.ortec-online.com/products/software/gammavision",
      specs: [
        { parameter: "OS Support", specification: "Windows 10, 8.1, 7" },
        { parameter: "Automation", specification: "Scriptable Job Functions" }
      ]
    },
    {
      model: "Desktop Computer",
      description: "High-performance workstation pre-configured for gamma spectroscopy applications and ORTEC software integration.",
      image: "https://www.ortec-online.com/-/media/ametekortec/images/logos/ortec_ls.png"
    },
    {
      model: "Calibration Point Source Set",
      description: "Comprehensive set of radioactive sources for energy calibration and quality assurance protocols.",
      image: "https://www.ortec-online.com/-/media/ametekortec/images/logos/ortec_ls.png"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <HeroSection
        title="World-Class Research Solutions"
        subtitle="Authorized agent and representative of Altek, Inc., providing industry-leading radiation detection and analysis equipment."
      />

      <Section>
        <SectionHeader
          title="Primary Offer"
          subtitle="Integrated spectroscopic solutions featuring streamline HPGe detector configurations."
          align="left"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {primaryOffer.map((product, index) => (
            <motion.div
              key={`${product.model}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50 dark:bg-slate-900/50 backdrop-blur-sm">
        <SectionHeader
          title="Alternative Offer"
          subtitle="Flexible spectroscopic solutions featuring Pop-Top HPGe detector configurations and advanced cryocooling."
          align="left"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {alternativeOffer.map((product, index) => (
            <motion.div
              key={`${product.model}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}
