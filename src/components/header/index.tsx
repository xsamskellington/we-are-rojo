'use client';
import Image from 'next/image';

import './styles.css';
import Rojo from '../images/rojo.svg';
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
        <a href={'/'} className="logo">
          <Image src={Rojo} alt="logo" width={90} height={60} />
        </a>
        {deviceMobile ? <MobileHeader /> : <DesktopHeader />}
      </div>
    </header>
  );
};

export default Header;
