import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/sections/section-wrapper";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection
        title="Privacy Policy"
        subtitle="How we protect and manage your data at RoyalDiadem Research & Laboratory."
      />
      <Section>
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h2 className="text-slate-900 dark:text-white">Our Commitment</h2>
          <p className="text-slate-600 dark:text-slate-400">
            We are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>
      </Section>
    </main>
  );
}
