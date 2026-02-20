"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, languageNames } from '@/constants/translations';

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.en;
    languageNames: Record<Language, string>;
};

const defaultContextValue: LanguageContextType = {
    language: 'en',
    setLanguage: () => { },
    t: translations.en,
    languageNames,
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

const validLanguages: Language[] = Object.keys(languageNames) as Language[];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        try {
            const savedLang = localStorage.getItem('language') as Language;
            if (savedLang && validLanguages.includes(savedLang)) {
                setLanguage(savedLang);
            }
        } catch { }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        try {
            localStorage.setItem('language', lang);
        } catch { }
    };

    const t = translations[language] || translations.en;

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, languageNames }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
