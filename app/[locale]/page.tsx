import {
  HeroSection,
  TrustBar,
  ProblemSection,
  ProductsSection,
  PlatformOverviewSection,
  FinancingCalculatorSection,
  OperationsSection,
  WhyTikariSection,
  SecuritySection,
  ProcessSection,
  TestimonialSection,
  CTASection
} from "@/components/home";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white font-sans">
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <ProductsSection />
      <PlatformOverviewSection />
      <FinancingCalculatorSection />
      <OperationsSection />
      <WhyTikariSection />
      <SecuritySection />
      <ProcessSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}


