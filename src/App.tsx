/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ZonesPage } from './pages/ZonesPage';
import { ZoneDetailPage } from './pages/ZoneDetailPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { DevisOnboardingPage } from './pages/DevisOnboardingPage';

export default function App() {
  // Parse route from hash or state
  const getInitialRoute = () => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (hash) return hash;
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState<string>(getInitialRoute);

  // Sync hash changes (e.g. browser back/forward or external links)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      setCurrentRoute(hash || 'home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route: string) => {
    window.location.hash = `#/${route}`;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route dispatcher
  const renderCurrentPage = () => {
    if (currentRoute === 'home' || currentRoute === '') {
      return <HomePage navigate={navigate} />;
    }

    if (currentRoute === 'services') {
      return <ServicesPage navigate={navigate} />;
    }

    if (currentRoute.startsWith('services/')) {
      const slug = currentRoute.replace('services/', '');
      return <ServiceDetailPage slug={slug} navigate={navigate} />;
    }

    if (currentRoute === 'a-propos') {
      return <AboutPage navigate={navigate} />;
    }

    if (currentRoute === 'zones') {
      return <ZonesPage navigate={navigate} />;
    }

    if (currentRoute.startsWith('zones/')) {
      const slug = currentRoute.replace('zones/', '');
      return <ZoneDetailPage slug={slug} navigate={navigate} />;
    }

    if (currentRoute === 'devis') {
      return <DevisOnboardingPage navigate={navigate} />;
    }

    if (currentRoute === 'faq') {
      return <FaqPage navigate={navigate} />;
    }

    if (currentRoute === 'contact') {
      return <ContactPage navigate={navigate} />;
    }

    if (
      currentRoute === 'mentions-legales' ||
      currentRoute === 'politique-confidentialite' ||
      currentRoute === 'conditions-service'
    ) {
      return <LegalPage initialTab={currentRoute as any} navigate={navigate} />;
    }

    // Fallback to Home
    return <HomePage navigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f9fe] selection:bg-[#0a5be8] selection:text-white">
      {/* Header */}
      <Header currentRoute={currentRoute} navigate={navigate} />

      {/* Main Page Body */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
