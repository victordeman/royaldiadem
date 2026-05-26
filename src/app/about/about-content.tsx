"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/sections/section-wrapper";
import { SectionHeader } from "@/components/sections/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Users, Award, ShieldCheck, Globe } from "lucide-react";

export default function AboutContent() {
  const values = [
    {
      title: "Uncompromising Precision",
      description: "We maintain the highest standards of accuracy in every micro-measurement and manufacturing process.",
      icon: <Target className="h-6 w-6 text-gold" />,
    },
    {
      title: "Scientific Excellence",
      description: "Our research methodologies are grounded in rigorous academic standards and industry best practices.",
      icon: <Award className="h-6 w-6 text-gold" />,
    },
    {
      title: "Collaborative Innovation",
      description: "We work as an extension of our clients' teams, fostering a culture of shared discovery and success.",
      icon: <Users className="h-6 w-6 text-gold" />,
    },
    {
      title: "Global Compliance",
      description: "As ORTEC/AMETEK representatives, we adhere to international regulatory standards across all sectors.",
      icon: <ShieldCheck className="h-6 w-6 text-gold" />,
    },
  ];

  return (
    <main className="min-h-screen bg-mesh">
      <HeroSection
        title="Pioneering the Future of Precision"
        subtitle="RoyalDiadem Research & Laboratory is dedicated to advancing the boundaries of manufacturing through scientific rigor and strategic partnership."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-4 border-gold/50 text-gold uppercase tracking-widest">
              Our Story
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              A Legacy of <span className="text-gold">Excellence</span> in Research
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                Founded on the principles of precision and innovation, RoyalDiadem Research & Laboratory
                emerged as a specialized hub for technical excellence. As the authorized agent and
                representative of ORTEC/AMETEK, Inc., we bridge the gap between theoretical research and
                industrial application.
              </p>
              <p>
                Our laboratory serves as a beacon for companies seeking high-level manufacturing
                consultancy, material analysis, and process optimization. We don&apos;t just solve
                problems; we engineer competitive advantages for our global partners.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass-premium border border-white/10 flex items-center justify-center p-12">
               <Globe className="w-full h-full text-gold/5 animate-pulse" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border-2 border-gold/20 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute w-1/2 h-1/2 border border-gold/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
               </div>
               <div className="relative z-10 text-center">
                  <div className="text-6xl font-bold text-gold mb-2">15+</div>
                  <div className="text-white/50 uppercase tracking-widest text-sm">Years of Innovation</div>
               </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-white/5">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-premium p-12 rounded-3xl border border-white/10"
          >
            <Eye className="h-12 w-12 text-gold mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/70 text-lg leading-relaxed">
              To be the world&apos;s most trusted partner for precision manufacturing research,
              defining the standards of quality and innovation for the next generation of
              industrial development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-premium p-12 rounded-3xl border border-white/10"
          >
            <Target className="h-12 w-12 text-gold mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white/70 text-lg leading-relaxed">
              To deliver superior technical solutions and representative services that
              enable our clients to achieve unprecedented levels of manufacturing
              precision, reliability, and global market success.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Our Core Values"
          subtitle="The fundamental principles that guide every experiment and engagement."
          align="center"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full glass-premium border-white/5 hover:border-gold/30 transition-all duration-500 group">
                <CardContent className="pt-8">
                  <div className="mb-6 p-3 rounded-xl bg-white/5 w-fit group-hover:bg-gold/10 transition-colors">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-white/60 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/5">
        <SectionHeader
          title="Leadership Team"
          subtitle="Dedicated to excellence in environmental science and toxicology."
          align="center"
        />
        <div className="max-w-4xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-premium p-8 md:p-12 rounded-3xl border border-white/10 text-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-2xl overflow-hidden border-2 border-gold/20">
              <Image
                src="/images/ceo.png"
                alt="Dr. Onyagbodor Oghogho Peter"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">Dr. Onyagbodor Oghogho Peter, PhD</h4>
            <p className="text-gold text-sm md:text-base font-bold uppercase tracking-widest mb-8">
              President/CEO, Royal Diadem Research Laboratory
            </p>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto text-balance">
              Dr. Onyagbodor Oghogho Peter is the Founder and President/CEO of Royal Diadem Research Laboratory.
              A distinguished environmental biologist and toxicologist, he leads the platform&apos;s mission to provide
              high-quality research tools, scientific data resources, and collaborative opportunities in
              environmental sciences, toxicology, sustainability, and biological research. His academic
              expertise and leadership drive the development of innovative solutions for complex
              environmental challenges, particularly in oil-impacted regions.
            </p>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
