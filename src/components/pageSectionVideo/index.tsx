'use client';
import Image from 'next/image';
import './styles.css';
import BottomArrow from '../images/down-arrow.svg';

export interface PageSectionVideoProps {
  src: string;
}

const PageSectionVideo = ({ src }: PageSectionVideoProps) => {
  return (
    <>
      <div className="arrow">
        <p>LATEST WORK</p>
        <Image
          src={BottomArrow}
          alt="bottom arrow"
          width={25}
          height={25}
          style={{
            backgroundColor: 'transparent',
            transition:
              'transform 0.2s ease-in-out, margin-top 0.2s ease-in-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.marginTop = '-20px';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.marginTop = '0';
          }}
        />
      </div>
      <div className="video-page-container">
        <div className="video-section-container">
          <iframe
            className="video-section"
            loading="lazy"
            src={src}
            width="1920"
            height="1080"
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default PageSectionVideo;
