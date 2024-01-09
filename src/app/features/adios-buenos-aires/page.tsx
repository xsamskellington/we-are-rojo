import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/891895523?h=090bb41e6a'}
      />
      <div className="info-container">
        <h1 className="title">ADIOS, BUENOS AIRES</h1>
        <div className="credits">
          <div className="vfx-credits">
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
              <span>Production Company:</span> German Kral Filmproduktion -
              Monogatari Films - Salamanca Cine
            </p>
            <p className="text">
              <span>Director:</span> Germán Kral
            </p>
            <p className="text">
              <span>DOP:</span> Christian Cottet - Daniel Ortega
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
