import { LangContext } from '@/app/providers/provider';
import { useContext } from 'react';

const LanguageSwitch = () => {
  const { setLanguage } = useContext(LangContext);

  const handleLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div className="language">
      <button onClick={() => handleLanguage('es')} className="section">
        ES
      </button>
      /
      <button onClick={() => handleLanguage('en')} className="section">
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
