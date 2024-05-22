'use client';
import { useEffect, useState } from 'react';
import MainProjectsHome from '@/components/mainProjectsHome';
import VimeoPlayer from '@/components/vimeoPlayer';
import PageSectionVideo from '@/components/pageSectionVideo';
import { useLangHook } from './hooks/setLangHook';
import { projects } from './dataHome';
import './styles.css';

const Home = () => {
  const [deviceMobile, setDeviceMobile] = useState(false);
  const { useLanguageSwitcher } = useLangHook();

  const i18n = useLanguageSwitcher();
  const { title } = i18n.home;

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
      <MainProjectsHome projects={projects} subtitle={title} home={true} />
    </div>
  );
};

export default Home;
