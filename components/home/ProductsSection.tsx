"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle, Bank, Coins, BuildingOffice, ShieldCheck } from "@phosphor-icons/react";
import { Card } from "@/components/ui";

export default function ProductsSection() {
  const t = useTranslations("home.productsSection");

  const products = [
    {
      key: "core",
      name: t("products.core.name"),
      badge: t("products.core.badge"),
      tagline: t("products.core.tagline"),
      description: t("products.core.description"),
      features: t.raw("products.core.features") as string[],
      link: "/products/core",
      icon: Bank,
      image: "/woman-office.jpg",
    },
    {
      key: "los",
      name: t("products.los.name"),
      badge: t("products.los.badge"),
      tagline: t("products.los.tagline"),
      description: t("products.los.description"),
      features: t.raw("products.los.features") as string[],
      link: "/products/los",
      icon: Coins,
      image: "/handshake.jpg",
    },
    {
      key: "assetManager",
      name: t("products.assetManager.name"),
      badge: t("products.assetManager.badge"),
      tagline: t("products.assetManager.tagline"),
      description: t("products.assetManager.description"),
      features: t.raw("products.assetManager.features") as string[],
      link: "/products/asset-manager",
      icon: BuildingOffice,
      image: "/people-smiling-papers.jpeg",
    },
    {
      key: "takaful",
      name: t("products.takaful.name"),
      badge: t("products.takaful.badge"),
      tagline: t("products.takaful.tagline"),
      description: t("products.takaful.description"),
      features: t.raw("products.takaful.features") as string[],
      link: "/products/takaful",
      icon: ShieldCheck,
      image: "/smiling-looking-phone.webp",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 px-4 sm:px-6 md:px-12 bg-tikari-cream/30 border-y border-tikari-green/10">
      <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tikari-gold/15 border border-tikari-gold/30">
            <span className="text-xs uppercase tracking-widest text-tikari-green-dark font-extrabold">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-tikari-green-dark tracking-tight">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-tikari-sage leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* 4 Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product) => {
            const ProductIcon = product.icon;
            return (
              <Card
                key={product.key}
                className="group border border-tikari-green/15 bg-white overflow-hidden rounded-2xl shadow-sm hover:shadow-xl hover:border-tikari-gold/40 transition-all duration-300 flex flex-col justify-between"
              >
                <Link href={product.link} className="flex-1 flex flex-col">
                  {/* Clean Card Image */}
                  <div className="relative h-52 sm:h-60 w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tikari-green-dark/70 via-transparent to-transparent" />
                    
                    {/* Badge Pill in corner */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-tikari-green-dark border border-tikari-green/15 shadow-sm rounded-full">
                        {product.badge}
                      </span>
                    </div>

                    {/* Icon circle */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-tikari-green-dark/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-tikari-gold">
                      <ProductIcon className="h-4 w-4" weight="bold" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2.5">
                      <p className="text-xs uppercase tracking-wider text-tikari-gold font-bold">
                        {product.tagline}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold text-tikari-green-dark group-hover:text-tikari-green transition-colors tracking-tight">
                        {product.name}
                      </h3>
                      <p className="text-sm text-tikari-sage leading-relaxed pt-1">
                        {product.description}
                      </p>
                    </div>

                    {/* Features Checklist */}
                    <div className="space-y-2.5 pt-3 border-t border-tikari-green/10">
                      {product.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-tikari-green-dark">
                          <CheckCircle className="h-4 w-4 text-tikari-gold shrink-0 mt-0.5" weight="fill" />
                          <span className="font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>

                {/* Card Action Link */}
                <div className="px-6 sm:px-7 pb-6 pt-0">
                  <div className="pt-4 border-t border-tikari-green/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-tikari-sage/80 uppercase tracking-wider">
                      AAOIFI Certified
                    </span>
                    <Link
                      href={product.link}
                      className="text-sm font-bold text-tikari-green group-hover:text-tikari-gold inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>{t("learnMore")}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" weight="bold" />
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Suite Banner */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-tikari-green-dark via-tikari-green to-tikari-green-dark text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg border border-tikari-gold/20">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold">
              {t("bannerTitle")}
            </h4>
            <p className="text-sm text-white/80">
              {t("bannerSubtitle")}
            </p>
          </div>
          <Link
            href="/products"
            className="shrink-0 px-6 py-3 bg-tikari-gold text-tikari-green-dark font-bold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all shadow-md flex items-center gap-2"
          >
            <span>{t("exploreAll")}</span>
            <ArrowRight className="h-4 w-4" weight="bold" />
          </Link>
        </div>

      </div>
    </section>
  );
}
