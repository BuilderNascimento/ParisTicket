"use client";

import { createContext, useContext, ReactNode } from "react";

// Import French translations only
import frTranslations from "@/translations/fr.json";

interface LanguageContextType {
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Translation function with nested key support
  const t = (key: string): any => {
    const keys = key.split(".");
    let value: any = frTranslations;

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
    <LanguageContext.Provider value={{ t }}>
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

