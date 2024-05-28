'use client';
import { useContext, useEffect, useState } from 'react';
import { LangContext } from '../providers/provider';
import { english } from '../../../public/locales/en/common';
import { spanish } from '../../../public/locales/es/common';

export function useLangHook() {
  const { lang } = useContext(LangContext);
  const [i18n, setI18n] = useState(english);

  const useLanguageSwitcher = () => {
    useEffect(() => {
      const textLang = lang == 'es' ? spanish : english;

      setI18n(textLang);
    }, [lang]);
    return i18n;
  };

  return { useLanguageSwitcher };
}
