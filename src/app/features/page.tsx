'use client';

import PageSectionVideo from '@/components/pageSectionVideo';
import MainProjectsHome from '@/components/mainProjectsHome';
import { useLangHook } from '../hooks/setLangHook';
import { projects } from './data';

const Page = () => {
  const { useLanguageSwitcher } = useLangHook();

  const i18n = useLanguageSwitcher();
  const { features } = i18n.navbar;
  const { featuresTitle } = i18n.pages;

  return (
    <div>
      <PageSectionVideo
        src={
          'https://player.vimeo.com/video/910129040?&autoplay=1&loop=1&background=1'
        }
      />
      <MainProjectsHome
        title={features}
        subtitle={featuresTitle}
        projects={projects}
        home={false}
      />
    </div>
  );
};

export default Page;
