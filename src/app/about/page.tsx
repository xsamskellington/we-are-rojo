'use client';
import Image from 'next/image';
import './styles.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Page = () => {
  const { t } = useTranslation('common');
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
            {t('pages.about-us')}
            <span className="span">
              We are growing constantly, looking for new challenges and projects
              to take on.
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
          src="/studio.jpg"
          alt="rojo studio"
          width={deviceMobile ? 450 : 700}
          height={deviceMobile ? 300 : 400}
        />
      </div>
    </div>
  );
};

export default Page;
