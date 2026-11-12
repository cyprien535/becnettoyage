import React from 'react';
import { zonesData, siteConfig } from '../data/siteData';
import { Breadcrumb } from '../components/Breadcrumb';
import { MapPin, Check, ArrowRight, ShieldCheck, ChevronRight, MessageCircle } from 'lucide-react';

interface ZonesPageProps {
  navigate: (route: string) => void;
}

export const ZonesPage: React.FC<ZonesPageProps> = ({ navigate }) => {
  const handleNav = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f5f9fe] min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-[#02164f] text-white pt-28 sm:pt-36 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Zones d’intervention' }]}
            navigate={navigate}
          />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold text-[#00d2ff] uppercase tracking-wider block mb-2">
              Territoires desservis
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Nos zones d'intervention au Bénin
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Des équipes mobiles déployées au quotidien à Cotonou, Abomey-Calavi et Porto-Novo pour répondre à vos demandes dans les meilleurs délais.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {zonesData.map((zone) => (
              <div
                key={zone.id}
                className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#e7effd] text-xs font-bold text-[#0a5be8]">
                      Département {zone.region}
                    </span>
                    <MapPin className="w-5 h-5 text-[#0a5be8]" />
                  </div>

                  <h2 className="text-2xl font-bold text-[#02164f] mb-3">{zone.name}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {zone.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Quartiers et axes desservis :
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {zone.quartiers.map((q, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 bg-[#f5f9fe] border border-slate-200 rounded-md text-slate-700"
                        >
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Spécificités d'intervention :
                    </h3>
                    {zone.specifics.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#0a5be8] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleNav(`zones/${zone.slug}`)}
                    className="text-xs font-bold text-[#0a5be8] hover:underline flex items-center gap-1"
                  >
                    <span>Fiche complète {zone.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleNav('contact')}
                      className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      Nous contacter
                    </button>
                    <button
                      onClick={() => handleNav('devis')}
                      className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#0a5be8] text-white hover:bg-[#0742a8] shadow-xs transition-colors"
                    >
                      Demander un devis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Logistics banner */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-[#0a5be8] uppercase tracking-wider block mb-2">
                Logistique & Organisation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02164f] mb-4">
                Comment nous organisons nos déplacements
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Pour garantir notre ponctualité, nos plannings sont structurés par secteur géographique. Cela nous évite les retards liés aux embouteillages des carrefours stratégiques (Étoile Rouge, Godomey, Carrefour Vèdoko, etc.) et nous permet de maintenir des tarifs équitables sans frais de transport excessifs.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNav('devis')}
                  className="px-6 py-3.5 bg-[#0a5be8] text-white font-bold rounded-xl text-sm hover:bg-[#0742a8] shadow-md shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Demander un devis</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-[#02164f] font-bold rounded-xl text-sm transition-colors cursor-pointer"
                >
                  <span>Nous contacter</span>
                </button>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Bonjour, intervenez-vous dans mon quartier ?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Vérifier mon quartier sur WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
