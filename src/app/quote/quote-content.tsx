"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Shield, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import { submitQuote } from "./actions";
import { useState } from "react";

export default function QuoteContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const result = await submitQuote(formData);

    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
    } else {
      alert("Submission failed: " + result.error);
    }
  }

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center p-6">
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="glass-premium p-16 rounded-[3rem] border border-gold/30 text-center max-w-2xl space-y-8"
         >
            <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
               <CheckCircle2 className="h-12 w-12 text-gold" />
            </div>
            <h2 className="text-4xl font-bold text-white">Proposal Request Received</h2>
            <p className="text-xl text-white/60 leading-relaxed">
               Your technical specifications have been submitted to our engineering team.
               You will receive a preliminary assessment within 24-48 hours.
            </p>
            <Button variant="default" size="lg" onClick={() => window.location.href = "/"}>
               Return Home
            </Button>
         </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <HeroSection
        title="Request a Technical Proposal"
        subtitle="Submit your project specifications for a comprehensive technical and commercial evaluation."
      />

      <Section>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-premium p-12 rounded-[3rem] border border-white/10"
          >
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white">Project Specifications</h2>
                  <p className="text-white/60">Provide detailed information to help our engineers provide an accurate assessment.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Company Name</label>
                      <input
                        name="company_name"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-gold/50 focus:bg-gold/5 transition-all outline-none"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Industry</label>
                      <select
                        name="industry"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-gold/50 outline-none appearance-none"
                      >
                         <option className="bg-slate-900" value="aerospace">Aerospace</option>
                         <option className="bg-slate-900" value="medical">Medical</option>
                         <option className="bg-slate-900" value="defense">Defense</option>
                         <option className="bg-slate-900" value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Project Description</label>
                    <textarea
                      name="description"
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-gold/50 outline-none resize-none"
                      placeholder="Describe the component, material, and tolerance requirements..."
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Technical Drawings (CAD/PDF)</label>
                    <div className="border-2 border-dashed border-white/10 rounded-2xl p-12 text-center hover:border-gold/30 transition-colors cursor-pointer group">
                       <Upload className="h-12 w-12 text-gold/20 group-hover:text-gold/40 transition-colors mx-auto mb-4" />
                       <p className="text-white/40 group-hover:text-white/60 transition-colors">Drag and drop your files here or click to browse</p>
                       <p className="text-xs text-white/20 mt-2">Maximum file size: 50MB. Supported formats: .step, .igs, .pdf, .zip</p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full py-8 text-lg font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing Submission..." : "Submit Proposal Request"}
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="p-8 bg-white/5 rounded-3xl border border-white/5 space-y-6">
                   <h3 className="text-xl font-bold text-white">Proposal Process</h3>
                   <div className="space-y-6">
                      {[
                        { icon: <FileText className="h-5 w-5" />, title: "Technical Review", desc: "Engineering team analyzes CAD data." },
                        { icon: <Clock className="h-5 w-5" />, title: "24-48h Response", desc: "Detailed breakdown of costs and timeline." },
                        { icon: <Shield className="h-5 w-5" />, title: "IP Protection", desc: "Non-disclosure agreement automatically applied." },
                      ].map((step) => (
                        <div key={step.title} className="flex gap-4">
                           <div className="mt-1 text-gold">{step.icon}</div>
                           <div>
                              <h4 className="text-sm font-bold text-white">{step.title}</h4>
                              <p className="text-xs text-white/40 leading-relaxed">{step.desc}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="p-8 glass-premium rounded-3xl border border-gold/10 flex gap-4">
                   <AlertCircle className="h-6 w-6 text-gold shrink-0" />
                   <p className="text-xs text-white/60 leading-relaxed">
                      For urgent requirements or AOG (Aircraft on Ground) situations,
                      please call our 24/7 hotline at <span className="text-white font-bold">+1 (555) 000-0000</span>.
                   </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
