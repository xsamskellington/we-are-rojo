import MainProjectsHome from '@/components/mainProjectsHome';
import { projects } from './dataHome';
import './styles.css';
import PageSectionVideo from '@/components/pageSectionVideo';

const Home = () => {
  return (
    <>
      <PageSectionVideo src={'/rojoHome.mp4'} />
      <div className="home-content">
        <div className="home-title">
          <h1>We construct Visual Effects. </h1>
          <h1> We are Rojo Studio.</h1>
        </div>
        <MainProjectsHome projects={projects} />
      </div>
    </>
  );
};

export default Home;
