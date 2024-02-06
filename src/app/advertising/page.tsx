import PageSectionVideo from '@/components/pageSectionVideo';
import { projects } from './data';
import MainProjectsHome from '@/components/mainProjectsHome';

const Page = () => {
  return (
    <div>
      <PageSectionVideo
        src={
          'https://player.vimeo.com/video/910121439?h=fb1711d84b&autoplay=1&loop=1&background=1'
        }
      />

      <MainProjectsHome
        title={'ADVERTISING'}
        subtitle={'We create visual effects for advertising'}
        projects={projects}
        home={false}
      />
    </div>
  );
};

export default Page;
