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
      image: "/images/detectors-types.png",
      link: "https://www.ortec-online.com/products/radiation-detectors/high-purity-germanium-hpge-radiation-detectors/hpge-radiation-detector-types-how-choose/profile-gem-p-type-coaxial-and-semi-planar-hpge-radiation-detectors",
      parameters: [
        { label: "Detector Type", value: "P-type Coaxial HPGe" },
        { label: "Efficiency", value: "Up to 150%" },
        { label: "Energy Range", value: "5 keV to >3 MeV" }
      ],
      specifications: [
        { label: "Entrance Window", value: "Stable, thin front contact" },
        { label: "Configuration", value: "Streamline" },
        { label: "Preamplifier", value: "Low-noise resistive feedback" }
      ]
    },
    {
      model: "CFG-SV-76",
      description: "Vertical streamline cryostat designed for optimal cooling performance and detector stability in laboratory environments.",
      image: "/images/ortec_ls.png",
      parameters: [
        { label: "Type", value: "Vertical Streamline" },
        { label: "Application", value: "HPGe Cooling" },
        { label: "Orientation", value: "Vertical" }
      ],
      specifications: [
        { label: "Material", value: "High-purity Aluminum/Magnesium" },
        { label: "Vacuum Life", value: ">2 years" },
        { label: "Holding Time", value: "Up to 24 hours" }
      ]
    },
    {
      model: "MOBIUS-ST-DET",
      description: "Liquid nitrogen recycler providing tried and tested cooling with refilling required only every two years under normal operation.",
      image: "/images/mobius.png",
      link: "https://www.ortec-online.com/products/radiation-detectors/high-purity-germanium-hpge-radiation-detectors/detector-cooling/mobius",
      parameters: [
        { label: "Dewar Capacity", value: "25 Liters" },
        { label: "Refill Period", value: "Approx. 2 years" },
        { label: "Weight (Full)", value: "113 lb (51.26 kg)" }
      ],
      specifications: [
        { label: "Power (Normal)", value: "125 W typical" },
        { label: "Noise Level", value: "< 60 dB (A) at 1m" },
        { label: "Control", value: "Digital smart controller" }
      ]
    },
    {
      model: "DSPEC-50 MCA",
      description: "Advanced digital signal processing gamma spectrometer featuring high stability against variations in count rate and temperature.",
      image: "/images/dsp50.png",
      link: "https://www.ortec-online.com/products/electronic-instruments/multi-channel-analyzers/workstation/dspec-50",
      parameters: [
        { label: "Conversion Gain", value: "Up to 64k channels" },
        { label: "Connectivity", value: "USB 2.0, Ethernet" },
        { label: "Throughput", value: ">100,000 cps" }
      ],
      specifications: [
        { label: "Display", value: "7\" Backlit Color LCD" },
        { label: "Filter Type", value: "Trapezoidal Digital" },
        { label: "Power Supply", value: "90-240V AC, 50-60Hz" }
      ]
    },
    {
      model: "A66-BW GammaVision",
      description: "Comprehensive gamma spectroscopy software suite for high and low resolution systems, featuring advanced spectrum analysis and automation.",
      image: "/images/gammavision-collage.jpg",
      link: "https://www.ortec-online.com/products/software/gammavision",
      parameters: [
        { label: "OS Support", value: "Windows 10, 8.1, 7" },
        { label: "Analysis Engines", value: "WAN32, GAM32, ENV32, etc." },
        { label: "Standards", value: "ISO/DIS 11929, ANSI N42.14" }
      ],
      specifications: [
        { label: "MDA Methods", value: "19 different methods" },
        { label: "Database", value: "Microsoft Access/SQL compatible" },
        { label: "Automation", value: "VBScript and Python support" }
      ]
    },
    {
      model: "Desktop Computer",
      description: "High-performance workstation pre-configured for gamma spectroscopy applications and ORTEC software integration.",
      image: "/images/ortec_ls.png",
      parameters: [
        { label: "Processor", value: "Intel Core i7/i9" },
        { label: "Memory", value: "16GB/32GB DDR4" },
        { label: "Storage", value: "512GB SSD + 2TB HDD" }
      ],
      specifications: [
        { label: "Graphics", value: "Integrated UHD Graphics" },
        { label: "OS", value: "Windows 10 Pro 64-bit" },
        { label: "Form Factor", value: "Mid-tower workstation" }
      ]
    },
    {
      model: "Calibration Point Source Set",
      description: "Comprehensive set of radioactive sources for energy calibration and quality assurance protocols.",
      image: "/images/ortec_ls.png",
      parameters: [
        { label: "Isotopes", value: "Co-60, Cs-137, Mn-54" },
        { label: "Activity", value: "1.0 µCi nominal" },
        { label: "Uncertainty", value: "±3% to ±5%" }
      ],
      specifications: [
        { label: "Dimensions", value: "1\" diameter disk" },
        { label: "Material", value: "High-strength plastic" },
        { label: "Certification", value: "NIST traceable" }
      ]
    }
  ];

  const alternativeOffer = [
    {
      model: "GEM-C30P4",
      description: "Extended range P-type HPGe detector in a Pop-Top configuration, offering maximum flexibility for detector exchanges.",
      image: "/images/detectors-types.png",
      link: "https://www.ortec-online.com/products/radiation-detectors/high-purity-germanium-hpge-radiation-detectors/hpge-radiation-detector-types-how-choose/profile-gem-p-type-coaxial-and-semi-planar-hpge-radiation-detectors",
      parameters: [
        { label: "Configuration", value: "Pop-Top Capsule" },
        { label: "Efficiency", value: "Up to 150%" },
        { label: "Energy Range", value: "5 keV to >3 MeV" }
      ],
      specifications: [
        { label: "Window Type", value: "Stable Carbon Fiber Option" },
        { label: "Mounting", value: "Interchangeable Pop-Top" },
        { label: "Cooling", value: "Pop-Top cryostat compatible" }
      ]
    },
    {
      model: "CFG-PV4",
      description: "Vertical Pop-Top cryostat designed for quick-exchange detector capsules and superior vacuum longevity.",
      image: "/images/ortec_ls.png",
      parameters: [
        { label: "Type", value: "Vertical Pop-Top" },
        { label: "Compatibility", value: "Pop-Top Capsules" },
        { label: "Installation", value: "Tool-free exchange" }
      ],
      specifications: [
        { label: "Weight", value: "Approx. 12 kg" },
        { label: "Finish", value: "Powder-coated blue" },
        { label: "Warranty", value: "1 year standard" }
      ]
    },
    {
      model: "CFG-ICS-P4",
      description: "Integrated Cooling System (ICS) for Pop-Top detectors, exploiting Stirling cooler technology for LN2-free operation.",
      image: "/images/ics.png",
      link: "https://www.ortec-online.com/products/radiation-detectors/high-purity-germanium-hpge-radiation-detectors/detector-cooling/ics",
      parameters: [
        { label: "Cooler Life", value: ">200,000 hours" },
        { label: "Audible Noise", value: "< 55 dBA at 1m" },
        { label: "Power (Room Temp)", value: "80 W typical" }
      ],
      specifications: [
        { label: "Technology", value: "Active Vibration Cancellation" },
        { label: "Cooling Time", value: "< 12 hours" },
        { label: "Maintenance", value: "Maintenance-free Stirling" }
      ]
    },
    {
      model: "DSPEC-50 MCA",
      description: "Advanced digital signal processing gamma spectrometer featuring high stability against variations in count rate and temperature.",
      image: "/images/dsp50.png",
      link: "https://www.ortec-online.com/products/electronic-instruments/multi-channel-analyzers/workstation/dspec-50",
      parameters: [
        { label: "Conversion Gain", value: "Up to 64k channels" },
        { label: "Connectivity", value: "USB 2.0, Ethernet" },
        { label: "Throughput", value: ">100,000 cps" }
      ],
      specifications: [
        { label: "Stability", value: "< 50 ppm/°C" },
        { label: "Linearity", value: "< ±0.025% integral" },
        { label: "Digital Filter", value: "Programmable rise time" }
      ]
    },
    {
      model: "A66-BW GammaVision",
      description: "Comprehensive gamma spectroscopy software suite for high and low resolution systems, featuring advanced spectrum analysis and automation.",
      image: "/images/gammavision-collage.jpg",
      link: "https://www.ortec-online.com/products/software/gammavision",
      parameters: [
        { label: "OS Support", value: "Windows 10, 8.1, 7" },
        { label: "Automation", value: "Scriptable Job Functions" },
        { label: "Compliance", value: "Full regulatory reporting" }
      ],
      specifications: [
        { label: "Multi-detector", value: "Support for up to 8 MCAs" },
        { label: "Spectra File", value: ".chn, .spc, .ans" },
        { label: "Peak Search", value: "Advanced library-driven" }
      ]
    },
    {
      model: "Desktop Computer",
      description: "High-performance workstation pre-configured for gamma spectroscopy applications and ORTEC software integration.",
      image: "/images/ortec_ls.png",
      parameters: [
        { label: "Display", value: "24\" Full HD Monitor" },
        { label: "I/O Ports", value: "6x USB 3.0, 2x Ethernet" },
        { label: "Network", value: "Wi-Fi 6 + Bluetooth 5.0" }
      ],
      specifications: [
        { label: "Security", value: "TPM 2.0 enabled" },
        { label: "Keyboard", value: "USB Quietkey Keyboard" },
        { label: "Mouse", value: "Optical Scroll Mouse" }
      ]
    },
    {
      model: "Calibration Point Source Set",
      description: "Comprehensive set of radioactive sources for energy calibration and quality assurance protocols.",
      image: "/images/ortec_ls.png",
      parameters: [
        { label: "Calibration", value: "Multi-point energy" },
        { label: "Packaging", value: "Lead-lined storage case" },
        { label: "Documentation", value: "Full data sheet included" }
      ],
      specifications: [
        { label: "Half-life", value: "Nuclide dependent" },
        { label: "Geometry", value: "Point source" },
        { label: "Safety", value: "Encapsulated epoxy" }
      ]
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
