import MainProjectsHome from '@/components/mainProjectsHome';
import { projects } from './dataHome';
import './styles.css';

const Home = () => {
  return (
    <>
      <div className="video-container">
        <video className="video" controlsList="nodownload" autoPlay loop muted>
          <source src={'/rojoHome.mp4'} type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      </div>
      <div className="home-content">
        <h1>We construct Visual Effects. </h1>
        <h1 className="home-title"> We are Rojo Studio.</h1>
        <MainProjectsHome projects={projects} />
      </div>
    </>
  );
};

export default Home;
