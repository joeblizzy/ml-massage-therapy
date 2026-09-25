import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config';
import { Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenBooking?: (calSlug?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services & Pricing', path: '/services' },
    { name: 'About Maria', path: '/about' },
    { name: 'Location & Hours', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group flex flex-col" onClick={() => setMobileMenuOpen(false)}>
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-900 group-hover:text-sage-700 transition-colors">
              ML Massage Therapy
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-stone-500 font-medium">
              Wellness PC • Manhattan, NYC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-sage-700 font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={() => onOpenBooking ? onOpenBooking() : window.open(BUSINESS_CONFIG.calCom.baseUrl, '_blank')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-sage-700 hover:bg-sage-800 text-white text-sm font-medium tracking-wide shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => onOpenBooking ? onOpenBooking() : window.open(BUSINESS_CONFIG.calCom.baseUrl, '_blank')}
              className="px-3 py-1.5 rounded-full bg-sage-700 text-white text-xs font-medium"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive
                    ? 'bg-sage-50 text-sage-800 font-semibold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-stone-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
                else window.open(BUSINESS_CONFIG.calCom.baseUrl, '_blank');
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sage-700 text-white font-medium text-sm shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Session Online</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
