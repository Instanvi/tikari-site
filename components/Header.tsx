"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { ArrowRight, X, List } from "@phosphor-icons/react/dist/ssr";
import {
  Handshake,
  Coins,
  Notebook,
  ShieldCheck,
  ChartLineUp,
  Users,
  UserGear,
  Bank,
  BuildingOffice,
  GraduationCap,
  BookOpen,
  Question,
  Bookmark,
  UserList,
  Certificate,
  MapPin,
  CaretRight,
  Globe,
} from "@phosphor-icons/react";
import MegaMenu from "./MegaMenu";
import { Button } from "@/components/ui";
import LanguageSwitcher from "./LanguageSwitcher";
import { GB, FR } from 'country-flag-icons/react/3x2';

export default function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const mobileNavSections = [
    {
      title: t("products.title"),
      items: [
        { name: t("products.core.name"), href: "/products/core" },
        { name: t("products.los.name"), href: "/products/los" },
        { name: t("products.assetManager.name"), href: "/products/asset-manager" },
        { name: t("products.takaful.name"), href: "/products/takaful" },
      ]
    },
    {
      title: t("platform.title"),
      items: [
        { name: t("platform.bankingOperations.name"), href: "/platform/banking-operations" },
        { name: t("platform.islamicFinancing.name"), href: "/platform/financing" },
        { name: t("platform.compliance.name"), href: "/platform/compliance" },
        { name: t("platform.glReporting.name"), href: "/platform/gl-reporting" },
        { name: t("platform.agentBanking.name"), href: "/platform/agent-banking" },
        { name: t("platform.administration.name"), href: "/platform/administration" },
      ]
    },
    {
      title: t("solution.title"),
      items: [
        { name: t("solution.microfinance.name"), href: "/solutions/microfinance" },
        { name: t("solution.communityBanks.name"), href: "/solutions/community-banks" },
        { name: t("solution.cooperatives.name"), href: "/solutions/cooperatives" },
        { name: t("solution.smes.name"), href: "/solutions/smes" },
      ]
    },
    {
      title: t("resources.title"),
      items: [
        { name: t("resources.education.name"), href: "/resources/education" },
        { name: t("resources.compliance.name"), href: "/resources/compliance" },
        { name: t("resources.jurisdictions.name"), href: "/jurisdictions" },
        { name: t("resources.support.name"), href: "/resources/support" },
      ]
    },
    {
      title: t("company.title"),
      items: [
        { name: t("company.about.name"), href: "/about" },
        { name: t("company.shariahBoard.name"), href: "/about#scholars" },
        { name: t("company.contact.name"), href: "/contact" },
      ]
    },
  ];

  const productItems = [
    { name: t("products.core.name"), desc: t("products.core.desc"), href: "/products/core", icon: Bank },
    { name: t("products.los.name"), desc: t("products.los.desc"), href: "/products/los", icon: Coins },
    { name: t("products.assetManager.name"), desc: t("products.assetManager.desc"), href: "/products/asset-manager", icon: BuildingOffice },
    { name: t("products.takaful.name"), desc: t("products.takaful.desc"), href: "/products/takaful", icon: ShieldCheck },
  ];

  const platformItems = [
    { name: t("platform.bankingOperations.name"), desc: t("platform.bankingOperations.desc"), href: "/platform/banking-operations", icon: Users },
    { name: t("platform.islamicFinancing.name"), desc: t("platform.islamicFinancing.desc"), href: "/platform/financing", icon: Coins },
    { name: t("platform.compliance.name"), desc: t("platform.compliance.desc"), href: "/platform/compliance", icon: ShieldCheck },
    { name: t("platform.glReporting.name"), desc: t("platform.glReporting.desc"), href: "/platform/gl-reporting", icon: ChartLineUp },
    { name: t("platform.agentBanking.name"), desc: t("platform.agentBanking.desc"), href: "/platform/agent-banking", icon: UserGear },
    { name: t("platform.administration.name"), desc: t("platform.administration.desc"), href: "/platform/administration", icon: Notebook },
  ];

  const solutionItems = [
    { name: t("solution.microfinance.name"), desc: t("solution.microfinance.desc"), href: "/solutions/microfinance", icon: Bank },
    { name: t("solution.communityBanks.name"), desc: t("solution.communityBanks.desc"), href: "/solutions/community-banks", icon: Handshake },
    { name: t("solution.cooperatives.name"), desc: t("solution.cooperatives.desc"), href: "/solutions/cooperatives", icon: Users },
    { name: t("solution.smes.name"), desc: t("solution.smes.desc"), href: "/solutions/smes", icon: BuildingOffice },
  ];

  const resourceItems = [
    { name: t("resources.education.name"), desc: t("resources.education.desc"), href: "/resources/education", icon: GraduationCap },
    { name: t("resources.compliance.name"), desc: t("resources.compliance.desc"), href: "/resources/compliance", icon: Bookmark },
    { name: t("resources.jurisdictions.name"), desc: t("resources.jurisdictions.desc"), href: "/jurisdictions", icon: Globe },
    { name: t("resources.support.name"), desc: t("resources.support.desc"), href: "/resources/support", icon: Question },
  ];

  const companyItems = [
    { name: t("company.about.name"), desc: t("company.about.desc"), href: "/about", icon: Bookmark },
    { name: t("company.shariahBoard.name"), desc: t("company.shariahBoard.desc"), href: "/about#scholars", icon: UserList },
    { name: t("company.contact.name"), desc: t("company.contact.desc"), href: "/contact", icon: MapPin },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${(scrolled || mobileMenuOpen)
            ? "bg-white/95 backdrop-blur-md border-b border-tikari-green/10"
            : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-10">
            <Image
              src="/logo.svg"
              alt="TIKARI Logo"
              width={40}
              height={49}
              className="object-contain max-h-10 sm:max-h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <MegaMenu
              label={t("products.title")}
              scrolled={scrolled}
              items={productItems}
              featuredItem={{
                badge: t("products.featured.badge"),
                title: t("products.featured.title"),
                desc: t("products.featured.desc"),
                href: "/products",
              }}
            />
            <MegaMenu
              label={t("platform.title")}
              scrolled={scrolled}
              items={platformItems}
              featuredItem={{
                badge: t("platform.featured.badge"),
                title: t("platform.featured.title"),
                desc: t("platform.featured.desc"),
                href: "/platform",
              }}
            />
            <MegaMenu
              label={t("solution.title")}
              scrolled={scrolled}
              items={solutionItems}
              featuredItem={{
                badge: t("solution.featured.badge"),
                title: t("solution.featured.title"),
                desc: t("solution.featured.desc"),
                href: "/solutions/community-banks",
              }}
            />
            <MegaMenu
              label={t("resources.title")}
              scrolled={scrolled}
              items={resourceItems}
              featuredItem={{
                badge: t("resources.featured.badge"),
                title: t("resources.featured.title"),
                desc: t("resources.featured.desc"),
                href: "/resources/support",
              }}
            />
            <MegaMenu
              label={t("company.title")}
              scrolled={scrolled}
              items={companyItems}
              featuredItem={{
                badge: t("company.featured.badge"),
                title: t("company.featured.title"),
                desc: t("company.featured.desc"),
                href: "/company#scholars",
              }}
            />
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher scrolled={scrolled || mobileMenuOpen} />

            <Button
              variant="secondary"
              size="sm"
              href="/demo"
              className="uppercase tracking-wider hidden sm:inline-flex"
            >
              {t("bookDemo")}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors rounded-lg ${
                (scrolled || mobileMenuOpen)
                  ? "text-tikari-green-dark hover:bg-tikari-green/5"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label={t("toggleMenu")}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" weight="bold" />
              ) : (
                <List className="h-6 w-6" weight="bold" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          
          <div className="absolute top-16 left-0 right-0 bottom-0 bg-white overflow-y-auto">
            <div className="p-4 space-y-1">
              {mobileNavSections.map((section, idx) => (
                <div key={idx} className="border-b border-tikari-green/10 pb-1">
                  <button
                    onClick={() => setMobileExpandedSection(mobileExpandedSection === section.title ? null : section.title)}
                    className="w-full flex items-center justify-between p-3 text-left font-semibold text-tikari-green-dark hover:bg-tikari-green/5 transition-colors"
                  >
                    {section.title}
                    <CaretRight 
                      className={`h-5 w-5 transition-transform duration-300 ${mobileExpandedSection === section.title ? 'rotate-90' : ''}`} 
                      weight="bold" 
                    />
                  </button>
                  
                  {mobileExpandedSection === section.title && (
                    <div className="pl-4 pb-2 space-y-1">
                      {section.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block p-2.5 text-sm text-tikari-sage hover:text-tikari-green-dark hover:bg-tikari-green/5 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 space-y-3">
                {/* Mobile Language Switcher */}
                <div className="border border-tikari-green/10 rounded-lg overflow-hidden">
                  <div className="px-3 py-2 bg-tikari-green/5 text-xs font-semibold text-tikari-green-dark uppercase tracking-wider flex items-center gap-2">
                    <Globe className="h-4 w-4" weight="bold" />
                    Language
                  </div>
                  <div className="divide-y divide-tikari-green/10">
                    {[
                      { code: "en", name: "English", flag: "🇬🇧" },
                      { code: "fr", name: "Français", flag: "🇫🇷" },
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          router.replace(pathname, { locale: lang.code });
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                          locale === lang.code
                            ? "bg-tikari-green/5 text-tikari-green-dark font-medium"
                            : "text-tikari-sage hover:bg-tikari-green/5"
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.name}</span>
                        {locale === lang.code && (
                          <span className="ml-auto text-tikari-green">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  variant="secondary"
                  href="/demo"
                  className="w-full uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("bookDemo")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}