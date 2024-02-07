import './styles.css';
import Image from 'next/image';
import { socialMedia } from '../header/data';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="country"> BUENOS AIRES, ARGENTINA</p>
      <div className="legal">
        <div>
          <p>Copyright©2024 Rojo Studios</p>
        </div>
        <div className="social-media">
          {socialMedia.map((social) => (
            <a
              href={social.href}
              target="_blank"
              className="social-icon"
              key={social.title}
            >
              <Image src={social.svg} alt="logo" width={25} height={25} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
