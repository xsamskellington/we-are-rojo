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
          <VimeoPlayer src={'https://player.vimeo.com/video/910946794'} />
        </>
      ) : (
        <PageSectionVideo
          src={
            'https://player.vimeo.com/video/910805500?badge=0&autoplay=1&loop=1&background=1'
          }
        />
      )}
      <MainProjectsHome
        projects={projects}
        // title={'We construct Visual Effects.'}
        subtitle={'WE ARE ROJO STUDIO'}
        home={true}
      />
    </div>
  );
};

export default Home;
