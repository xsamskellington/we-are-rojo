import PageSectionVideo from '@/components/pageSectionVideo';
import { projects } from './data';
import './styles.css';
import MainProjectsHome from '@/components/mainProjectsHome';

const Page = () => {
  return (
    <div className="page-container">
      <PageSectionVideo
        src={
          'https://player.vimeo.com/video/897212916?h=b9eb47e63b&autoplay=1&muted=1&loop=1&background=1'
        }
      />
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
