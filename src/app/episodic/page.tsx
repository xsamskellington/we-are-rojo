'use client';

import PageSectionVideo from '@/components/pageSectionVideo';
import MainProjectsHome from '@/components/mainProjectsHome';
import { projects } from './data';
import { useLangHook } from '../hooks/setLangHook';

const Page = () => {
  const { useLanguageSwitcher } = useLangHook();

  const i18n = useLanguageSwitcher();
  const { episodic } = i18n.navbar;
  const { episodicTitle } = i18n.pages;
  return (
    <div>
      <PageSectionVideo
        src={
          'https://player.vimeo.com/video/910155973?&autoplay=1&loop=1&background=1'
        }
      />
      <MainProjectsHome
        title={episodic}
        subtitle={episodicTitle}
        projects={projects}
        home={false}
      />
    </div>
  );
};

export default Page;
