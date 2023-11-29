'use client';
import Image from 'next/image';
import './styles.css';
import './styles.mobile.css';
import { menuSections } from './data';
import Rojo from '../images/rojo.svg';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="sections">
        <a href={'/'} className="logo">
          <Image src={Rojo} alt="logo" width={70} height={40} />
        </a>
        <div className="section-menu">
          {menuSections.map((section, index) => (
            <>
              <Link href={section.href} className="section" key={section.title}>
                {section.title}
              </Link>
              {index < menuSections.length - 1 && '|'}
            </>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
