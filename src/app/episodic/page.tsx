import PageSectionVideo from '@/components/pageSectionVideo';
import { projects } from './data';
import MainProjectsHome from '@/components/mainProjectsHome';

const Page = () => {
  return (
    <div>
      <PageSectionVideo
        src={
          'https://player.vimeo.com/video/910155973?&autoplay=1&loop=1&background=1'
        }
      />
      <MainProjectsHome
        title={'EPISODIC'}
        subtitle={'We create visual effects for episodic'}
        projects={projects}
        home={false}
      />
    </div>
  );
};

export default Page;
