import '../../pagesStyles.css';
import VideoPlayer from '@/components/videoPlayer';

const Page = () => {
  return (
    <>
      <div className="page-container">
        <VideoPlayer src={'/features/30NochesConMiEx.mp4'} image={''} />
        <div className="info-container">
          <h1 className="title">30 Noches con mi Ex</h1>
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
                <span>Production Company:</span> Patagonik
              </p>
              <p className="text">
                <span>Director:</span> Adrián Suar
              </p>
              <p className="text">
                <span>DOP:</span> Félix Monti
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
