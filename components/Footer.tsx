"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ShieldCheck, MapPin, Phone, Envelope } from "@phosphor-icons/react";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tikari-green-dark border-t border-tikari-gold/20 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-8 mb-10 sm:mb-12">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-5 sm:space-y-6">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.svg"
                alt="TIKARI Logo"
                width={48}
                height={58}
                className="object-contain max-h-12 sm:max-h-14"
              />
            </Link>
            <p className="text-sm text-white/80 leading-relaxed max-w-md">
              {t("brand.description")}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <Link href="/jurisdictions" className="text-xs font-bold tracking-wider text-tikari-gold bg-tikari-gold/10 px-3 py-1.5 border border-tikari-gold/30 hover:bg-tikari-gold hover:text-tikari-green-dark transition-all duration-300 rounded-full">
                {t("brand.beacCompliant")}
              </Link>
              <Link href="/jurisdictions" className="text-xs font-bold tracking-wider text-tikari-gold bg-tikari-gold/10 px-3 py-1.5 border border-tikari-gold/30 hover:bg-tikari-gold hover:text-tikari-green-dark transition-all duration- rounded-full">
                {t("brand.cemacRegion")}
              </Link>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-2 sm:pt-4">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-5 w-5 text-tikari-gold flex-shrink-0 mt-0.5" weight="fill" />
                <span>{t("brand.location")}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="h-5 w-5 text-tikari-gold flex-shrink-0" weight="fill" />
                <span>{t("brand.phone")}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Envelope className="h-5 w-5 text-tikari-gold flex-shrink-0" weight="fill" />
                <span>{t("brand.email")}</span>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 sm:mb-6">
              {t("products.title")}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-white/70">
              <li><Link href="/products/core" className="hover:text-tikari-gold transition-colors">{t("products.core")}</Link></li>
              <li><Link href="/products/los" className="hover:text-tikari-gold transition-colors">{t("products.los")}</Link></li>
              <li><Link href="/products/asset-manager" className="hover:text-tikari-gold transition-colors">{t("products.assetManager")}</Link></li>
              <li><Link href="/products/takaful" className="hover:text-tikari-gold transition-colors">{t("products.takaful")}</Link></li>
              <li className="pt-1"><Link href="/products" className="text-tikari-gold font-medium hover:underline inline-flex items-center gap-1">{t("products.allProducts")} →</Link></li>
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 sm:mb-6">
              {t("platform.title")}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-white/70">
              <li><Link href="/platform/banking-operations" className="hover:text-tikari-gold transition-colors">{t("platform.bankingOperations")}</Link></li>
              <li><Link href="/platform/financing" className="hover:text-tikari-gold transition-colors">{t("platform.islamicFinancing")}</Link></li>
              <li><Link href="/platform/compliance" className="hover:text-tikari-gold transition-colors">{t("platform.compliance")}</Link></li>
              <li><Link href="/platform/gl-reporting" className="hover:text-tikari-gold transition-colors">{t("platform.glReporting")}</Link></li>
              <li><Link href="/platform/agent-banking" className="hover:text-tikari-gold transition-colors">{t("platform.agentBanking")}</Link></li>
              <li><Link href="/platform/administration" className="hover:text-tikari-gold transition-colors">{t("platform.administration")}</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 sm:mb-6">
              {t("company.title")}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-tikari-gold transition-colors">{t("company.about")}</Link></li>
              <li><Link href="/about#scholars" className="hover:text-tikari-gold transition-colors">{t("company.shariahBoard")}</Link></li>
              <li><Link href="/contact" className="hover:text-tikari-gold transition-colors">{t("company.contact")}</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 sm:mb-6">
              {t("resources.title")}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-white/70">
              <li><Link href="/resources/education" className="hover:text-tikari-gold transition-colors">{t("resources.education")}</Link></li>
              <li><Link href="/resources/compliance" className="hover:text-tikari-gold transition-colors">{t("resources.compliance")}</Link></li>
              <li><Link href="/jurisdictions" className="hover:text-tikari-gold transition-colors">{t("resources.jurisdictions")}</Link></li>
              <li><Link href="/resources/support" className="hover:text-tikari-gold transition-colors">{t("resources.support")}</Link></li>
              <li><Link href="/demo" className="hover:text-tikari-gold transition-colors">{t("resources.demo")}</Link></li>
              <li><Link href="/contact" className="hover:text-tikari-gold transition-colors">{t("resources.contactSupport")}</Link></li>
            </ul>
          </div>

        </div>

        {/* Shariah Assurance Banner */}
        <div className="mb-10 sm:mb-12 p-5 sm:p-6 bg-white/5 border border-tikari-gold/20 rounded-2xl">
          <div className="flex items-start gap-3 sm:gap-4">
            <ShieldCheck className="h-6 w-6 text-tikari-gold flex-shrink-0 mt-0.5 sm:mt-1" weight="fill" />
            <div>
              <h5 className="text-sm font-bold text-white mb-2">{t("assurance.title")}</h5>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {t("assurance.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="text-xs sm:text-sm text-white/60 text-center sm:text-left">
            © {currentYear} {t("legal.copyright")}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60">
            <Link href="/privacy" className="hover:text-tikari-gold transition-colors">{t("legal.privacy")}</Link>
            <Link href="/terms" className="hover:text-tikari-gold transition-colors">{t("legal.terms")}</Link>
            <Link href="/security" className="hover:text-tikari-gold transition-colors">{t("legal.security")}</Link>
          </div>
        </div>

      </div>

      {/* Giant branding text - Outside max-w container for full width */}
      <div className="w-full pt-8 sm:pt-10 relative z-0 overflow-hidden">
        <div className="text-center flex flex-col items-center leading-[0.85]">
          <h1 className="font-bold text-[10vw] md:text-[6vw] lg:text-[12vw] tracking-widest uppercase text-tikari-green/30">
            TIKARI
          </h1>
        </div>
      </div>
    </footer>
  );
}
