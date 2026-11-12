import React, { useState, useEffect } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { siteConfig } from '../data/siteData';

interface LegalPageProps {
  initialTab?: 'mentions-legales' | 'politique-confidentialite' | 'conditions-service';
  navigate: (route: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'mentions-legales', navigate }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  return (
    <div className="bg-[#f5f9fe] min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-[#02164f] text-white pt-28 sm:pt-36 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              {
                label:
                  activeTab === 'mentions-legales'
                    ? 'Mentions Légales'
                    : activeTab === 'politique-confidentialite'
                    ? 'Politique de Confidentialité'
                    : 'Conditions de Service',
              },
            ]}
            navigate={navigate}
          />
          <div className="mt-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Informations Juridiques & Réglementaires
            </h1>
            <p className="text-slate-200 text-sm sm:text-base">
              Transparence, conformité et respect de la vie privée pour l'ensemble des services BEC Nettoyage.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex border-b border-slate-200 gap-2 mb-8 overflow-x-auto">
          {[
            { id: 'mentions-legales', label: 'Mentions légales' },
            { id: 'politique-confidentialite', label: 'Politique de confidentialité' },
            { id: 'conditions-service', label: 'Conditions de service' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#0a5be8] text-[#0a5be8]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-6">
          {activeTab === 'mentions-legales' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#02164f]">1. Édition du site et identification de l'entreprise</h2>
              <p>
                Le présent service est édité par l'entreprise <strong>{siteConfig.company}</strong> (nom commercial : <strong>{siteConfig.brandName}</strong>), société de nettoyage et de propreté immatriculée au Registre du Commerce et du Crédit Mobilier (RCCM) du Bénin.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Siège social :</strong> République du Bénin (Couverture : Cotonou, Abomey-Calavi, Porto-Novo)</li>
                <li><strong>Téléphone professionnel :</strong> {siteConfig.phoneDisplay}</li>
                <li><strong>E-mail :</strong> {siteConfig.email}</li>
                <li><strong>Directeur de la publication :</strong> Direction Générale {siteConfig.brandName}</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#02164f]">2. Propriété intellectuelle</h2>
              <p>
                L'ensemble des éléments graphiques, photographies, logos, textes et éléments de mise en page présents sur cette application sont protégés par les lois en vigueur relatives à la propriété intellectuelle. Toute reproduction ou utilisation non autorisée est strictement interdite.
              </p>

              <h2 className="text-2xl font-bold text-[#02164f]">3. Responsabilité technique</h2>
              <p>
                {siteConfig.brandName} s'efforce de fournir des informations précises et actualisées sur ses prestations et tarifs indicatifs. Les prix définitifs font systématiquement l'objet d'un devis préalable validé entre les parties.
              </p>
            </div>
          )}

          {activeTab === 'politique-confidentialite' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#02164f]">1. Collecte des données personnelles</h2>
              <p>
                Les données transmises via nos formulaires de devis ou de contact (nom, prénom, numéro de téléphone, adresse électronique, adresse des locaux) sont exclusivement destinées au traitement de votre demande de prestation par nos équipes.
              </p>

              <h2 className="text-2xl font-bold text-[#02164f]">2. Utilisation et non-divulgation</h2>
              <p>
                Vos informations ne sont en aucun cas vendues, échangées ou cédées à des tiers à des fins publicitaires. Elles sont uniquement conservées le temps nécessaire à la gestion de la relation commerciale.
              </p>

              <h2 className="text-2xl font-bold text-[#02164f]">3. Vos droits</h2>
              <p>
                Conformément à la réglementation béninoise en vigueur sur la protection des données à caractère personnel (APDP), vous disposez d'un droit d'accès, de rectification et de suppression de vos données en adressant un message à <a href={`mailto:${siteConfig.email}`} className="text-[#0a5be8] underline">{siteConfig.email}</a>.
              </p>
            </div>
          )}

          {activeTab === 'conditions-service' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#02164f]">1. Objet et champ d'application</h2>
              <p>
                Les présentes conditions régissent l'ensemble des interventions de nettoyage et de remise en état effectuées par {siteConfig.brandName} au profit de particuliers ou d'entreprises à Abomey-Calavi, Cotonou, Porto-Novo et leurs environs.
              </p>

              <h2 className="text-2xl font-bold text-[#02164f]">2. Devis et commande</h2>
              <p>
                Toute intervention fait l'objet d'un devis chiffré précisant la nature des travaux, les surfaces prises en charge, les délais et les conditions de paiement. L'acceptation du devis vaut bon de commande ferme.
              </p>

              <h2 className="text-2xl font-bold text-[#02164f]">3. Réalisation et réception des travaux</h2>
              <p>
                À la clôture de la prestation, un contrôle de fin d'intervention est réalisé en présence du client ou de son représentant mandaté. Toute réserve éventuelle doit être signalée sur-le-champ pour permettre une reprise immédiate sans surcoût.
              </p>

              <h2 className="text-2xl font-bold text-[#02164f]">4. Produits et équipements</h2>
              <p>
                Nos équipes interviennent avec leurs propres machines et produits détergents professionnels formulés pour respecter la pérennité des matériaux et sanitaires.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
