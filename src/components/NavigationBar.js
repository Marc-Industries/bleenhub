import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import BleenhubLogo from '@/components/BleenhubLogo';
import { Button } from '@/components/ui/button';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const menuItems = [
    { IT: 'Home', EN: 'Home', path: '/' },
    { IT: 'Destinazioni', EN: 'Destinations', path: '/destinazioni' },
    { IT: 'Corsi', EN: 'Courses', path: '/corsi' },
    { IT: 'Chi Siamo', EN: 'About', path: '/chi-siamo' },
    { IT: 'Community', EN: 'Community', path: '/community' },
    { IT: 'Blog', EN: 'Blog', path: '/blog' },
    { IT: 'Contatti', EN: 'Contact', path: '/contatti' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#001a3d]/80 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg border border-[#00D2B4]/20">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <BleenhubLogo className="w-10 h-10" />
              <span className="text-xl font-bold text-white">bleenhub</span>
            </Link>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    location.pathname === item.path 
                      ? 'text-[#00D2B4]' 
                      : 'text-white/90 hover:text-[#00D2B4]'
                  }`}
                >
                  {t(item)}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#00D2B4]/10 hover:bg-[#00D2B4]/20 text-[#00D2B4] transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium text-sm">{language}</span>
              </button>
              <Link to="/prenotazioni">
                <Button
                  className="bg-[#00D2B4] hover:bg-[#00D2B4]/90 text-[#001a3d] font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#00D2B4]/50"
                >
                  {t({ IT: 'Prenota', EN: 'Book' })}
                </Button>
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 max-w-7xl mx-auto px-4"
          >
            <div className="bg-[#001a3d]/95 backdrop-blur-md rounded-2xl px-6 py-6 shadow-lg border border-[#00D2B4]/20">
              <div className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium text-left py-2 ${
                      location.pathname === item.path 
                        ? 'text-[#00D2B4]' 
                        : 'text-white/90 hover:text-[#00D2B4]'
                    }`}
                  >
                    {t(item)}
                  </Link>
                ))}
                <div className="border-t border-[#00D2B4]/20 pt-4 mt-2 flex flex-col gap-3">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#00D2B4]/10 hover:bg-[#00D2B4]/20 text-[#00D2B4] transition-all duration-300 justify-center"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="font-medium">{language}</span>
                  </button>
                  <Link to="/prenotazioni" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      className="bg-[#00D2B4] hover:bg-[#00D2B4]/90 text-[#001a3d] font-semibold px-6 py-3 rounded-lg transition-all duration-300 w-full"
                    >
                      {t({ IT: 'Prenota ora', EN: 'Book now' })}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavigationBar;