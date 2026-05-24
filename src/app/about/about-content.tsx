"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/sections/section-wrapper";

export default function AboutContent() {
  return (
    <main className="min-h-screen bg-mesh py-20 lg:py-32">
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 relative inline-block"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden border-2 border-gold/30 shadow-2xl shadow-gold/10">
              <Image
                src="/images/ceo.png"
                alt="Dr. Onyagbodor Oghogho Peter"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold/20 rounded-tr-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-gold/20 rounded-bl-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                Dr. Onyagbodor Oghogho Peter, <span className="text-gold">PhD</span>
              </h1>
              <p className="text-gold font-bold uppercase tracking-[0.2em] text-sm md:text-base">
                President/CEO, Royal Diadem Research Laboratory
              </p>
            </div>

            <div className="prose prose-invert prose-lg mx-auto mt-12">
              <div className="space-y-6 text-white/80 leading-relaxed text-lg md:text-xl font-light">
                <p>
                  Dr. Onyagbodor Oghogho Peter is the Founder and President/CEO of Royal Diadem Research Laboratory.
                  A distinguished environmental biologist and toxicologist, he leads the platform’s mission to provide
                  high-quality research tools, scientific data resources, and collaborative opportunities in
                  environmental sciences, toxicology, sustainability, and biological research.
                </p>
                <p>
                  His academic expertise and visionary leadership drive the development of innovative solutions for
                  complex environmental challenges, with a particular focus on addressing the ecological impact in
                  oil-impacted regions. Under his guidance, Royal Diadem continues to bridge the gap between
                  scientific discovery and practical application.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
