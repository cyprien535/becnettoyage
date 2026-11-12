import React, { useState } from 'react';
import { Check } from 'lucide-react';

export interface VerticalCardItem {
  id: number;
  number: string;
  shortTitle: string;
  fullTitle: string;
  description: string;
  tag?: string;
}

const DEFAULT_ITEMS: VerticalCardItem[] = [
  {
    id: 1,
    number: '01',
    shortTitle: 'Visite préalable',
    fullTitle: 'Visite & échange précis',
    description:
      'Nous évaluons vos surfaces et vos contraintes réelles sur place ou sur plan afin de dimensionner l’intervention au plus juste, sans surplus inutile ni frais imprévus.',
    tag: 'Diagnostic personnalisé sans engagement',
  },
  {
    id: 2,
    number: '02',
    shortTitle: 'Une équipe',
    fullTitle: 'Une équipe experte',
    description:
      'Des agents salariés, qualifiés et formés aux protocoles stricts de sécurité et de discrétion. Équipés de tenues officielles complètes et de protections adaptées à chaque site.',
    tag: 'Personnel certifié & supervisé',
  },
  {
    id: 3,
    number: '03',
    shortTitle: 'Un arsenal',
    fullTitle: 'Un arsenal adapté',
    description:
      'Détergents professionnels neutres et écologiques, monobrosses industrielles, injecteurs-extracteurs et racloirs de précision respectant l’intégrité de vos sols et vitrages.',
    tag: 'Matériel haute performance',
  },
  {
    id: 4,
    number: '04',
    shortTitle: 'Un planning',
    fullTitle: 'Ponctualité garantie',
    description:
      'Respect rigoureux des plannings convenus pour vos emménagements, réceptions de chantiers ou ouvertures de bureaux. Vos délais sont nos priorités absolues.',
    tag: 'Interventions 7j/7 planifiées à l’heure',
  },
  {
    id: 5,
    number: '05',
    shortTitle: 'Un contrôle',
    fullTitle: 'Contrôle méthodique',
    description:
      'Une fiche de vérification point par point est inspectée conjointement avec vous avant toute clôture. Nous ne quittons les lieux que lorsque chaque détail est irréprochable.',
    tag: 'Validation conjointe avant départ',
  },
];

interface VerticalAccordionCardsProps {
  items?: VerticalCardItem[];
  defaultIndex?: number;
}

export const VerticalAccordionCards: React.FC<VerticalAccordionCardsProps> = ({
  items = DEFAULT_ITEMS,
  defaultIndex = 1,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);
  const total = items.length;

  return (
    <div className="w-full">
      {/* Desktop & Tablet: Horizontal Flex Accordion */}
      <div className="hidden md:flex gap-3.5 lg:gap-4 h-[440px] lg:h-[480px] w-full items-stretch">
        {items.map((item, idx) => {
          const isActive = idx === activeIndex;

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              onFocus={() => setActiveIndex(idx)}
              tabIndex={0}
              role="button"
              aria-expanded={isActive}
              aria-label={item.fullTitle}
              className={`relative overflow-hidden cursor-pointer select-none transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between ${
                isActive
                  ? 'flex-[4] lg:flex-[4.5] bg-[#edf4fe] border border-[#c6daf7] rounded-[32px] lg:rounded-[36px] shadow-sm p-7 lg:p-9'
                  : 'flex-[1] min-w-[76px] lg:min-w-[88px] max-w-[120px] bg-[#f5f8fe] hover:bg-[#edf3fe] border border-[#d9e5f7] rounded-[28px] lg:rounded-[32px] p-5 lg:p-6'
              }`}
            >
              {/* Top Bar : Clean minimalist Number Badge */}
              <div className="flex items-center justify-between w-full">
                <span
                  className={`text-xs lg:text-sm font-bold tracking-wider font-mono rounded-full px-2.5 py-1 ${
                    isActive
                      ? 'bg-white text-[#0a5be8] shadow-xs border border-blue-200/60'
                      : 'text-slate-400 bg-white/60'
                  }`}
                >
                  {isActive
                    ? `${String(idx + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`
                    : item.number}
                </span>
              </div>

              {/* Collapsed State: Vertical Text from Bottom to Top */}
              {!isActive && (
                <div className="flex-1 flex items-center justify-center py-6 overflow-hidden">
                  <span
                    className="text-lg lg:text-xl font-bold text-[#02164f] tracking-wide whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {item.shortTitle}
                  </span>
                </div>
              )}

              {/* Expanded State: Big Title + Description + Badge */}
              {isActive && (
                <div className="my-auto py-2 transition-opacity duration-300">
                  <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#02164f] tracking-tight mb-4 leading-[1.15]">
                    {item.fullTitle}
                  </h3>

                  <p className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-xl mb-6">
                    {item.description}
                  </p>

                  {item.tag && (
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0a5be8] bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200/60 shadow-2xs">
                      <Check className="w-3.5 h-3.5 text-[#0a5be8]" />
                      <span>{item.tag}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Bottom Spacer for balanced symmetry */}
              <div className="h-2 w-full" aria-hidden="true" />
            </div>
          );
        })}
      </div>

      {/* Mobile: Stacked Accordion for phone screens */}
      <div className="flex md:hidden flex-col gap-3 w-full">
        {items.map((item, idx) => {
          const isActive = idx === activeIndex;

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`rounded-2xl border transition-all duration-300 p-4 ${
                isActive
                  ? 'bg-[#edf4fe] border-[#c6daf7] shadow-sm'
                  : 'bg-[#f5f8fe] border-[#d9e5f7]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-white border border-blue-200/60 shadow-xs flex items-center justify-center font-bold text-xs text-[#0a5be8] font-mono shrink-0">
                    {item.number}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-[#02164f]">{item.fullTitle}</h4>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#0a5be8]">
                  {isActive ? '−' : '+'}
                </span>
              </div>

              {isActive && (
                <div className="mt-3 pt-3 border-t border-blue-100/70 text-xs text-slate-600 leading-relaxed space-y-2">
                  <p>{item.description}</p>
                  {item.tag && (
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0a5be8] bg-white px-2.5 py-1 rounded-full border border-blue-100">
                      <Check className="w-3 h-3 text-[#0a5be8]" />
                      <span>{item.tag}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
