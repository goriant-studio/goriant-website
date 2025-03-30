import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations } from '@/locales/translations';

type Locale = 'en' | 'vi';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode, 
  locale?: string | string[]}> = ({ children, locale: propLocale }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    if (propLocale) {
      return (propLocale as string).startsWith('vi') ? 'vi' : 'en';
    }
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path.startsWith('/vi') ? 'vi' : 'en';
    }
    return 'en';
  });

  // Hàm dịch dựa trên khóa gian cách bằng dấu chấm (ví dụ: "nav.home")
  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = translations[locale];
    
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        return key;
      }
    }
    
    return result as string;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 