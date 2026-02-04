import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { TransformPage } from './components/TransformPage';
import { InformPage } from './components/InformPage';
import { ExplorePage } from './components/ExplorePage';

import { ExecutiveAdmin } from './components/cms/ExecutiveAdmin';
import { LegislativeAdmin } from './components/cms/LegislativeAdmin';

type Page = 'home' | 'transform' | 'explore' | 'serve' | 'inform' | 'admin-executive' | 'admin-legislative';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
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
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage as any} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage as any} />
    </div>
  );
}