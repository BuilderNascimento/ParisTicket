"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "fr" | "en" | "es" | "pt" | "it";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");
  const [translations, setTranslations] = useState<Record<string, any>>({});

  // Load translations
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const trans = await import(`@/translations/${language}.json`);
        setTranslations(trans.default);
      } catch (error) {
        console.error("Error loading translations:", error);
      }
    };
    loadTranslations();
  }, [language]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved && ["fr", "en", "es", "pt", "it"].includes(saved)) {
      setLanguageState(saved as Language);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  // Translation function with nested key support
  const t = (key: string): any => {
    const keys = key.split(".");
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    // Return the actual value (string, array, or object)
    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

