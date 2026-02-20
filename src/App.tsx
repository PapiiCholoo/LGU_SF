import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';

import { TransformPage } from './components/TransformPage';
import { InformPage } from './components/InformPage';
import { ExplorePage } from './components/ExplorePage';

import { ExecutiveAdmin } from './components/cms/ExecutiveAdmin';
import { LegislativeAdmin } from './components/cms/LegislativeAdmin';

type Page = 'home' | 'transform' | 'explore' | 'serve' | 'inform' | 'admin-executive' | 'admin-legislative';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [displayPage, setDisplayPage] = useState<Page>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (page: Page) => {
    if (page === currentPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setDisplayPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsTransitioning(false);
    }, 300);
  };

  const renderPage = () => {
    switch (displayPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'transform':
        return <TransformPage />;
      case 'explore':
        return <ExplorePage />;
      case 'serve':
        return <ServicesPage />;
      case 'inform':
        return <InformPage />;
      case 'admin-executive':
        return <ExecutiveAdmin />;
      case 'admin-legislative':
        return <LegislativeAdmin />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate as any} />
      <main className="flex-grow relative overflow-hidden">
        <div
          className={`transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'
            }`}
        >
          {renderPage()}
        </div>
      </main>
      <Footer onNavigate={handleNavigate as any} />
    </div>
  );
}