import PageSectionVideo from '@/components/pageSectionVideo';
import { projects } from './data';
import '../pageSectionHome.css';
import MainProjectsHome from '@/components/mainProjectsHome';

const Page = () => {
  return (
    <div className="page-container">
      <PageSectionVideo src={'/episodic-home.mp4'} />
      <div className="page-info">
        <h1>EPISODIC</h1>
        <h3> We create visual effects for episodic</h3>
        <h2 className="work">WORKS</h2>
      </div>
      <MainProjectsHome projects={projects} />
    </div>
  );
};

export default Page;
