import VimeoPlayer from '@/components/vimeoPlayer';
import '../../../pagesStyles.css';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/882109093?h=fd77ef6d6f'}
      />
      <div className="info-container">
        <h1 className="title">CORONA | SUNBREW</h1>
        <div className="credits">
          <div className="vfx-credits">
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
  );
};

export default Page;
