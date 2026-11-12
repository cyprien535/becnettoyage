import React, { useState } from 'react';
import { siteConfig } from '../data/siteData';
import { Breadcrumb } from '../components/Breadcrumb';
import { Phone, Mail, Clock, MapPin, MessageCircle, Send, CheckCircle2, ShieldCheck, ChevronRight } from 'lucide-react';

interface ContactPageProps {
  navigate: (route: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  const [formData, setFormData] = useState({
    nom_complet: '',
    telephone: '',
    email: '',
    sujet: 'Demande de renseignement',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="bg-[#f5f9fe] min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-[#02164f] text-white pt-28 sm:pt-36 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Contact' }]}
            navigate={navigate}
          />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold text-[#00d2ff] uppercase tracking-wider block mb-2">
              À votre écoute
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Contactez BEC Nettoyage
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Une question, un devis personnalisé ou une demande d’intervention urgente ? Notre équipe vous répond avec réactivité du lundi au samedi.
            </p>
          </div>
        </div>
      </section>

      {/* Devis Onboarding Callout Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-gradient-to-r from-[#02164f] to-[#072a63] text-white rounded-2xl p-5 sm:p-6 shadow-md border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#00d2ff] block mb-1">
              Configuration de devis rapide
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Besoin d'un devis précis pour vos espaces ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Choisissez votre zone, vos coordonnées et votre rythme (une seule fois ou chaque mois) en 3 étapes guidées.
            </p>
          </div>
          <button
            onClick={() => {
              navigate('devis');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0 px-6 py-3 bg-[#0a5be8] hover:bg-[#0742a8] text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Demander un devis</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="text-2xl font-bold text-[#02164f]">Nos coordonnées directes</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f5f9fe] border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#e7effd] text-[#0a5be8] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Téléphone</p>
                    <div className="flex flex-col gap-1 mt-0.5">
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-base font-bold text-[#02164f] hover:text-[#0a5be8] transition-colors"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                      <a
                        href={`tel:${siteConfig.phone2}`}
                        className="text-base font-bold text-[#02164f] hover:text-[#0a5be8] transition-colors"
                      >
                        {siteConfig.phone2Display}
                      </a>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Appel direct pour prise de rendez-vous ou urgence</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#ecfdf5] border border-emerald-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-600 uppercase">WhatsApp Officiel</p>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-950 hover:underline"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-emerald-700">Envoi immédiat de photos et devis</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f5f9fe] border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#e7effd] text-[#0a5be8] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Adresse e-mail</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-bold text-[#02164f] hover:text-[#0a5be8] transition-colors break-all"
                    >
                      {siteConfig.email}
                    </a>
                    <p className="text-[11px] text-slate-500">Pour les appels d'offres et factures</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f5f9fe] border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#e7effd] text-[#0a5be8] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Horaires d'ouverture</p>
                    <p className="text-sm font-bold text-[#02164f]">{siteConfig.horaires}</p>
                    <p className="text-[11px] text-slate-500">Permanence urgence le dimanche sur réservation</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f5f9fe] border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#e7effd] text-[#0a5be8] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Villes desservies</p>
                    <p className="text-sm font-bold text-[#02164f]">Cotonou · Abomey-Calavi · Porto-Novo</p>
                    <p className="text-[11px] text-slate-500">Déplacement sur site pour visite préalable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
              <h2 className="text-2xl font-bold text-[#02164f] mb-2">Envoyez-nous un message</h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-emerald-950">
                    Merci {formData.nom_complet}, votre message a bien été envoyé !
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Nous avons pris note de votre demande concernant "{formData.sujet}". Un responsable vous contactera au {formData.telephone || formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nom_complet: '',
                        telephone: '',
                        email: '',
                        sujet: 'Demande de renseignement',
                        message: '',
                      });
                    }}
                    className="text-xs text-emerald-700 underline font-semibold pt-2"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nom et prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nom_complet"
                      required
                      placeholder="Ex. : Amadou Sossou"
                      value={formData.nom_complet}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#f5f9fe] border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0a5be8]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Numéro de téléphone <span className="text-slate-400 font-normal">(facultatif)</span>
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        placeholder="Ex. : +229 97 00 00 00"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#f5f9fe] border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0a5be8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Adresse e-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Ex. : nom@exemple.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#f5f9fe] border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0a5be8]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Sujet de votre message <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="sujet"
                      required
                      value={formData.sujet}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#f5f9fe] border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0a5be8]"
                    >
                      <option value="Demande de renseignement">Demande de renseignement</option>
                      <option value="Demande de devis nettoyage">Demande de devis nettoyage</option>
                      <option value="Partenariat / Sous-traitance BTP">Partenariat / Sous-traitance BTP</option>
                      <option value="Recrutement / Candidature agent">Recrutement / Candidature agent</option>
                      <option value="Autre demande">Autre sujet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Votre message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Décrivez votre besoin, la ville concernée et vos disponibilités."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#f5f9fe] border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#0a5be8]"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 bg-[#0a5be8] hover:bg-[#0742a8] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Envoi…' : 'Envoyer le message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
