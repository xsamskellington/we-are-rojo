import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';
import BackArrow from '@/components/backArrow';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/907567026?h=1d0426e025'}
      />
      <div className="info-container">
        <h1 className="title">JAQUE MATE</h1>
        <div className="credits">
          <div className="vfx-credits">
            <p className="text">
              <span>VFX Sup:</span> Jonathan Monroig{' '}
            </p>
            <p className="text">
              <span>VFX Prod:</span> Ariadna Ortiz{' '}
            </p>
          </div>

          <div>
            <p className="text">
              <span>Production Company:</span> Patagonik
            </p>
            <p className="text">
              <span>Director:</span> Jorge Nisco
            </p>
            <p className="text">
              <span>DOP:</span> Bill Nieto
            </p>
          </div>
        </div>
        <BackArrow href={'/features'} />
      </div>
    </div>
  );
};

export default Page;
