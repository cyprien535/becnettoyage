import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteData';
import { Phone, MessageCircle, Menu, X, ChevronRight } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  navigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', route: 'home' },
    { label: 'Services', route: 'services' },
    { label: "Zone d'intervention", route: 'zones' },
  ];

  const handleLinkClick = (route: string) => {
    navigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (route: string) => {
    if (route === 'home' && currentRoute === 'home') return true;
    if (route !== 'home' && currentRoute.startsWith(route)) return true;
    return false;
  };

  return (
    <>
      {/* Main sticky navigation */}
      {/* Floating Transparent Navigation */}
      <header
        className={`fixed top-3 left-3 right-3 sm:top-5 sm:left-6 sm:right-6 max-w-7xl mx-auto z-50 transition-all duration-300 rounded-2xl ${
          isScrolled
            ? 'bg-[#02164f]/85 backdrop-blur-xl border border-white/20 shadow-2xl py-2.5 px-4 sm:px-6'
            : 'bg-[#02164f]/40 backdrop-blur-md border border-white/20 shadow-lg py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Retour à l'accueil"
          >
            <div className="h-10 sm:h-11 px-2.5 sm:px-3 bg-white rounded-xl shadow-md border border-white/90 flex items-center justify-center transition-all group-hover:scale-[1.02]">
              <img
                src="/images/logo-bec-nettoyage-transparent.png"
                alt="BEC Nettoyage"
                className="h-7 sm:h-8 w-auto object-contain drop-shadow-2xs"
              />
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.route);
              return (
                <button
                  key={link.route}
                  onClick={() => handleLinkClick(link.route)}
                  className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                    active
                      ? 'text-white bg-white/20 font-bold backdrop-blur-xs border border-white/20 shadow-xs'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Dual CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => handleLinkClick('contact')}
              className="text-white/85 hover:text-white px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
            >
              Nous contacter
            </button>

            <button
              onClick={() => handleLinkClick('devis')}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#0a5be8] hover:bg-[#0742a8] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all duration-150 cursor-pointer active:scale-95 border border-white/20"
            >
              <span>Demander un devis</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleLinkClick('devis')}
              className="sm:hidden text-xs font-bold bg-[#0a5be8] text-white px-3 py-1.5 rounded-lg border border-white/20 shadow-xs"
            >
              Devis
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-white/15 rounded-xl focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col p-6 overflow-y-auto animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <img
                  src="/images/logo-bec-nettoyage-transparent.png"
                  alt="BEC Nettoyage"
                  className="h-8 w-auto object-contain"
                />
                <span className="font-bold text-[#02164f] text-base">BEC Nettoyage</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.route);
                return (
                  <button
                    key={link.route}
                    onClick={() => handleLinkClick(link.route)}
                    className={`flex items-center justify-between px-3 py-3 rounded-xl text-left text-base font-medium transition-colors ${
                      active
                        ? 'bg-[#e7effd] text-[#0a5be8] font-semibold'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </button>
                );
              })}
            </div>

            <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => handleLinkClick('devis')}
                className="w-full py-3 bg-[#0a5be8] hover:bg-[#0742a8] text-white font-bold rounded-xl text-center shadow-md transition-all text-sm flex items-center justify-center gap-2"
              >
                <span>Demander un devis</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-center transition-colors text-sm"
              >
                Nous contacter
              </button>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-600 text-white font-medium rounded-xl text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Nous écrire sur WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="text-xs text-center text-slate-600 font-medium py-1"
              >
                Appelez le {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
