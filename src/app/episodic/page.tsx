import PageSectionVideo from '@/components/pageSectionVideo';
import { projects } from './data';
import MainProjectsHome from '@/components/mainProjectsHome';

const Page = () => {
  return (
    <div>
      <PageSectionVideo src={'/episodic-home.mp4'} />
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
