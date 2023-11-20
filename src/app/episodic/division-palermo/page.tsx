import '../../pagesStyles.css';
import VideoPlayer from '@/components/videoPlayer';

const Page = () => {
  return (
    <>
      <div className="page-container">
        <VideoPlayer src={'/episodic/DivisionPalermo.mp4'} image={''} />
        <div className="info-container">
          <h1 className="title">División Palermo</h1>
          <div className="credits">
            <div>
              <p className="text">
                <span>VFX Sup:</span> Jonathan Monroig{' '}
              </p>
              <p className="text">
                <span>VFX Prod:</span> Natalia Páez{' '}
              </p>
              <p className="text">
                <span>VFX Coord:</span> Ariadna Ortiz{' '}
              </p>
            </div>

            <div>
              <p className="text">
                <span>Production Company:</span> K&S Films
              </p>
              <p className="text">
                <span>Directors:</span> Santiago Korovsky - Diego Nuñez Irigoyen{' '}
              </p>
              <p className="text">
                <span>DOP:</span> Valeria Mariana Gonzalez - Roman Kasseroller
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
