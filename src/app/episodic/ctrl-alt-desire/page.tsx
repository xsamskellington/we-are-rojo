import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/897212916?h=b9eb47e63b'}
      />

      <div className="info-container">
        <h1 className="title">Ctrl + Alt Desire</h1>
        <div className="credits">
          <div className="vfx-credits">
            <p className="text">
              <span>VFX Sup:</span> Jonathan Monroig{' '}
            </p>
            <p className="text">
              <span>VFX Prod:</span> Ariadna Ortiz{' '}
            </p>
            <p className="text">
              <span>Art Director:</span> Matias Sciaini - Laura Toscano{' '}
            </p>
          </div>

          <div className="production-credits">
            <p className="text">
              <span>Production Company:</span> Ark Media
            </p>
            <p className="text">
              <span>Director:</span> Colin Archdeacon{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
