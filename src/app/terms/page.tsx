import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/sections/section-wrapper";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection
        title="Terms of Service"
        subtitle="The legal framework for our professional engagements and digital services."
      />
      <Section>
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h2 className="text-slate-900 dark:text-white">General Terms</h2>
          <p className="text-slate-600 dark:text-slate-400">
            By using our services, you agree to comply with our professional standards and laboratory protocols.
          </p>
        </div>
      </Section>
    </main>
  );
}
