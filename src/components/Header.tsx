import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LogoImage from '../assets/logo.png';

type Page = 'home' | 'transform' | 'explore' | 'serve' | 'inform' | 'admin-executive' | 'admin-legislative';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'transform' as Page, label: 'Transform' },
    { id: 'explore' as Page, label: 'Explore' },
    { id: 'serve' as Page, label: 'Serve' },
    { id: 'inform' as Page, label: 'Inform' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white sticky top-0 z-50 border-b-4 border-[var(--color-brand-turquoise)]">

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo and Title */}
          <div className="flex items-center gap-2">
            <div>
              <img
                src={LogoImage}
                className="h-12 w-auto md:h-16 lg:h-20 object-contain"
              />
            </div>

            {/* Desktop Title */}
            <div className="hidden md:block">
              <h1 className="text-lg lg:text-xl font-bold leading-tight text-white drop-shadow-sm">
                Municipality of San Fernando, Camarines Sur
              </h1>
            </div>

            {/* Mobile Title */}
            <div className="md:hidden">
              <h1 className="font-bold leading-tight text-white text-base drop-shadow-sm">
                Municipality of San Fernando, Camarines Sur
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium
                  ${currentPage === item.id
                    ? 'bg-[var(--color-brand-khaki)] text-slate-900 font-bold'
                    : 'text-gray-300 hover:text-[var(--color-brand-khaki)] hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 animate-in slide-in-from-top-2 absolute w-full left-0 shadow-2xl z-40">
          <nav className="flex flex-col p-4 space-y-2 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-3 rounded-lg text-left transition-all duration-200 font-medium
                  ${currentPage === item.id
                    ? 'bg-[var(--color-brand-khaki)] text-slate-900 font-bold'
                    : 'text-gray-300 hover:text-[var(--color-brand-khaki)] hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}