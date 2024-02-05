'use client';
import { useEffect, useState } from 'react';

import MainProjectsHome from '@/components/mainProjectsHome';
import { projects } from './dataHome';
import PageSectionVideo from '@/components/pageSectionVideo';
import './styles.css';
import VimeoPlayer from '@/components/vimeoPlayer';

const Home = () => {
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
    <div className="home-content">
      {deviceMobile ? (
        <>
          <VimeoPlayer
            src={'https://player.vimeo.com/video/896918155?h=7ddbaafca7'}
          />
          <div className="home-title">
            <h1>LATEST WORKS</h1>
          </div>
        </>
      ) : (
        <PageSectionVideo src={'/rojoHome.mp4'} />
      )}
      <MainProjectsHome
        projects={projects}
        title={'We construct Visual Effects.'}
        subtitle={'We are Rojo Studio.'}
        home={true}
      />
    </div>
  );
};

export default Home;
