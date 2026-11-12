import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteData';
import { ChevronRight, Phone } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  navigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServicesActive = currentRoute === 'services' || currentRoute.startsWith('services/');
  const isDevisActive = currentRoute === 'devis';
  const isHomeActive = currentRoute === 'home' || currentRoute === '';
  const isZonesActive = currentRoute === 'zones' || currentRoute.startsWith('zones/');
  const isContactActive = currentRoute === 'contact';

  return (
    <header
      className={`fixed top-2.5 left-2.5 right-2.5 sm:top-5 sm:left-6 sm:right-6 max-w-7xl mx-auto z-50 transition-all duration-300 rounded-2xl ${
        isScrolled
          ? 'bg-[#02164f]/90 backdrop-blur-xl border border-white/20 shadow-2xl py-2 px-3 sm:px-6'
          : 'bg-[#02164f]/60 backdrop-blur-md border border-white/20 shadow-lg py-2.5 px-3 sm:px-6'
      }`}
    >
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2 sm:gap-3 text-left group focus:outline-none shrink-0 cursor-pointer"
          aria-label="Retour à l'accueil BEC Nettoyage"
        >
          <div className="h-9 sm:h-11 px-2.5 sm:px-3 bg-white rounded-xl shadow-md border border-white/90 flex items-center justify-center transition-all group-hover:scale-[1.02]">
            <img
              src="/images/logo-bec-nettoyage-transparent.png"
              alt="BEC Nettoyage"
              className="h-6 sm:h-8 w-auto object-contain"
            />
          </div>
          <span className="hidden min-[480px]:inline-block font-extrabold text-white text-sm sm:text-base tracking-tight">
            BEC <span className="text-[#00d2ff]">Nettoyage</span>
          </span>
        </button>

        {/* Desktop Navigation Links (Medium to Large screens) */}
        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => handleLinkClick('home')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              isHomeActive
                ? 'text-white bg-white/20 font-bold backdrop-blur-xs border border-white/20'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            Accueil
          </button>

          <button
            onClick={() => handleLinkClick('services')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              isServicesActive
                ? 'text-white bg-white/20 font-bold backdrop-blur-xs border border-white/20'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            Services
          </button>

          <button
            onClick={() => handleLinkClick('zones')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              isZonesActive
                ? 'text-white bg-white/20 font-bold backdrop-blur-xs border border-white/20'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            Zones
          </button>

          <button
            onClick={() => handleLinkClick('contact')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              isContactActive
                ? 'text-white bg-white/20 font-bold backdrop-blur-xs border border-white/20'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right Action Group: Pas d'icône de menu (pas de hamburger) -> Directement Services et le bouton Devis */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Services Button (visible on mobile / all screens) */}
          <button
            onClick={() => handleLinkClick('services')}
            className={`md:hidden px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              isServicesActive
                ? 'bg-white/25 text-white border border-white/30 shadow-xs'
                : 'text-white/90 hover:text-white bg-white/10 hover:bg-white/20'
            }`}
          >
            Services
          </button>

          {/* Bouton Devis (toujours visible, responsive) */}
          <button
            onClick={() => handleLinkClick('devis')}
            className={`inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl shadow-lg transition-all duration-150 cursor-pointer active:scale-95 border border-white/20 ${
              isDevisActive
                ? 'bg-white text-[#02164f] shadow-white/20'
                : 'bg-[#0a5be8] hover:bg-[#0742a8] text-white shadow-blue-600/30 hover:shadow-xl'
            }`}
          >
            <span>Devis</span>
            <span className="hidden sm:inline">en ligne</span>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-90" />
          </button>
        </div>
      </div>
    </header>
  );
};
