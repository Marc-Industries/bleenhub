import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Breadcrumb = ({ items = [] }) => {
  const { t } = useLanguage();

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-[#00D2B4] transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            {t({ IT: 'Home', EN: 'Home' })}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-white/40 mx-1" />
              {item.href ? (
                <Link
                  to={item.href}
                  className="ml-1 text-sm font-medium text-white/70 hover:text-[#00D2B4] transition-colors md:ml-2"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="ml-1 text-sm font-medium text-[#00D2B4] md:ml-2">
                  {item.label}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;