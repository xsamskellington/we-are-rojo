import PageSectionVideo from '@/components/pageSectionVideo';
import { projects } from './data';
import MainProjectsHome from '@/components/mainProjectsHome';

const Page = () => {
  return (
    <div>
      <PageSectionVideo src={'/features-home.mp4'} />
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
