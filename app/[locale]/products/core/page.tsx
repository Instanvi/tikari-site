"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { 
  ArrowRight, 
  CheckCircle, 
  Bank, 
  Coins, 
  BuildingOffice, 
  ShieldCheck, 
  ArrowsLeftRight,
  ChartLineUp,
  Clock,
  Notebook,
  IdentificationCard,
  CashRegister
} from "@phosphor-icons/react";
import { Button, Card } from "@/components/ui";

export default function TikariCorePage() {
  const t = useTranslations("products");

  const capabilities = t.raw("core.capabilities") as Array<{ title: string; description: string }>;

  const featureSections = [
    {
      title: capabilities[0]?.title || "AAOIFI Chart of Accounts & Dual Ledger",
      description: capabilities[0]?.description || "",
      icon: Bank,
      image: "/woman-office.jpg",
      points: [
        "Pre-configured AAOIFI FAS chart of accounts for zero interest misclassification",
        "Seamless mapping to regional accounting frameworks (OHADA / SYSCOHADA)",
        "Automated deferred profit and unearned income amortisation schedules",
        "Full audit trails with multi-currency double-entry journal balance enforcement"
      ]
    },
    {
      title: capabilities[1]?.title || "Wadiah Safekeeping & Mudarabah Investment Pools",
      description: capabilities[1]?.description || "",
      icon: Coins,
      image: "/mom-daughter.jpg",
      points: [
        "Zero-interest current and savings accounts with Wadiah Yad Dhamanah contracts",
        "Tiered Mudarabah general and special investment pools with Shariah profit-sharing",
        "Automated monthly Profit Sharing Ratio (PSR) calculations and distribution",
        "Discretionary Hibah (gift) management strictly compliant with regulatory standards"
      ]
    },
    {
      title: capabilities[2]?.title || "Multi-Branch Teller & Vault Management",
      description: capabilities[2]?.description || "",
      icon: CashRegister,
      image: "/consulting-team.jpg",
      points: [
        "Head-office and branch vault cash management with automated till limits",
        "Multi-currency cash drawers with maker-checker approvals on high-value transfers",
        "Over-the-counter deposit, withdrawal, and instant internal transfer execution",
        "Real-time end-of-day till reconciliation and automated cash balancing"
      ]
    },
    {
      title: capabilities[3]?.title || "Automated Central Bank Regulatory Reporting",
      description: capabilities[3]?.description || "",
      icon: ChartLineUp,
      image: "/personOffice.jpg",
      points: [
        "Pre-built prudential returns for BEAC / COBAC and regional central banks",
        "Instant calculation of liquidity ratios, net stable funding, and capital adequacy",
        "Automated mandatory deposit insurance filings generated straight from ledger balances",
        "Export in regulatory XML, Excel, and automated API submission formats"
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
              {t("core.title")}
            </h1>

            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              {t("core.subtitle")}
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
              Engineered From Scratch for Shariah Accounting
            </h2>
            <p className="text-sm sm:text-base text-tikari-sage">
              Conventional banking platforms require clunky workarounds to suppress interest mechanics. Tikari Core is built natively Shariah-compliant.
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
                    <div className="w-12 h-12 rounded-xl bg-tikari-green text-white flex items-center justify-center shadow-md">
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
              href="/products/los"
              className="p-6 bg-white rounded-xl border border-tikari-green/10 hover:border-tikari-gold hover:shadow-md transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-tikari-gold/15 text-tikari-gold flex items-center justify-center mb-3">
                <Coins className="h-4 w-4" weight="bold" />
              </div>
              <h4 className="text-base font-bold text-tikari-green-dark group-hover:text-tikari-gold transition-colors">
                Tikari LOS
              </h4>
              <p className="text-xs text-tikari-sage mt-1">
                Loan origination pipeline with direct automatic loan booking to the Core general ledger.
              </p>
            </Link>

            <Link 
              href="/products/asset-manager"
              className="p-6 bg-white rounded-xl border border-tikari-green/10 hover:border-tikari-gold hover:shadow-md transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-tikari-green/10 text-tikari-green flex items-center justify-center mb-3">
                <BuildingOffice className="h-4 w-4" weight="bold" />
              </div>
              <h4 className="text-base font-bold text-tikari-green-dark group-hover:text-tikari-gold transition-colors">
                Tikari Asset Manager
              </h4>
              <p className="text-xs text-tikari-sage mt-1">
                Monitors physical custody, depreciation, and inventory matching Core ledger asset balances.
              </p>
            </Link>

            <Link 
              href="/products/takaful"
              className="p-6 bg-white rounded-xl border border-tikari-green/10 hover:border-tikari-gold hover:shadow-md transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-tikari-gold/15 text-tikari-gold flex items-center justify-center mb-3">
                <ShieldCheck className="h-4 w-4" weight="bold" />
              </div>
              <h4 className="text-base font-bold text-tikari-green-dark group-hover:text-tikari-gold transition-colors">
                Tikari Takaful
              </h4>
              <p className="text-xs text-tikari-sage mt-1">
                Provides Shariah-compliant mutual credit life and collateral asset protection for deposit & loan holders.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-tikari-gold via-tikari-gold/90 to-tikari-gold/80 text-tikari-green-dark py-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to upgrade your core banking operating system?
          </h2>
          <p className="text-base sm:text-lg text-tikari-green-dark/80 max-w-2xl mx-auto leading-relaxed">
            See Tikari Core in action with a tailored walkthrough configured for your institution.
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
