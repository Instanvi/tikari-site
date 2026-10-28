"use client";

import { useState, useRef, useEffect, type ElementType } from "react";
import { Link } from "@/i18n/navigation";
import { CaretDown } from "@phosphor-icons/react";

interface MegaMenuItem {
  name: string;
  desc: string;
  href: string;
  icon: ElementType;
}

interface MegaMenuTab {
  id: string;
  label: string;
}

interface MegaMenuProps {
  label: string;
  scrolled: boolean;
  tabs?: MegaMenuTab[];
  items: Record<string, MegaMenuItem[]> | MegaMenuItem[];
  featuredItem?: {
    title: string;
    desc: string;
    badge: string;
    href: string;
    image?: string;
  };
}

export default function MegaMenu({ label, scrolled, tabs, items, featuredItem }: MegaMenuProps) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs && tabs.length > 0 ? tabs[0].id : "");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const hasSidebar = !!tabs && tabs.length > 0;

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    setActiveTab(tabId);
  };

  const getActiveItems = (): MegaMenuItem[] => {
    if (hasSidebar && typeof items === "object" && !Array.isArray(items)) {
      return items[activeTab] || [];
    }
    return Array.isArray(items) ? items : [];
  };

  const activeItems = getActiveItems();

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={`flex items-center gap-1 text-xs font-bold tracking-wider uppercase transition-colors duration-500 py-5 px-3 cursor-pointer ${open
          ? "text-tikari-gold"
          : scrolled
            ? "text-tikari-green-dark hover:text-tikari-gold"
            : "text-white/90 hover:text-white"
          }`}
      >
        {label}
        <CaretDown
          className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          weight="bold"
        />
      </button>

      {open && (
        <div
          className="fixed left-1/2 -translate-x-1/2 top-16 z-50 w-[min(960px,calc(100vw-2rem))] bg-white border border-tikari-green/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] flex max-h-[calc(100vh-5rem)] overflow-hidden"
          style={{ borderRadius: 0 }}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {/* Tabs Sidebar */}
          {hasSidebar && tabs && (
            <div className="w-[220px] bg-tikari-cream/30 border-r border-tikari-green/10 p-4 space-y-0.5 shrink-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onMouseEnter={() => handleTabChange(tab.id)}
                  className={`w-full text-left px-3 py-2.5 text-[11px] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${activeTab === tab.id
                    ? "bg-tikari-green/8 text-tikari-green-dark border-l-[3px] border-tikari-gold"
                    : "text-tikari-green-dark/70 hover:bg-tikari-green/5 hover:text-tikari-green-dark"
                    }`}
                  style={{ borderRadius: 0 }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          {/* Grid Content */}
          <div className="flex-1 p-6 overflow-y-auto bg-white rounded-2xl">
            <div className="grid grid-cols-2 gap-4 rounded-2xl">
              {activeItems.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="group flex items-start gap-3 p-3 border border-transparent hover:border-tikari-gold/20 hover:bg-tikari-cream/20 transition-all duration-200 rounded-2xl"
                    style={{ borderRadius: 0 }}
                  >
                    <div className="mt-0.5 p-2 bg-tikari-sage-light text-tikari-green group-hover:bg-tikari-gold group-hover:text-white transition-colors shrink-0 rounded-full">
                      <ItemIcon className="h-4 w-4" weight="duotone" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[12px] font-bold text-tikari-green-dark group-hover:text-tikari-green transition-colors mb-0.5 uppercase tracking-wider">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-tikari-green-dark/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Featured Side Panel */}
          {featuredItem && (
            <div className="w-[280px] bg-tikari-cream/40 border-l border-tikari-green/10 p-6 flex flex-col justify-between shrink-0">
              <div>
                <span className="inline-block px-2.5 py-0.5 text-[9px] font-extrabold tracking-widest uppercase bg-tikari-gold text-white mb-3">
                  {featuredItem.badge}
                </span>
                <h4 className="text-xs font-bold text-tikari-green-dark mb-2 uppercase tracking-wide leading-tight font-serif">
                  {featuredItem.title}
                </h4>
                <p className="text-[11px] text-tikari-green-dark/80 leading-relaxed mb-4">
                  {featuredItem.desc}
                </p>
              </div>
              <Link
                href={featuredItem.href}
                className="inline-flex items-center justify-center w-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white bg-tikari-green hover:bg-tikari-green-light transition-all"
                style={{ borderRadius: 0 }}
              >
                Learn More →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}