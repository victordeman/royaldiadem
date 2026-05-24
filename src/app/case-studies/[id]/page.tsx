import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/sections/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study Analysis",
};

export default async function CaseStudyDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const validIds = ["aerospace-turbine", "medical-instrumentation", "defense-communication"];

  if (!validIds.includes(params.id)) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-mesh py-32">
      <Section>
        <Link href="/case-studies" className="text-gold flex items-center gap-2 mb-12 hover:opacity-80 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Back to Case Studies
        </Link>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <Badge variant="gold" className="uppercase tracking-[0.2em]">{params.id.split('-')[0]}</Badge>
            <h1 className="text-5xl font-bold text-white capitalize">{params.id.replace(/-/g, ' ')}</h1>
          </div>

          <div className="aspect-video rounded-3xl overflow-hidden glass-premium border border-white/10">
             <div className="w-full h-full bg-white/5 flex items-center justify-center">
                <span className="text-white/20 italic">Project imagery coming soon</span>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-8 glass-premium rounded-2xl border border-white/5 text-center">
                <div className="text-gold font-bold mb-2 uppercase tracking-widest text-xs">Duration</div>
                <div className="text-white text-xl">14 Months</div>
             </div>
             <div className="p-8 glass-premium rounded-2xl border border-white/5 text-center">
                <div className="text-gold font-bold mb-2 uppercase tracking-widest text-xs">Standard</div>
                <div className="text-white text-xl">AS9100D</div>
             </div>
             <div className="p-8 glass-premium rounded-2xl border border-white/5 text-center">
                <div className="text-gold font-bold mb-2 uppercase tracking-widest text-xs">Complexity</div>
                <div className="text-white text-xl">High</div>
             </div>
          </div>

          <article className="prose prose-invert max-w-none space-y-8 text-white/70 text-lg leading-relaxed">
             <h2 className="text-3xl font-bold text-white">Project Overview</h2>
             <p>
                This strategic initiative focused on the development of high-precision components
                under extremely tight tolerances. Our team utilized advanced simulation models
                and multi-axis machining techniques to achieve the desired technical specifications.
             </p>

             <h2 className="text-3xl font-bold text-white">Technical Challenges</h2>
             <p>
                The primary challenge involved the thermal stabilization of material during high-speed
                cutting operations. Traditional methods proved insufficient for the sub-micron
                accuracy required for this specific application.
             </p>

             <div className="p-12 glass-premium rounded-[2rem] border border-gold/20 my-16">
                <h3 className="text-gold font-bold text-2xl mb-4">Key Innovation</h3>
                <p className="text-white text-xl leading-relaxed italic">
                   &quot;The integration of real-time sensor feedback allowed us to adjust toolpaths
                   dynamically, compensating for thermal expansion in real-time.&quot;
                </p>
             </div>
          </article>
        </div>
      </Section>
    </main>
  );
}
