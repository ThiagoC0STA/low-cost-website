import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { PricingSection } from "@/components/PricingSection";
import { InteractiveToolsSection } from "@/components/InteractiveToolsSection";
import { QuizSection } from "@/components/QuizSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { CountdownTimer } from "@/components/CountdownTimer";
import { VacancyCounter } from "@/components/VacancyCounter";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";

export default function Home() {
  return (
    <main>
      <Hero />
      <UrgencyBar />
      <ProblemSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ComparisonSection />
      <PricingSection />
      <InteractiveToolsSection />
      <QuizSection />
      <BeforeAfterSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <ExitIntentPopup />
    </main>
  );
}

function UrgencyBar() {
  return (
    <section className="bg-amber-500/10 border-y border-amber-500/20 py-3">
      <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center gap-4">
        <CountdownTimer />
        <VacancyCounter />
      </div>
    </section>
  );
}
