import React, { useState } from 'react';
import { servicesData, siteConfig } from '../data/siteData';
import { Breadcrumb } from '../components/Breadcrumb';
import { Check, ChevronDown, ChevronUp, ChevronRight, MessageCircle, ShieldCheck, ArrowLeft } from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  navigate: (route: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, navigate }) => {
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
              { label: 'Nos services', route: 'services' },
              { label: service.title },
            ]}
            navigate={navigate}
          />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold text-[#00d2ff] uppercase tracking-wider block mb-2">
              Prestation professionnelle spécialisée
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              {service.title}
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              {service.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
              <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-80">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold text-[#02164f] mb-3">
                Un protocole d'intervention méthodique et certifié
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                {service.fullDesc}
              </p>

              <div className="p-4 bg-[#e7effd] rounded-2xl border border-blue-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#0a5be8] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#02164f]">
                  <strong>Contrôle de conformité :</strong> Chaque tâche de la liste ci-dessous fait l'objet d'un émargement par le chef d'équipe avant la restitution des clés ou des locaux.
                </p>
              </div>
            </div>

            {/* Detailed Checklist by Zone */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
              <h2 className="text-2xl font-bold text-[#02164f] mb-2">
                Ce que comprend notre intervention en détail
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                Transparence totale : voici les opérations systématiquement réalisées lors de la prestation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.checklist.map((section, idx) => (
                  <div key={idx} className="bg-[#f5f9fe] p-5 rounded-2xl border border-slate-200">
                    <h3 className="text-base font-bold text-[#02164f] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0a5be8]"></span>
                      {section.category}
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {section.tasks.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#0a5be8] shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
              <h2 className="text-2xl font-bold text-[#02164f] mb-2">
                À qui s'adresse cette formule ?
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                Des configurations étudiées pour chaque type d'organisation au Bénin.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.audience.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#f5f9fe] border border-slate-200">
                    <h3 className="font-bold text-[#02164f] text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service FAQ */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
                <h2 className="text-2xl font-bold text-[#02164f] mb-4">
                  Questions fréquentes sur le {service.title.toLowerCase()}
                </h2>

                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-[#02164f] text-sm sm:text-base hover:bg-slate-50"
                      >
                        <span>{faq.q}</span>
                        {openFaq === idx ? (
                          <ChevronUp className="w-5 h-5 text-[#0a5be8] shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {openFaq === idx && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Quote Widget */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#0a5be8]/20 shadow-md sticky top-24">
              <span className="text-xs font-bold text-[#0a5be8] uppercase tracking-wider block mb-1">
                Devis express
              </span>
              <h3 className="text-xl font-bold text-[#02164f] mb-3">
                Intéressé par ce service ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Obtenez une proposition détaillée sans engagement en indiquant simplement la superficie et votre commune d'intervention.
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
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Bonjour BEC Nettoyage, je souhaite des renseignements sur votre prestation : ${service.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25d366] hover:bg-[#20ba59] text-white font-semibold rounded-xl text-center transition-all text-sm flex items-center justify-center gap-2 mb-6"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Poser une question WhatsApp</span>
              </a>

              <div className="pt-6 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Réponse sous 24 à 48 heures</span>
                </p>
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Cotonou · Abomey-Calavi · Porto-Novo</span>
                </p>
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Matériel et produits inclus</span>
                </p>
              </div>

              {/* Other services shortcuts */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Autres prestations :
                </p>
                <div className="space-y-2">
                  {servicesData
                    .filter((s) => s.id !== service.id)
                    .map((other) => (
                      <button
                        key={other.id}
                        onClick={() => handleNav(`services/${other.slug}`)}
                        className="text-xs font-medium text-slate-700 hover:text-[#0a5be8] block text-left"
                      >
                        → {other.title}
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
