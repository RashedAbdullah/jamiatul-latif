"use client";

import { createContext, useContext } from "react";

const LanguageContext = createContext(null);

const LanguageProvider = ({ language, children }) => {
  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const language = useContext(LanguageContext);
  if (language === null) {
    throw new Error("useLanguage hook must be used within LanguageProvider");
  }

  return language;
};

export { LanguageProvider, useLanguage };