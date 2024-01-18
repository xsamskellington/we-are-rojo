'use client';
import './styles.css';
import DesktopHeader from './desktopHeader';
import MobileHeader from './mobileHeader';
import { useEffect, useState } from 'react';

const Header = () => {
  const [deviceMobile, setDeviceMobile] = useState(false);

  useEffect(() => {
    const isMobile =
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 1120px)').matches;

    if (isMobile) {
      setDeviceMobile(true);
    }
  }, []);

  return (
    <header className="header">
      <div className="sections">
        {deviceMobile ? <MobileHeader /> : <DesktopHeader />}
      </div>
    </header>
  );
};

export default Header;
