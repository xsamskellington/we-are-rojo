'use client';
import React, { createContext, useState } from 'react';

const LangContext = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const setLanguage = (newLang) => {
    if (newLang !== lang) {
      setLang(newLang);
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangProvider, LangContext };
