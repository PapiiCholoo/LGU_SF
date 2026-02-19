import React from 'react';
import LogoImage from '../assets/logo.png';

type Page = 'home' | 'transform' | 'explore' | 'serve' | 'inform' | 'admin-executive' | 'admin-legislative';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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
          <div className="flex items-center gap-4">
            <div>
              <img
                src={LogoImage}
                alt="Municipality Logo"
                className="h-20 w-30 object-contain"
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
              <h1 className="font-bold leading-tight text-white">
                LGU San Fernando
              </h1>
              <p className="text-sm font-bold text-[var(--color-brand-khaki)]">
                Camarines Sur
              </p>
              <p className="text-xs font-semibold text-[var(--color-brand-aqua)] italic">KUSOG San Fernando</p>
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
        </div>
      </div>
    </header>
  );
}