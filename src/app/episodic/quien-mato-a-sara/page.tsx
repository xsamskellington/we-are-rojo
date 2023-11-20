import '../../pagesStyles.css';
import VideoPlayer from '@/components/videoPlayer';

const Page = () => {
  return (
    <>
      <div className="page-container">
        <VideoPlayer src={'/episodic/QuienMatoASara.mp4'} image={''} />
        <div className="info-container">
          <h1 className="title">¿Quién mató a Sara?</h1>
          <div className="credits">
            <div>
              <p className="text">
                <span>VFX Sup:</span> Jonathan Monroig{' '}
              </p>
              <p className="text">
                <span>VFX Coord:</span> Ariadna Ortiz{' '}
              </p>
            </div>

            <div>
              <p className="text">
                <span>Production Company:</span> Perro Azul - Malule
                Entertainment
              </p>
              <p className="text">
                <span>Directors:</span> David Ruiz - José Ignacio Valenzuela
              </p>
              <p className="text">
                <span>DOP:</span> Rodrigo Mariña
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
