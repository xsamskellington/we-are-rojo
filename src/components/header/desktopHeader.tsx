import { useState } from 'react';
import { menuSections } from './data';
import Link from 'next/link';
import Rojo from '../images/rojo.svg';
import Image from 'next/image';
import LanguageSwitch from './languageSwitch';

const DesktopHeader = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (index: any) => {
    setSelectedSection(index);
  };

  return (
    <>
      <div className="section-menu-desktop">
        <a href={'/'} className="logo">
          <Image src={Rojo} alt="rojo studio" width={80} height={50} />
        </a>
        {menuSections.map((section, index) => (
          <>
            <Link
              href={section.href}
              key={section.title}
              className={`section ${selectedSection === index ? 'bold' : ''}`}
              onClick={() => handleSectionClick(index)}
            >
              {section.title}
            </Link>
            {index < menuSections.length - 1 && '|'}
          </>
        ))}
      </div>

      <LanguageSwitch />
    </>
  );
};

export default DesktopHeader;
