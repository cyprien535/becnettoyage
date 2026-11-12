import React from 'react';
import { zonesData, siteConfig } from '../data/siteData';
import { Breadcrumb } from '../components/Breadcrumb';
import { MapPin, Check, ChevronRight, MessageCircle, ShieldCheck } from 'lucide-react';

interface ZoneDetailPageProps {
  slug: string;
  navigate: (route: string) => void;
}

export const ZoneDetailPage: React.FC<ZoneDetailPageProps> = ({ slug, navigate }) => {
  const zone = zonesData.find((z) => z.slug === slug) || zonesData[0];

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
            items={[
              { label: 'Zones d’intervention', route: 'zones' },
              { label: zone.name },
            ]}
            navigate={navigate}
          />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold text-[#00d2ff] uppercase tracking-wider block mb-2">
              Département {zone.region} · Bénin
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Nettoyage professionnel à {zone.name}
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              {zone.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
              <h2 className="text-2xl font-bold text-[#02164f] mb-4">
                Des prestations adaptées aux réalités de {zone.name}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {zone.description}
              </p>

              <h3 className="text-base font-bold text-[#02164f] mb-3">
                Quartiers et secteurs couverts
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {zone.quartiers.map((q, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 bg-[#f5f9fe] border border-slate-200 rounded-lg text-slate-800 font-medium"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>

            {/* Specifics & Advantages */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
              <h2 className="text-2xl font-bold text-[#02164f] mb-6">
                Pourquoi choisir notre équipe à {zone.name} ?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-[#f5f9fe] border border-slate-200">
                  <h3 className="text-sm font-bold text-[#02164f] uppercase tracking-wider mb-3">
                    Défis locaux maîtrisés
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {zone.specifics.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0a5be8] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#e7effd] border border-blue-100">
                  <h3 className="text-sm font-bold text-[#0a5be8] uppercase tracking-wider mb-3">
                    Avantages pour vous
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#02164f]">
                    {zone.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0a5be8] shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#0a5be8]/20 shadow-md sticky top-24">
              <span className="text-xs font-bold text-[#0a5be8] uppercase tracking-wider block mb-1">
                Intervention à {zone.name}
              </span>
              <h3 className="text-xl font-bold text-[#02164f] mb-3">
                Planifier un passage
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Besoin d'un devis pour vos bureaux ou votre résidence à {zone.name} ? Réponse rapide garantie.
              </p>

              <button
                onClick={() => handleNav('devis')}
                className="w-full py-3.5 bg-[#0a5be8] hover:bg-[#0742a8] text-white font-bold rounded-xl text-center shadow-md shadow-blue-600/30 transition-all mb-2.5 text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Demander un devis</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNav('contact')}
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-[#02164f] font-semibold rounded-xl text-center transition-all mb-3 text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Nous contacter</span>
              </button>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Bonjour, je souhaite un devis pour des locaux situés à ${zone.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25d366] hover:bg-[#20ba59] text-white font-semibold rounded-xl text-center transition-all text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp ({zone.name})</span>
              </a>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Autres zones desservies :
                </p>
                <div className="space-y-1.5">
                  {zonesData
                    .filter((z) => z.id !== zone.id)
                    .map((other) => (
                      <button
                        key={other.id}
                        onClick={() => handleNav(`zones/${other.slug}`)}
                        className="text-xs font-medium text-slate-700 hover:text-[#0a5be8] block text-left"
                      >
                        → Nettoyage à {other.name}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
