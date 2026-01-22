import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { TransformPage } from './components/TransformPage';
import { InformPage } from './components/InformPage';
import { ExplorePage } from './components/ExplorePage';

type Page = 'home' | 'transform' | 'explore' | 'serve' | 'inform';

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
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}