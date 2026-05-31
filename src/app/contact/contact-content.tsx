"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";

export default function ContactContent() {
  return (
    <main className="min-h-screen bg-background">
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
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Get in <span className="text-primary">Touch</span></h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
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
                  <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-xl text-slate-900 dark:text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
               <div className="flex items-center gap-3 text-primary">
                  <Globe className="h-5 w-5" />
                  <span className="font-bold uppercase tracking-widest text-sm">Global Representative</span>
               </div>
               <p className="text-slate-600 dark:text-slate-400">
                  Official authorized agent for ORTEC/AMETEK, Inc. supporting operations in North America, Europe, and Asia.
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-10 md:p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-50 dark:bg-background border border-slate-200 dark:border-slate-800 rounded-xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-slate-50 dark:bg-background border border-slate-200 dark:border-slate-800 rounded-xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                <select className="w-full bg-slate-50 dark:bg-background border border-slate-200 dark:border-slate-800 rounded-xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                   <option>Project Consultation</option>
                   <option>Laboratory Services</option>
                   <option>Representative Inquiry</option>
                   <option>General Information</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Describe your project or inquiry..."
                  className="w-full bg-slate-50 dark:bg-background border border-slate-200 dark:border-slate-800 rounded-xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <Button variant="default" size="lg" className="w-full py-8 text-lg font-bold group">
                Send Message <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
