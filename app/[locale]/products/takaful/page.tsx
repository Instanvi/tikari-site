"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Bank, 
  Coins, 
  BuildingOffice, 
  Scales,
  Heartbeat,
  Handshake,
  ArrowsLeftRight,
  CurrencyCircleDollar,
  Receipt
} from "@phosphor-icons/react";
import { Button, Card } from "@/components/ui";

export default function TikariTakafulPage() {
  const t = useTranslations("products");

  const capabilities = t.raw("takaful.capabilities") as Array<{ title: string; description: string }>;

  const featureSections = [
    {
      title: capabilities[0]?.title || "Mudarabah & Wakalah Operating Engine",
      description: capabilities[0]?.description || "",
      icon: Scales,
      image: "/smiling-looking-phone.webp",
      points: [
        "Configurable operational models: Wakalah (fixed upfront agency fee for management)",
        "Mudarabah mode: profit-sharing on invested participant funds according to pre-agreed ratios",
        "Hybrid Wakalah-Mudarabah models compliant with regional regulatory codes (CIMA / COBAC)",
        "Automated fee deduction and transparent accounting audit logs for Shariah boards"
      ]
    },
    {
      title: capabilities[1]?.title || "Participant Fund (PTF) Segregation & Tabarru",
      description: capabilities[1]?.description || "",
      icon: ShieldCheck,
      image: "/muslim-women.webp",
      points: [
        "Strict, automated segregation of Participant Takaful Funds (PTF / Tabarru donations) from Shareholder Funds (SHF)",
        "Zero commingling of risk donation capital with the operator's corporate balance sheet",
        "Automated reserve calculation and Shariah-compliant treasury investment management",
        "Built-in Qard Hasan (interest-free loan) mechanism to protect participant pools against underwriting deficits"
      ]
    },
    {
      title: capabilities[2]?.title || "Policy Administration & Participant Onboarding",
      description: capabilities[2]?.description || "",
      icon: Handshake,
      image: "/mom-daughter.jpg",
      points: [
        "Instant policy issuance for motor, commercial property, agricultural, health, and micro-takaful",
        "Embedded credit life protection directly integrated into loan origination (LOS) pipelines",
        "Flexible contribution frequencies: daily, monthly, or seasonal with mobile money integration",
        "Automated renewal notifications, contribution receipts, and policy certificates"
      ]
    },
    {
      title: capabilities[3]?.title || "Claims Management & Surplus Sharing",
      description: capabilities[3]?.description || "",
      icon: CurrencyCircleDollar,
      image: "/consulting-team.jpg",
      points: [
        "Digital claims intake with loss adjuster assignment, photo evidence, and approval workflows",
        "Rapid payout disbursement directly to participant bank accounts or mobile wallets",
        "Automated annual actuarial calculation of net technical underwriting surpluses",
        "Fair, Shariah-compliant distribution of surplus profits back to eligible participants"
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
              {t("takaful.title")}
            </h1>

            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              {t("takaful.subtitle")}
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
              True Mutual Insurance Free From Riba and Gharar
            </h2>
            <p className="text-sm sm:text-base text-tikari-sage">
              Tikari Takaful replaces conventional insurance risk-transfer with risk-sharing. Participants mutually protect one another through Tabarru (charitable donation pools).
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

      {/* Mode Comparison: Mudarabah vs Wakalah */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-tikari-cream/40 border-t border-tikari-green/10">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-tikari-gold font-bold">
              Dual Operational Modes
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-tikari-green-dark">
              Full Support for Both Mudarabah and Wakalah
            </h3>
            <p className="text-sm text-tikari-sage">
              Choose the right governance structure for your operational and regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-white rounded-2xl border border-tikari-green/15 space-y-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-tikari-green/10 text-tikari-green rounded-full">
                  Model 1
                </span>
                <span className="text-xs font-extrabold text-tikari-gold uppercase tracking-wider">
                  Profit-Sharing
                </span>
              </div>
              <h4 className="text-xl font-bold text-tikari-green-dark">
                Mudarabah Mode
              </h4>
              <p className="text-sm text-tikari-sage leading-relaxed">
                The Takaful operator acts as the Mudarib (fund manager), investing participant contributions in strictly Shariah-compliant instruments. Investment returns are shared between participants and the operator at a transparent, pre-agreed profit-sharing ratio.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-tikari-green-dark pt-2 border-t border-tikari-green/10">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-tikari-gold shrink-0" weight="fill" />
                  <span>Transparent profit-sharing ratio (e.g. 70/30 or 60/40)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-tikari-gold shrink-0" weight="fill" />
                  <span>Participant pool retains all underwriting surplus</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-tikari-gold shrink-0" weight="fill" />
                  <span>Ideal for investment-linked savings and pension takaful</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white rounded-2xl border border-tikari-green/15 space-y-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-tikari-gold/15 text-tikari-green-dark rounded-full">
                  Model 2
                </span>
                <span className="text-xs font-extrabold text-tikari-gold uppercase tracking-wider">
                  Agency Fee
                </span>
              </div>
              <h4 className="text-xl font-bold text-tikari-green-dark">
                Wakalah Mode
              </h4>
              <p className="text-sm text-tikari-sage leading-relaxed">
                The operator acts as an agent (Wakeel) managing underwriting and claims administration on behalf of participants for a defined, upfront agency fee (Ujrah). Any underwriting surplus belongs exclusively to the participant pool.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-tikari-green-dark pt-2 border-t border-tikari-green/10">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-tikari-gold shrink-0" weight="fill" />
                  <span>Fixed, transparent agency fee (Ujrah)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-tikari-gold shrink-0" weight="fill" />
                  <span>Performance incentive fee tied to surplus generation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-tikari-gold shrink-0" weight="fill" />
                  <span>Widely adopted by African microfinance & mutual funds</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Ecosystem Integration Banner */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white border-t border-tikari-green/10">
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
              className="p-6 bg-tikari-cream/30 rounded-xl border border-tikari-green/10 hover:border-tikari-gold hover:shadow-md transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-tikari-green/10 text-tikari-green flex items-center justify-center mb-3">
                <Bank className="h-4 w-4" weight="bold" />
              </div>
              <h4 className="text-base font-bold text-tikari-green-dark group-hover:text-tikari-gold transition-colors">
                Tikari Core
              </h4>
              <p className="text-xs text-tikari-sage mt-1">
                Collects automated recurring policy contributions straight from customer Wadiah deposit accounts.
              </p>
            </Link>

            <Link 
              href="/products/los"
              className="p-6 bg-tikari-cream/30 rounded-xl border border-tikari-green/10 hover:border-tikari-gold hover:shadow-md transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-tikari-gold/15 text-tikari-gold flex items-center justify-center mb-3">
                <Coins className="h-4 w-4" weight="bold" />
              </div>
              <h4 className="text-base font-bold text-tikari-green-dark group-hover:text-tikari-gold transition-colors">
                Tikari LOS
              </h4>
              <p className="text-xs text-tikari-sage mt-1">
                Packages credit life Takaful protection directly into the loan application and approval pipeline.
              </p>
            </Link>

            <Link 
              href="/products/asset-manager"
              className="p-6 bg-tikari-cream/30 rounded-xl border border-tikari-green/10 hover:border-tikari-gold hover:shadow-md transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-tikari-green/10 text-tikari-green flex items-center justify-center mb-3">
                <BuildingOffice className="h-4 w-4" weight="bold" />
              </div>
              <h4 className="text-base font-bold text-tikari-green-dark group-hover:text-tikari-gold transition-colors">
                Tikari Asset Manager
              </h4>
              <p className="text-xs text-tikari-sage mt-1">
                Protects financed vehicles, warehouses, and leased equipment with automated policy renewal tracking.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-tikari-gold via-tikari-gold/90 to-tikari-gold/80 text-tikari-green-dark py-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Launch Your Shariah Mutual Insurance Platform
          </h2>
          <p className="text-base sm:text-lg text-tikari-green-dark/80 max-w-2xl mx-auto leading-relaxed">
            From micro-takaful schemes to enterprise credit protection funds, deploy compliant Mudarabah and Wakalah insurance with Tikari.
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
