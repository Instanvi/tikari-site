import { BookOpen, ShieldCheck, Cpu, PhoneCall, Mail } from "lucide-react";

export default function HelpCenterPage() {
  const categories = [
    {
      title: "Financing Modules",
      desc: "Guides and documentation for Murabaha disbursements, Mudarabah pool returns calculations, and Musharakah schedules.",
      icon: Cpu
    },
    {
      title: "Compliance & Auditing",
      desc: "Setting up your Shariah Board approvals, managing active Fatwas, and exporting FAS-compliant general ledgers for audits.",
      icon: ShieldCheck
    },
    {
      title: "Banking Operations",
      desc: "How to run Njangi groups, manage teller limits, register new KYC customer tiers, and process interbank clearing.",
      icon: BookOpen
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white min-h-screen font-sans">
      
      {/* Header Banner */}
      <section className="bg-tikari-green-dark text-white pt-32 pb-16 px-6 md:px-12 border-b border-tikari-green/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-tikari-gold font-bold">Support</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Help Center</h1>
          <p className="text-sm text-tikari-cream/80">Search documentation, read configuration guides, or contact our core banking integration engineers.</p>
        </div>
      </section>

      {/* Main Categories */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-16">
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-tikari-cream-light border border-tikari-green/10 p-6 rounded-md space-y-4 shadow-sm hover:border-tikari-gold transition-all">
              <div className="w-12 h-12 bg-tikari-green-dark text-tikari-gold flex items-center justify-center rounded-md">
                <cat.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-tikari-green-dark">{cat.title}</h3>
              <p className="text-sm text-tikari-sage leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="border border-tikari-green/10 p-8 md:p-12 bg-white rounded-md grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-tikari-green-dark">Still need assistance?</h2>
            <p className="text-sm text-tikari-sage leading-relaxed">
              Our regional support engineers are on standby in Douala to assist your IT team, operations managers, and Shariah board checkers.
            </p>
          </div>
          <div className="space-y-4 md:pl-8 border-t md:border-t-0 md:border-l border-tikari-green/10 pt-6 md:pt-0">
            <div className="flex items-center gap-3">
              <PhoneCall className="h-5 w-5 text-tikari-gold shrink-0" />
              <div>
                <p className="text-xs text-tikari-sage uppercase tracking-wider">Phone Support</p>
                <p className="text-sm font-bold text-tikari-green-dark">+237 672 141 321</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-tikari-gold shrink-0" />
              <div>
                <p className="text-xs text-tikari-sage uppercase tracking-wider">Email Support</p>
                <p className="text-sm font-bold text-tikari-green-dark">info@tikari.cm</p>
              </div>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}
