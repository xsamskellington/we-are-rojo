import { useEffect, useRef, useState } from 'react';
import MobileMenu from '../images/mobile-menu.svg';
import Image from 'next/image';
import { menuSectionsMobile } from './data';
import Link from 'next/link';
import LanguageSwitch from './languageSwitch';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const closeMobileMenu = (e: Event) => {
    if (
      mobileMenuRef.current &&
      isOpen &&
      !mobileMenuRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: Event) => closeMobileMenu(e);

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <>
      <button className="mobile-menu-button" onClick={handleButtonClick}>
        <Image src={MobileMenu} alt="rojo studio" width={25} height={25} />
      </button>
      {isOpen && (
        <div className="mobile-menu-container" ref={mobileMenuRef}>
          <Link href={'/'} className="mobile-sections">
            <p className="options" onClick={() => setIsOpen(false)}>
              HOME
            </p>
          </Link>
          {menuSectionsMobile.map((section, index) => (
            <Link
              href={section.href}
              key={section.title}
              className="mobile-sections"
            >
              <p className="options" onClick={() => setIsOpen(false)}>
                {section.title}
              </p>
            </Link>
          ))}
        </div>
      )}
      <LanguageSwitch />
    </>
  );
};

export default MobileHeader;
