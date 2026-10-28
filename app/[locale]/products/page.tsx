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
  Cpu,
  Lock,
  Certificate
} from "@phosphor-icons/react";
import { Button, Card } from "@/components/ui";

export default function ProductsPage() {
  const t = useTranslations("products");

  const productList = [
    {
      key: "core",
      name: t("core.title"),
      badge: t("core.badge"),
      subtitle: t("core.subtitle"),
      description: t("core.description"),
      link: "/products/core",
      icon: Bank,
      image: "/woman-office.jpg",
      stats: [
        { value: t("core.stat1"), label: t("core.stat1Desc") },
        { value: t("core.stat2"), label: t("core.stat2Desc") },
        { value: t("core.stat3"), label: t("core.stat3Desc") },
      ],
      capabilities: (t.raw("core.capabilities") as Array<{ title: string; description: string }>).slice(0, 3),
    },
    {
      key: "los",
      name: t("los.title"),
      badge: t("los.badge"),
      subtitle: t("los.subtitle"),
      description: t("los.description"),
      link: "/products/los",
      icon: Coins,
      image: "/handshake.jpg",
      stats: [
        { value: t("los.stat1"), label: t("los.stat1Desc") },
        { value: t("los.stat2"), label: t("los.stat2Desc") },
        { value: t("los.stat3"), label: t("los.stat3Desc") },
      ],
      capabilities: (t.raw("los.capabilities") as Array<{ title: string; description: string }>).slice(0, 3),
    },
    {
      key: "assetManager",
      name: t("assetManager.title"),
      badge: t("assetManager.badge"),
      subtitle: t("assetManager.subtitle"),
      description: t("assetManager.description"),
      link: "/products/asset-manager",
      icon: BuildingOffice,
      image: "/people-smiling-papers.jpeg",
      stats: [
        { value: t("assetManager.stat1"), label: t("assetManager.stat1Desc") },
        { value: t("assetManager.stat2"), label: t("assetManager.stat2Desc") },
        { value: t("assetManager.stat3"), label: t("assetManager.stat3Desc") },
      ],
      capabilities: (t.raw("assetManager.capabilities") as Array<{ title: string; description: string }>).slice(0, 3),
    },
    {
      key: "takaful",
      name: t("takaful.title"),
      badge: t("takaful.badge"),
      subtitle: t("takaful.subtitle"),
      description: t("takaful.description"),
      link: "/products/takaful",
      icon: ShieldCheck,
      image: "/smiling-looking-phone.webp",
      stats: [
        { value: t("takaful.stat1"), label: t("takaful.stat1Desc") },
        { value: t("takaful.stat2"), label: t("takaful.stat2Desc") },
        { value: t("takaful.stat3"), label: t("takaful.stat3Desc") },
      ],
      capabilities: (t.raw("takaful.capabilities") as Array<{ title: string; description: string }>).slice(0, 3),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-tikari-green-dark text-white py-20 lg:py-28 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tikari-green-dark via-tikari-green to-tikari-green-dark opacity-95"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tikari-gold/15 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-tikari-green/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
              {t("suite.title")}
            </h1>

            <p className="text-lg lg:text-xl text-white/85 leading-relaxed max-w-3xl">
              {t("suite.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="secondary" size="lg" href="/demo">
                {t("suite.scheduleDemo")}
                <ArrowRight className="ml-2 h-5 w-5" weight="bold" />
              </Button>
              <Button variant="cream" size="lg" href="/contact">
                {t("suite.contactSales")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Products Deep Dive Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-20 lg:space-y-28">
          {productList.map((product, idx) => {
            const isEven = idx % 2 === 0;
            const ProductIcon = product.icon;

            return (
              <div
                key={product.key}
                id={product.key}
                className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center scroll-mt-24"
              >
                {/* Visual / Image Column */}
                <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-tikari-green/15 group">
                    <div className="relative h-72 sm:h-96 w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-tikari-green-dark/70 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-tikari-green text-white flex items-center justify-center">
                        <ProductIcon className="h-5 w-5" weight="bold" />
                      </div>
                      <span className="text-xs uppercase tracking-widest font-extrabold text-tikari-gold bg-tikari-gold/10 px-3 py-1 rounded-full border border-tikari-gold/20">
                        {product.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-tikari-green-dark tracking-tight">
                      {product.name}
                    </h2>

                    <p className="text-sm sm:text-base font-semibold text-tikari-gold">
                      {product.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-tikari-sage leading-relaxed">
                    {product.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-3 pt-2">
                    {product.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-3 p-3 bg-tikari-cream/30 rounded-xl border border-tikari-green/10">
                        <CheckCircle className="h-5 w-5 text-tikari-gold shrink-0 mt-0.5" weight="fill" />
                        <div>
                          <h4 className="text-sm font-bold text-tikari-green-dark">{cap.title}</h4>
                          <p className="text-xs sm:text-sm text-tikari-sage leading-relaxed mt-0.5">
                            {cap.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Link Action */}
                  <div className="pt-2">
                    <Link
                      href={product.link}
                      className="text-tikari-green hover:text-tikari-gold font-bold text-base inline-flex items-center gap-2 transition-colors group/link"
                    >
                      <span>Explore {product.name}</span>
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1.5 transition-transform" weight="bold" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Unified Architecture Section */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 md:px-12 bg-tikari-cream/40 border-t border-tikari-green/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-tikari-gold font-bold">
              Integrated Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-tikari-green-dark">
              How the 4 Tikari Products Work Together
            </h2>
            <p className="text-sm sm:text-base text-tikari-sage leading-relaxed">
              Eliminate software silos. Each product shares a single tenant Shariah accounting and governance layer.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-white border-tikari-green/10 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-full bg-tikari-green/10 text-tikari-green flex items-center justify-center">
                <Bank className="h-5 w-5" weight="bold" />
              </div>
              <h3 className="text-base font-bold text-tikari-green-dark">1. Central Ledger</h3>
              <p className="text-xs sm:text-sm text-tikari-sage leading-relaxed">
                <strong>Tikari Core</strong> records double-entry AAOIFI entries, Wadiah customer deposits, and runs regulatory reports.
              </p>
            </Card>

            <Card className="p-6 bg-white border-tikari-green/10 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-full bg-tikari-gold/15 text-tikari-gold flex items-center justify-center">
                <Coins className="h-5 w-5" weight="bold" />
              </div>
              <h3 className="text-base font-bold text-tikari-green-dark">2. Financing Pipeline</h3>
              <p className="text-xs sm:text-sm text-tikari-sage leading-relaxed">
                <strong>Tikari LOS</strong> processes Murabaha & Ijara applications, executes credit scoring, and links Shariah fatwas.
              </p>
            </Card>

            <Card className="p-6 bg-white border-tikari-green/10 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-full bg-tikari-green/10 text-tikari-green flex items-center justify-center">
                <BuildingOffice className="h-5 w-5" weight="bold" />
              </div>
              <h3 className="text-base font-bold text-tikari-green-dark">3. Asset Custody</h3>
              <p className="text-xs sm:text-sm text-tikari-sage leading-relaxed">
                <strong>Tikari Asset Manager</strong> verifies physical ownership of Murabaha trade inventory, Ijara leases, and collateral audits.
              </p>
            </Card>

            <Card className="p-6 bg-white border-tikari-green/10 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-full bg-tikari-gold/15 text-tikari-gold flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" weight="bold" />
              </div>
              <h3 className="text-base font-bold text-tikari-green-dark">4. Mutual Protection</h3>
              <p className="text-xs sm:text-sm text-tikari-sage leading-relaxed">
                <strong>Tikari Takaful</strong> safeguards financed facilities and customer portfolios with Mudarabah/Wakalah mutual protection.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-tikari-gold via-tikari-gold/90 to-tikari-gold/80 text-tikari-green-dark py-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Deploy the Tikari Product Suite for Your Institution
          </h2>
          <p className="text-base sm:text-lg text-tikari-green-dark/80 max-w-2xl mx-auto leading-relaxed">
            Whether adopting individual modules or our turnkey banking ecosystem, experience true non-interest banking software.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Button variant="primary" size="lg" href="/demo">
              {t("suite.scheduleDemo")}
              <ArrowRight className="ml-2 h-5 w-5" weight="bold" />
            </Button>
            <Button variant="cream" size="lg" href="/contact">
              {t("suite.contactSales")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
