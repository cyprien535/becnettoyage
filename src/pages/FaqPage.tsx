import React, { useState } from 'react';
import { faqList, siteConfig } from '../data/siteData';
import { Breadcrumb } from '../components/Breadcrumb';
import { Search, ChevronDown, ChevronUp, HelpCircle, Phone, MessageCircle } from 'lucide-react';

interface FaqPageProps {
  navigate: (route: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ navigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({ 'faq-1': true });

  const categories = ['Tous', 'Général', 'Services', 'Tarifs', 'Interventions', 'Zones'];

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = faqList.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'Tous' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="bg-[#f5f9fe] min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-[#02164f] text-white pt-28 sm:pt-36 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Foire Aux Questions' }]}
            navigate={navigate}
          />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold text-[#00d2ff] uppercase tracking-wider block mb-2">
              Réponses claires & précises
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Foire aux questions (FAQ)
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Tout ce que vous devez savoir sur nos prestations de nettoyage, nos tarifs, notre équipement et nos zones d’intervention au Bénin.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-[65px] z-20 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0a5be8] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher une question…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-[#f5f9fe] border border-slate-200 rounded-xl focus:outline-none focus:border-[#0a5be8] focus:bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion list */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#02164f] mb-1">Aucune question ne correspond à votre recherche</h3>
              <p className="text-xs text-slate-500 mb-4">Posez-nous directement votre question via notre équipe d'assistance.</p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Bonjour, j’ai une question à vous poser : ')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Poser ma question sur WhatsApp</span>
              </a>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-[#02164f] text-sm sm:text-base hover:bg-slate-50 cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#e7effd] text-[#0a5be8] shrink-0">
                        {faq.category}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#0a5be8] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#f5f9fe]/50 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}

          {/* Contact helper banner */}
          <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-8 text-center space-y-4">
            <h3 className="text-xl font-bold text-[#02164f]">Vous avez une question spécifique ?</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Notre équipe technique se tient à votre disposition pour vous répondre en direct.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="px-4 py-2.5 bg-[#0a5be8] hover:bg-[#0742a8] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Appeler {siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone2}`}
                className="px-4 py-2.5 bg-white text-[#0a5be8] hover:bg-blue-50 border border-blue-200 text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Appeler {siteConfig.phone2Display}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-600 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Écrire sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
