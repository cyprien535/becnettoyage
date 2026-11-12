import React from 'react';
import { servicesData, siteConfig } from '../data/siteData';
import { Breadcrumb } from '../components/Breadcrumb';
import { ChevronRight, Check, ShieldCheck, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  navigate: (route: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ navigate }) => {
  const handleNav = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f5f9fe] min-h-screen pb-20">
      {/* Page Hero Header */}
      <section className="bg-[#02164f] text-white pt-28 sm:pt-36 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Nos services' }]}
            navigate={navigate}
          />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold text-[#00d2ff] uppercase tracking-wider block mb-2">
              Des solutions professionnelles adaptées
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Nos services de nettoyage professionnel
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Bureaux, résidences privées et fin de chantier : nous intervenons avec des protocoles stricts et du matériel professionnel à Abomey-Calavi, Cotonou et Porto-Novo.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Cards */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Service Image */}
                  <div className={`lg:col-span-5 relative min-h-[260px] lg:min-h-full ${isReversed ? 'lg:order-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
                  </div>

                  {/* Service Info */}
                  <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${isReversed ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e7effd] text-[#0a5be8] text-xs font-bold uppercase tracking-wider mb-3">
                        Service certifié
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02164f] mb-3">
                        {service.title}
                      </h2>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                        {service.fullDesc}
                      </p>

                      {/* Checklist / Features preview */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <Check className="w-4 h-4 text-[#0a5be8] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-100">
                      <button
                        onClick={() => handleNav('devis')}
                        className="px-5 py-2.5 bg-[#0a5be8] hover:bg-[#0742a8] text-white text-sm font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-md shadow-blue-600/20 active:scale-95 transition-all"
                      >
                        <span>Demander un devis</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleNav('contact')}
                        className="px-4 py-2.5 bg-[#e7effd] hover:bg-[#d9e6fc] text-[#0a5be8] text-sm font-semibold rounded-xl cursor-pointer transition-colors"
                      >
                        Nous contacter
                      </button>

                      <button
                        onClick={() => handleNav(`services/${service.slug}`)}
                        className="ml-auto text-xs font-semibold text-slate-500 hover:text-[#0a5be8] flex items-center gap-1 cursor-pointer"
                      >
                        <span>Fiche détaillée</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Equipment & Quality Section */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e7effd] text-xs font-bold text-[#0a5be8] uppercase tracking-wider mb-3">
                Matériel et produits de pointe
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02164f] mb-4">
                Une prestation définie et outillée avant de commencer
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Nous ne laissons rien au hasard. Chaque équipe intervient avec du matériel professionnel adapté au type de salissure et à la nature exacte de vos revêtements au Bénin.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 mb-6">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Aspirateurs industriels à filtration haute efficacité</strong> pour éliminer les poussières de ciment et particules fines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Monobrosses et disques de lustrage</strong> pour un décapage homogène sans rayer le grès cérame ni creuser les joints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Produits éco-responsables à pH contrôlé</strong> qui respectent l’environnement intérieur et la longévité de vos sols.</span>
                </li>
              </ul>

              <button
                onClick={() => handleNav('contact')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0a5be8] hover:underline"
              >
                <span>Nous contacter pour votre projet</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src="/images/materiel-nettoyage.jpg"
                alt="Matériel de nettoyage professionnel"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02164f] mb-3">
            Vous ne savez pas quel service correspond le mieux à votre besoin ?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6 max-w-xl mx-auto">
            Contactez notre équipe : nous analysons votre situation par téléphone ou WhatsApp pour vous conseiller la solution la plus économique et efficace.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleNav('devis')}
              className="px-7 py-3.5 bg-[#0a5be8] hover:bg-[#0742a8] text-white text-sm font-bold rounded-xl shadow-md shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Demander un devis</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="px-6 py-3.5 bg-[#f0f4fd] hover:bg-[#e2ecfc] text-[#02164f] text-sm font-bold rounded-xl border border-blue-200 transition-all cursor-pointer"
            >
              <span>Nous contacter</span>
            </button>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25d366] hover:bg-[#20ba59] text-white text-sm font-bold rounded-xl flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
