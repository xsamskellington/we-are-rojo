import '../../pagesStyles.css';
import VideoPlayer from '@/components/videoPlayer';

const Page = () => {
  return (
    <>
      <div className="page-container">
        <VideoPlayer src={'/features/EcosDeUnCrimen.mp4'} image={''} />
        <div className="info-container">
          <h1 className="title">Ecos de un Crimen</h1>
          <div className="credits">
            <div>
              <p className="text">
                <span>VFX Sup:</span> Jonathan Monroig{' '}
              </p>
              <p className="text">
                <span>VFX Prod:</span> Eva Amuchastegui{' '}
              </p>
              <p className="text">
                <span>VFX Coord:</span> Ariadna Ortiz{' '}
              </p>
            </div>

            <div>
              <p className="text">
                <span>Production Company:</span> Particular Crowd-Tieless Media
              </p>
              <p className="text">
                <span>Director:</span> Cristian Bernard
              </p>
              <p className="text">
                <span>DOP:</span> Andrés Mazzon
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
