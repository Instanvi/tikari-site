"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { 
  ArrowRight, 
  CheckCircle, 
  BuildingOffice, 
  Bank, 
  Coins, 
  ShieldCheck, 
  Warehouse,
  Car,
  MapPin,
  Camera,
  Wrench,
  Scales
} from "@phosphor-icons/react";
import { Button, Card } from "@/components/ui";

export default function TikariAssetManagerPage() {
  const t = useTranslations("products");

  const capabilities = t.raw("assetManager.capabilities") as Array<{ title: string; description: string }>;

  const featureSections = [
    {
      title: capabilities[0]?.title || "Murabaha Inventory & Goods Registry",
      description: capabilities[0]?.description || "",
      icon: Warehouse,
      image: "/people-smiling-papers.jpeg",
      points: [
        "Maintains verifiable proof of asset ownership and legal possession before resale to the client",
        "Tracks supplier purchase orders, delivery receipts, warehouse check-ins, and transfer deeds",
        "Guarantees that finance is never booked on imaginary, non-existent, or unpurchased commodities",
        "Provides exportable documentary audit trails for Shariah auditors and compliance officers"
      ]
    },
    {
      title: capabilities[1]?.title || "Ijara Lease Asset Lifecycle & Maintenance",
      description: capabilities[1]?.description || "",
      icon: Wrench,
      image: "/woman-office.jpg",
      points: [
        "Comprehensive tracking for leased equipment, commercial vehicles, machinery, and real estate",
        "Scheduled maintenance tracking and logging to fulfill the lessor's Shariah upkeep responsibilities",
        "Automated alerts for mandatory Takaful insurance renewals, roadworthiness, and asset inspections",
        "Seamless end-of-lease purchase option (Ijara wa Iqtina) transfer execution"
      ]
    },
    {
      title: capabilities[2]?.title || "Diminishing Musharakah Equity Ledger",
      description: capabilities[2]?.description || "",
      icon: Scales,
      image: "/handshake.jpg",
      points: [
        "Visualizes the joint equity ownership split between the financial institution and the partner",
        "Automated recalculation of rental payments as the customer buys out ownership units over time",
        "Dynamic equity share certificates generated and logged after each successful buyout payment",
        "Synchronized asset depreciation and equity amortization linked to the central general ledger"
      ]
    },
    {
      title: capabilities[3]?.title || "Collateral Auditing & Field Inspections",
      description: capabilities[3]?.description || "",
      icon: MapPin,
      image: "/smiling-looking-phone.webp",
      points: [
        "Mobile-ready field auditing app for loan officers inspecting financed assets and collateral",
        "Geo-tagged and time-stamped photo capture of pledged inventory, warehouses, and equipment",
        "Automated condition grading, physical valuation updates, and risk warning triggers",
        "Offline inspection mode allowing rural field audits to sync automatically when reconnected"
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
              {t("assetManager.title")}
            </h1>

            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              {t("assetManager.subtitle")}
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
              Asset Custody and Inventory Monitoring for Asset-Backed Finance
            </h2>
            <p className="text-sm sm:text-base text-tikari-sage">
              In true non-interest banking, money does not generate money on its own. Physical custody, genuine asset ownership, and field tracking are non-negotiable foundations.
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
                Asset register entries and depreciation synchronize directly with the double-entry general ledger.
              </p>
            </Link>

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
                Loan origination workflows trigger purchase orders, vendor invoices, and delivery tracking in Asset Manager.
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
                Monitors insurance policy expiration dates across all financed vehicles, warehouses, and equipment.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-tikari-gold via-tikari-gold/90 to-tikari-gold/80 text-tikari-green-dark py-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Gain Total Control Over All Financed Assets
          </h2>
          <p className="text-base sm:text-lg text-tikari-green-dark/80 max-w-2xl mx-auto leading-relaxed">
            Eliminate ghost collateral, guarantee valid trade ownership, and streamline maintenance across your entire leasing portfolio.
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
