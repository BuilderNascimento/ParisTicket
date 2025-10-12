"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Import all translations statically
import frTranslations from "@/../public/translations/fr.json";
import enTranslations from "@/../public/translations/en.json";
import esTranslations from "@/../public/translations/es.json";
import ptTranslations from "@/../public/translations/pt.json";
import itTranslations from "@/../public/translations/it.json";

export type Language = "fr" | "en" | "es" | "pt" | "it";

// Translations map
const translationsMap: Record<Language, Record<string, any>> = {
  fr: frTranslations,
  en: enTranslations,
  es: esTranslations,
  pt: ptTranslations,
  it: itTranslations,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");
  const [translations, setTranslations] = useState<Record<string, any>>(frTranslations);
  const [isLoading, setIsLoading] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    console.log("🚀 LanguageProvider mounted!");
    
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      console.log("💾 Saved language from localStorage:", saved);
      if (saved && ["fr", "en", "es", "pt", "it"].includes(saved)) {
        setLanguageState(saved as Language);
        setTranslations(translationsMap[saved as Language]);
        console.log(`✅ Loaded ${saved} translations from static import`);
      } else {
        console.log("✅ Using default French translations");
      }
    }
  }, []);

  // Update translations when language changes
  useEffect(() => {
    console.log(`🔄 Language changed to: ${language}`);
    setTranslations(translationsMap[language]);
    console.log(`✅ Translations updated:`, Object.keys(translationsMap[language]));
  }, [language]);

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
        console.warn(`❌ Translation key not found: ${key}`);
        return key; // Return key if translation not found
      }
    }

    // Return the actual value (string, array, or object)
    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
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

