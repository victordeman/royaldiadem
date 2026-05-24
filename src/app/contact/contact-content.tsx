"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/sections/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from "lucide-react";

export default function ContactContent() {
  return (
    <main className="min-h-screen bg-mesh">
      <HeroSection
        title="Connect with Excellence"
        subtitle="Our engineering and consultation teams are available for project inquiries and laboratory partnerships."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">Get in <span className="text-gold">Touch</span></h2>
              <p className="text-xl text-white/60 leading-relaxed">
                Whether you require technical consultation for a new project or
                information about our laboratory services, we are here to assist.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Mail className="h-6 w-6" />, title: "Technical Inquiries", value: "engineering@royaldiadem.res" },
                { icon: <Phone className="h-6 w-6" />, title: "Direct Line", value: "+1 (555) 012-3456" },
                { icon: <MapPin className="h-6 w-6" />, title: "Main Laboratory", value: "1200 Innovation Drive, Silicon Valley, CA" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-6 group">
                  <div className="p-4 rounded-xl bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-xl text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 glass-premium rounded-3xl border border-white/10 space-y-4">
               <div className="flex items-center gap-3 text-gold">
                  <Globe className="h-5 w-5" />
                  <span className="font-bold uppercase tracking-widest text-sm">Global Representative</span>
               </div>
               <p className="text-white/60">
                  Official authorized agent for Altek, Inc. supporting operations in North America, Europe, and Asia.
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-premium p-10 md:p-12 rounded-[3rem] border border-white/10"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none">
                   <option className="bg-slate-900">Project Consultation</option>
                   <option className="bg-slate-900">Laboratory Services</option>
                   <option className="bg-slate-900">Representative Inquiry</option>
                   <option className="bg-slate-900">General Information</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Describe your project or inquiry..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors resize-none"
                />
              </div>

              <Button variant="gold" size="lg" className="w-full py-8 text-lg font-bold group">
                Send Message <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
