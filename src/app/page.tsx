import MainProjectsHome from '@/components/mainProjectsHome';
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
        <h1>We construct Visual Effects. We are Rojo Studio</h1>
        <MainProjectsHome />
      </div>
    </>
  );
};

export default Home;
