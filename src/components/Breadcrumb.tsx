import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  route?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  navigate: (route: string) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, navigate }) => {
  return (
    <nav aria-label="Fil d'Ariane" className="py-3 text-xs text-slate-500">
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-1 hover:text-[#0a5be8] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Accueil</span>
          </button>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            {item.route ? (
              <button
                onClick={() => navigate(item.route!)}
                className="hover:text-[#0a5be8] transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <span className="font-semibold text-[#02164f]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
