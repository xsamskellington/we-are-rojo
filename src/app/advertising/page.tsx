import PageSectionVideo from '@/components/pageSectionVideo';
import { projects } from './data';
import MainProjectsHome from '@/components/mainProjectsHome';

const Page = () => {
  return (
    <div>
      <PageSectionVideo src={'/advertising-home.mp4'} />

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
