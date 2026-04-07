import React, { useState } from 'react';
import { Menu, X, LogIn, LogOut, Settings } from 'lucide-react';
import LogoImage from '../assets/logo.png';
import { useAuth } from '../contexts/AuthContext';
import { LoginModal } from './LoginModal';

type Page = 'home' | 'transform' | 'explore' | 'serve' | 'inform' | 'admin-executive' | 'admin-legislative' | 'admin-dashboard';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isLoggedIn, logout } = useAuth();

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
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}

          <div className="flex items-center gap-4">
            <div>
              <img
                src={LogoImage}
                className="h-10 w-auto md:h-16 lg:h-20 object-contain"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold leading-tight text-white">
                Official Website of the Municipality of
              </h1>
              <p className="text-lg font-bold text-[var(--color-brand-khaki)]">
                San Fernando, Camarines Sur
              </p>
            </div>
            <div className="md:hidden">
              <h1 className="text-sm font-bold leading-tight text-white">
                LGU San Fernando
              </h1>
              <p className="text-xs font-bold text-[var(--color-brand-khaki)]">
                Camarines Sur
              </p>
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
                    ? 'bg-[var(--color-brand-turquoise)] text-slate-900 font-bold'
                    : 'text-gray-300 hover:text-[var(--color-brand-khaki)] hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="ml-4 flex items-center gap-2 border-l border-white/20 pl-4">
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => handleNavClick('admin-dashboard')}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg font-bold transition-all ${
                      currentPage === 'admin-dashboard' 
                        ? 'bg-[var(--color-brand-khaki)] text-slate-900 shadow-md' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <Settings size={18} />
                    <span>Admin</span>
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      if (currentPage === 'admin-dashboard') {
                        onNavigate('home');
                      }
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-red-200 hover:text-white hover:bg-red-500/20 transition-all"
                    title="Logout"
                  >
                    <LogOut size={18} />
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--color-brand-khaki)] text-slate-900 rounded-lg font-bold hover:bg-[var(--color-brand-turquoise)] transition-all shadow-md"
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </button>
              )}
            </div>
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
          <nav className="flex flex-col p-3 space-y-1 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm rounded-lg text-left transition-all duration-200 font-medium
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

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onSuccess={() => {
          onNavigate('admin-dashboard');
        }}
      />
    </header>
  );
}