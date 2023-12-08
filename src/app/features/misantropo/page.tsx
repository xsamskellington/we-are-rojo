import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/891897293?h=53015a9e9f'}
      />
      <div className="info-container">
        <h1 className="title">Misántropo</h1>
        <div className="credits">
          <div className="vfx-credits">
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
  );
};

export default Page;
