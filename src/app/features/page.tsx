import PageSectionVideo from '@/components/pageSectionVideo';
import { projects } from './data';
import './styles.css';
import MainProjectsHome from '@/components/mainProjectsHome';

const Page = () => {
  return (
    <div className="page-container">
      <PageSectionVideo
        src={
          'https://player.vimeo.com/video/900204385?h=7b4c24ddbc&autoplay=1&muted=1&loop=1&background=1'
        }
      />

      <div className="page-info">
        <h1>FEATURES</h1>
        <h3> We create visual effects for feature films</h3>
        <h2 className="work">WORKS</h2>
      </div>
      <MainProjectsHome projects={projects} />
    </div>
  );
};

export default Page;
