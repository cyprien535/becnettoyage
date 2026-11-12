import React from 'react';
import { servicesData, zonesData, methodSteps, testimonials, siteConfig } from '../data/siteData';
import { Check, Phone, MessageCircle, ChevronRight, Star, MapPin, ArrowUpRight } from 'lucide-react';
import { GradientBlinds } from '../components/GradientBlinds';
import { VerticalAccordionCards } from '../components/VerticalAccordionCards';

interface HomePageProps {
  navigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const handleNav = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section with GradientBlinds background */}
      <section className="relative overflow-hidden bg-[#02164f] text-white pt-28 sm:pt-36 pb-20 md:py-36 min-h-[580px] flex items-center">
        {/* Background GradientBlinds WebGL + Brand Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <GradientBlinds
            gradientColors={['#02164f', '#072a63', '#0a5be8', '#0090cc', '#00d2ff']}
            angle={20}
            blindCount={18}
            blindMinWidth={60}
            spotlightRadius={0.5}
            shine={0.45}
            relief={0.5}
            glow={0.4}
            sway={0.35}
            hoverTilt={0.65}
            clickEffect="ripple"
            noise={0.25}
            style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
          />
          {/* Contrast overlay so text is crisp and perfectly legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#02164f]/90 via-[#02164f]/70 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* 1. Image promotionnelle : VUE EN PREMIER SUR MOBILE (order-1), à droite sur grand écran (lg:order-2) */}
            <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end mb-2 lg:mb-0">
              <div className="relative w-full max-w-[250px] min-[400px]:max-w-[300px] sm:max-w-[360px] lg:max-w-[440px]">
                {/* Lueur d'ambiance d'arrière-plan */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#0a5be8]/40 via-[#00d2ff]/25 to-transparent rounded-full blur-2xl sm:blur-3xl pointer-events-none" />

                {/* Anneaux décoratifs géométriques professionnels */}
                <div className="absolute -top-6 -right-6 w-36 sm:w-44 h-36 sm:h-44 rounded-full border border-[#00d2ff]/30 pointer-events-none hidden sm:block animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-28 sm:w-32 h-28 sm:h-32 rounded-full border border-white/15 pointer-events-none hidden sm:block" />

                {/* Cadre professionnel double couche (Forme Arche Capsule Moderne) */}
                <div className="relative z-10 p-2 sm:p-2.5 rounded-t-[120px] min-[400px]:rounded-t-[140px] sm:rounded-t-[180px] rounded-br-[36px] sm:rounded-br-[48px] rounded-bl-[28px] sm:rounded-bl-[36px] bg-gradient-to-b from-white/35 via-white/15 to-white/5 border border-white/30 shadow-2xl backdrop-blur-md">
                  {/* Container intérieur avec fond harmonisé et coins sculptés */}
                  <div className="relative overflow-hidden rounded-t-[112px] min-[400px]:rounded-t-[132px] sm:rounded-t-[172px] rounded-br-[30px] sm:rounded-br-[40px] rounded-bl-[22px] sm:rounded-bl-[28px] bg-gradient-to-b from-[#072a63]/90 via-[#02164f] to-[#010f37]">
                    {/* Image promotionnelle optimisée WebP ultra-rapide */}
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="/images/hero-portrait-bec-480w.webp 480w, /images/hero-portrait-bec-880w.webp 880w"
                        sizes="(max-width: 640px) 290px, (max-width: 1024px) 360px, 440px"
                      />
                      <img
                        src="/images/hero-portrait-bec-880w.webp"
                        alt="Agent d'entretien professionnelle BEC Nettoyage en tenue officielle"
                        width={440}
                        height={480}
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        className="w-full h-auto object-cover max-h-[360px] min-[400px]:max-h-[420px] sm:max-h-[500px] lg:max-h-[540px] select-none pointer-events-none scale-[1.02] transform transition-transform duration-700 hover:scale-105"
                        style={{
                          WebkitMaskImage:
                            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 84%, rgba(0,0,0,0.7) 92%, rgba(0,0,0,0) 100%)',
                          maskImage:
                            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 84%, rgba(0,0,0,0.7) 92%, rgba(0,0,0,0) 100%)',
                        }}
                      />
                    </picture>

                    {/* Gradient subtil en overlay sur la partie inférieure */}
                    <div className="absolute inset-x-0 bottom-0 h-14 sm:h-16 bg-gradient-to-t from-[#02164f] via-[#02164f]/40 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Hero content : sous l'image sur mobile (order-2), à gauche sur grand écran (lg:order-1) */}
            <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold text-[#00d2ff] mb-4 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse"></span>
                <span>Services professionnels de propreté au Bénin</span>
              </div>

              <h1 className="text-2xl min-[400px]:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white mb-4 sm:mb-6">
                Vos espaces impeccables,{' '}
                <span className="text-[#00d2ff]">sans compromis</span>
              </h1>

              <p className="text-sm sm:text-lg text-slate-200 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                Bureaux, appartements et locaux en fin de chantier : nous prenons en charge le nettoyage de vos espaces avec méthode, ponctualité et un vrai souci du détail.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8 w-full">
                <button
                  onClick={() => handleNav('devis')}
                  className="px-5 sm:px-7 py-3 sm:py-3.5 bg-[#0a5be8] hover:bg-[#0742a8] text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer active:scale-95 text-xs sm:text-base"
                >
                  <span>Demander un devis</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                  onClick={() => handleNav('contact')}
                  className="px-5 sm:px-6 py-3 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-base"
                >
                  <span>Nous contacter</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 pt-3 border-t border-white/10 w-full">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00d2ff]" />
                  <span>Interventions 7j/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00d2ff]" />
                  <span>Cotonou · Calavi · Porto-Novo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00d2ff]" />
                  <span>Devis garanti sous 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Infinite Text Loop Marquee */}
      <div className="relative overflow-hidden py-3 bg-[#02164f] text-white border-y border-[#072a63] shadow-md">
        {/* Edge gradient masks for seamless infinite fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#02164f] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#02164f] to-transparent z-10" />

        <div className="animate-marquee flex items-center whitespace-nowrap select-none">
          {/* Track 1 */}
          <div className="flex items-center gap-6 sm:gap-8 px-4 shrink-0">
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#00d2ff]">
              Nettoyage Professionnel de Bureaux
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100">
              Remise en État Après Chantier
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#00d2ff]">
              Appartements & Résidences Privées
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100">
              Cotonou · Abomey-Calavi · Porto-Novo
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#00d2ff]">
              Devis Gratuit & Réponse Rapide
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100">
              Produits Écologiques & Matériel Pro
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#00d2ff]">
              Contrôle Qualité & Travail Soigné
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100">
              Ponctualité & Rigueur Garanties
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
          </div>

          {/* Track 2 (seamless duplication for infinite loop) */}
          <div className="flex items-center gap-6 sm:gap-8 px-4 shrink-0" aria-hidden="true">
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#00d2ff]">
              Nettoyage Professionnel de Bureaux
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100">
              Remise en État Après Chantier
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#00d2ff]">
              Appartements & Résidences Privées
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100">
              Cotonou · Abomey-Calavi · Porto-Novo
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#00d2ff]">
              Devis Gratuit & Réponse Rapide
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100">
              Produits Écologiques & Matériel Pro
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#00d2ff]">
              Contrôle Qualité & Travail Soigné
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100">
              Ponctualité & Rigueur Garanties
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 inline-block" />
          </div>
        </div>
      </div>

      {/* 3. Qui Sommes-Nous / Notre histoire (Aux couleurs officielles de la marque) */}
      <section className="py-16 sm:py-24 bg-white" id="entreprise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Colonne Gauche : Mosaïque des 4 photos avec coins arrondis */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4 max-w-lg mx-auto lg:max-w-none">
                {/* Colonne 1 : Photo 1 (haut) + Photo 3 (bas) */}
                <div className="space-y-3.5 sm:space-y-4">
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm aspect-[1.08] bg-slate-100 border border-slate-100">
                    <img
                      src="/images/about-photo-1.png"
                      alt="Professionnelle du nettoyage souriante dans une cuisine"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm aspect-[0.91] bg-[#0a5be8] border border-[#0a5be8]">
                    <img
                      src="/images/about-photo-3-blue.png"
                      alt="Agent d'entretien avec seau de nettoyage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Colonne 2 : Photo 2 (haut) + Photo 4 (bas) */}
                <div className="space-y-3.5 sm:space-y-4 pt-4 sm:pt-6">
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm aspect-[0.95] bg-slate-100 border border-slate-100">
                    <img
                      src="/images/about-photo-2.png"
                      alt="Nettoyage et lavage de vitres"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm aspect-[0.95] bg-slate-100 border border-slate-100">
                    <img
                      src="/images/about-photo-4.png"
                      alt="Agent en salopette avec panier de produits ménagers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne Droite : Contenu rédactionnel, métriques, checklist & contact */}
            <div className="lg:col-span-7">
              {/* Badge supérieur */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0a5be8] uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-[#0a5be8] inline-block shrink-0" />
                <span>QUI SOMMES-NOUS ?</span>
              </div>

              {/* Titre principal */}
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#02164f] tracking-tight leading-[1.2] mb-5">
                Notre histoire, notre mission, nées d'une passion pour l'innovation,{' '}
                <span className="text-[#0a5be8]">& des valeurs qui nous font avancer</span>
              </h2>

              {/* Paragraphe descriptif */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                BEC Nettoyage (Propreté Plus Bénin) est une entreprise de nettoyage professionnelle basée au Bénin. Nous proposons des services personnalisés pour les particuliers, les entreprises, les chantiers et les collectivités.
              </p>

              {/* Encadré statistiques 3 colonnes */}
              <div className="bg-[#f5f9fe] border border-[#d9e4f5] rounded-2xl p-4 sm:p-5 mb-7">
                <div className="grid grid-cols-3 divide-x divide-[#d9e4f5] text-center">
                  <div className="px-2">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-[#0a5be8]">5+</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium">années d'expérience</span>
                  </div>
                  <div className="px-2">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-[#0a5be8]">98%</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium">clients satisfaits !</span>
                  </div>
                  <div className="px-2">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-[#0a5be8]">198+</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium">organisation avec succès</span>
                  </div>
                </div>
              </div>

              {/* Double bloc : Checklist à gauche & Mission / Vision à droite */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-8">
                {/* Liste à puces avec coches aux couleurs de la marque */}
                <div className="md:col-span-7 space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#0a5be8] shrink-0 mt-0.5" />
                    <span>Respect de l'environnement et usage de produits écologiques</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#0a5be8] shrink-0 mt-0.5" />
                    <span>Confidentialité et sécurité dans tous les locaux</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#0a5be8] shrink-0 mt-0.5" />
                    <span>Qualité de service contrôlée et suivie</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#0a5be8] shrink-0 mt-0.5" />
                    <span>Réactivité en cas de besoin ou d'urgence</span>
                  </div>
                </div>

                {/* Bloc Mission & Vision */}
                <div className="md:col-span-5 flex items-start gap-3 bg-[#f5f9fe] p-3.5 rounded-2xl border border-[#d9e4f5]">
                  <div className="w-8 h-8 rounded-xl bg-white border border-blue-200 text-[#0a5be8] flex items-center justify-center shrink-0 shadow-2xs">
                    <Check className="w-4 h-4 text-[#0a5be8]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#02164f] text-sm mb-1">Notre mission & vision</h4>
                    <p className="text-xs text-slate-500 leading-snug">
                      Fournir des services de nettoyage d'excellence pour créer des espaces impeccables.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ligne d'action inférieure : Bouton bleu En Savoir Plus & Hotline téléphonique */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <button
                  onClick={() => handleNav('a-propos')}
                  className="px-6 sm:px-7 py-3 sm:py-3.5 bg-[#0a5be8] hover:bg-[#0742a8] text-white font-bold rounded-2xl text-sm flex items-center gap-3 shadow-md shadow-blue-600/20 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <span>En Savoir Plus</span>
                  <span className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-xs">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </button>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#e7effd] text-[#0a5be8] flex items-center justify-center shrink-0 border border-blue-100 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#0a5be8] block tracking-wide">
                      08:00 – 18:00 · Lundi au Samedi
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#02164f]">
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="hover:text-[#0a5be8] transition-colors tracking-tight"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                      <span className="text-slate-400">/</span>
                      <a
                        href={`tel:${siteConfig.phone2}`}
                        className="hover:text-[#0a5be8] transition-colors tracking-tight"
                      >
                        {siteConfig.phone2Display}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section className="py-16 sm:py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e7effd] text-xs font-bold text-[#0a5be8] uppercase tracking-wider mb-3">
              Prestations sur mesure
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#02164f] tracking-tight">
              Trois services pour couvrir vos besoins de nettoyage
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-4">
              Des prestations conçues pour répondre avec précision aux exigences des professionnels et des particuliers au Bénin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-[#f5f9fe] rounded-2xl overflow-hidden border border-slate-200 hover:border-[#0a5be8]/40 hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#02164f] mb-2 group-hover:text-[#0a5be8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 mb-6 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Ce qui est inclus :</p>
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#0a5be8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between mt-auto">
                    <button
                      onClick={() => handleNav(`services/${service.slug}`)}
                      className="text-xs font-bold text-[#0a5be8] hover:text-[#0742a8] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Voir le détail</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleNav('devis')}
                      className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-[#0a5be8] text-white hover:bg-[#0742a8] transition-colors cursor-pointer"
                    >
                      Devis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => handleNav('services')}
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#e7effd] hover:bg-[#d9e6fc] text-[#0a5be8] font-bold text-sm rounded-xl transition-colors cursor-pointer"
            >
              <span>En savoir plus</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Engagements Section (Cartes interactives avec texte vertical du bas vers le haut) */}
      <section className="py-16 sm:py-24 bg-[#f8faff] border-y border-[#dce6f6]" id="pourquoi-nous">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#e7effd] text-xs font-bold text-[#0a5be8] uppercase tracking-wider mb-3">
              Notre différence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#02164f] tracking-tight">
              Cinq engagements qui font la différence
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4">
              Pourquoi entreprises et particuliers à Cotonou, Calavi et Porto-Novo nous accordent leur confiance.
            </p>
          </div>

          <div className="w-full">
            <VerticalAccordionCards defaultIndex={1} />
          </div>
        </div>
      </section>

      {/* 6. Méthode en 5 étapes */}
      <section className="py-16 sm:py-20 bg-[#ecf3fc]" id="methode">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#0a5be8] uppercase tracking-wider mb-3 shadow-xs">
              Processus transparent
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#02164f] tracking-tight">
              Cinq étapes, du premier appel au contrôle final
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4">
              Une organisation rigoureuse pour une prestation sereine et sans mauvaise surprise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {methodSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-[#0a5be8]/20 block mb-2 font-mono">
                    {step.step}
                  </span>
                  <h3 className="font-bold text-base text-[#02164f] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Zones Section */}
      <section className="py-16 sm:py-20 bg-white" id="zones">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e7effd] text-xs font-bold text-[#0a5be8] uppercase tracking-wider mb-3">
              Couverture géographique
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#02164f] tracking-tight">
              Trois villes, un même niveau d’exigence
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4">
              Nos équipes mobiles interviennent rapidement dans les 3 principales agglomérations du sud Bénin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {zonesData.map((zone) => (
              <div
                key={zone.id}
                className="bg-[#f5f9fe] border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#e7effd] text-xs font-bold text-[#0a5be8]">
                      Département {zone.region}
                    </span>
                    <MapPin className="w-5 h-5 text-[#0a5be8]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#02164f] mb-2">{zone.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {zone.shortDesc}
                  </p>

                  <div className="mb-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Quartiers fréquents :
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {zone.quartiers.slice(0, 6).map((q, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 bg-white rounded-md text-slate-700 border border-slate-200"
                        >
                          {q}
                        </span>
                      ))}
                      <span className="text-xs px-2 py-1 text-slate-400">+ autres</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => handleNav(`zones/${zone.slug}`)}
                    className="text-xs font-bold text-[#0a5be8] hover:underline flex items-center gap-1"
                  >
                    <span>Détails de la zone</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleNav('contact')}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#0a5be8] text-white hover:bg-[#0742a8]"
                  >
                    Contacter à {zone.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Témoignages Section */}
      <section className="py-16 sm:py-20 bg-[#f5f9fe]" id="temoignages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e7effd] text-xs font-bold text-[#0a5be8] uppercase tracking-wider mb-3">
              Retours d'expérience
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#02164f] tracking-tight">
              Ce que disent nos clients
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4">
              La satisfaction de nos partenaires professionnels et particuliers est notre plus grande fierté.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed mb-6">
                    « {testi.text} »
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-[#02164f] text-sm">{testi.name}</h4>
                  <p className="text-xs text-[#0a5be8] font-medium">{testi.role}</p>
                  <p className="text-xs text-slate-400">{testi.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Call to action banner */}
      <section className="py-16 bg-gradient-to-r from-[#02164f] via-[#072a63] to-[#0a5be8] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Prêt à confier le nettoyage de vos espaces à une équipe fiable ?
          </h2>
          <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe pour un devis personnalisé et rapide. Nous vous répondons avec une proposition claire adaptée à vos besoins.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleNav('devis')}
              className="px-8 py-4 bg-white text-[#02164f] hover:bg-slate-100 font-extrabold rounded-xl shadow-lg transition-transform active:scale-95 text-base flex items-center gap-2 cursor-pointer"
            >
              <span>Demander un devis</span>
              <ChevronRight className="w-5 h-5 text-[#0a5be8]" />
            </button>

            <button
              onClick={() => handleNav('contact')}
              className="px-7 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl border border-white/25 backdrop-blur-md transition-all flex items-center gap-2 text-base cursor-pointer"
            >
              <span>Nous contacter</span>
            </button>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#25d366] hover:bg-[#20ba59] text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp direct</span>
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mt-6">
            Ou par téléphone :{' '}
            <a href={`tel:${siteConfig.phone}`} className="underline font-bold text-white hover:text-[#00d2ff] transition-colors">
              {siteConfig.phoneDisplay}
            </a>
            {' ou '}
            <a href={`tel:${siteConfig.phone2}`} className="underline font-bold text-white hover:text-[#00d2ff] transition-colors">
              {siteConfig.phone2Display}
            </a>
            {' · Réponse assurée'}
          </p>
        </div>
      </section>
    </div>
  );
};
