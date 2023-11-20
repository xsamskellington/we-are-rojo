'use client';
import Image from 'next/image';
import './styles.css';
import { socialMedia } from './data';
import Rojo from '../images/rojo.svg';
import Link from 'next/link';
import Features from './sections/features';
import Episodic from './sections/episodic';
import Advertising from './sections/advertising';

const Header = () => {
  return (
    <header className="header">
      <div className="sections">
        <a href={'/'} className="logo">
          <Image src={Rojo} alt="logo" width={40} height={25} />
        </a>
        <Features />
        <Episodic />
        <Advertising />
        <div className="dropdown">
          <Link href="/about" className="icon">
            About
          </Link>
        </div>
      </div>

      <div className="sections">
        {socialMedia.map((social) => (
          <a
            href={social.href}
            target="_blank"
            className="icon"
            key={social.title}
          >
            <Image src={social.svg} alt="logo" width={25} height={25} />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
