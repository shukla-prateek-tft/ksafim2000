import { useMemo } from "react";
import { he, enUS, arSA } from "date-fns/locale";
import type { Locale } from "date-fns"; 


const rtlLanguages: string[] = ["he", "ar", "ar-SA"];

const languageMap: Record<string, Locale> = {
  he,
  en: enUS,
  ar: arSA,
};

export const useLanguage = () => {
  const currentLanguage: string =
  import.meta.env.VITE_DEFAULT_LANGUAGE || "he";

  const locale: Locale = useMemo(() => {
    return languageMap[currentLanguage] || he;
  }, [currentLanguage]);


  const isRTL: boolean = rtlLanguages.includes(currentLanguage);

  return {
    currentLanguage,
    locale,
    isRTL,
  };
};
