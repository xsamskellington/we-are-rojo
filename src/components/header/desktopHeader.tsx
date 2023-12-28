import { useState } from 'react';
import { menuSections } from './data';
import Link from 'next/link';

const DesktopHeader = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (index: any) => {
    setSelectedSection(index);
  };

  return (
    <div className="section-menu-desktop">
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
  );
};

export default DesktopHeader;
