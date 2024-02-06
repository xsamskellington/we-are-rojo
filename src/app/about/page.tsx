'use client';
import Image from 'next/image';
import './styles.css';
import { useEffect, useState } from 'react';

const Page = () => {
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
    <div>
      <div className="about-container">
        <div className="about-text">
          <p>
            We are a Studio specialized in Visual Effects, Post-production
            services & Color Grading for advertising,TV series and films.
            <span className="span">
              Our productions are made by an accomplished VFX Team,the editorial
              department & Color Grading artists and assistants.
            </span>
          </p>

          <div className="social-text">
            <div>
              <p>CONTACT</p>
              <a href="mailto:contact@wearerojo.com" target="_blank">
                <p className="social-media">contact@wearerojo.com</p>
              </a>
            </div>
          </div>
        </div>

        <Image
          src="/studio.jpeg"
          alt="studio"
          width={deviceMobile ? 400 : 700}
          height={deviceMobile ? 300 : 400}
        />
      </div>
    </div>
  );
};

export default Page;
