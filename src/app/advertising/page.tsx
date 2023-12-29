import PageSectionVideo from '@/components/pageSectionVideo';
import { projects } from './data';
import './styles.css';
import MainProjectsHome from '@/components/mainProjectsHome';

const Page = () => {
  return (
    <div className="page-container">
      <PageSectionVideo
        src={
          'https://player.vimeo.com/video/891929656?h=2badc595f5&autoplay=1&muted=1&loop=1&background=1'
        }
      />
      <div className="page-info">
        <h1>ADVERTISING</h1>
        <h3> We create visual effects for advertising</h3>
        <h2 className="work">WORK</h2>
      </div>
      <MainProjectsHome projects={projects} />
    </div>
  );
};

export default Page;
