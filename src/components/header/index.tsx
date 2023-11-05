'use client';
import Image from 'next/image';
import './styles.css';
import { advertising, episodic, features, socialMedia } from './data';
import Rojo from '../images/rojo.svg';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="sections">
        <a href={'/'} className="logo">
          <Image src={Rojo} alt="logo" width={40} height={25} />
        </a>

        <div className="dropdown">
          <button className="icon">{features.title}</button>
          <div className="dropdown-menu">
            {features.projects.map((project) => (
              <Link href={project.href} key={project.title}>
                <p className="options">{project.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="dropdown">
          <button className="icon">{episodic.title}</button>
          <div className="dropdown-menu">
            {episodic.projects.map((project) => (
              <Link href={project.href} key={project.title}>
                <p className="options">{project.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="dropdown">
          <button className="icon">{advertising.title}</button>
          <div className="dropdown-menu">
            {advertising.projects.map((project) => (
              <Link href={project.href} key={project.title}>
                <p className="options">{project.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="dropdown">
          <Link href="/about" className="icon">
            About
          </Link>
        </div>
      </div>

      <div className="sections">
        {socialMedia.map((social) => (
          <a className="icon" key={social.title}>
            <Image src={social.svg} alt="logo" width={25} height={25} />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
