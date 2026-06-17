import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Globe, Facebook, Twitter, Instagram, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import GlobalSearch from './GlobalSearch';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  const location = useLocation();

  const toggleDarkMode = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };


  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Study Abroad', href: '/study' },
    { name: 'Work Abroad', href: '/work-abroad' },
    { name: 'Migrate', href: '/migrate' },
    { name: 'Healthcare', href: '/healthcare-abroad' },
    { name: 'Scholarships', href: '/scholarships' },
    { name: 'Guides', href: '/country-guides' },
    { name: 'Compare', href: '/compare' },
    { name: 'Blog', href: '/blog' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-100 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm sticky top-0 z-50 transition-all duration-300 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <Globe className="h-8 w-8 text-blue-700" />
                <span className="font-bold text-xl md:text-2xl text-blue-900 tracking-tight">
                  Move<span className="text-blue-600">Abroad</span>.pk
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                    location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href))
                      ? 'text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 border-b-2 border-transparent hover:border-blue-300 dark:hover:border-blue-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </nav>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center">
              <GlobalSearch isMobile={false} />
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 dark:text-slate-300 hover:text-slate-500 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800`}>
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href))
                    ? 'bg-blue-50 dark:bg-slate-800 border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-400'
                    : 'border-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-800 dark:hover:text-slate-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-4 border-t border-slate-200">
            <div className="flex items-center px-4">
              <GlobalSearch isMobile={true} onClose={() => setIsMenuOpen(false)} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-12 pb-8 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <Globe className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-xl text-white tracking-tight">
                  Move<span className="text-blue-400">Abroad</span>.pk
                </span>
              </Link>
              <p className="text-slate-400 text-sm mb-4">
                Your complete guide to moving abroad for Pakistani students and professionals
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-slate-300">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
                <li><Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                <li><Link to="/disclaimer" className="text-slate-400 hover:text-white transition-colors text-sm">Disclaimer</Link></li>
              </ul>
            </div>

            {/* Top Destinations */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-slate-300">Top Destinations</h3>
              <ul className="space-y-2">
                <li><Link to="/country-guides" className="text-slate-400 hover:text-white transition-colors text-sm">Study in Germany</Link></li>
                <li><Link to="/country-guides" className="text-slate-400 hover:text-white transition-colors text-sm">Work in Canada</Link></li>
                <li><Link to="/country-guides" className="text-slate-400 hover:text-white transition-colors text-sm">Healthcare in UK/UAE</Link></li>
                <li><Link to="/country-guides" className="text-slate-400 hover:text-white transition-colors text-sm">Scholarships in Australia</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-slate-300">Newsletter</h3>
              <p className="text-slate-400 text-sm mb-4">Get the latest scholarships and job updates straight to your inbox.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 border border-slate-700 rounded-l-md bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-slate-900 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} MoveAbroad.pk All rights reserved.
            </p>
            <p className="text-slate-500 text-xs">
              Made for Pakistani Students & Professionals
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
