"use client";

import {
  ArrowRight,
  Question,
  EnvelopeSimple,
  Phone,
  VideoCamera,
  ChartLineUp,
  Users,
  Coins,
  ShieldCheck,
  CaretDown,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function SupportPage() {
  const t = useTranslations("support");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const supportChannels = [
    {
      icon: EnvelopeSimple,
      title: t("contactSupport.methods.email.title"),
      description: t("contactSupport.methods.email.desc"),
      contact: t("contactSupport.methods.email.value"),
      action: t("contactSupport.methods.email.response"),
      color: "bg-tikari-green-dark",
    },
    {
      icon: Phone,
      title: t("contactSupport.methods.phone.title"),
      description: t("contactSupport.methods.phone.desc"),
      contact: t("contactSupport.methods.phone.value"),
      action: t("contactSupport.methods.phone.hours"),
      color: "bg-tikari-green",
    },
    {
      icon: VideoCamera,
      title: t("trainingResources.videoTutorials.title"),
      description: t("trainingResources.videoTutorials.desc"),
      contact: t("contactSupport.methods.chat.value"),
      action: t("trainingResources.videoTutorials.cta"),
      color: "bg-tikari-gold",
    },
  ];

  const helpTopics = [
    {
      icon: Users,
      title: t("categories.accountSetup.title"),
      description: t("quickLinks.gettingStarted.desc"),
      articles: 12,
      popular: [
        t("categories.accountSetup.articles.installation"),
        t("categories.accountSetup.articles.firstLogin"),
        t("categories.accountSetup.articles.userManagement"),
        t("categories.accountSetup.articles.permissions"),
      ],
    },
    {
      icon: Coins,
      title: t("categories.banking.title"),
      description: t("categories.banking.articles.accounts"),
      articles: 18,
      popular: [
        t("categories.banking.articles.customerOnboarding"),
        t("categories.banking.articles.accounts"),
        t("categories.banking.articles.njangi"),
        t("categories.banking.articles.teller"),
      ],
    },
    {
      icon: ChartLineUp,
      title: t("categories.compliance.title"),
      description: t("categories.compliance.articles.regulatoryReturns"),
      articles: 15,
      popular: [
        t("categories.compliance.articles.regulatoryReturns"),
        t("categories.compliance.articles.aaoifi"),
        t("categories.technical.articles.eod"),
        t("categories.compliance.articles.auditTrail"),
      ],
    },
    {
      icon: ShieldCheck,
      title: t("categories.financing.title"),
      description: t("categories.financing.articles.murabaha"),
      articles: 10,
      popular: [
        t("categories.financing.articles.murabaha"),
        t("categories.financing.articles.mudarabah"),
        t("categories.financing.articles.musharakah"),
        t("categories.financing.articles.ijara"),
      ],
    },
  ];

  const faqs = [
    {
      category: "Regulatory",
      question: "Is TIKARI compliant with regional microfinance regulations like COBAC and CBN?",
      answer:
        "Yes. TIKARI is built to comply with multiple regional frameworks across Africa, including COBAC regulations for the CEMAC zone, Central Bank of Nigeria (CBN) non-interest guidelines, and WAEMU/BCEAO rules. The platform generates compliant prudential returns directly from the General Ledger, maintains complete audit trails, and supports various banking licence categories.",
    },
    {
      category: "Standards",
      question: "Does TIKARI follow AAOIFI accounting standards?",
      answer:
        "Yes. TIKARI uses an AAOIFI-aligned chart of accounts and generates AAOIFI-compliant financial statements. The platform also reconciles AAOIFI standards with regional frameworks (like OHADA or local GAAP) where required.",
    },
    {
      category: "Local Context",
      question:
        "Can TIKARI handle regional currencies (FCFA, Naira, etc.) and regional accounting standards?",
      answer:
        "Yes. TIKARI natively supports multiple regional currencies (FCFA, NGN, KES, etc.), localized interbank settlements, and regional accounting frameworks like OHADA and national GAAP alongside AAOIFI non-interest accounting standards.",
    },
    {
      category: "Operations",
      question: "How does the maker-checker workflow work?",
      answer:
        "Every sensitive operation (product creation, disbursements, GL corrections) requires dual authorization. The 'maker' initiates the transaction, and a separate 'checker' approves it before execution. All actions are logged with timestamps and user IDs in the audit trail.",
    },
    {
      category: "Technical",
      question: "Does TIKARI support multi-currency operations?",
      answer:
        "Yes. TIKARI features a multi-currency ledger that supports multi-currency accounting, allowing institutions to handle transactions and reporting across different local and international currencies.",
    },
    {
      category: "Implementation",
      question: "How long does implementation take?",
      answer:
        "Implementation timelines vary by institution size. A Unit MFB typically takes 4-6 weeks from contract signing to go-live. Regional and National MFBs with multiple branches may require 8-12 weeks. This includes data migration, staff training, and Shariah board onboarding.",
    },
    {
      category: "Governance",
      question:
        "What is the ACE committee, and how does TIKARI support it?",
      answer:
        "ACE (Advisory Committee of Experts) is the Shariah Supervisory Board. TIKARI provides a dedicated ACE Dashboard where scholars can review pending products, issue Fatwas, conduct periodic audits, and maintain a searchable Fatwa repository for regulatory audit access.",
    },
    {
      category: "Products",
      question: "Can TIKARI handle Njangi/Tontine group savings structures?",
      answer:
        "Yes. TIKARI has native support for rotating savings and credit associations (Njangis, Tontines, Ajo), including contribution tracking, rotation schedules, automated disbursement to designated recipients, and full audit trails for regulatory compliance.",
    },
  ];

  const tutorials = [
    {
      title: "Creating Your First Murabaha Product",
      duration: "8 minutes",
      level: "Beginner",
      steps: 5,
    },
    {
      title: "Processing EOD Close",
      duration: "12 minutes",
      level: "Beginner",
      steps: 7,
    },
    {
      title: "Generating COBAC Returns",
      duration: "15 minutes",
      level: "Intermediate",
      steps: 9,
    },
    {
      title: "Multi-Branch GL Consolidation",
      duration: "20 minutes",
      level: "Advanced",
      steps: 12,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-tikari-green-dark text-white py-20 lg:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tikari-green-dark via-tikari-green to-tikari-green-dark opacity-90"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tikari-gold/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">

            <h1 className="text-4xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight mb-6">
              {t("hero.title")}
            </h1>

            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 bg-tikari-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="text-[11px] uppercase tracking-[0.16em] text-tikari-gold-dark font-semibold">
              {t("hero.badge")}
            </span>

            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-3 mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              {t("contactSupport.title")}
            </h2>

            <p className="text-[16px] lg:text-[17px] text-tikari-sage leading-relaxed">
              {t("contactSupport.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {supportChannels.map((channel, idx) => {
              const Icon = channel.icon;

              return (
                <div
                  key={idx}
                  className="group bg-white border border-tikari-green/10 rounded-2xl p-7 lg:p-8 hover:border-tikari-green/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${channel.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}
                  >
                    <Icon
                      size={24}
                      weight="regular"
                      className="text-white"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-tikari-green-dark mb-2">
                    {channel.title}
                  </h3>

                  <p className="text-[14px] text-tikari-sage leading-relaxed mb-4">
                    {channel.description}
                  </p>

                  <p className="text-sm font-semibold text-tikari-gold-dark mb-6">
                    {channel.contact}
                  </p>

                  <Button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-tikari-green-dark text-white hover:bg-tikari-green transition-colors text-sm font-semibold">
                    {channel.action}
                    <ArrowRight size={16} weight="bold" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12 lg:mb-14">
            <span className="text-[11px] uppercase tracking-[0.16em] text-tikari-gold-dark font-semibold">
              {t("quickLinks.title")}
            </span>

            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-3 mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              {t("categories.title")}
            </h2>

            <p className="text-[16px] lg:text-[17px] text-tikari-sage leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {helpTopics.map((topic, idx) => {
              const Icon = topic.icon;

              return (
                <div
                  key={idx}
                  className="group bg-white border border-tikari-green/10 rounded-2xl p-7 lg:p-8 hover:border-tikari-green/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-tikari-green/8 border border-tikari-green/10 flex items-center justify-center shrink-0 group-hover:bg-tikari-green-dark transition-colors">
                      <Icon
                        size={22}
                        weight="regular"
                        className="text-tikari-green-dark group-hover:text-white transition-colors"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <h3 className="text-lg font-bold text-tikari-green-dark">
                          {topic.title}
                        </h3>

                        <span className="text-xs font-semibold text-tikari-gold-dark whitespace-nowrap">
                          {topic.articles} articles
                        </span>
                      </div>

                      <p className="text-[14px] text-tikari-sage leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-tikari-green/10">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-[11px] font-semibold text-tikari-green-dark uppercase tracking-[0.12em]">
                        {t("popularArticles.title")}
                      </h4>

                      <ArrowUpRight
                        size={16}
                        className="text-tikari-sage group-hover:text-tikari-gold transition-colors"
                      />
                    </div>

                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {topic.popular.map((article, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[13px] text-tikari-sage hover:text-tikari-green-dark cursor-pointer transition-colors"
                        >
                          <span className="text-tikari-gold mt-0.5">•</span>
                          <span>{article}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 bg-tikari-cream/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
            <span className="text-[11px] uppercase tracking-[0.16em] text-tikari-gold-dark font-semibold">
              {t("quickLinks.faq.title")}
            </span>

            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-3 mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              {t("quickLinks.faq.desc")}
            </h2>

            <p className="text-[16px] text-tikari-sage leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFAQ === idx;

              return (
                <div
                  key={idx}
                  className={`bg-white border rounded-xl transition-all duration-300 ${isOpen
                      ? "border-tikari-gold/30 shadow-sm"
                      : "border-tikari-green/10 hover:border-tikari-green/20"
                    }`}
                >
                  <button
                    onClick={() =>
                      setOpenFAQ(isOpen ? null : idx)
                    }
                    className="w-full flex items-center justify-between gap-5 p-5 lg:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-tikari-gold-dark mb-2 inline-block">
                        {faq.category}
                      </span>

                      <h3 className="text-[16px] lg:text-[17px] font-semibold text-tikari-green-dark leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <span
                      className={`w-8 h-8 rounded-full border border-tikari-green/10 flex items-center justify-center shrink-0 transition-all ${isOpen
                          ? "bg-tikari-green-dark text-white border-tikari-green-dark"
                          : "text-tikari-green-dark"
                        }`}
                    >
                      <CaretDown
                        size={16}
                        weight="bold"
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 lg:px-6 pb-6">
                      <div className="pt-4 border-t border-tikari-green/10">
                        <p className="text-[14px] lg:text-[15px] text-tikari-sage leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12 lg:mb-14">
            <span className="text-[11px] uppercase tracking-[0.16em] text-tikari-gold-dark font-semibold">
              {t("trainingResources.title")}
            </span>

            <h2 className="text-3xl lg:text-[2.75rem] font-bold mt-3 mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              {t("trainingResources.videoTutorials.title")}
            </h2>

            <p className="text-[16px] lg:text-[17px] text-tikari-sage leading-relaxed">
              {t("trainingResources.videoTutorials.desc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {tutorials.map((tutorial, idx) => (
              <div
                key={idx}
                className="group bg-white border border-tikari-green/10 rounded-2xl overflow-hidden hover:border-tikari-green/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-tikari-green-dark flex items-center justify-center relative overflow-hidden">
                  <VideoCamera
                    size={42}
                    weight="regular"
                    className="text-white/30 group-hover:text-tikari-gold/70 group-hover:scale-110 transition-all duration-300"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute bottom-3 left-3 px-2 py-1 rounded-md bg-black/40 text-xs text-white font-medium backdrop-blur-sm">
                    {tutorial.duration}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${tutorial.level === "Beginner"
                          ? "bg-green-100 text-green-700"
                          : tutorial.level === "Intermediate"
                            ? "bg-tikari-gold/10 text-tikari-gold-dark"
                            : "bg-tikari-green-dark/10 text-tikari-green-dark"
                        }`}
                    >
                      {tutorial.level}
                    </span>

                    <span className="text-xs text-tikari-sage">
                      {tutorial.steps} steps
                    </span>
                  </div>

                  <h3 className="text-[15px] font-bold text-tikari-green-dark group-hover:text-tikari-gold-dark transition-colors leading-snug">
                    {tutorial.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 bg-tikari-gold">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-5 text-tikari-green-dark">
            {t("cta.title")}
          </h2>

          <p className="text-[16px] lg:text-[17px] text-tikari-green-dark/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="mailto:hi@instanvi.com"
            >
              {t("cta.contactSupport")}
              <ArrowRight
                size={18}
                weight="bold"
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>

            <Button
              variant="cream"
              size="lg"
              href="/demo"
            >
              {t("cta.bookDemo")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}