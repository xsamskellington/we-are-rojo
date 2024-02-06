import PageSectionVideo from '@/components/pageSectionVideo';
import { projects } from './data';
import MainProjectsHome from '@/components/mainProjectsHome';

const Page = () => {
  return (
    <div>
      <PageSectionVideo
        src={
          'https://player.vimeo.com/video/910129040?&autoplay=1&loop=1&background=1'
        }
      />
      <MainProjectsHome
        title={'FEATURES'}
        subtitle={'We create visual effects for films'}
        projects={projects}
        home={false}
      />
    </div>
  );
};

export default Page;
