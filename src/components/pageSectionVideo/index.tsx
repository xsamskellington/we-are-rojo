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
          className="arrow-img"
        />
      </div>
      <div className="video-page-container">
        <div className="video-section-container">
          <iframe
            className="video-section"
            loading="lazy"
            src={src}
            width="2560"
            height="1440"
            frameBorder={0}
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default PageSectionVideo;
