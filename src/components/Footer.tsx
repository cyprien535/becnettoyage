import React from 'react';
import { siteConfig, servicesData, zonesData } from '../data/siteData';
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  navigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02164f] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Presentation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl px-3 py-1.5 shadow-md border border-white/90 flex items-center justify-center">
                <img
                  src="/images/logo-bec-nettoyage-transparent.png"
                  alt="BEC Nettoyage"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight block">
                  BEC <span className="text-[#00d2ff]">Nettoyage</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">Propreté Plus Bénin</span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Entreprise de nettoyage professionnel au Bénin. Nous prenons en charge vos bureaux, locaux commerciaux, chantiers neufs et résidences privées avec méthode, ponctualité et suivi qualité.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#00d2ff] bg-white/5 p-2.5 rounded-lg border border-white/10">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#00d2ff]" />
              <span>Contrôle qualité systématique avant validation</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0a5be8]"></span>
              Nos services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav(`services/${s.slug}`)}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all text-left block"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-[#00d2ff] hover:underline font-medium pt-1 block"
                >
                  Tous nos services →
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-[#00d2ff] hover:underline font-medium block"
                >
                  Nous contacter directement →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Zones d'intervention */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0090cc]"></span>
              Zones d'intervention
            </h3>
            <ul className="space-y-2.5 text-sm">
              {zonesData.map((z) => (
                <li key={z.id}>
                  <button
                    onClick={() => handleNav(`zones/${z.slug}`)}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all text-left block"
                  >
                    Nettoyage à {z.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('zones')}
                  className="text-[#00d2ff] hover:underline font-medium pt-1 block"
                >
                  Carte et quartiers desservis →
                </button>
              </li>
              <li className="pt-2 text-xs text-slate-400">
                Déplacements réguliers à Cotonou, Abomey-Calavi, Porto-Novo et leurs environs.
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Horaires */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25d366]"></span>
              Nous contacter
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors font-medium">
                    {siteConfig.phoneDisplay}
                  </a>
                  <a href={`tel:${siteConfig.phone2}`} className="hover:text-white transition-colors font-medium">
                    {siteConfig.phone2Display}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  WhatsApp ({siteConfig.phoneDisplay})
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                <span>{siteConfig.horaires}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                <span>Cotonou · Abomey-Calavi · Porto-Novo (Bénin)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with legal & copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {siteConfig.brandName} · {siteConfig.company}. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => handleNav('mentions-legales')}
              className="hover:text-white transition-colors"
            >
              Mentions légales
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('politique-confidentialite')}
              className="hover:text-white transition-colors"
            >
              Politique de confidentialité
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('conditions-service')}
              className="hover:text-white transition-colors"
            >
              Conditions de service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
