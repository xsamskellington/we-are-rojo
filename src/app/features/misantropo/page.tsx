import '../../pagesStyles.css';
import VideoPlayer from '@/components/videoPlayer';

const Page = () => {
  return (
    <>
      <div className="page-container">
        <VideoPlayer src={'/features/misantropo.mp4'} image={''} />
        <div className="info-container">
          <h1 className="title">Misántropo</h1>
          <div className="credits">
            <div>
              <p className="text">
                <span>VFX Sup:</span> Jonathan Monroig{' '}
              </p>
              <p className="text">
                <span>VFX Prod:</span> Natalia Páez
              </p>
              <p className="text">
                <span>VFX Coord:</span> Ariadna Ortiz{' '}
              </p>
            </div>

            <div>
              <p className="text">
                <span>Production Company:</span> FilmNation Entertainment
              </p>
              <p className="text">
                <span>Director:</span> Damián Szifron
              </p>
              <p className="text">
                <span>DOP:</span> Javier Juliá
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
