"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "fr" | "en" | "es" | "pt" | "it";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations immediately on mount
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        console.log(`🔄 Loading translations for ${language}...`);
        const response = await fetch(`/translations/${language}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load ${language} translations`);
        }
        const data = await response.json();
        console.log(`✅ Translations loaded for ${language}:`, Object.keys(data));
        setTranslations(data);
      } catch (error) {
        console.error("Error loading translations:", error);
        // Fallback to French
        try {
          console.log(`🔄 Fallback to French...`);
          const response = await fetch(`/translations/fr.json`);
          if (response.ok) {
            const data = await response.json();
            console.log(`✅ Fallback French loaded:`, Object.keys(data));
            setTranslations(data);
          }
        } catch (fallbackError) {
          console.error("Error loading fallback translations:", fallbackError);
        }
      } finally {
        setIsLoading(false);
      }
    };

    // Load from localStorage and then translations
    const saved = localStorage.getItem("language");
    if (saved && ["fr", "en", "es", "pt", "it"].includes(saved)) {
      setLanguageState(saved as Language);
    }
    
    loadTranslations();
  }, []);

  // Reload translations when language changes
  useEffect(() => {
    if (language === "fr") return; // Skip initial load
    
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        console.log(`🔄 Loading translations for ${language}...`);
        const response = await fetch(`/translations/${language}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load ${language} translations`);
        }
        const data = await response.json();
        console.log(`✅ Translations loaded for ${language}:`, Object.keys(data));
        setTranslations(data);
      } catch (error) {
        console.error("Error loading translations:", error);
        // Fallback to French
        try {
          const response = await fetch(`/translations/fr.json`);
          if (response.ok) {
            const data = await response.json();
            setTranslations(data);
          }
        } catch (fallbackError) {
          console.error("Error loading fallback translations:", fallbackError);
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    loadTranslations();
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

