import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('bleenhub-language');
    return savedLanguage || 'IT';
  });

  useEffect(() => {
    localStorage.setItem('bleenhub-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'IT' ? 'EN' : 'IT');
  };

  const t = (translations) => {
    return translations[language] || translations['IT'];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};