"use client"
import {
  ArrowRight,
  BookOpen,
  Layout,
  ShieldWarning,
  Medal,
  Globe,
  ArrowsClockwise,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export default function WhyTikariSection() {
  const t = useTranslations("home.whyTikari");

  const pillars = [
    {
      title: t("pillars.ledger.title"),
      desc: t("pillars.ledger.desc"),
      icon: BookOpen,
    },
    {
      title: t("pillars.cobac.title"),
      desc: t("pillars.cobac.desc"),
      icon: Layout,
    },
    {
      title: t("pillars.governance.title"),
      desc: t("pillars.governance.desc"),
      icon: Medal,
    },
    {
      title: t("pillars.fourEyes.title"),
      desc: t("pillars.fourEyes.desc"),
      icon: ShieldWarning,
    },
    {
      title: t("pillars.cameroon.title"),
      desc: t("pillars.cameroon.desc"),
      icon: Globe,
    },
    {
      title: t("pillars.migration.title"),
      desc: t("pillars.migration.desc"),
      icon: ArrowsClockwise,
    },
  ];

  return (
    <section className="w-full py-20 lg:py-32 px-6 bg-tikari-green-dark text-white relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tikari-green opacity-20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto space-y-14 lg:space-y-20 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center px-3.5 py-1.5 bg-tikari-gold/10 border border-tikari-gold/30 backdrop-blur-sm rounded-full">
            <span className="text-[11px] uppercase tracking-[0.15em] text-tikari-gold font-semibold">
              {t("badge")}
            </span>
          </div>

          <h2 className="text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight">
            {t("title")}
          </h2>

          <p className="text-sm lg:text-[17px] text-white/75 leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;

            return (
              <div
                key={idx}
                className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] p-8 lg:p-9 space-y-5 rounded-2xl hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-tikari-gold/[0.08] border border-tikari-gold/[0.15] flex items-center justify-center text-tikari-gold group-hover:bg-tikari-gold/[0.12] group-hover:border-tikari-gold/[0.25] transition-all duration-300">
                  <Icon
                    size={25}
                    weight="regular"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-[17px] font-bold text-white leading-snug tracking-tight">
                    {p.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}