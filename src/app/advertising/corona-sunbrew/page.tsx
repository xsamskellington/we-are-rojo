import './styles.css';
import VideoPlayer from '@/components/videoPlayer';

const Page = () => {
  return (
    <>
      <div className="page-container">
        <VideoPlayer src={'/advertising/Corona.mp4'} image={''} />
        <div className="info-container">
          <h1 className="title">Corona | Sunbrew</h1>
          <div className="credits">
            <div>
              <p className="text">
                <span>VFX Sup:</span> Jonathan Monroig{' '}
              </p>
              <p className="text">
                <span>VFX Coord:</span> Natalia Páez{' '}
              </p>
            </div>

            <div>
              <p className="text">
                <span>Production Company:</span> MJZ Worldwide - Labhouse
              </p>
              <p className="text">
                <span>Director:</span> Juan Cabral
              </p>
              <p className="text">
                <span>DOP:</span> Leandro Filloy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
