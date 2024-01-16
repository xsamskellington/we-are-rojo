import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';
import BackArrow from '@/components/backArrow';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/891896024?h=9b88673625'}
      />
      <div className="info-container">
        <h1 className="title">ECHOES OF A CRIME</h1>
        <div className="credits">
          <div className="vfx-credits">
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
        <BackArrow href={'/features'} />
      </div>
    </div>
  );
};

export default Page;
