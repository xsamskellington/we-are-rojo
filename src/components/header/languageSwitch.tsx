import { LangContext } from '@/app/providers/provider';
import { useContext, useState } from 'react';

const LanguageSwitch = () => {
  const { setLanguage } = useContext(LangContext);
  const [activeLanguage, setActiveLanguage] = useState('en');

  const handleLanguage = (lang: string) => {
    setLanguage(lang);
    setActiveLanguage(lang);
  };

  return (
    <div className="language">
      <button
        onClick={() => handleLanguage('es')}
        className={`section ${activeLanguage === 'es' ? 'bold' : ''}`}
      >
        ES
      </button>
      /
      <button
        onClick={() => handleLanguage('en')}
        className={`section ${activeLanguage === 'en' ? 'bold' : ''}`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
