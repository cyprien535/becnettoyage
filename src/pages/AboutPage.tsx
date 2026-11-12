import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { siteConfig } from '../data/siteData';
import { ShieldCheck, Target, Eye, HeartHandshake, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';

interface AboutPageProps {
  navigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  const handleNav = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const values = [
    { title: 'Rigueur', desc: 'Une méthodologie d’intervention structurée par zones et des protocoles de nettoyage sans approximation.' },
    { title: 'Fiabilité', desc: 'Le respect scrupuleux des rendez-vous, des délais annoncés et des engagements contractuels.' },
    { title: 'Respect', desc: 'Prendre soin de vos locaux, de vos meubles et équipements comme s’ils étaient les nôtres.' },
    { title: 'Discrétion', desc: 'Une attitude professionnelle et réservée indispensable au sein des bureaux et résidences privées.' },
    { title: 'Qualité de service', desc: 'Un résultat tangible et mesurable, validé systématiquement avec vous avant chaque départ.' },
    { title: 'Progression continue', desc: 'La formation constante de nos agents aux nouveaux revêtements et techniques de décapage doux.' },
  ];

  return (
    <div className="bg-[#f5f9fe] min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-[#02164f] text-white pt-28 sm:pt-36 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'À propos' }]}
            navigate={navigate}
          />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold text-[#00d2ff] uppercase tracking-wider block mb-2">
              Notre entreprise & nos engagements
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Une équipe béninoise au service de la propreté
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              BEC Nettoyage (Propreté Plus Bénin) accompagne au quotidien les professionnels, promoteurs et particuliers à Abomey-Calavi, Cotonou et Porto-Novo.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-[#0a5be8] uppercase tracking-wider block mb-2">
                Genèse & Histoire
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#02164f] mb-6">
                Pourquoi nous avons créé cette entreprise
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Rechercher une équipe de nettoyage fiable au Bénin devient vite un parcours du combattant : trouver quelqu’un disponible, s’assurer du sérieux du travail, obtenir une réponse claire sur le prix. Trop souvent, le client finit par accepter un service approximatif faute d’alternative organisée.
                </p>
                <p>
                  <strong className="text-[#02164f]">BEC Nettoyage</strong> est née de cette constatation. Nous avons voulu construire une structure dans laquelle une demande de nettoyage reçoit une réponse claire, une prestation définie à l’avance, un interlocuteur identifié et un contrôle du travail réalisé.
                </p>
                <p>
                  Notre démarche est fondée sur la méthode plutôt que sur la promesse : comprendre le besoin, évaluer la prestation, écrire ce qui est inclus, exécuter, puis vérifier.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                <img
                  src="/images/equipe-proprete.jpg"
                  alt="Équipe BEC Nettoyage"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#f5f9fe] border border-slate-200 relative">
              <div className="w-12 h-12 rounded-2xl bg-[#0a5be8] text-white flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#02164f] mb-3">Notre mission</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Offrir aux entreprises et particuliers un service de nettoyage prévisible, ponctuel et exécuté avec des standards professionnels, afin que chaque espace confié devienne un lieu où il fait bon travailler et vivre.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#02164f] text-white relative">
              <div className="w-12 h-12 rounded-2xl bg-[#00d2ff] text-[#02164f] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Notre vision</h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Devenir la référence du nettoyage de confiance au Bénin, reconnue pour sa rigueur d’exécution, la formation exemplaire de ses agents et la satisfaction indéfectible de ses clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#0a5be8] uppercase tracking-wider block mb-2">
              Principes directeurs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#02164f]">
              Les principes qui guident notre travail au quotidien
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0a5be8]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#e7effd] text-[#0a5be8] flex items-center justify-center font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#02164f] mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract & Supervision Photo section */}
      <section className="py-16 bg-[#ecf3fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] order-2 lg:order-1">
              <img
                src="/images/devis-contrat.jpg"
                alt="Contrat et devis clair"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold text-[#0a5be8] uppercase tracking-wider block mb-2">
                Organisation & Contrôle
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#02164f] mb-6">
                Organiser, contrôler, améliorer
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Chaque intervention s'appuie sur une check-list formalisée. Avant de quitter les lieux, nos superviseurs s'assurent que chaque point convenu a été rigoureusement respecté.
                </p>
                <p>
                  Pour nos contrats d’entretien de bureaux, un carnet de passage est renseigné à chaque visite, garantissant ainsi une traçabilité totale et un canal direct d'échange avec nos équipes.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNav('devis')}
                  className="px-6 py-3.5 bg-[#0a5be8] hover:bg-[#0742a8] text-white font-bold rounded-xl text-sm shadow-md shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Demander un devis</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleNav('contact')}
                  className="px-6 py-3.5 bg-white hover:bg-slate-100 text-[#02164f] font-bold rounded-xl text-sm border border-slate-200 transition-all cursor-pointer"
                >
                  <span>Nous contacter</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
