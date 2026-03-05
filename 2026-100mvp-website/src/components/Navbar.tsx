import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PageView } from '@/types';

interface NavbarProps {
  activePage: PageView;
  setPage: (p: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: '首頁' },
    { id: 'apply', label: '立即報名' },
    { id: 'about', label: '關於 100 MVP' },
    { id: 'hall', label: '歷屆得主' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-mvp-black/80 backdrop-blur-md border-b border-white/5 py-4' 
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area - Left Empty as requested */}
        <div 
          className="w-40 h-10 flex items-center cursor-pointer"
          onClick={() => setPage('home')}
        >
          {/* Placeholder for Logo */}
          <div className="text-white/20 text-xs border border-white/10 px-2 py-1 rounded">
            [LOGO AREA]
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`text-sm tracking-[0.15em] uppercase transition-all duration-300 relative group ${
                activePage === item.id 
                  ? 'text-mvp-gold font-medium' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-mvp-gold transform origin-left transition-transform duration-300 ${
                activePage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
              }`}></span>
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-mvp-charcoal border-t border-white/10 absolute w-full left-0 top-full p-6 flex flex-col space-y-6 shadow-2xl">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setPage(item.id); setMobileMenuOpen(false); }}
              className={`text-left text-lg tracking-widest ${activePage === item.id ? 'text-mvp-gold' : 'text-gray-300'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
