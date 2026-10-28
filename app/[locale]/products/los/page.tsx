"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { 
  ArrowRight, 
  CheckCircle, 
  Coins, 
  Bank, 
  BuildingOffice, 
  ShieldCheck, 
  FileText,
  Certificate,
  UsersThree,
  Signature,
  ArrowsClockwise
} from "@phosphor-icons/react";
import { Button, Card } from "@/components/ui";

export default function TikariLOSPage() {
  const t = useTranslations("products");

  const capabilities = t.raw("los.capabilities") as Array<{ title: string; description: string }>;

  const featureSections = [
    {
      title: capabilities[0]?.title || "Multi-Contract Islamic Financing Pipeline",
      description: capabilities[0]?.description || "",
      icon: Coins,
      image: "/handshake.jpg",
      points: [
        "Tailored origination flows for Murabaha (goods & equipment), Ijara (leasing), and Diminishing Musharakah",
        "Configurable contract milestones: supplier purchase, delivery verification, and customer sale",
        "Native handling of Istisna (construction/manufacturing) and Salam (agricultural advance finance)",
        "Zero interest formulas: all pricing calculated strictly via transparent markup or rental schedules"
      ]
    },
    {
      title: capabilities[1]?.title || "Automated Shariah Screening & Fatwa Reference",
      description: capabilities[1]?.description || "",
      icon: Certificate,
      image: "/consulting-team.jpg",
      points: [
        "Mandatory Shariah validation checkpoints built directly into the origination pipeline",
        "Direct linkage of each facility to certified Advisory Committee of Experts (ACE) fatwas",
        "System enforcement preventing loan disbursement before physical asset purchase verification",
        "Automated audit trails ready for annual Shariah Supervisory Board inspection"
      ]
    },
    {
      title: capabilities[2]?.title || "Intelligent Credit Scoring & Financial Analysis",
      description: capabilities[2]?.description || "",
      icon: ArrowsClockwise,
      image: "/personOffice.jpg",
      points: [
        "Configurable financial scoring algorithms tailored for salaried, SME, and micro-entrepreneurs",
        "Automated Debt-to-Income (DTI) and Debt-Service Coverage Ratio (DSCR) calculations",
        "Integration with national identification databases, biometric KYC, and credit bureaus",
        "Dynamic collateral assessment matrix with automated loan-to-value (LTV) limits"
      ]
    },
    {
      title: capabilities[3]?.title || "Tiered Committee Routing & Digital Contracts",
      description: capabilities[3]?.description || "",
      icon: UsersThree,
      image: "/meeting.jpg",
      points: [
        "Multi-tier Maker-Checker workflows based on loan amounts, risk tiers, and branch locations",
        "Credit committee routing with sequential four-eyes approvals and electronic signing",
        "Automated generation of Shariah-compliant offer letters, promissory notes, and sale agreements",
        "Instant, automated booking and disbursement to customer Wadiah accounts in Tikari Core"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-tikari-green-dark text-white py-20 lg:py-28 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tikari-green-dark via-tikari-green to-tikari-green-dark opacity-95"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tikari-gold/15 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-tikari-green/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight mb-6">
              {t("los.title")}
            </h1>

            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              {t("los.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" href="/demo">
                {t("common.bookDemo")}
                <ArrowRight className="ml-2 h-5 w-5" weight="bold" />
              </Button>
              <Button variant="cream" size="lg" href="/contact">
                {t("common.talkToSpecialist")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep-Dives */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-tikari-gold font-bold">
              {t("common.keyCapabilities")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-tikari-green-dark">
              Transforming Islamic Loan Origination into a Smooth Digital Flow
            </h2>
            <p className="text-sm sm:text-base text-tikari-sage">
              From application entry to Shariah compliance checks, risk analysis, and contract execution, manage the entire lifecycle with zero paper lag.
            </p>
          </div>

          {featureSections.map((sec, idx) => {
            const isEven = idx % 2 === 0;
            const SecIcon = sec.icon;

            return (
              <div 
                key={idx}
                className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                <div className={`lg:col-span-6 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-tikari-green/15 h-72 sm:h-96">
                    <Image
                      src={sec.image}
                      alt={sec.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tikari-green-dark/80 via-transparent to-transparent" />
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-tikari-gold text-tikari-green-dark flex items-center justify-center shadow-md">
                      <SecIcon className="h-6 w-6" weight="bold" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-tikari-green-dark">
                      {sec.title}
                    </h3>
                    <p className="text-sm sm:text-base text-tikari-sage leading-relaxed">
                      {sec.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {sec.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-tikari-gold shrink-0 mt-0.5" weight="fill" />
                        <span className="text-sm text-tikari-green-dark font-medium leading-relaxed">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Ecosystem Integration Banner */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-tikari-cream/30 border-t border-tikari-green/10">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-tikari-green-dark">
              {t("common.ecosystemIntegration")}
            </h3>
            <p className="text-sm text-tikari-sage">
              {t("common.ecosystemDescription")}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Link 
              href="/products/core"
              className="p-6 bg-white rounded-xl border border-tikari-green/10 hover:border-tikari-gold hover:shadow-md transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-tikari-green/10 text-tikari-green flex items-center justify-center mb-3">
                <Bank className="h-4 w-4" weight="bold" />
              </div>
              <h4 className="text-base font-bold text-tikari-green-dark group-hover:text-tikari-gold transition-colors">
                Tikari Core
              </h4>
              <p className="text-xs text-tikari-sage mt-1">
                Approved facilities disburse automatically to the Core double-entry general ledger.
              </p>
            </Link>

            <Link 
              href="/products/asset-manager"
              className="p-6 bg-white rounded-xl border border-tikari-green/10 hover:border-tikari-gold hover:shadow-md transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-tikari-gold/15 text-tikari-gold flex items-center justify-center mb-3">
                <BuildingOffice className="h-4 w-4" weight="bold" />
              </div>
              <h4 className="text-base font-bold text-tikari-green-dark group-hover:text-tikari-gold transition-colors">
                Tikari Asset Manager
              </h4>
              <p className="text-xs text-tikari-sage mt-1">
                Automatically registers purchased Murabaha goods and Ijara equipment upon origination.
              </p>
            </Link>

            <Link 
              href="/products/takaful"
              className="p-6 bg-white rounded-xl border border-tikari-green/10 hover:border-tikari-gold hover:shadow-md transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-tikari-green/10 text-tikari-green flex items-center justify-center mb-3">
                <ShieldCheck className="h-4 w-4" weight="bold" />
              </div>
              <h4 className="text-base font-bold text-tikari-green-dark group-hover:text-tikari-gold transition-colors">
                Tikari Takaful
              </h4>
              <p className="text-xs text-tikari-sage mt-1">
                Embeds mutual credit life and asset coverage seamlessly into loan origination files.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-tikari-gold via-tikari-gold/90 to-tikari-gold/80 text-tikari-green-dark py-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Accelerate Your Islamic Financing Origination
          </h2>
          <p className="text-base sm:text-lg text-tikari-green-dark/80 max-w-2xl mx-auto leading-relaxed">
            Eliminate manual loan file bottlenecks and enforce complete Shariah governance from the first application touchpoint.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Button variant="primary" size="lg" href="/demo">
              {t("common.bookDemo")}
              <ArrowRight className="ml-2 h-5 w-5" weight="bold" />
            </Button>
            <Button variant="cream" size="lg" href="/products">
              {t("common.viewOtherProducts")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
