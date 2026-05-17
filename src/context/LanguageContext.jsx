import { createContext, useContext, useState, useMemo } from "react";
import es from "../languages/es.json";
import en from "../languages/en.json";

/**
 * @typedef {Object} LanguageContextType
 * @property {string} lang
 * @property {(value: "ES" | "EN") => void} setLang
 * @property {Object} texts
 */

/** @type {LanguageContextType} */
const defaultValue = {
  lang: "ES",
  setLang: () => {},
  texts: es,
};

const LanguageContext = createContext(defaultValue);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ES");

  const texts = useMemo(() => (lang === "ES" ? es : en), [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      texts,
    }),
    [lang, texts]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

