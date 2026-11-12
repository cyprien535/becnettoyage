import React, { useState } from 'react';
import { siteConfig } from '../data/siteData';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  MapPin,
  Building2,
  HardHat,
  Home,
  Store,
  User,
  Phone,
  Mail,
  Calendar,
  Clock,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Send,
  Copy,
  Check
} from 'lucide-react';

interface DevisOnboardingProps {
  navigate: (route: string) => void;
}

interface OnboardingData {
  // Step 1: Zone & Espace
  ville: string;
  quartier: string;
  typeLocal: string;
  // Step 2: Coordonnées
  nomComplet: string;
  telephone: string;
  email: string;
  contactPrefere: 'WhatsApp' | 'Téléphone';
  // Step 3: Fréquence & Dates
  frequenceType: 'une_fois' | 'chaque_mois';
  delaiPonctuel: string;
  datePrecise: string;
  rythmeMensuel: string;
  joursPreferes: string;
  superficieTranche: string;
  details: string;
}

export const DevisOnboardingPage: React.FC<DevisOnboardingProps> = ({ navigate }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 3;

  const [data, setData] = useState<OnboardingData>({
    ville: 'Cotonou',
    quartier: '',
    typeLocal: 'Bureaux',
    nomComplet: '',
    telephone: '',
    email: '',
    contactPrefere: 'WhatsApp',
    frequenceType: 'une_fois',
    delaiPonctuel: 'Dès que possible',
    datePrecise: '',
    rythmeMensuel: '2 fois par mois',
    joursPreferes: 'Début de semaine',
    superficieTranche: '50 - 150 m²',
    details: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Quick quartier suggestions based on selected city
  const quartierSuggestions: { [key: string]: string[] } = {
    Cotonou: ['Cadjèhoun', 'Haie Vive', 'Akpakpa', 'Fidjrossè', 'Agla', 'Gbégamey', 'Kouhounou', 'Patte d’Oie'],
    'Abomey-Calavi': ['Arconville', 'Zogbadjè', 'Tankpè', 'Togbin', 'Godomey', 'Akassato', 'Bidossessi'],
    'Porto-Novo': ['Ouando', 'Djassin', 'Tokpota', 'Avakpa', 'Attakè', 'Louho'],
    Autre: ['Ouidah', 'Allada', 'Bohicon', 'Autre localité'],
  };

  const handleNext = () => {
    // Step validation
    if (currentStep === 1) {
      if (!data.ville) return;
    }
    if (currentStep === 2) {
      if (!data.nomComplet.trim() || !data.telephone.trim()) {
        alert('Veuillez renseigner votre nom et votre numéro de téléphone.');
        return;
      }
    }
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
      setIsSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  // Generate structured WhatsApp message
  const generateWhatsAppMessage = () => {
    const freqDesc =
      data.frequenceType === 'une_fois'
        ? `Une seule fois (${data.delaiPonctuel}${data.datePrecise ? ` - Date: ${data.datePrecise}` : ''})`
        : `Chaque mois (${data.rythmeMensuel} - Préférence : ${data.joursPreferes})`;

    return `*DEMANDE DE DEVIS — BEC NETTOYAGE*
----------------------------------------
*Zone d'intervention :* ${data.ville} ${data.quartier ? `(Quartier : ${data.quartier})` : ''}
*Type d'espace :* ${data.typeLocal} (~${data.superficieTranche})
*Fréquence souhaitée :* ${freqDesc}

*Contact Client :*
• Nom : ${data.nomComplet}
• Téléphone : ${data.telephone}
${data.email ? `• Email : ${data.email}\n` : ''}• Canal préféré : ${data.contactPrefere}
${data.details ? `\n*Précisions :*\n${data.details}` : ''}
----------------------------------------
_Envoyé depuis l'application BEC Nettoyage_`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const progressPercentage = Math.round(((currentStep - 1) / (totalSteps - 1)) * 100);

  return (
    <div className="bg-[#f5f9fe] min-h-screen pb-24 pt-28 sm:pt-36">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Demande de devis' }]} navigate={navigate} />

        {/* Hero title */}
        <div className="text-center max-w-2xl mx-auto mt-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e7effd] text-[#0a5be8] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#0a5be8]" />
            <span>Onboarding personnalisé</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#02164f] tracking-tight">
            Configurez votre devis en 3 étapes
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Pas de formulaire interminable : définissez votre besoin simplement et recevez une proposition adaptée.
          </p>
        </div>

        {/* Stepper Progress Bar */}
        {!isSubmitted && (
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 mb-8 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#0a5be8] uppercase tracking-wide">
                Étape {currentStep} sur {totalSteps}
              </span>
              <span className="text-xs font-extrabold text-[#02164f] font-mono">
                {currentStep === 1
                  ? '1. Zone & Espace'
                  : currentStep === 2
                  ? '2. Vos Coordonnées'
                  : '3. Fréquence & Dates'}
              </span>
            </div>

            {/* Progress line */}
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#0a5be8] to-[#00d2ff] h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${currentStep === 1 ? 33 : currentStep === 2 ? 66 : 100}%` }}
              />
            </div>

            {/* Step icons bar */}
            <div className="grid grid-cols-3 gap-2 mt-4 text-center">
              <button
                onClick={() => setCurrentStep(1)}
                className={`flex items-center justify-center gap-2 text-xs font-semibold py-1 rounded-lg transition-colors cursor-pointer ${
                  currentStep === 1
                    ? 'text-[#0a5be8] font-bold'
                    : currentStep > 1
                    ? 'text-emerald-600'
                    : 'text-slate-400'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    currentStep > 1
                      ? 'bg-emerald-100 text-emerald-700'
                      : currentStep === 1
                      ? 'bg-[#0a5be8] text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {currentStep > 1 ? '✓' : '1'}
                </span>
                <span className="hidden sm:inline">Zone & Espace</span>
              </button>

              <button
                onClick={() => currentStep > 1 && setCurrentStep(2)}
                className={`flex items-center justify-center gap-2 text-xs font-semibold py-1 rounded-lg transition-colors ${
                  currentStep === 2
                    ? 'text-[#0a5be8] font-bold'
                    : currentStep > 2
                    ? 'text-emerald-600 cursor-pointer'
                    : 'text-slate-400 cursor-not-allowed'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    currentStep > 2
                      ? 'bg-emerald-100 text-emerald-700'
                      : currentStep === 2
                      ? 'bg-[#0a5be8] text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {currentStep > 2 ? '✓' : '2'}
                </span>
                <span className="hidden sm:inline">Vos Coordonnées</span>
              </button>

              <button
                onClick={() => currentStep > 2 && setCurrentStep(3)}
                className={`flex items-center justify-center gap-2 text-xs font-semibold py-1 rounded-lg transition-colors ${
                  currentStep === 3
                    ? 'text-[#0a5be8] font-bold'
                    : 'text-slate-400 cursor-not-allowed'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    currentStep === 3
                      ? 'bg-[#0a5be8] text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  3
                </span>
                <span className="hidden sm:inline">Fréquence & Dates</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP CONTENT CONTAINER */}
        {!isSubmitted ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm transition-all duration-300">
            {/* ================= STEP 1: ZONE D'INTERVENTION & ESPACE ================= */}
            {currentStep === 1 && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <div className="flex items-center gap-2 text-[#0a5be8] font-bold text-sm mb-1 uppercase tracking-wide">
                    <MapPin className="w-4 h-4" />
                    <span>Premièrement : Où se situent vos locaux ?</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02164f]">
                    Sélectionnez votre zone d'intervention
                  </h2>
                </div>

                {/* City selection cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {[
                    { name: 'Cotonou', desc: 'Littoral' },
                    { name: 'Abomey-Calavi', desc: 'Atlantique' },
                    { name: 'Porto-Novo', desc: 'Ouémé' },
                    { name: 'Autre', desc: 'Autre commune' },
                  ].map((city) => {
                    const isSelected = data.ville === city.name;
                    return (
                      <div
                        key={city.name}
                        onClick={() => setData({ ...data, ville: city.name, quartier: '' })}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all text-center flex flex-col items-center justify-center gap-1.5 ${
                          isSelected
                            ? 'border-[#0a5be8] bg-[#e7effd] shadow-sm shadow-blue-500/10'
                            : 'border-slate-200 hover:border-slate-300 bg-[#f5f9fe]'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isSelected ? 'bg-white text-[#0a5be8] shadow-xs' : 'bg-slate-200/60 text-slate-500'}`}>
                          <MapPin className="w-4 h-4" />
                        </div>
                        <span
                          className={`font-bold text-sm sm:text-base ${
                            isSelected ? 'text-[#0a5be8]' : 'text-[#02164f]'
                          }`}
                        >
                          {city.name}
                        </span>
                        <span className="text-[11px] text-slate-500">{city.desc}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Quartier Suggestions & Input */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Précisez votre quartier à {data.ville} :
                  </label>

                  {/* Quick badges */}
                  {quartierSuggestions[data.ville] && (
                    <div className="flex flex-wrap gap-2">
                      {quartierSuggestions[data.ville].map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => setData({ ...data, quartier: q })}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            data.quartier === q
                              ? 'bg-[#0a5be8] text-white shadow-xs'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}

                  <input
                    type="text"
                    placeholder={`Ou tapez votre quartier ou repère précis (ex. : ${data.ville === 'Cotonou' ? 'Cadjèhoun, face pharmacie' : 'Zone résidentielle'})...`}
                    value={data.quartier}
                    onChange={(e) => setData({ ...data, quartier: e.target.value })}
                    className="w-full px-4 py-3 bg-[#f5f9fe] border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#0a5be8]"
                  />
                </div>

                {/* Type d'espace */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Quel type d'espace souhaitez-vous faire nettoyer ?
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        title: 'Bureaux & Sièges',
                        desc: 'Open-space, salles de réunion, agences',
                        icon: <Building2 className="w-5 h-5 text-[#0a5be8]" />,
                      },
                      {
                        title: 'Fin de chantier',
                        desc: 'Bâtiment neuf, remise après travaux',
                        icon: <HardHat className="w-5 h-5 text-amber-500" />,
                      },
                      {
                        title: 'Appartement / Villa',
                        desc: 'Emménagement, grand ménage résidentiel',
                        icon: <Home className="w-5 h-5 text-emerald-600" />,
                      },
                    ].map((type) => {
                      const isSelected = data.typeLocal === type.title;
                      return (
                        <div
                          key={type.title}
                          onClick={() => setData({ ...data, typeLocal: type.title })}
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-3.5 ${
                            isSelected
                              ? 'border-[#0a5be8] bg-[#e7effd]'
                              : 'border-slate-200 hover:border-slate-300 bg-[#f5f9fe]'
                          }`}
                        >
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs">
                            {type.icon}
                          </div>
                          <div>
                            <span
                              className={`font-bold text-sm block ${
                                isSelected ? 'text-[#0a5be8]' : 'text-[#02164f]'
                              }`}
                            >
                              {type.title}
                            </span>
                            <span className="text-xs text-slate-500 leading-tight block mt-0.5">
                              {type.desc}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ================= STEP 2: COORDONNÉES DU CLIENT ================= */}
            {currentStep === 2 && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <div className="flex items-center gap-2 text-[#0a5be8] font-bold text-sm mb-1 uppercase tracking-wide">
                    <User className="w-4 h-4" />
                    <span>Secondos : Vos coordonnées</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02164f]">
                    Comment vous transmettre le devis ?
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#02164f] mb-1.5">
                      Nom et prénom <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Ex. : Marc Dossou ou Société Azur"
                        value={data.nomComplet}
                        onChange={(e) => setData({ ...data, nomComplet: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#f5f9fe] border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#0a5be8]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#02164f] mb-1.5">
                      Numéro de téléphone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="Ex. : (+229) 01 47 78 18"
                        value={data.telephone}
                        onChange={(e) => setData({ ...data, telephone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#f5f9fe] border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#0a5be8]"
                      />
                    </div>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      Utilisé pour vous joindre et envoyer le chiffrage.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#02164f] mb-1.5">
                      Adresse e-mail <span className="text-slate-400 font-normal">(facultatif)</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="Ex. : contact@entreprise.bj"
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#f5f9fe] border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#0a5be8]"
                      />
                    </div>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      Pratique pour les devis d'entreprises et factures proforma.
                    </span>
                  </div>
                </div>

                {/* Canal préféré */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Canal de réponse préféré :
                  </label>
                  <div className="grid grid-cols-2 gap-3 max-w-md">
                    <button
                      type="button"
                      onClick={() => setData({ ...data, contactPrefere: 'WhatsApp' })}
                      className={`p-3.5 rounded-xl border-2 flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                        data.contactPrefere === 'WhatsApp'
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                          : 'border-slate-200 bg-[#f5f9fe] text-slate-600'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp direct</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setData({ ...data, contactPrefere: 'Téléphone' })}
                      className={`p-3.5 rounded-xl border-2 flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                        data.contactPrefere === 'Téléphone'
                          ? 'border-[#0a5be8] bg-[#e7effd] text-[#0a5be8]'
                          : 'border-slate-200 bg-[#f5f9fe] text-slate-600'
                      }`}
                    >
                      <Phone className="w-4 h-4 text-[#0a5be8]" />
                      <span>Appel téléphonique</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ================= STEP 3: FRÉQUENCE & DATES DU NETTOYAGE ================= */}
            {currentStep === 3 && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <div className="flex items-center gap-2 text-[#0a5be8] font-bold text-sm mb-1 uppercase tracking-wide">
                    <Calendar className="w-4 h-4" />
                    <span>Troisièmement : Fréquence du nettoyage</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02164f]">
                    Ce nettoyage doit-il se faire une seule fois ou chaque mois ?
                  </h2>
                </div>

                {/* 2 Big interactive choices */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Option 1: Une seule fois */}
                  <div
                    onClick={() => setData({ ...data, frequenceType: 'une_fois' })}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                      data.frequenceType === 'une_fois'
                        ? 'border-[#0a5be8] bg-[#e7effd] shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-[#f5f9fe]'
                    }`}
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-xs text-[#0a5be8] mb-3">
                        <Clock className="w-5 h-5" />
                      </div>
                      <h3
                        className={`font-bold text-base sm:text-lg mb-1 ${
                          data.frequenceType === 'une_fois' ? 'text-[#0a5be8]' : 'text-[#02164f]'
                        }`}
                      >
                        Une seule fois (Ponctuel)
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Grand nettoyage, emménagement, remise en état après chantier ou événement.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#0a5be8]">
                      <span>Intervention ciblée</span>
                      <span>{data.frequenceType === 'une_fois' ? '● Sélectionné' : '○ Choisir'}</span>
                    </div>
                  </div>

                  {/* Option 2: Chaque mois */}
                  <div
                    onClick={() => setData({ ...data, frequenceType: 'chaque_mois' })}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                      data.frequenceType === 'chaque_mois'
                        ? 'border-[#0a5be8] bg-[#e7effd] shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-[#f5f9fe]'
                    }`}
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-xs text-[#0a5be8] mb-3">
                        <RotateCcw className="w-5 h-5" />
                      </div>
                      <h3
                        className={`font-bold text-base sm:text-lg mb-1 ${
                          data.frequenceType === 'chaque_mois' ? 'text-[#0a5be8]' : 'text-[#02164f]'
                        }`}
                      >
                        À des dates dans chaque mois (Régulier)
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Entretien contractuel récurrent pour bureaux, résidences ou locaux commerciaux.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#0a5be8]">
                      <span>Tarif préférentiel récurrent</span>
                      <span>{data.frequenceType === 'chaque_mois' ? '● Sélectionné' : '○ Choisir'}</span>
                    </div>
                  </div>
                </div>

                {/* Sub-options for "Une seule fois" */}
                {data.frequenceType === 'une_fois' && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#f5f9fe] border border-slate-200 space-y-4">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#02164f]">
                      Quand souhaitez-vous l'intervention ?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Dès que possible', 'Sous 48 heures', 'Cette semaine', 'Date ultérieure'].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setData({ ...data, delaiPonctuel: d })}
                          className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            data.delaiPonctuel === d
                              ? 'bg-[#0a5be8] text-white'
                              : 'bg-white text-slate-700 border border-slate-200'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Date précise souhaitée (si connue) :
                      </label>
                      <input
                        type="date"
                        value={data.datePrecise}
                        onChange={(e) => setData({ ...data, datePrecise: e.target.value })}
                        className="px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-700"
                      />
                    </div>
                  </div>
                )}

                {/* Sub-options for "Chaque mois" */}
                {data.frequenceType === 'chaque_mois' && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#f5f9fe] border border-slate-200 space-y-4">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#02164f]">
                      Combien de passages souhaitez-vous par mois ?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['1 fois par mois', '2 fois par mois', '4 fois (Hebdomadaire)', 'Quotidien / Sur mesure'].map(
                        (r) => (
                          <button
                            key={r}
                            type="button"
                            onClick={() => setData({ ...data, rythmeMensuel: r })}
                            className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                              data.rythmeMensuel === r
                                ? 'bg-[#0a5be8] text-white shadow-xs'
                                : 'bg-white text-slate-700 border border-slate-200'
                            }`}
                          >
                            {r}
                          </button>
                        )
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Préférence de créneau ou jours dans le mois :
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {['Début de semaine (Lundi)', 'Milieu de semaine', 'Vendredi soir', 'Samedi matin'].map(
                          (j) => (
                            <button
                              key={j}
                              type="button"
                              onClick={() => setData({ ...data, joursPreferes: j })}
                              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                                data.joursPreferes === j
                                  ? 'bg-[#0a5be8] text-white'
                                  : 'bg-white text-slate-700 border border-slate-200'
                              }`}
                            >
                              {j}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Superficie approximative */}
                <div className="space-y-3 pt-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Superficie approximative des espaces :
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {['< 50 m²', '50 - 150 m²', '150 - 300 m²', '300 - 600 m²', '> 600 m²'].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setData({ ...data, superficieTranche: s })}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          data.superficieTranche === s
                            ? 'bg-[#0a5be8] text-white shadow-xs'
                            : 'bg-[#f5f9fe] hover:bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Remarques / détails supplémentaires */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Précisions particulières (facultatif) :
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex. : Nettoyage de vitres en hauteur, carrelage neuf après pose, sol sensible..."
                    value={data.details}
                    onChange={(e) => setData({ ...data, details: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#f5f9fe] border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#0a5be8]"
                  />
                </div>
              </div>
            )}

            {/* NAV BUTTONS */}
            <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-8">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Retour</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNext}
                className="px-7 py-3.5 bg-[#0a5be8] hover:bg-[#0742a8] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>{currentStep === totalSteps ? 'Finaliser et voir le récapitulatif' : 'Continuer'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* ================= RÉCAPITULATIF & ENVOI DIRECT ================= */
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg animate-in zoom-in-95 duration-300">
            <div className="text-center max-w-lg mx-auto mb-8">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#02164f]">
                Votre devis est prêt à être transmis !
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Voici le récapitulatif des paramètres configurés. Choisissez le mode d'envoi le plus rapide :
              </p>
            </div>

            {/* Structured Card Recap */}
            <div className="bg-[#f5f9fe] border border-slate-200 rounded-2xl p-5 sm:p-6 mb-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3 bg-white rounded-xl border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase block mb-0.5">
                    Zone d'intervention
                  </span>
                  <span className="font-bold text-[#02164f]">
                    {data.ville} {data.quartier ? `— Quartier ${data.quartier}` : ''}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase block mb-0.5">
                    Type d'espace & Superficie
                  </span>
                  <span className="font-bold text-[#02164f]">
                    {data.typeLocal} ({data.superficieTranche})
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase block mb-0.5">
                    Fréquence souhaitée
                  </span>
                  <span className="font-bold text-[#02164f]">
                    {data.frequenceType === 'une_fois'
                      ? `Une seule fois (${data.delaiPonctuel})`
                      : `Chaque mois (${data.rythmeMensuel} - ${data.joursPreferes})`}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase block mb-0.5">
                    Client & Contact
                  </span>
                  <span className="font-bold text-[#02164f]">
                    {data.nomComplet} ({data.telephone})
                  </span>
                </div>
              </div>

              {data.details && (
                <div className="p-3 bg-white rounded-xl border border-slate-100 text-xs text-slate-600">
                  <span className="font-bold text-slate-500 block mb-1">Précisions :</span>
                  <p>{data.details}</p>
                </div>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="space-y-3 max-w-md mx-auto">
              {/* WhatsApp direct send */}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25d366] hover:bg-[#20ba59] text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all text-base"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Envoyer directement sur WhatsApp</span>
              </a>

              {/* Copy message button */}
              <button
                type="button"
                onClick={handleCopy}
                className="w-full py-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl border border-slate-200 flex items-center justify-center gap-2 text-xs transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copied ? 'Récapitulatif copié dans le presse-papier !' : 'Copier le texte du devis'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                }}
                className="w-full text-center text-xs text-[#0a5be8] hover:underline font-medium pt-2 cursor-pointer"
              >
                ← Modifier les choix
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
