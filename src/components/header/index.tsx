'use client';
import './styles.css';
import DesktopHeader from './desktopHeader';
import MobileHeader from './mobileHeader';
import { useEffect, useState } from 'react';

const Header = () => {
  const [deviceMobile, setDeviceMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const isMobile =
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 1120px)').matches;

    if (isMobile) {
      setDeviceMobile(true);
    }
  }, []);

  return (
    <>
      {deviceMobile ? (
        <header className="mobile-header">
          <MobileHeader />
        </header>
      ) : (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <DesktopHeader />
        </header>
      )}
    </>
  );
};

export default Header;
